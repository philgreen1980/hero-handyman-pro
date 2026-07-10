import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Hammer, Home as HomeIcon, DoorOpen, Layers, Wrench, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function HandymanServices() {
  const seo = useSeoRoute();  const primaryServices = [
    {
      icon: <Hammer className="w-7 h-7 text-teal-700" />,
      title: "Deck Repair",
      desc: "Board replacement, railing repair, structural repair, stair repair, ledger board work, and deck maintenance. We fix sagging, rotted, and unsafe decks throughout Metro East and West County.",
      href: "/deck-repair",
      cta: "Deck repair services →"
    },
    {
      icon: <Layers className="w-7 h-7 text-teal-700" />,
      title: "Drywall Repair",
      desc: "Holes, cracks, water damage, and texture matching. From doorknob holes to full panel replacement, we patch and finish drywall so the repair is invisible.",
      href: "/drywall-repair",
      cta: "Drywall repair services →"
    },
    {
      icon: <DoorOpen className="w-7 h-7 text-teal-700" />,
      title: "Door Installation & Repair",
      desc: "Interior doors, exterior doors, storm doors, sliding doors, and door frame repair. Properly shimmed, leveled, and weatherstripped for smooth operation through every season.",
      href: "/door-installation",
      cta: "Door installation services →"
    },
    {
      icon: <HomeIcon className="w-7 h-7 text-teal-700" />,
      title: "Carpentry Services",
      desc: "Trim repair, exterior carpentry, framing repairs, cabinet adjustments, custom built-ins, and rot repair. Precision cuts, tight joints, and materials that last.",
      href: "/carpentry-services",
      cta: "Carpentry services →"
    },
    {
      icon: <Wrench className="w-7 h-7 text-teal-700" />,
      title: "General Handyman",
      desc: "Caulking, weatherstripping, minor plumbing fixes, toilet repairs, punch lists, and the odd jobs that pile up. If it needs fixing around the house, we handle it.",
      href: "/handyman-services/general-handyman/",
      cta: "General handyman →"
    },
    {
      icon: <Zap className="w-7 h-7 text-teal-700" />,
      title: "Ceiling Fan & Fixture Installation",
      desc: "Ceiling fan installation and replacement, light fixture swaps, and basic electrical fixture work. Fast, clean, and done right.",
      href: "/handyman-services/ceiling-fan-installation/",
      cta: "Fixture installation →"
    },
  ];

  const additionalServices = [
    { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
    { label: "Faucet & Toilet Repair", href: "/handyman-services/faucet-install-and-repair/" },
    { label: "Porch Repair", href: "/handyman-services/porch-repair/" },
    { label: "Deck Construction", href: "/handyman-services/deck-construction/" },
    { label: "Pressure Washing", href: "/handyman-services/pressure-washing/" },
    { label: "Gutter Cleaning", href: "/handyman-services/gutter-cleaning/" },
    { label: "Home Sale Punch Lists", href: "/handyman-services/" },
    { label: "Window Repair", href: "/handyman-services/" },
  ];

  const processSteps = [
    { number: "1", title: "Request an estimate", desc: "Tell us about your project and we'll provide a clear, upfront quote." },
    { number: "2", title: "Approve the plan", desc: "Review the scope and pricing before we start any work." },
    { number: "3", title: "Professional repairs", desc: "Phil completes your project efficiently, cleanly, and correctly." },
    { number: "4", title: "Final walkthrough", desc: "We ensure you're satisfied before we consider the job done." }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Greater St. Louis & Metro East Illinois</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Handyman Services in St. Louis & Metro East
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Hero Handyman Pro provides professional handyman services across St. Louis, MO and Metro East IL — including drywall repair, door repair, deck repair, carpentry, and small home projects. Same-day and next-day availability. Licensed &amp; insured.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold">
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Core Handyman Services</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            From deck repairs and drywall patches to door installations and custom carpentry — we handle the projects that make your home safer, more functional, and better looking.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-pointer group h-full flex flex-col">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-800 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{service.desc}</p>
                  <span className="text-sm font-semibold text-teal-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Near You Section — Internal Links to City-Specific Pages */}
      <section className="py-10 px-6 bg-teal-50 border-y border-teal-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-xl font-bold mb-2 text-teal-900">Find Local Handyman Services Near You</h2>
          <p className="text-teal-800 text-sm mb-5 max-w-2xl">
            We serve homeowners throughout St. Louis, MO and Metro East IL. Find the right service for your area, or explore our <Link href="/handyman-services/" className="text-teal-700 hover:underline font-semibold">home repair packages</Link> for bundled savings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-edwardsville-il">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Drywall repair in Edwardsville
              </span>
            </Link>
            <Link href="/door-repair-edwardsville-il">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Door repair services near you
              </span>
            </Link>
            <Link href="/deck-repair-edwardsville-il">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Deck repair near you
              </span>
            </Link>
            <Link href="/service-areas/collinsville-handyman-services/">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Handyman services in Collinsville
              </span>
            </Link>
            <Link href="/handyman-near-me/">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Handyman near me
              </span>
            </Link>
            <Link href="/gbp/edwardsville-il/">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                Edwardsville IL handyman
              </span>
            </Link>
            <Link href="/gbp/ofallon-il/">
              <span className="inline-block bg-white border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                O'Fallon IL handyman
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Additional Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {additionalServices.map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-all cursor-pointer group">
                  <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-teal-800">{service.label}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Don't see your project? <a href="tel:800-741-6056" className="text-teal-700 hover:underline font-medium">Call 800-741-6056</a> — chances are we can help.
          </p>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                We're a local handyman service based in the Metro East — not a national franchise. Phil, the owner, does the work himself. That means you get consistent quality, someone who stands behind every job with his name on it, and no strangers in your home.
              </p>
              <div className="space-y-4">
                {[
                  { title: "No Subcontractors", desc: "Phil does the work himself — consistent quality, no surprises." },
                  { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees." },
                  { title: "Same-Day Availability", desc: "Urgent repairs? We offer same-day and next-day appointments." },
                  { title: "Licensed & Insured", desc: "Fully insured for your protection and peace of mind." },
                  { title: "30+ Years Experience", desc: "Hundreds of homes across Metro East and West County." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-6">Our Simple Process</h3>
              <div className="space-y-5">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{step.title}</div>
                      <div className="text-gray-600 text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-12 px-6 bg-teal-50 border-y border-teal-100">
        <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">See What Our Customers Say</h3>
            <p className="text-gray-600 text-sm">Authentic reviews from homeowners who trusted us with their projects.</p>
          </div>
          <Link href="/reviews/">
            <Button variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-6 whitespace-nowrap">
              <Star className="w-4 h-4 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="font-semibold text-gray-800 mb-4 text-sm">Explore by Service</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/handyman-services/deck-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Deck Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/drywall-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/door-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/carpentry-services/"><span className="text-teal-700 hover:underline cursor-pointer">Carpentry Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-near-me/"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Near Me</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Service Packages</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair-edwardsville-il"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair Edwardsville IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-chesterfield-mo"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Chesterfield MO</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">Service Areas</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/"><span className="text-teal-700 hover:underline cursor-pointer">Hero Handyman Pro Home</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Your Home Repairs Done?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for professional handyman services across Greater St. Louis and Metro East Illinois. Same-day and next-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold">
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 rounded-full px-8 py-6 text-lg font-bold transition-colors">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Speakable Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Handyman Services in Edwardsville & St. Louis | Small Jobs Welcome",
        "url": "https://herohandymanpro.com/handyman-services/",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2"]
        },
        "description": "Professional handyman services including drywall, doors, carpentry, deck repair, and home maintenance. Small jobs welcome. Serving St. Louis MO, Metro East Illinois, Ballwin, Chesterfield, O'Fallon IL, and Edwardsville IL."
      })}} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://herohandymanpro.com/" },
          { "@type": "ListItem", "position": 2, "name": "Handyman Services", "item": "https://herohandymanpro.com/handyman-services/" }
        ]
      })}} />
    </div>
  );
}
