import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Hammer, Home, DoorOpen, PaintBucket, Lightbulb, Droplet, ClipboardList, Accessibility, Phone, Check, Star, MapPin, X, Monitor, Tv } from "lucide-react";
import SEO from '@/components/SEO';
import { useSeoRoute } from '@/hooks/useSeoRoute';
const interiorServices = [
  {
    title: "Drywall Repair & Patching",
    desc: "Holes from doorknobs, water damage from leaky pipes, cracks from settling — we cut out the damaged area, install proper backing, apply multiple coats of mud, and sand it perfectly smooth. We match existing wall textures so the repair is completely invisible once painted.",
    icon: PaintBucket,
    url: "/handyman-services/drywall-repair/"
  },
  {
    title: "Door Repair & Installation",
    desc: "A door that won't latch, a sliding glass door that sticks, or a closet door off its track. We repair all types of interior and exterior doors, adjust hinges, plane edges, and replace hardware. We also install new interior doors — pre-hung units, bi-folds, and sliding barn doors.",
    icon: DoorOpen,
    url: "/handyman-services/door-repair/"
  },
  {
    title: "Trim, Baseboard & Molding",
    desc: "Upgrading your trim is one of the most cost-effective ways to modernize your home. We install new baseboards, window casings, and crown molding with precise, tight miter cuts. We also repair existing trim damaged by pets, water, or general wear.",
    icon: Home,
    url: "/handyman-services/trim-carpentry/"
  },
  {
    title: "Bathroom & Laundry Refreshes",
    desc: "You don't always need a full remodel to make a space feel new. We replace vanities, install new plumbing fixtures, update lighting, hang mirrors, and repair damaged tile grout. In the laundry room, we install custom shelving, add utility sinks, and optimize the space.",
    icon: Droplet,
    url: "/handyman-services/home-repair-services/"
  },
];

const exteriorServices = [
  {
    title: "Deck Repair & Restoration",
    desc: "Your deck takes a beating from Metro East summers and winters. We replace rotting or warped deck boards, secure loose railings, and reinforce wobbly stairs. If your deck is structurally sound but looks weathered, we provide complete restoration — power washing, sanding, and premium stain or sealant.",
    icon: Hammer,
    url: "/handyman-services/deck-repair/"
  },
  {
    title: "Wood Rot Repair & Exterior Carpentry",
    desc: "Water is the enemy of your home's exterior. We identify and repair wood rot on window sills, door frames, and fascia boards before it causes major structural damage. We remove the damaged wood, treat the area, and install new weather-resistant materials.",
    icon: Home,
    url: "/handyman-services/exterior-carpentry/"
  },
  {
    title: "Siding & Fence Repair",
    desc: "A damaged piece of siding or a broken fence panel compromises both the look and weather-resistance of your property. We repair and replace damaged sections of vinyl or wood siding, and repair wooden fences — replacing broken pickets, resetting leaning posts, and fixing sagging gates.",
    icon: Wrench,
    url: "/handyman-services/home-repair-services/"
  },
];

const fixtureServices = [
  {
    title: "Ceiling Fan & Light Fixture Installation",
    desc: "Updating your lighting modernizes a room, but dealing with wiring is dangerous without the right knowledge. We safely install ceiling fans, chandeliers, vanity lights, and exterior fixtures. We ensure heavy ceiling fans are mounted to proper fan-rated support boxes — perfectly balanced and completely safe.",
    icon: Lightbulb,
    url: "/handyman-services/ceiling-fan-installation/"
  },
  {
    title: "TV Mounting & Wire Hiding",
    desc: "A flat-screen looks best when it's securely mounted with no visible wires. We professionally mount televisions of all sizes, anchored directly to wall studs for maximum security. We can also run cables behind the drywall for a clean, modern, wireless look.",
    icon: Tv,
    url: "/handyman-services/home-repair-services/"
  },
  {
    title: "Furniture Assembly & Heavy Hanging",
    desc: "Don't spend your weekend deciphering confusing instruction manuals. We quickly and correctly assemble all types of flat-pack furniture — dressers, bed frames, complex shelving units. We also safely hang heavy mirrors, artwork, and custom shelving, perfectly level and securely anchored.",
    icon: ClipboardList,
    url: "/handyman-services/home-repair-services/"
  },
  {
    title: "Senior Accessibility Upgrades",
    desc: "Grab bars, railings, ramps, lever handles, and safety upgrades for aging-in-place. Respectful, no-pressure service designed to help you or a loved one stay safe and independent at home.",
    icon: Accessibility,
    url: "/handyman-services/senior-accessibility-upgrades/"
  },
];

