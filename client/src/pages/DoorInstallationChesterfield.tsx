import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallationChesterfield() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Chesterfield, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation & Replacement in Chesterfield MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional door installation for Chesterfield homes. Interior doors, exterior entry doors, storm doors, and door frame repairs — installed plumb, sealed tight, and operating smoothly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Serving Chesterfield MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Door Installation Services in Chesterfield MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Chesterfield's newer subdivisions and established neighborhoods alike have doors that eventually need replacement — whether from age, storm damage, or a simple upgrade. Proper installation is critical: a door that isn't plumb will bind in summer humidity, draft in winter, and wear out hardware prematurely. We install doors correctly the first time.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Interior Doors",
                desc: "Hollow-core doors in Chesterfield's newer homes often need replacement after 15–20 years. We install solid-core upgrades that reduce sound transmission between rooms, improve privacy, and add a more substantial feel. We handle pre-hung units and slab replacements in existing frames.",
                items: ["Hollow-core to solid-core upgrades", "Pre-hung door installation", "Slab replacement in existing frames", "Bifold and pocket door installation"]
              },
              {
                title: "Exterior Doors",
                desc: "Chesterfield's temperature extremes — from 100°F summers to sub-zero winters — demand a properly sealed exterior door. An entry door that's out of plumb or poorly weatherstripped drives up energy costs and creates security vulnerabilities. We install and align exterior doors to perform through all seasons.",
                items: ["Entry door replacement and installation", "Door plumb and level alignment", "Weatherstripping and threshold sealing", "Deadbolt and hardware installation"]
              },
              {
                title: "Storm Doors",
                desc: "Storm doors add a layer of protection to exterior entries, improve energy efficiency, and extend the life of your primary door. We install storm doors on all door sizes and configurations, including non-standard openings common in Chesterfield's custom-built homes.",
                items: ["Full-view and ventilating storm doors", "Retractable screen installation", "Non-standard size fitting", "Closer and latch adjustment"]
              },
              {
                title: "Door Frame Repair",
                desc: "A damaged door frame — from forced entry, water infiltration, or settling — compromises both security and weatherproofing. We repair or replace door frames, including the rough opening when needed, and ensure the new installation is structurally sound.",
                items: ["Split and cracked frame repair", "Water-damaged frame replacement", "Strike plate and jamb reinforcement", "Rough opening adjustment for new doors"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context + CTA */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Door Installation Done Right in Chesterfield
              </h2>
              <p className="text-gray-600 mb-4">
                We've installed doors in homes throughout Chesterfield — from the custom builds near Wildhorse Creek to the townhomes in Chesterfield Valley. Every installation includes proper shimming, plumb alignment, hardware installation, and weatherstripping.
              </p>
              <p className="text-gray-600 mb-6">
                We work with doors you supply or can recommend suppliers for your specific needs. We don't upsell unnecessary products — just honest installation work done to a high standard.
              </p>
              <div className="space-y-3">
                {[
                  "All doors installed plumb and level",
                  "Hardware and weatherstripping included",
                  "Same-day availability for urgent replacements",
                  "Clean installation — no mess left behind"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get a Free Door Installation Quote</h3>
              <p className="text-blue-100 mb-6">
                Call Hero Handyman Pro for door installation in Chesterfield MO. We provide free estimates and respond quickly to all inquiries.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Request a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Explore more Hero Handyman Pro services in Chesterfield, or visit our{" "}
            <Link href="/handyman-chesterfield-mo" className="text-blue-600 hover:underline font-medium">Chesterfield MO handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair Chesterfield", href: "/drywall-repair-chesterfield-mo" },
              { label: "Deck Repair Chesterfield", href: "/deck-repair-chesterfield-mo" },
              { label: "Carpentry Chesterfield", href: "/carpentry-services-chesterfield-mo" },
              { label: "All Services", href: "/services/" },
              { label: "Service Areas", href: "/service-areas/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
