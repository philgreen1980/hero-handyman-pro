import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DeckRepairOFallonMO() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Deck Repair O'Fallon MO | Deck Boards, Railings & Structural Repairs"
        description="Expert deck repair in O'Fallon MO. Replacing deck boards, repairing loose railings, fixing structural damage, and deck maintenance. Call 800-741-6056."
        canonicalUrl="https://herohandymanpro.com/deck-repair-ofallon-mo"
      />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">O'Fallon, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair Services in O'Fallon MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Restore your O'Fallon MO deck to safe, solid condition. We replace rotted boards, tighten loose railings, and fix structural issues without unnecessary full replacements.
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
            Deck Repair Services We Provide in O'Fallon MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            O'Fallon MO's location in St. Charles County means decks here face significant humidity swings and freeze-thaw cycles throughout the year. Many decks built in the early 2000s are now showing their age with boards cupping, railings wobbling, and ledger connections weakening. We assess and repair what needs fixing rather than pushing unnecessary full replacements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Replacing Deck Boards",
                desc: "O'Fallon's hot, humid summers and cold winters are hard on pressure-treated lumber. Boards that are cracked, cupped, or showing rot need replacement before they become a safety hazard. We match existing board dimensions and spacing for a consistent look.",
                items: ["Individual board replacement", "Full deck surface re-decking", "Composite and pressure-treated options", "Hidden fastener installation"]
              },
              {
                title: "Repairing Loose Railings",
                desc: "Railing failures are among the most common and most dangerous deck issues. Posts that wobble, balusters that have shifted, and top rails that flex are code violations and liability risks. We re-secure, replace, or rebuild railing sections to meet current safety standards.",
                items: ["Post base replacement and re-anchoring", "Baluster tightening and replacement", "Top and bottom rail repair", "Cable and composite railing repairs"]
              },
              {
                title: "Fixing Structural Deck Damage",
                desc: "The structure beneath the deck surface including joists, beams, ledger boards, and footings is what keeps the whole system safe. Rot in these members is common in O'Fallon's older decks and must be addressed before surface repairs make sense.",
                items: ["Ledger board inspection and replacement", "Joist sistering and reinforcement", "Beam and post rot repair", "Footing assessment and stabilization"]
              },
              {
                title: "Deck Maintenance",
                desc: "Preventive maintenance extends deck life significantly. Annual inspections catch small problems before they become expensive repairs. We offer thorough deck assessments that identify issues early and provide honest recommendations.",
                items: ["Annual deck safety inspections", "Fastener tightening and replacement", "Stair tread and riser repair", "Caulking and flashing inspection"]
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
                Trusted Deck Repair in O'Fallon MO
              </h2>
              <p className="text-gray-600 mb-4">
                O'Fallon homeowners in Winghaven, Hawk Ridge, Pheasant Point, and throughout St. Charles County trust Hero Handyman Pro for deck repairs that are safe, solid, and built to last. Our approach is always honest: we tell you what needs repair now, what can wait, and what is cosmetic.
              </p>
              <p className="text-gray-600 mb-6">
                We do not push full replacements when targeted repairs are the right answer. Free deck assessment with every repair quote.
              </p>
              <div className="space-y-3">
                {[
                  "Free deck assessment with every repair quote",
                  "Honest recommendations on repair vs. replace",
                  "Work meets current Missouri deck codes",
                  "Experienced with all deck materials and ages"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Schedule Your Deck Assessment</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for deck repair in O'Fallon MO. We provide free estimates and can typically schedule within 1 to 2 business days.
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
              { title: "Drywall Repair", href: "/drywall-repair-ofallon-mo" },
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
