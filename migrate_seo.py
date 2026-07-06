#!/usr/bin/env python3
"""
Migrate all page components from inline seoData / seoConfig lookups
to the shared useSeoRoute hook.

Strategy:
1. For pages with `const seoData = { ... }` + `<SEO {...seoData} />`:
   - Remove the seoData block
   - Add `import { useSeoRoute } from '@/hooks/useSeoRoute';`
   - Add `const seo = useSeoRoute();` inside the component
   - Replace `<SEO {...seoData} />` with `<SEO {...seo} />`

2. For pages with `<SEO {...seoConfig.key} />` or `<SEO {...seoConfig['/path']} />`:
   - Remove the seoConfig import (if it's the only usage)
   - Add `import { useSeoRoute } from '@/hooks/useSeoRoute';`
   - Add `const seo = useSeoRoute();` inside the component
   - Replace `<SEO {...seoConfig.key} />` or `<SEO {...seoConfig['/path']} />` with `<SEO {...seo} />`

3. For pages with inline `<SEO title="..." description="..." />` (no variable):
   - Add `import { useSeoRoute } from '@/hooks/useSeoRoute';`
   - Add `const seo = useSeoRoute();` inside the component
   - Replace the inline `<SEO ... />` with `<SEO {...seo} />`

Skip: guide pages that use seoConfig['/guide/...'] — they already work via path lookup.
"""

import os
import re
import sys

PAGES_DIR = '/home/ubuntu/hero-handyman-pro/client/src/pages'

def migrate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    changed = False
    
    # ── Pattern 1: inline seoData object ──────────────────────────────────────
    # Match: const seoData = { ... }; (multiline, ends with };)
    seo_data_pattern = re.compile(
        r'(\s*)const seoData\s*=\s*\{[^}]*(?:\{[^}]*\}[^}]*)?\};\s*\n',
        re.DOTALL
    )
    
    if 'const seoData' in content:
        # Remove the seoData block
        content = seo_data_pattern.sub('', content)
        
        # Replace <SEO {...seoData} /> or <SEO {...seoData} fullTitle={...} />
        content = re.sub(
            r'<SEO\s+\{\.\.\.seoData\}[^/]*/?>',
            '<SEO {...seo} />',
            content
        )
        # Also handle multi-line SEO with seoData spread
        content = re.sub(
            r'<SEO\s+\{\.\.\.seoData\}\s*\n\s*/?>',
            '<SEO {...seo} />',
            content
        )
        changed = True
    
    # ── Pattern 2: seoConfig.key or seoConfig['/path'] ────────────────────────
    if 'seoConfig.' in content or "seoConfig['" in content or 'seoConfig["' in content:
        # Replace <SEO {...seoConfig.key} /> 
        content = re.sub(
            r'<SEO\s+\{\.\.\.seoConfig\.[a-zA-Z0-9_\[\]\'"/]+\}\s*/?>',
            '<SEO {...seo} />',
            content
        )
        # Replace <SEO {...seoConfig['/path']} />
        content = re.sub(
            r"<SEO\s+\{\.\.\.seoConfig\['[^']+'\]\}\s*/?>",
            '<SEO {...seo} />',
            content
        )
        content = re.sub(
            r'<SEO\s+\{\.\.\.seoConfig\["[^"]+"\]\}\s*/?>',
            '<SEO {...seo} />',
            content
        )
        changed = True
    
    # ── Pattern 3: inline <SEO title="..." description="..." ... /> ───────────
    # Match multi-line SEO component with explicit props (not spread)
    inline_seo_pattern = re.compile(
        r'<SEO\s*\n\s+title="[^"]*"\s*\n\s+description="[^"]*"[^/]*/?>',
        re.DOTALL
    )
    if inline_seo_pattern.search(content):
        content = inline_seo_pattern.sub('<SEO {...seo} />', content)
        changed = True
    
    # Also single-line inline SEO with title prop
    single_inline = re.compile(r'<SEO\s+title="[^"]*"\s+description="[^"]*"[^/]*/>')
    if single_inline.search(content):
        content = single_inline.sub('<SEO {...seo} />', content)
        changed = True
    
    if not changed:
        return False
    
    # ── Add useSeoRoute import if not already present ─────────────────────────
    if 'useSeoRoute' not in content:
        # Add after the last import line
        import_match = list(re.finditer(r'^import .+;?\s*$', content, re.MULTILINE))
        if import_match:
            last_import_end = import_match[-1].end()
            content = (
                content[:last_import_end] +
                "\nimport { useSeoRoute } from '@/hooks/useSeoRoute';" +
                content[last_import_end:]
            )
        else:
            content = "import { useSeoRoute } from '@/hooks/useSeoRoute';\n" + content
    
    # ── Remove seoConfig import if no longer used ─────────────────────────────
    if 'seoConfig' not in content.replace("import { seoConfig }", ""):
        content = re.sub(
            r"import\s+\{\s*seoConfig\s*\}\s+from\s+'@/lib/seo-config';\s*\n",
            '',
            content
        )
        content = re.sub(
            r'import\s+\{\s*seoConfig\s*\}\s+from\s+"@/lib/seo-config";\s*\n',
            '',
            content
        )
    
    # ── Add `const seo = useSeoRoute();` inside the component ────────────────
    if 'const seo = useSeoRoute()' not in content:
        # Find the first export default function or const component
        func_match = re.search(
            r'(export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{|'
            r'export\s+default\s+function\s+\w+\s*\([^)]*\):\s*\w+\s*\{)',
            content
        )
        if func_match:
            insert_pos = func_match.end()
            content = (
                content[:insert_pos] +
                '\n  const seo = useSeoRoute();' +
                content[insert_pos:]
            )
        else:
            # Try arrow function component
            arrow_match = re.search(
                r'(export\s+default\s+(?:function\s+)?\w+\s*=\s*\([^)]*\)\s*(?::\s*\w+\s*)?\s*=>\s*\{)',
                content
            )
            if arrow_match:
                insert_pos = arrow_match.end()
                content = (
                    content[:insert_pos] +
                    '\n  const seo = useSeoRoute();' +
                    content[insert_pos:]
                )
    
    if content == original:
        return False
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    return True

def main():
    migrated = []
    skipped = []
    errors = []
    
    for root, dirs, files in os.walk(PAGES_DIR):
        # Skip node_modules etc.
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git']]
        
        for fname in files:
            if not fname.endswith('.tsx'):
                continue
            
            filepath = os.path.join(root, fname)
            
            try:
                result = migrate_file(filepath)
                if result:
                    rel = filepath.replace(PAGES_DIR + '/', '')
                    migrated.append(rel)
                else:
                    rel = filepath.replace(PAGES_DIR + '/', '')
                    skipped.append(rel)
            except Exception as e:
                errors.append(f"{filepath}: {e}")
    
    print(f"\n✅ Migrated: {len(migrated)} files")
    for f in sorted(migrated):
        print(f"  + {f}")
    
    print(f"\n⏭  Skipped (no SEO component found): {len(skipped)} files")
    
    if errors:
        print(f"\n❌ Errors: {len(errors)}")
        for e in errors:
            print(f"  ! {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
