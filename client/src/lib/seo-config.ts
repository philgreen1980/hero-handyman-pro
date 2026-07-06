// SEO metadata configuration for all pages
// Title rule: keep under 60 chars (SEO component appends "| Hero Handyman Pro" automatically)
// Description rule: under 155-160 chars, include local modifiers + benefit words
// IMPORTANT: Every description must have a unique hook — no copy-paste templates with just city name swapped.

export const seoConfig = {
  // Guide Pages — noindex: these are internal business tools, not public SEO content
  '/guide': {
    title: "Handyman Website Builder Guide",
    description: "Step-by-step guide to building an SEO-optimized handyman website with GBP landing pages. AI prompts, checklists, and local SEO best practices included.",
    keywords: "handyman website builder, how to build handyman website, GBP landing pages, local SEO for handyman, handyman website guide",
    canonicalUrl: "https://herohandymanpro.com/guide",
    noindex: true
  },
  
  '/guide/complete': {
    title: "Complete Handyman Website Builder Guide",
    description: "Comprehensive 15,000+ word guide with 9 AI prompts, information gathering checklist, SEO optimization, and post-launch tasks for handyman websites.",
    keywords: "handyman website guide, website builder prompts, GBP landing pages guide, handyman SEO guide",
    canonicalUrl: "https://herohandymanpro.com/guide/complete",
    noindex: true
  },
  
  '/guide/checklist': {
    title: "Quick-Start Checklist | Handyman Website Builder",
    description: "Printable checklist to gather all information needed before building your handyman website. Business details, GBP data, services, testimonials, and more.",
    keywords: "handyman website checklist, website planning checklist, GBP website checklist",
    canonicalUrl: "https://herohandymanpro.com/guide/checklist",
    noindex: true
  },

  // GBP Landing Pages
  gbpDesPeres: {
    title: "Handyman Services in West St. Louis MO",
    description: "Reliable handyman services in West St. Louis MO for drywall, doors, decks, carpentry, fixtures, and home repairs. Serving Chesterfield, Ballwin, Des Peres, and nearby areas.",
    keywords: "handyman West St. Louis, handyman Chesterfield MO, handyman Ballwin MO, handyman Des Peres MO, home repairs West St. Louis County",
    canonicalUrl: "https://herohandymanpro.com/gbp/des-peres-mo/"
  },
  
  gbpOFallon: {
    title: "Handyman in O'Fallon IL | Trusted Local Handyman",
    description: "Phil Green has served O'Fallon IL homeowners for 35+ years — deck rot, sticking doors, drywall patches, and punch-list jobs done right the first time. Call 800-741-6056.",
    keywords: "handyman O'Fallon IL, O'Fallon handyman, home repairs O'Fallon Illinois, deck repair O'Fallon, door installation O'Fallon",
    canonicalUrl: "https://herohandymanpro.com/gbp/ofallon-il/"
  },
  
  gbpEdwardsville: {
    title: "Handyman in Edwardsville IL | Fast Local Repairs",
    description: "Edwardsville homeowners call Hero Handyman Pro for the jobs other contractors skip — small drywall patches, deck board swaps, door adjustments. Same/next-day. 800-741-6056.",
    keywords: "handyman Edwardsville IL, Edwardsville handyman, home repairs Edwardsville Illinois, deck repair Edwardsville, SIUE handyman",
    canonicalUrl: "https://herohandymanpro.com/gbp/edwardsville-il/"
  },
  
  // Service Packages Page
  '/handyman-service-packages': {
    title: "Handyman Service Packages | Flat-Rate Pricing",
    description: "Flat-rate handyman service packages in St. Louis & Metro East. New home setup, safety checks, honey-do list help — all in one visit. Free quote in 24 hrs.",
    keywords: "handyman service packages, flat rate handyman, handyman bundles, new home handyman package, home safety check, honey do list service",
    canonicalUrl: "https://herohandymanpro.com/handyman-service-packages"
  },
  
  // Service Pages
  deckRepair: {
    title: "Deck Repair St. Louis & Metro East | Free Estimate",
    description: "Rotted deck boards, wobbly railings, or soft spots underfoot? Hero Handyman Pro fixes decks across St. Louis & Metro East — boards, rails, ledgers, and stairs. Free estimate.",
    keywords: "deck repair St Louis, deck repair near me, deck board replacement, deck staining, deck structural repair, deck refinishing, deck restoration",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/deck-repair/"
  },
  
  bathroomRemodeling: {
    title: "Bathroom Remodeling St. Louis | Free Consultation",
    description: "Bathroom remodeling in St. Louis & Metro East. Full remodels, tile, vanity & fixture upgrades. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "bathroom remodeling St Louis, bathroom renovation near me, bathroom remodel Metro East, bathroom fixtures, tile installation, vanity replacement",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/bathroom-remodeling/"
  },
  
  doorInstallation: {
    title: "Door Installation St. Louis & Metro East | Same-Day",
    description: "Door installation in St. Louis & Metro East. Entry, interior & patio doors installed fast. Honest pricing. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "door installation near me, door replacement St Louis, entry door installation, interior door replacement, patio door installation, door repair",
    canonicalUrl: "https://herohandymanpro.com/door-installation"
  },
  
  doorReplacement: {
    title: "Door Replacement St. Louis & Metro East | Free Quote",
    description: "Door replacement in St. Louis & Metro East. Entry, interior & storm doors replaced fast. Honest pricing. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "door replacement near me, door replacement St. Louis, replace door, new door installation, door replacement service, entry door replacement",
    canonicalUrl: "https://herohandymanpro.com/door-installation"
  },
  
  windowInstallation: {
    title: "Window Installation St. Louis | Energy-Efficient",
    description: "Window installation in St. Louis & Metro East. Reduce energy bills with energy-efficient windows. Fast, honest. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "window installation near me, window replacement St. Louis, energy efficient windows, window installation service, replace windows, new windows",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/window-installation/"
  },
  
  porchRepair: {
    title: "Porch Repair St. Louis & Metro East | Free Inspection",
    description: "Sagging porch floor? Rotted posts or railings? Hero Handyman Pro repairs porches across St. Louis & Metro East — structural fixes, wood rot, and stair repair. Free estimate.",
    keywords: "porch repair near me, porch repair St. Louis, fix sagging porch, rotted porch wood, porch floor repair, porch railing repair",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/porch-repair/"
  },
  
  // Location-Specific Service Pages
  windowInstallationOFallon: {
    title: "Window Installation O'Fallon IL | Energy-Efficient",
    description: "Window installation in O'Fallon, IL. Energy-efficient replacement windows. Fast, honest, local Metro East service. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "window installation O'Fallon IL, window replacement O'Fallon, O'Fallon window installer, energy efficient windows O'Fallon",
    canonicalUrl: "https://herohandymanpro.com/service-areas/window-installation-ofallon-il/"
  },
  
  windowInstallationEdwardsville: {
    title: "Window Installation Edwardsville IL | Local Experts",
    description: "Window installation in Edwardsville, IL. Energy-efficient replacement windows. Fast, honest, local Metro East. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "window installation Edwardsville IL, window replacement Edwardsville, Edwardsville window installer, energy efficient windows Edwardsville",
    canonicalUrl: "https://herohandymanpro.com/service-areas/window-installation-edwardsville-il/"
  },
  
  windowInstallationBelleville: {
    title: "Window Installation Belleville IL | Energy-Efficient",
    description: "Window installation in Belleville, IL. Energy-efficient replacement windows. Fast, honest, local Metro East. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "window installation Belleville IL, window replacement Belleville, Belleville window installer, energy efficient windows Belleville",
    canonicalUrl: "https://herohandymanpro.com/services/window-installation-belleville-il"
  },
  
  windowInstallationCollinsville: {
    title: "Window Installation Collinsville IL | Energy-Efficient",
    description: "Window installation in Collinsville, IL. Energy-efficient replacement windows. Fast, honest, local Metro East. Free quote in 24 hrs. Call 800-741-6056.",
    keywords: "window installation Collinsville IL, window replacement Collinsville, Collinsville window installer, energy efficient windows Collinsville",
    canonicalUrl: "https://herohandymanpro.com/services/window-installation-collinsville-il"
  },
  
  porchRepairOFallon: {
    title: "Porch Repair O'Fallon IL | Sagging & Rotted Porches",
    description: "O'Fallon IL porches take a beating from Metro East winters. Hero Handyman Pro fixes sagging floors, rotted posts, damaged railings, and crumbling steps. Free estimate.",
    keywords: "porch repair O'Fallon IL, porch repair near me, fix sagging porch O'Fallon, rotted porch wood O'Fallon",
    canonicalUrl: "https://herohandymanpro.com/services/porch-repair-ofallon-il"
  },
  
  porchRepairEdwardsville: {
    title: "Porch Repair Edwardsville IL | Sagging & Rotted",
    description: "Edwardsville's older homes often have porch rot hiding under paint. We find it, fix it, and make it safe — boards, posts, railings, and stairs. Free estimate. 800-741-6056.",
    keywords: "porch repair Edwardsville IL, porch repair near me, fix sagging porch Edwardsville, rotted porch wood Edwardsville",
    canonicalUrl: "https://herohandymanpro.com/services/porch-repair-edwardsville-il"
  },
  
  porchRepairBelleville: {
    title: "Porch Repair Belleville IL | Sagging & Rotted Porches",
    description: "Belleville IL porch repair — we fix soft spots, rotted wood, and unstable railings before they become a safety hazard. Fast local service. Free estimate. Call 800-741-6056.",
    keywords: "porch repair Belleville IL, porch repair near me, fix sagging porch Belleville, rotted porch wood Belleville",
    canonicalUrl: "https://herohandymanpro.com/services/porch-repair-belleville-il"
  },
  
  porchRepairCollinsville: {
    title: "Porch Repair Collinsville IL | Sagging & Rotted",
    description: "Porch repair in Collinsville IL — sagging floors, rotted posts, loose railings, and crumbling steps fixed right. Local handyman, honest pricing. Free estimate. 800-741-6056.",
    keywords: "porch repair Collinsville IL, porch repair near me, fix sagging porch Collinsville, rotted porch wood Collinsville",
    canonicalUrl: "https://herohandymanpro.com/services/porch-repair-collinsville-il"
  },
  
  // City Pages — each description has a unique local hook, not just a city name swap
  oFallonHandyman: {
    title: "Trusted Handyman in O'Fallon, IL | Home Repairs | Hero Handyman Pro",
    description: "Looking for a reliable handyman in O'Fallon, IL? From drywall to deck repairs, Hero Handyman Pro provides prompt, professional home maintenance. Get a free quote!",
    keywords: "O'Fallon IL handyman, handyman O'Fallon Illinois, home repairs O'Fallon, Scott AFB handyman",
    canonicalUrl: "https://herohandymanpro.com/service-areas/ofallon-handyman-services/"
  },
  
  edwardsvilleHandyman: {
    title: "Handyman Services in Edwardsville, IL | Hero Handyman Pro",
    description: "Edwardsville's trusted handyman for deck repairs, drywall, painting, and home projects. Serving SIUE area and surrounding neighborhoods. Call for a free estimate!",
    keywords: "Edwardsville IL handyman, handyman Edwardsville Illinois, home repairs Edwardsville, SIUE handyman",
    canonicalUrl: "https://herohandymanpro.com/service-areas/edwardsville-handyman-services/"
  },
  
  bellevilleHandyman: {
    title: "Reliable Handyman in Belleville, IL | Hero Handyman Pro",
    description: "Belleville homeowners trust Hero Handyman Pro for deck repairs, drywall patches, door fixes, and more. Professional service with upfront pricing. Book today!",
    keywords: "Belleville IL handyman, handyman Belleville Illinois, home repairs Belleville",
    canonicalUrl: "https://herohandymanpro.com/service-areas/belleville-handyman-services/"
  },
  
  stLouisHandyman: {
    title: "Handyman in St. Louis MO | Trusted Local Handyman",
    description: "St. Louis homeowners call Hero Handyman Pro for the repairs that pile up — drywall holes, sticking doors, deck boards, and fixture swaps. Licensed, insured, 35+ yrs. 800-741-6056.",
    keywords: "St Louis handyman, handyman St Louis Missouri, home repairs St Louis MO",
    canonicalUrl: "https://herohandymanpro.com/service-areas/st-louis-mo-handyman/"
  },
  
  collinsvilleHandyman: {
    title: "Handyman in Collinsville IL | Fast Local Repairs",
    description: "Collinsville IL handyman for drywall, deck boards, door repairs, and carpentry. Serving Route 159 corridor and nearby neighborhoods. Honest pricing. Call 800-741-6056.",
    keywords: "Collinsville IL handyman, handyman Collinsville Illinois, home repairs Collinsville",
    canonicalUrl: "https://herohandymanpro.com/service-areas/collinsville-handyman-services/"
  },
  
  glenCarbonHandyman: {
    title: "Handyman in Glen Carbon IL | Fast Local Repairs",
    description: "Glen Carbon IL handyman for growing families — deck repairs, door adjustments, drywall patches, and home maintenance before your to-do list grows. Call 800-741-6056.",
    keywords: "Glen Carbon IL handyman, handyman Glen Carbon Illinois, home repairs Glen Carbon",
    canonicalUrl: "https://herohandymanpro.com/service-areas/glen-carbon-il-handyman/"
  },
  
  stCharlesHandyman: {
    title: "Handyman in St. Charles MO | Fast Local Repairs",
    description: "St. Charles MO handyman for Historic Main Street area homes and newer subdivisions alike — deck rot, door repairs, drywall, and carpentry. Free estimate. Call 800-741-6056.",
    keywords: "St Charles handyman, handyman St Charles Missouri, home repairs St Charles MO",
    canonicalUrl: "https://herohandymanpro.com/service-areas/st-charles-mo-handyman/"
  },
  
  fentonHandyman: {
    title: "Handyman in Fenton MO | Fast Local Repairs",
    description: "Fenton MO handyman for Gravois Bluffs area homeowners — deck repair, door fixes, drywall patches, and punch-list jobs. Fast response, honest pricing. Call 800-741-6056.",
    keywords: "Fenton handyman, handyman Fenton Missouri, home repairs Fenton MO",
    canonicalUrl: "https://herohandymanpro.com/service-areas/fenton-mo-handyman/"
  },
  
  // Other Pages
  services: {
    title: "Home Repair Services | Small Jobs, Punch Lists & Repairs",
    description: "Decks, doors, drywall, carpentry, fixtures, and punch-list repairs across St. Louis & Metro East. We take the jobs other contractors skip. Small jobs always welcome.",
    keywords: "handyman services, home repair services, small jobs handyman, punch list repairs, St Louis handyman services, Metro East home repairs",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/"
  },
  
  serviceAreas: {
    title: "Service Areas | St. Louis & Metro East Illinois",
    description: "Hero Handyman Pro serves 8+ cities across Metro East IL & St. Louis. Edwardsville, O'Fallon, Belleville, Collinsville & more. Licensed, insured, 4.9★ reviews. Call today.",
    keywords: "handyman service areas, St Louis service area, Metro East handyman coverage",
    canonicalUrl: "https://herohandymanpro.com/service-areas/"
  },
  
  reviews: {
    title: "Handyman Reviews | St. Louis & Metro East",
    description: "4.9-star rated handyman across St. Louis & Metro East. Read real reviews from O'Fallon, Edwardsville, and Belleville homeowners who hired Hero Handyman Pro.",
    keywords: "handyman reviews, Hero Handyman Pro reviews, St Louis handyman testimonials",
    canonicalUrl: "https://herohandymanpro.com/reviews/"
  },
  
  contact: {
    title: "Contact Us | Free Estimate in 24 Hours",
    description: "Ready to fix that to-do list? Call Hero Handyman Pro at 800-741-6056 or fill out our form. We respond within 24 hours and offer same/next-day service across Metro East & St. Louis.",
    keywords: "contact handyman, free estimate, handyman quote St Louis",
    canonicalUrl: "https://herohandymanpro.com/contact/"
  }
};
