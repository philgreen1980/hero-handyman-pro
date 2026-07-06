#!/usr/bin/env python3
"""
Fix files where the useSeoRoute import was inserted mid-line (after a line
that didn't end with a newline before the next code block).

Pattern to fix:
  import { X } from "y";const something = ...
  import { useSeoRoute } from '@/hooks/useSeoRoute';

Should become:
  import { X } from "y";
  import { useSeoRoute } from '@/hooks/useSeoRoute';
  const something = ...
"""

import os
import re

PAGES_DIR = '/home/ubuntu/hero-handyman-pro/client/src/pages'

HOOK_IMPORT = "import { useSeoRoute } from '@/hooks/useSeoRoute';"

def repair_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    if HOOK_IMPORT not in content:
        return False
    
    original = content
    
    # Fix: something;import { useSeoRoute } ... → something;\nimport { useSeoRoute } ...
    # This happens when the import was appended right after a semicolon without newline
    content = re.sub(
        r'([;\}])(import \{ useSeoRoute \} from \'@/hooks/useSeoRoute\';)',
        r'\1\n\2',
        content
    )
    
    # Also fix: something;const → something;\nconst (when the import split a line)
    # Pattern: "...;const X" where the import was inserted between them
    # After fixing above, we might have: ";import...\n  const X" which is fine
    
    # Fix duplicate import lines
    content = re.sub(
        r"(import \{ useSeoRoute \} from '@/hooks/useSeoRoute';\n)(\1)+",
        r'\1',
        content
    )
    
    if content == original:
        return False
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    return True

fixed = []
for root, dirs, files in os.walk(PAGES_DIR):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.git']]
    for fname in files:
        if not fname.endswith('.tsx'):
            continue
        filepath = os.path.join(root, fname)
        if repair_file(filepath):
            fixed.append(filepath.replace(PAGES_DIR + '/', ''))

print(f"Fixed {len(fixed)} files:")
for f in sorted(fixed):
    print(f"  + {f}")
