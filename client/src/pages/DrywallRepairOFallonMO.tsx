import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairOFallonMO() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">O'Fallon, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Drywall Repair Services in O'Fallon MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional drywall patching and repair for O'Fallon homeowners. We fix holes, water damage, cracks, and texture mismatches — leaving walls and ceilings looking like new.
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
            Drywall Repair Services We Provide in O'Fallon MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            O'Fallon MO is one of Missouri's fastest-growing cities, with thousands of homes built between 2000 and 2020. These newer homes commonly develop nail pops, settlement cracks around door frames, and holes from doorknobs or wall anchors. We handle all types of drywall repair with texture matching that makes the repair invisible.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Hole Patching",
                desc: "Whether it's a doorknob hole, a cable access cutout, or damage from a removed wall anchor, we patch holes of all sizes cleanly. Small holes get mesh patches; larger holes get proper backing and new drywall sections. We feather the compound and match your existing texture.",
                items: ["Small holes (under 6 inches)", "Medium holes (6 to 12 inches)", "Large section replacement", "Texture matching (orange peel, knockdown, smooth)"]
              },
              {
                title: "Water-Damaged Drywall",
                desc: "O'Fallon's newer homes sometimes develop water intrusion from HVAC condensation, roof leaks, or plumbing issues. Water-stained or softened drywall must be replaced — not just painted over. We remove the damaged section, verify the moisture source is resolved, and install new drywall with a seamless finish.",
                items: ["Water stain removal and replacement", "Ceiling drywall repair from roof leaks", "Bathroom and kitchen moisture damage", "Mold-resistant drywall installation"]
              },
              {
                title: "Ceiling Crack Repair",
                desc: "Settlement cracks along ceiling joints and at wall-ceiling intersections are common in O'Fallon homes as the structure adjusts over the first decade. We tape, mud, and retexture these cracks so they don't reappear.",
                items: ["Hairline crack filling and retexture", "Tape and mud joint repair", "Popcorn ceiling patch and blend", "Smooth ceiling restoration"]
              },
              {
                title: "Nail Pops and Blemishes",
                desc: "Nail pops are extremely common in O'Fallon's newer construction — as lumber dries and shrinks, fasteners push through the drywall surface. We reset or replace the fasteners, fill the dimples, and retexture so the surface is paint-ready.",
                items: ["Nail pop repair and retexture", "Screw dimple filling", "Corner bead repair and replacement", "Paint-ready surface preparation"]
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
                Trusted Drywall Repair in O'Fallon MO
              </h2>
              <p className="text-gray-600 mb-4">
                O'Fallon homeowners in Winghaven, Hawk Ridge, Pheasant Point, and throughout St. Charles County trust Hero Handyman Pro for drywall repairs that are invisible when finished. We don't just fill holes — we match your texture, prepare the surface for paint, and leave your walls looking like the damage never happened.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach is always honest: we assess the full scope of damage, explain what we'll do, and give you a clear price before starting. No surprises.
              </p>
              <div className="space-y-3">
                {[
                  "Texture matching for all common finishes",
                  "Paint-ready surface on every repair",
                  "Same-day and next-day availability",
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
              <h3 className="text-2xl font-bold mb-3">Get Your Drywall Repaired</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for drywall repair in O'Fallon MO. We provide free estimates and can typically schedule within 1 to 2 business days.
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
              { title: "Deck Repair", href: "/deck-repair-ofallon-mo" },
              { title: "Door Repair", href: "/door-repair-ofallon-mo" },
              { title: "Door Installation", href: "/door-installation-ofallon-mo" },
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
