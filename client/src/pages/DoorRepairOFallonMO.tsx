import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorRepairOFallonMO() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Door Repair O'Fallon MO | Sticking Doors, Frame Repair & Hardware"
        description="Expert door repair in O'Fallon MO. Fix sticking doors, broken hardware, damaged frames, and weatherstripping. Fast, reliable service. Call 800-741-6056."
        canonicalUrl="https://herohandymanpro.com/door-repair-ofallon-mo"
      />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">O'Fallon, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair Services in O'Fallon MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Fast, reliable door repair for O'Fallon MO homeowners. Sticking doors, broken hardware, damaged frames, and failed weatherstripping diagnosed and fixed right.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
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
            Door Repair Services We Provide in O'Fallon MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            O'Fallon MO's seasonal temperature swings cause door frames to expand and contract, leading to doors that stick in summer and gap in winter. Foundation settling in newer subdivisions can also shift door frames out of square. We diagnose the actual cause of door problems and fix them properly, not just plane the edge and call it done.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sticking Door Repair",
                desc: "A door that sticks or drags is usually caused by frame movement, hinge issues, or moisture swelling. We identify the root cause whether it is a hinge that needs adjustment, a frame that is racked, or wood that has swollen, and fix it properly so the door operates smoothly year-round.",
                items: ["Hinge adjustment and tightening", "Door planing for proper clearance", "Frame squaring and shimming", "Seasonal swelling diagnosis and repair"]
              },
              {
                title: "Door Hardware Repair",
                desc: "Broken handles, worn locksets, and failing hinges are common in O'Fallon's busy households. We repair or replace door hardware from passage sets and deadbolts to heavy-duty hinges and closers, ensuring smooth operation and proper security.",
                items: ["Lockset and deadbolt repair or replacement", "Door handle and knob replacement", "Hinge replacement and reinforcement", "Door closer adjustment and replacement"]
              },
              {
                title: "Door Frame Repair",
                desc: "Damaged door frames from kick-ins, moisture rot, or impact damage compromise both security and appearance. We repair split frames, replace rotted sections, and reinforce strike plate areas to restore full structural integrity.",
                items: ["Split and cracked frame repair", "Rotted frame section replacement", "Strike plate reinforcement", "Frame and trim painting prep"]
              },
              {
                title: "Weatherstripping Replacement",
                desc: "Failed weatherstripping is one of the most common causes of drafts and energy loss in O'Fallon homes. We replace door sweeps, compression strips, and foam seals to restore a tight seal against Missouri's weather extremes.",
                items: ["Door sweep replacement", "Compression weatherstrip installation", "Threshold seal replacement", "Foam and bulb seal installation"]
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
                Trusted Door Repair in O'Fallon MO
              </h2>
              <p className="text-gray-600 mb-4">
                O'Fallon homeowners throughout Winghaven, Hawk Ridge, Pheasant Point, and St. Charles County trust Hero Handyman Pro for door repairs that actually solve the problem. We do not just treat symptoms, we find the cause and fix it so the problem does not come back.
              </p>
              <p className="text-gray-600 mb-6">
                Whether it is a door that will not latch, a frame that has rotted, or weatherstripping that has failed, we diagnose accurately and repair efficiently. Most door repairs can be completed in a single visit.
              </p>
              <div className="space-y-3">
                {[
                  "Root cause diagnosis, not just symptom treatment",
                  "Most repairs completed in a single visit",
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
              <h3 className="text-2xl font-bold mb-3">Get Your Door Fixed Today</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for door repair in O'Fallon MO. We provide free estimates and can often schedule same-day or next-day service.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
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
              { title: "Door Installation", href: "/door-installation-ofallon-mo" },
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
