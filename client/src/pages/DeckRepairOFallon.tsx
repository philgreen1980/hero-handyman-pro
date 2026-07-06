import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DeckRepairOFallon() {
  const seoData = {
    title: "Deck Repair Near Me | O'Fallon IL Deck Boards & Staining",
    description: "O'Fallon IL deck repair — board replacement, staining, sealing, rail repair & wood rot. Local handyman near you. Same-day available. Call 800-741-6056.",
    keywords: "deck repair O'Fallon IL, deck boards O'Fallon, railing repair O'Fallon, deck maintenance O'Fallon IL",
    canonicalUrl: "https://herohandymanpro.com/deck-repair-ofallon-il"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">O'Fallon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair Services in O'Fallon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional deck repairs for O'Fallon homeowners. Rotted boards, loose railings, structural damage, and seasonal maintenance — safe and solid results every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving O'Fallon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services in O'Fallon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            O'Fallon's hot summers and cold winters put decks through serious stress. Whether your deck needs a few boards replaced or a full structural assessment, Hero Handyman Pro has the experience to fix it right.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replacing Deck Boards */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Replacing Deck Boards</h3>
              <p className="text-gray-600 text-sm">
                Warped, cracked, or rotted deck boards are a safety hazard and an eyesore. We replace individual boards or entire deck surfaces using pressure-treated lumber or composite materials that stand up to O'Fallon's climate. Typical board replacement runs $15–$25 per linear foot depending on material.
              </p>
            </div>

            {/* Repairing Loose Railings */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Repairing Loose Railings</h3>
              <p className="text-gray-600 text-sm">
                Wobbly railings are a fall risk — especially for families with young children or elderly residents. We reinforce post bases, replace rotted balusters, and tighten connections throughout the railing system. O'Fallon building code requires railings on decks 30 inches or higher above grade.
              </p>
            </div>

            {/* Fixing Structural Deck Damage */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Fixing Structural Deck Damage</h3>
              <p className="text-gray-600 text-sm">
                Ledger board rot, failing joists, and compromised posts are serious structural issues. We assess the full deck frame, replace compromised structural members, and ensure your deck meets current load requirements. Many O'Fallon decks from the 1990s–2000s have aging ledger connections that need attention.
              </p>
            </div>

            {/* Deck Maintenance */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Deck Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Annual deck maintenance extends the life of your investment significantly. We inspect for rot, tighten hardware, re-secure loose boards, and identify issues before they become expensive repairs. Spring is the ideal time to schedule a deck inspection in O'Fallon after winter freeze-thaw cycles.
              </p>
            </div>

            {/* Stair Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Stair Repair & Replacement</h3>
              <p className="text-gray-600 text-sm">
                Deck stairs take heavy daily use and are often the first part of a deck to show wear. We repair or replace stringers, treads, and risers to restore safe, solid access to your deck. Proper stair pitch and tread depth are critical for safety and code compliance.
              </p>
            </div>

            {/* Rot Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wood Rot Repair</h3>
              <p className="text-gray-600 text-sm">
                O'Fallon's humid summers accelerate wood rot, especially where decking meets the house. We identify all rot-affected areas, remove compromised wood, treat the underlying structure, and replace with rot-resistant materials to prevent recurrence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why O'Fallon Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                We've repaired hundreds of decks across O'Fallon and the Metro East. Phil, the owner, personally handles every job — bringing 30+ years of carpentry experience to every deck repair, large or small.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Free Estimates", desc: "We assess your deck and provide a clear, itemized quote before any work begins." },
                  { title: "Structural Expertise", desc: "We identify hidden damage that cosmetic repairs miss — protecting your family and investment." },
                  { title: "Code Compliant", desc: "All repairs meet St. Clair County building codes and safety standards." },
                  { title: "Quality Materials", desc: "We use pressure-treated lumber and hardware rated for ground contact and exterior use." },
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
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Serving All of O'Fallon IL</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve homeowners throughout O'Fallon, including neighborhoods near Scott Air Force Base, Regency Park, Hartman Creek, Smiley Elementary area, and surrounding communities in St. Clair County.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Also serving Edwardsville, Belleville, Shiloh, Swansea, and the greater Metro East area.
              </p>
              <Link href="/gbp/ofallon">
                <span className="text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                  View our O'Fallon handyman services →
                </span>
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
                Not all deck damage is the same. A cracked board or faded finish is cosmetic — it looks bad but doesn't affect safety. Rot in the structural framing is a different problem entirely. Treating a structural issue as cosmetic is how decks collapse.
              </p>
              <p className="text-gray-700 mb-4">
                O'Fallon's humid summers and freeze-thaw winters are particularly hard on deck wood. Moisture gets into end grain, fastener holes, and any spot where the finish has worn away. Over time, that moisture causes wood fibers to break down — starting soft and spongy, then becoming structurally compromised. The problem is that early rot is often hidden under the surface or beneath the deck where it's not visible during a casual inspection.
              </p>
              <p className="text-gray-700">
                Hero Handyman Pro assesses both the surface and the structure before recommending any repair. We probe suspect boards, check ledger connections, inspect post bases, and look at joist ends — the spots where rot starts. You'll get an honest assessment of what's cosmetic, what's structural, and what it will cost to fix each.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How We Categorize Deck Damage</h3>
              {[
                {
                  name: "Surface Cosmetic",
                  badge: "Low Urgency",
                  badgeColor: "bg-green-100 text-green-800",
                  desc: "Faded or graying wood, minor surface cracks, loose fasteners, and worn finish. These don't affect safety but accelerate deterioration if left untreated. Cleaning, sanding, and re-sealing or staining is usually the right fix."
                },
                {
                  name: "Board-Level Rot",
                  badge: "Moderate Urgency",
                  badgeColor: "bg-yellow-100 text-yellow-800",
                  desc: "Soft, spongy, or discolored deck boards that flex underfoot. The rot is in the surface boards but hasn't reached the framing. Individual board replacement stops the spread and restores a safe walking surface."
                },
                {
                  name: "Structural Rot",
                  badge: "High Urgency",
                  badgeColor: "bg-red-100 text-red-800",
                  desc: "Rot in joists, beams, ledger boards, or post bases. This is the most serious category and affects the load-bearing capacity of the deck. Structural rot must be addressed before any surface repairs make sense — and before the deck is used."
                },
                {
                  name: "Ledger & Connection Rot",
                  badge: "Critical",
                  badgeColor: "bg-red-200 text-red-900",
                  desc: "The ledger board attaches the deck to your house. Rot here is the leading cause of deck collapses. O'Fallon decks from the 1990s–2000s often have aging ledger connections that were not flashed properly. We inspect every ledger connection as part of our assessment."
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Fix Your Deck?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for expert deck repair in O'Fallon. Free estimates and same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 rounded-full px-8 py-6 text-lg font-bold transition-colors">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