const serviceAreas = [
  { city: "Edwardsville, IL", desc: "Premium interior updates and deck restorations", link: "/service-areas/edwardsville-handyman-services/" },
  { city: "Belleville, IL", desc: "Historic home maintenance and plaster repair", link: "/service-areas/belleville-handyman-services/" },
  { city: "O'Fallon, IL", desc: "Honey-do lists and fixture upgrades for busy professionals", link: "/service-areas/ofallon-il-handyman/" },
  { city: "Collinsville, IL", desc: "Established Metro East community with mature homes", link: "/service-areas/collinsville-handyman-services/" },
  { city: "Glen Carbon, IL", desc: "Quiet residential neighborhoods near Edwardsville", link: "/service-areas/glen-carbon-handyman-services/" },
  { city: "St. Louis, MO", desc: "Cross-river reliability for St. Louis homeowners", link: "/handyman-services-st-louis/" },
  { city: "Swansea, IL", desc: "Post-war neighborhoods and exterior upkeep", link: "/service-areas/swansea-il-handyman/" },
  { city: "Shiloh, IL", desc: "Newer subdivisions near Frank Scott Pkwy", link: "/service-areas/shiloh-il-handyman/" },
  { city: "Fairview Heights, IL", desc: "Ranch homes and older-home maintenance", link: "/service-areas/fairview-heights-il-handyman/" },
];

const doesNotDo = [
  { title: "Major Structural Additions", desc: "We do not build new rooms, pour foundations, or handle projects requiring massive architectural engineering. You need a general contractor for those jobs." },
  { title: "Full Roof Replacements", desc: "While we can patch a small leak or replace a few missing shingles, we do not tear off and replace entire roofs." },
  { title: "Major Electrical Panel Upgrades", desc: "We can safely swap a fixture or install a fan, but if you need a new 200-amp service panel or your entire house rewired, you need a licensed electrical contractor." },
  { title: "Emergency 2 AM Plumbing", desc: "We can replace a vanity or fix a dripping faucet, but if a pipe bursts in the middle of the night, you need an emergency plumber." },
];

