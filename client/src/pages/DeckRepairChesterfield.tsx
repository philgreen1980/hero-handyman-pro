import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairChesterfield() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">Chesterfield, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair Services in Chesterfield MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Restore your Chesterfield deck to safe, solid condition. We replace rotted boards, tighten loose railings, and fix structural issues — without unnecessary full replacements.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Serving Chesterfield MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Deck Repair Services We Provide in Chesterfield
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Chesterfield's Missouri River valley location means decks here face significant humidity swings and freeze-thaw cycles throughout the year. Many decks built in the 1990s and early 2000s are now showing their age — boards cupping, railings wobbling, and ledger connections weakening. We assess and repair what needs fixing rather than pushing unnecessary full replacements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Replacing Deck Boards",
                desc: "Chesterfield's hot, humid summers and cold winters are hard on pressure-treated lumber. Boards that are cracked, cupped, or showing rot need replacement before they become a safety hazard. We match existing board dimensions and spacing for a consistent look.",
                items: ["Individual board replacement", "Full deck surface re-decking", "Composite and pressure-treated options", "Hidden fastener installation"]
              },
              {
                title: "Repairing Loose Railings",
                desc: "Railing failures are among the most common — and most dangerous — deck issues. Posts that wobble, balusters that have shifted, and top rails that flex are all code violations and liability risks. We re-secure, replace, or rebuild railing sections to meet current safety standards.",
                items: ["Post base replacement and re-anchoring", "Baluster tightening and replacement", "Top and bottom rail repair", "Cable and composite railing repairs"]
              },
              {
                title: "Fixing Structural Deck Damage",
                desc: "The structure beneath the deck surface — joists, beams, ledger boards, and footings — is what keeps the whole system safe. Rot in these members is common in Chesterfield's older decks and must be addressed before surface repairs make sense.",
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

      {/* Local Context + CTA */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Trusted Deck Repair in Chesterfield
              </h2>
              <p className="text-gray-600 mb-4">
                Chesterfield homeowners invest significantly in their outdoor living spaces. A deck that's unsafe or visually deteriorated affects both your enjoyment and your home's resale value. We've repaired decks throughout Chesterfield Valley, near Clarkson Road, and in the established neighborhoods off Baxter Road.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach is always honest: we tell you what needs repair now, what can wait, and what's cosmetic. We don't push full replacements when targeted repairs are the right answer.
              </p>
              <div className="space-y-3">
                {[
                  "Free deck assessment with every repair quote",
                  "Honest recommendations — repair vs. replace",
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
                Call Hero Handyman Pro for deck repair in Chesterfield MO. We provide free estimates and can typically schedule within 1–2 business days.
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

      {/* Rot vs. Cosmetic Damage Section */}
      <section className="py-16 px-6 bg-amber-50 border-y border-amber-100">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">The Most Important Question in Deck Repair</span>
              <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">Rot vs. Cosmetic Damage — Know the Difference</h2>
              <p className="text-gray-700 mb-4">
                Not all deck damage is the same. A cracked board or faded finish is cosmetic — it looks bad but doesn't affect safety. Rot in the structural framing is a different problem entirely. Treating a structural issue as cosmetic is how decks fail.
              </p>
              <p className="text-gray-700 mb-4">
                Chesterfield's Missouri climate — hot, humid summers and cold winters — is hard on deck wood. Moisture penetrates end grain, fastener holes, and any spot where the finish has worn. Over time, that moisture causes wood fibers to break down. The challenge is that early rot is often hidden beneath the deck surface or inside structural members where it's not visible without probing.
              </p>
              <p className="text-gray-700">
                Chesterfield homeowners expect quality work. A surface repair that ignores underlying structural rot is a short-term fix that creates a larger problem. We assess both the surface and the structure, give you an honest breakdown of what's cosmetic and what's structural, and recommend only the repairs that are actually needed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How We Categorize Deck Damage</h3>
              {[
                {
                  name: "Surface Cosmetic",
                  badge: "Low Urgency",
                  badgeColor: "bg-green-100 text-green-800",
                  desc: "Faded or graying wood, minor surface cracks, loose fasteners, and worn finish. These don't affect safety but accelerate deterioration if left untreated. Cleaning, sanding, and re-sealing or staining is usually the right fix for Chesterfield's well-maintained decks."
                },
                {
                  name: "Board-Level Rot",
                  badge: "Moderate Urgency",
                  badgeColor: "bg-yellow-100 text-yellow-800",
                  desc: "Soft, spongy, or discolored deck boards that flex underfoot. The rot is in the surface boards but hasn't reached the framing. Individual board replacement stops the spread and restores a safe walking surface with a finish that matches your existing deck."
                },
                {
                  name: "Structural Rot",
                  badge: "High Urgency",
                  badgeColor: "bg-red-100 text-red-800",
                  desc: "Rot in joists, beams, ledger boards, or post bases. This affects the load-bearing capacity of the deck. Structural rot must be addressed before any surface repairs make sense — and before the deck is used. Common in Chesterfield's older decks near Wildhorse Creek and off Olive Boulevard."
                },
                {
                  name: "Ledger & Connection Rot",
                  badge: "Critical",
                  badgeColor: "bg-red-200 text-red-900",
                  desc: "The ledger board attaches the deck to your house. Rot here is the leading cause of deck collapses. We inspect every ledger connection as part of our assessment — particularly on Chesterfield homes where original construction may not have included proper flashing at the ledger."
                },
              ].map((damage, i) => (
                <div key={i} className="bg-white rounded-xl border border-amber-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">{damage.name}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${damage.badgeColor}`}>{damage.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{damage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Explore more Hero Handyman Pro services in Chesterfield, or visit our{" "}
            <Link href="/handyman-chesterfield-mo" className="text-orange-600 hover:underline font-medium">Chesterfield MO handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair Chesterfield", href: "/drywall-repair-chesterfield-mo" },
              { label: "Door Installation Chesterfield", href: "/door-installation-chesterfield-mo" },
              { label: "Carpentry Chesterfield", href: "/carpentry-services-chesterfield-mo" },
              { label: "All Services", href: "/handyman-services/" },
              { label: "Service Areas", href: "/service-areas/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-orange-200 text-orange-700 hover:bg-orange-50 text-sm">
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
