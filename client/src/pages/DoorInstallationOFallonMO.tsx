import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function DoorInstallationOFallonMO() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">O'Fallon, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation Services in O'Fallon MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Expert door installation for O'Fallon MO homeowners. Entry doors, interior doors, storm doors, and patio doors installed correctly the first time for a perfect fit, proper seal, and smooth operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Free Estimates</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Serving O'Fallon MO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Door Installation Services We Provide in O'Fallon MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            O'Fallon MO's temperature extremes from hot, humid summers to cold Missouri winters put significant stress on doors and frames. Doors that stick, gap, or do not seal properly waste energy and create security vulnerabilities. We install all types of doors with precision, ensuring proper fit, alignment, and weatherproofing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Entry Door Replacement",
                desc: "Your front door is the first thing visitors see and your home's primary security barrier. We replace worn, damaged, or outdated entry doors with new pre-hung units, ensuring proper shimming, leveling, and weatherstripping for a tight seal against O'Fallon's weather extremes.",
                items: ["Pre-hung entry door installation", "Steel, fiberglass, and wood door options", "Deadbolt and lockset installation", "Weatherstripping and threshold replacement"]
              },
              {
                title: "Interior Door Installation",
                desc: "Interior doors in O'Fallon's newer homes sometimes warp or bind as the house settles. We hang new interior doors from standard passage doors to closet bifolds and barn doors with proper shimming and hardware installation for smooth, quiet operation.",
                items: ["Passage door installation and hanging", "Closet door and bifold installation", "Barn door and sliding door hardware", "Pocket door installation and repair"]
              },
              {
                title: "Storm Door Installation",
                desc: "Storm doors add a layer of insulation and protection to O'Fallon homes, reducing energy costs and extending the life of your entry door. We install full-view and ventilating storm doors with proper alignment so they open and close smoothly in all seasons.",
                items: ["Full-view storm door installation", "Ventilating and screen door installation", "Closer adjustment and alignment", "Frame and trim preparation"]
              },
              {
                title: "Patio and Sliding Door Installation",
                desc: "Patio doors that do not slide smoothly or seal properly are a common complaint in O'Fallon's older homes. We install new sliding glass doors and French doors with proper track alignment, weatherstripping, and security hardware.",
                items: ["Sliding glass door replacement", "French door installation", "Track and roller replacement", "Security bar and lock installation"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Trusted Door Installation in O'Fallon MO
              </h2>
              <p className="text-gray-600 mb-4">
                O'Fallon homeowners throughout Winghaven, Hawk Ridge, and St. Charles County trust Hero Handyman Pro for door installations that fit perfectly and last. A door that is improperly installed will bind, gap, and fail prematurely. We do it right the first time.
              </p>
              <p className="text-gray-600 mb-6">
                We work with doors you supply or can help you select the right door for your home's style and budget. Our installation includes all hardware, weatherstripping, and trim work for a complete, finished result.
              </p>
              <div className="space-y-3">
                {[
                  "Precise shimming and leveling for perfect fit",
                  "All hardware and weatherstripping included",
                  "Clean installation with trim restoration",
                  "Serving all O'Fallon MO neighborhoods"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Schedule Your Door Installation</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for door installation in O'Fallon MO. We provide free estimates and can typically schedule within 1 to 2 business days.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
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

      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">More Handyman Services in O'Fallon MO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Door Repair", href: "/door-repair-ofallon-mo" },
              { title: "Drywall Repair", href: "/drywall-repair-ofallon-mo" },
              { title: "Deck Repair", href: "/deck-repair-ofallon-mo" },
              { title: "Carpentry Services", href: "/carpentry-services-ofallon-mo" },
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer">
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <span className="text-orange-600 text-sm font-medium">O'Fallon MO</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/handyman-ofallon-mo">
              <Button variant="outline" className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-50">
                View All O'Fallon MO Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
