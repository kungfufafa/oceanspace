import os
import glob

files = glob.glob('src/pages/*.jsx')
old_str = '<span aria-hidden="true" className="text-[#2563eb]">\u2197</span>'
new_str = '<ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if old_str in content:
        new_content = content.replace(old_str, new_str)
        # Add import statement if not exists
        if 'ArrowUpRightIcon' not in new_content:
            new_content = "import { ArrowUpRightIcon } from '@heroicons/react/20/solid';\n" + new_content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Updated', filepath)
