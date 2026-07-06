"""
Adds PageBreadcrumb to service pages, city hub pages, and location-services pages.
Each page gets a breadcrumb appropriate to its position in the site hierarchy.
"""
import re
import os

BASE = "/home/ubuntu/hero-handyman-pro/client/src/pages"
IMPORT_LINE = 'import PageBreadcrumb from "@/components/PageBreadcrumb";\n'

# Map of file path (relative to pages/) -> breadcrumb crumbs array as a string
# Format: list of {label, href?} objects
PAGES = {
    # === Main service pages ===
    "DrywallRepairService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Drywall Repair"},
    ],
    "DeckRepairService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Deck Repair"},
    ],
    "DoorRepairService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Door Installation & Repair"},
    ],
    "CeilingFanService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Ceiling Fan Installation"},
    ],
    "HandymanStLouisMO.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "St. Louis, MO"},
    ],
    "PorchRepairService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Porch Repair"},
    ],
    "ExteriorCarpentryService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Exterior Carpentry"},
    ],
    "HomeRepairService.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Home Repair Services"},
    ],
    "services/DeckRepairPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Deck Repair"},
    ],
    "services/DoorInstallationPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Door Installation"},
    ],
    "services/PorchRepairPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Porch Repair"},
    ],
    "services/WindowInstallationPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Window Installation"},
    ],
    "services/BathroomRemodelingPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Bathroom Remodeling"},
    ],
    "services/DeckBuildingPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Deck Building"},
    ],
    "services/DoorReplacementPage.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Services", "href": "/handyman-services/"},
        {"label": "Door Replacement"},
    ],
    # === City hub pages ===
    "EdwardsvilleHandyman.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Edwardsville, IL"},
    ],
    "OFallonHandyman.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "O'Fallon, IL"},
    ],
    "BellevilleHandyman.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Belleville, IL"},
    ],
    "CollinsvilleHandyman.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Collinsville, IL"},
    ],
    "GlenCarbonHandyman.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Glen Carbon, IL"},
    ],
    "HandymanChesterfieldMO.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Chesterfield, MO"},
    ],
    "HandymanBallwinMO.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Ballwin, MO"},
    ],
    "HandymanFentonMO.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "Fenton, MO"},
    ],
    "HandymanStCharlesMO.tsx": [
        {"label": "Home", "href": "/"},
        {"label": "Service Areas", "href": "/service-areas/"},
        {"label": "St. Charles, MO"},
    ],
}


def crumbs_to_jsx(crumbs):
    """Convert list of crumb dicts to JSX prop string."""
    parts = []
    for c in crumbs:
        if "href" in c:
            parts.append(f'    {{ label: "{c["label"]}", href: "{c["href"]}" }}')
        else:
            parts.append(f'    {{ label: "{c["label"]}" }}')
    return "[\n" + ",\n".join(parts) + "\n  ]"


def add_breadcrumb_to_file(rel_path, crumbs):
    full_path = os.path.join(BASE, rel_path)
    if not os.path.exists(full_path):
        print(f"SKIP (not found): {rel_path}")
        return False

    with open(full_path, "r") as f:
        content = f.read()

    # Skip if already has PageBreadcrumb
    if "PageBreadcrumb" in content:
        print(f"SKIP (already has breadcrumb): {rel_path}")
        return False

    # Add import after the last import line
    last_import_match = list(re.finditer(r'^import .+;\n', content, re.MULTILINE))
    if not last_import_match:
        print(f"SKIP (no imports found): {rel_path}")
        return False

    last_import_end = last_import_match[-1].end()
    content = content[:last_import_end] + IMPORT_LINE + content[last_import_end:]

    # Build the JSX to insert
    crumbs_jsx = crumbs_to_jsx(crumbs)
    breadcrumb_jsx = f'\n      <PageBreadcrumb crumbs={{{crumbs_jsx}}} />'

    # Find the first return ( and the opening div/section/fragment after it
    # We want to insert after the first JSX element opening tag in the return
    # Strategy: find "return (" then find the first <div or <> or <section, insert breadcrumb after it
    return_match = re.search(r'return \(\s*\n\s*(<(?:div|section|main|>)[^>]*>)', content)
    if return_match:
        insert_pos = return_match.end()
        content = content[:insert_pos] + breadcrumb_jsx + content[insert_pos:]
        with open(full_path, "w") as f:
            f.write(content)
        print(f"Updated: {rel_path}")
        return True
    else:
        print(f"SKIP (could not find insertion point): {rel_path}")
        return False


updated = 0
for rel_path, crumbs in PAGES.items():
    if add_breadcrumb_to_file(rel_path, crumbs):
        updated += 1

print(f"\nTotal updated: {updated}/{len(PAGES)}")
