import os
import re

def to_camel_case(match):
    return match.group(1) + match.group(2).upper()

def convert_svg_attr(html_content):
    attrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'clip-rule', 'fill-rule', 'view-box', 'fill-opacity']
    for attr in attrs:
        camel = attr.split('-')[0] + attr.split('-')[1].capitalize()
        if attr == 'view-box':
            camel = 'viewBox'
        html_content = html_content.replace(attr + '=', camel + '=')
    return html_content

def convert_html_to_jsx(html_content):
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html_content

    # Extract all SVG content
    svg_pattern = re.compile(r'<svg.*?</svg>', re.DOTALL | re.IGNORECASE)
    def svg_replacer(match):
        svg_content = match.group(0)
        svg_content = convert_svg_attr(svg_content)
        return svg_content
    content = svg_pattern.sub(svg_replacer, content)

    # Basic conversions
    content = content.replace('class="', 'className="')
    content = content.replace('for="', 'htmlFor="')
    content = content.replace('tabindex="', 'tabIndex="')
    
    # Self-close void elements
    void_elements = ['img', 'input', 'br', 'hr', 'source', 'meta', 'link']
    for tag in void_elements:
        content = re.sub(r'<(%s\b[^>]*?)(?<!/)>' % tag, r'<\1 />', content, flags=re.IGNORECASE)

    # Replace inline styles. (This is basic and might break if there are complex styles)
    def style_replacer(match):
        style_string = match.group(1)
        styles = [s.strip() for s in style_string.split(';') if s.strip()]
        style_dict_str = []
        for s in styles:
            if ':' in s:
                k, v = s.split(':', 1)
                k = k.strip()
                v = v.strip()
                k = re.sub(r'-([a-z])', to_camel_case, k)
                style_dict_str.append(f"'{k}': '{v}'")
        return f"style={{{{{', '.join(style_dict_str)}}}}}"
        
    content = re.sub(r'style="([^"]*)"', style_replacer, content)
    
    # Replace HTML comments with JSX comments
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    # Handle HTML links
    content = re.sub(r'href="([^"]+)\.html"', r'to="/\1"', content)
    content = re.sub(r'href="index\.html"', r'to="/"', content)
    
    # A few specific replacements for unclosed tags in poorly formatted HTML
    # (Leaving it to React to throw errors if there are parsing issues)
    
    return content.strip()

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # We also might want to extract title or metadata, but for now just the body
    jsx_content = convert_html_to_jsx(html)
    
    # Remove script tags that load external scripts at the bottom of the body (if any)
    jsx_content = re.sub(r'<script.*?</script>', '', jsx_content, flags=re.DOTALL)
    
    name = os.path.basename(file_path).replace('.html', '')
    component_name = name.title().replace('-', '')
    if component_name.lower() == 'index':
        component_name = 'Home'
        
    template = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name} = () => {{
  return (
    <>
      {jsx_content}
    </>
  );
}};

export default {component_name};
"""
    return name, component_name, template

def main():
    src_dir = 'original_html'
    dest_dir = 'src/pages'
    
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        
    routes = []
    
    for file in os.listdir(src_dir):
        if file.endswith('.html'):
            name, component_name, jsx_code = process_file(os.path.join(src_dir, file))
            dest_file = os.path.join(dest_dir, f"{component_name}.jsx")
            with open(dest_file, 'w', encoding='utf-8') as f:
                f.write(jsx_code)
            
            path = '/' if name == 'index' else f"/{name}"
            routes.append((path, component_name))
            
    # Generate App.jsx
    app_imports = "\\n".join([f"import {comp} from './pages/{comp}';" for _, comp in routes])
    app_routes = "\\n".join([f"        <Route path=\"{path}\" element={{<{comp} />}} />" for path, comp in routes])
    
    app_code = f"""import React from 'react';
import {{ BrowserRouter as Router, Routes, Route }} from 'react-router-dom';
{app_imports}

function App() {{
  return (
    <Router>
      <Routes>
{app_routes}
      </Routes>
    </Router>
  );
}}

export default App;
"""
    with open('src/App.jsx', 'w', encoding='utf-8') as f:
        f.write(app_code)

if __name__ == '__main__':
    main()
