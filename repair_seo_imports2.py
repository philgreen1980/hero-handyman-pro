#!/usr/bin/env python3
"""
Fix files where the useSeoRoute import was inserted on the same line as
the previous import's semicolon, causing:
  import { useState } from "react";const articleSchema = {
  import { useSeoRoute } from '@/hooks/useSeoRoute';

The fix splits the fused line and moves the useSeoRoute import to the
correct position (after all other imports, before non-import code).
"""

import os
import re

PAGES_DIR = '/home/ubuntu/hero-handyman-pro/client/src/pages'
HOOK_IMPORT = "import { useSeoRoute } from '@/hooks/useSeoRoute';"

def repair_file(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    if not any(HOOK_IMPORT in line for line in lines):
        return False
    
    original_lines = lines[:]
    
    # Step 1: Find lines that have "...";const or "...";const (fused)
    # and split them
    new_lines = []
    for line in lines:
        # Pattern: ends with ";const " or ";const\n" (fused with non-import code)
        # But NOT if it's the hook import line itself
        if HOOK_IMPORT in line:
            new_lines.append(line)
            continue
        
        # Check for fused pattern: import...";const or import...";\n followed by code on same line
        # e.g. `import { useState } from "react";const articleSchema = {`
        fused = re.match(r'^(import .+?";)(const |let |var |function |export |class |/\*)', line)
        if not fused:
            fused = re.match(r"^(import .+?';)(const |let |var |function |export |class |/\*)", line)
        
        if fused:
            # Split into two lines
            split_pos = len(fused.group(1))
            new_lines.append(line[:split_pos] + '\n')
            new_lines.append(line[split_pos:])
        else:
            new_lines.append(line)
    
    lines = new_lines
    
    # Step 2: Remove the hook import from wherever it is now
    hook_line_idx = None
    for i, line in enumerate(lines):
        if line.strip() == HOOK_IMPORT:
            hook_line_idx = i
            break
    
    if hook_line_idx is None:
        return False
    
    lines.pop(hook_line_idx)
    
    # Step 3: Find the last import line and insert the hook import after it
    last_import_idx = -1
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('import ') and ('"' in stripped or "'" in stripped):
            last_import_idx = i
    
    if last_import_idx >= 0:
        lines.insert(last_import_idx + 1, HOOK_IMPORT + '\n')
    else:
        lines.insert(0, HOOK_IMPORT + '\n')
    
    if lines == original_lines:
        return False
    
    with open(filepath, 'w') as f:
        f.writelines(lines)
    
    return True

fixed = []
for root, dirs, files in os.walk(PAGES_DIR):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.git']]
    for fname in files:
        if not fname.endswith('.tsx'):
            continue
        filepath = os.path.join(root, fname)
        try:
            if repair_file(filepath):
                fixed.append(filepath.replace(PAGES_DIR + '/', ''))
        except Exception as e:
            print(f"ERROR {filepath}: {e}")

print(f"Fixed {len(fixed)} files:")
for f in sorted(fixed):
    print(f"  + {f}")
