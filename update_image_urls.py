import re

CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029565453/Diiun24fcMHd4U4LaY8wKq"

replacements = {
    r"edwardsville-deck-before[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-deck-before_9163fc73.jpg",
    r"edwardsville-deck-after[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-deck-after_f65f7b7a.jpg",
    r"edwardsville-drywall-before[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-drywall-before_845b63c3.jpg",
    r"edwardsville-drywall-after[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-drywall-after_e9d79218.jpg",
    r"edwardsville-door-before[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-door-before_f7a2ee91.jpg",
    r"edwardsville-door-after[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/edwardsville-door-after_dd8aa30a.jpg",
    r"ofallon-deck-before[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/ofallon-deck-before_dddb0596.jpg",
    r"ofallon-deck-after[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/ofallon-deck-after_84009970.jpg",
    r"ofallon-door-before[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/ofallon-door-before_db317b5e.jpg",
    r"ofallon-door-after[^\"']*\.(webp|jpg|jpeg)": f"{CDN}/ofallon-door-after_b46a44ab.jpg",
}

files = [
    "client/src/pages/EdwardsvilleHandyman.tsx",
    "client/src/pages/OFallonHandyman.tsx",
]

for fname in files:
    with open(fname, "r") as f:
        content = f.read()
    original = content
    
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content)
    
    # Add loading="lazy" to all img tags that don't have it
    content = re.sub(r'(<img\b)(?![^>]*\bloading\b)', r'\1 loading="lazy"', content)
    
    if content != original:
        with open(fname, "w") as f:
            f.write(content)
        print(f"Updated: {fname}")
    else:
        print(f"No changes needed: {fname}")

# Also add lazy loading to Layout.tsx and Home.tsx
for fname in ["client/src/components/Layout.tsx", "client/src/pages/Home.tsx"]:
    with open(fname, "r") as f:
        content = f.read()
    original = content
    content = re.sub(r'(<img\b)(?![^>]*\bloading\b)', r'\1 loading="lazy"', content)
    if content != original:
        with open(fname, "w") as f:
            f.write(content)
        print(f"Added lazy loading: {fname}")
    else:
        print(f"No lazy loading changes: {fname}")

print("Done!")
