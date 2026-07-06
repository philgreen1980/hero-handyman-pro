#!/usr/bin/env python3
"""
Second-pass migration: handle pages where the SEO component uses inline
title/description props (not a spread) and useSeoRoute is not yet imported.

For each file:
1. Find <SEO ... /> blocks with title= and/or description= props
2. Replace with <SEO {...seo} />
3. Add useSeoRoute import if missing
4. Add const seo = useSeoRoute(); inside the component if missing
"""

import os
import re

PAGES_DIR = '/home/ubuntu/hero-handyman-pro/client/src/pages'
HOOK_IMPORT = "import { useSeoRoute } from '@/hooks/useSeoRoute';"

TARGET_FILES = [
    'CollinsvilleHandyman.tsx',
    'DeckConstructionService.tsx',
    'HandymanNearMe.tsx',
    'Membership.tsx',
    'guide/GBPAudit.tsx',
    'guide/ReviewTemplates.tsx',
    'HandymanOFallonMO.tsx',
    'DeckRepairOFallonMO.tsx',
    'DoorInstallationOFallonMO.tsx',
    'DoorRepairOFallonMO.tsx',
    'VAHomeModifications.tsx',
    'HandymanBellevilleIL.tsx',
    'HandymanShilohIL.tsx',
    'HandymanSwanseaIL.tsx',
    'HandymanFairviewHeightsIL.tsx',
    'FenceRepairService.tsx',
    'EstimatorPage.tsx',
    'HomeRepairService.tsx',
    'PorchRepairService.tsx',
    'SeniorAccessibilityService.tsx',
    'TrimCarpentryService.tsx',
    'HandymanBallwinMO.tsx',
    'HandymanChesterfieldMO.tsx',
    'HandymanStCharlesMO.tsx',
    'HandymanServicePackages.tsx',
    'HandymanServicesStLouis.tsx',
    'blog/BlogIndex.tsx',
    'services/PorchRepairBelleville.tsx',
    'services/PorchRepairCollinsville.tsx',
    'services/PorchRepairEdwardsville.tsx',
    'services/PorchRepairOFallon.tsx',
    'services/WindowInstallationBelleville.tsx',
    'services/WindowInstallationCollinsville.tsx',
    'services/WindowInstallationEdwardsville.tsx',
    'services/WindowInstallationOFallon.tsx',
    'GBPDesPeres.tsx',
    'GBPEdwardsville.tsx',
    'GBPOFallon.tsx',
    'ExteriorCarpentryService.tsx',
    'FaucetRepairService.tsx',
    'Home.tsx',
    'DeckRepairService.tsx',
    'DoorRepairService.tsx',
    'DrywallRepairService.tsx',
    'CeilingFanService.tsx',
]

def migrate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # Skip if already fully migrated (uses spread)
    if '<SEO {...seo} />' in content and 'useSeoRoute' in content:
        # Check if there are still any inline SEO props
        if not re.search(r'<SEO\s+title=', content):
            return False
    
    # Replace multi-line <SEO ... /> with inline title/description props
    # Pattern: <SEO\n  title="..."\n  description="..."\n  .../>
    content = re.sub(
        r'<SEO\s*\n(?:\s+[a-zA-Z]+=[^\n]+\n)+\s*/?>',
        '<SEO {...seo} />',
        content
    )
    
    # Replace single-line <SEO title="..." description="..." ... />
    content = re.sub(
        r'<SEO\s+title="[^"]*"[^/]*/?>',
        '<SEO {...seo} />',
        content
    )
    
    # Add useSeoRoute import if not present
    if 'useSeoRoute' not in content:
        # Find last import line
        import_lines = list(re.finditer(r'^import .+;?\s*$', content, re.MULTILINE))
        if import_lines:
            last_end = import_lines[-1].end()
            content = content[:last_end] + '\n' + HOOK_IMPORT + content[last_end:]
        else:
            content = HOOK_IMPORT + '\n' + content
    
    # Add const seo = useSeoRoute(); inside the component if not present
    if 'const seo = useSeoRoute()' not in content:
        func_match = re.search(
            r'(export\s+default\s+function\s+\w+\s*\([^)]*\)\s*(?::\s*\w+\s*)?\{)',
            content
        )
        if func_match:
            insert_pos = func_match.end()
            content = content[:insert_pos] + '\n  const seo = useSeoRoute();' + content[insert_pos:]
        else:
            # Arrow function
            arrow_match = re.search(
                r'(export\s+default\s+(?:const\s+)?\w+\s*=\s*\([^)]*\)\s*(?::\s*\w+\s*)?\s*=>\s*\{)',
                content
            )
            if arrow_match:
                insert_pos = arrow_match.end()
                content = content[:insert_pos] + '\n  const seo = useSeoRoute();' + content[insert_pos:]
    
    if content == original:
        return False
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    return True

fixed = []
errors = []
for rel_path in TARGET_FILES:
    filepath = os.path.join(PAGES_DIR, rel_path)
    if not os.path.exists(filepath):
        continue
    try:
        if migrate_file(filepath):
            fixed.append(rel_path)
    except Exception as e:
        errors.append(f"{rel_path}: {e}")

print(f"Fixed {len(fixed)} files:")
for f in sorted(fixed):
    print(f"  + {f}")

if errors:
    print(f"\nErrors:")
    for e in errors:
        print(f"  ! {e}")