export default function Services() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">St. Louis & Metro East Illinois</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Handyman & Home Repair Services
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Hero Handyman Pro specializes in the 2–3 day projects that are too complex for a weekend DIY attempt but don't require the massive disruption of a general contractor. We answer the phone, show up on time, and deliver results you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Get a Free Quote
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Star, text: "4.9★ Rated" },
              { icon: Check, text: "Licensed & Insured" },
              { icon: Phone, text: "We Answer the Phone" },
              { icon: Check, text: "Upfront Pricing" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm font-medium">
                <badge.icon className="h-4 w-4 text-[#ff5b00]" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Repairs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Interior Repairs & Updates</h2>
            <p className="text-[#4b5563] text-lg max-w-3xl">
              The interior of your home is where you live your life, and it takes a beating. We handle the repairs and updates that restore the beauty and functionality of your living spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {interiorServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={i} href={service.url}>
                  <div className="bg-[#f9fafb] rounded-2xl p-8 border-2 border-[#e5e7eb] hover:border-[#ff5b00] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="bg-[#ff5b00]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#ff5b00]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1220] mb-3">{service.title}</h3>
                    <p className="text-[#4b5563] text-sm flex-grow">{service.desc}</p>
                    <div className="text-[#ff5b00] font-semibold flex items-center gap-2 mt-4 text-sm">Learn More →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exterior & Deck */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Exterior & Deck Maintenance</h2>
            <p className="text-[#4b5563] text-lg max-w-3xl">
              The weather in the St. Louis Metro East is notoriously harsh. We provide the exterior maintenance services necessary to protect your home from the elements and keep your outdoor living spaces safe and inviting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {exteriorServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={i} href={service.url}>
                  <div className="bg-white rounded-2xl p-8 border-2 border-[#e5e7eb] hover:border-[#ff5b00] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="bg-[#ff5b00]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#ff5b00]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1220] mb-3">{service.title}</h3>
                    <p className="text-[#4b5563] text-sm flex-grow">{service.desc}</p>
                    <div className="text-[#ff5b00] font-semibold flex items-center gap-2 mt-4 text-sm">Learn More →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fixture Installation & Honey-Do */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Fixture Installation & The "Honey-Do" List</h2>
            <p className="text-[#4b5563] text-lg max-w-3xl">
              Sometimes you just need a professional to handle the tasks that require specialized tools, tall ladders, or a bit of electrical knowledge. We're happy to tackle your accumulated list of smaller projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fixtureServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={i} href={service.url}>
                  <div className="bg-[#f9fafb] rounded-2xl p-6 border-2 border-[#e5e7eb] hover:border-[#ff5b00] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="bg-[#ff5b00]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#ff5b00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0b1220] mb-2">{service.title}</h3>
                    <p className="text-[#4b5563] text-sm flex-grow">{service.desc}</p>
                    <div className="text-[#ff5b00] font-semibold flex items-center gap-2 mt-4 text-sm">Learn More →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">What We Don't Do (And Why)</h2>
              <p className="text-[#4b5563] text-lg mb-6">
                Part of being a reliable professional is knowing your limits. We are incredibly good at what we do, but we do not do everything. By clearly defining what we don't do, we ensure that we only take on projects where we can guarantee a flawless result.
              </p>
              <p className="text-[#4b5563]">
                If you contact us with a project that falls outside our scope, we will tell you immediately and point you toward the right professional. We will never waste your time or attempt a job we are not perfectly equipped to handle.
              </p>
            </div>
            <div className="space-y-4">
              {doesNotDo.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#e5e7eb] flex gap-4">
                  <div className="bg-red-50 rounded-full p-2 h-fit mt-0.5 flex-shrink-0">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1220] mb-1">{item.title}</h3>
                    <p className="text-[#4b5563] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Serving Metro East & St. Louis</h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro is proud to serve homeowners throughout the region. Click your city to see local service details, recent projects, and community-specific expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.link}>
                <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#0b1220] mb-1">{area.city}</h3>
                      <p className="text-[#6b7280] text-sm">{area.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Hero Handyman Pro Difference
          </h2>
          <p className="text-[#e5e7eb] text-lg max-w-2xl mx-auto mb-8">
            You deserve a handyman service that respects your time, communicates clearly, and delivers exceptional results. Whether you need a single ceiling fan installed, a comprehensive deck restoration, or a full day tackling your accumulated to-do list — we are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Get a Free Quote
              </Button>
            </Link>
          </div>
          <p className="text-[#9ca3af] text-sm mt-6">We answer the phone. We show up on time. We guarantee our work.</p>
        </div>
      </section>

      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Hero Handyman Pro",
        "url": "https://herohandymanpro.com/services/",
        "telephone": "+1-800-741-6056",
        "description": "Hero Handyman Pro provides professional handyman services in St. Louis and Metro East Illinois, specializing in drywall repair, deck restoration, door installation, carpentry, ceiling fan installation, and general home repairs.",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "O'Fallon",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
          { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
          { "@type": "City", "name": "Belleville", "addressRegion": "IL" },
          { "@type": "City", "name": "Collinsville", "addressRegion": "IL" },
          { "@type": "City", "name": "Glen Carbon", "addressRegion": "IL" },
          { "@type": "City", "name": "Swansea", "addressRegion": "IL" },
          { "@type": "City", "name": "Shiloh", "addressRegion": "IL" },
          { "@type": "City", "name": "Fairview Heights", "addressRegion": "IL" },
          { "@type": "City", "name": "St. Louis", "addressRegion": "MO" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Handyman Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair and Patching" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Repair and Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Repair and Restoration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Rot Repair and Exterior Carpentry" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceiling Fan and Light Fixture Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TV Mounting and Wire Hiding" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trim, Baseboard, and Molding Upgrades" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom and Laundry Room Refreshes" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Assembly and Heavy Hanging" } }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5"
        }
      })}} />
    </div>
  );
}
