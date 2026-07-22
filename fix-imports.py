import os
import glob

files = glob.glob('src/pages/*.jsx')
import_stmt = "import { ArrowUpRightIcon } from '@heroicons/react/20/solid';\n"

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<ArrowUpRightIcon' in content and import_stmt not in content:
        new_content = import_stmt + content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Fixed import in', filepath)
