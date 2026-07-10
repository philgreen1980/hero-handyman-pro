import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairBallwin() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Ballwin, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair in Ballwin MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Soft boards, rotted posts, loose railings, and weathered finishes repaired by an experienced craftsman. Serving Ballwin and West St. Louis County homeowners with professional deck repair and restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services in Ballwin</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Ballwin's wooded lots and shaded backyards create ideal conditions for accelerated wood decay. Moisture lingers longer under tree canopy, and decks age faster than in open sun. We inspect, repair, and restore decks throughout Ballwin and West County.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Board Replacement</h3>
              <p className="text-gray-600 text-sm">
                Soft, cracked, or splintering deck boards replaced with matching lumber. We source pressure-treated pine, cedar, or composite to match your existing deck material and fasten boards correctly to prevent future cupping and warping.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wood Rot Repair</h3>
              <p className="text-gray-600 text-sm">
                Ballwin's shaded lots accelerate rot in posts, beams, and ledger boards. We probe for soft wood, identify the full extent of damage, and replace compromised structural members before they become a safety issue. We don't just treat the surface — we fix the cause.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Railing Repair & Replacement</h3>
              <p className="text-gray-600 text-sm">
                Loose, wobbly, or rotted railings are a safety hazard — especially on elevated decks. We tighten, reinforce, or replace railings to meet current code requirements, ensuring they can withstand the lateral force required for safe use.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Stair Repair</h3>
              <p className="text-gray-600 text-sm">
                Deck stairs take the most abuse of any deck component. We repair or replace stringers, treads, and risers — and ensure the stairway is properly secured to both the deck frame and the ground landing for long-term stability.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ledger Board Repair</h3>
              <p className="text-gray-600 text-sm">
                The ledger board — where your deck attaches to the house — is the most critical structural connection. Water infiltration behind the ledger is the leading cause of deck collapse. We inspect, flash, and repair ledger connections to prevent moisture damage and ensure structural integrity.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Staining & Sealing</h3>
              <p className="text-gray-600 text-sm">
                Ballwin's wet springs and hot summers dry out unprotected wood quickly. We clean, sand, and apply penetrating stain or sealer to extend the life of your deck and restore its appearance. Proper prep is the difference between a finish that lasts 3 years and one that lasts 7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rot vs Cosmetic Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Rot vs. Cosmetic Damage — Know the Difference</h2>
              <p className="text-gray-600 mb-4">
                Not all deck damage is equal. Surface weathering is cosmetic — a cleaning and stain will address it. Structural rot is a safety issue that requires replacement. Ballwin's shaded lots make it harder to tell the difference from the surface, because rot often progresses from the underside or inside the wood before it's visible on top.
              </p>
              <p className="text-gray-600">
                We probe every board and structural member during our assessment, not just the ones that look bad from above. Catching rot early saves significant money compared to addressing it after it spreads to framing members.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Surface Cosmetic", urgency: "Low", color: "green", desc: "Graying, surface checks, minor staining. Clean and refinish — no structural concern." },
                { label: "Board-Level Rot", urgency: "Moderate", color: "yellow", desc: "Soft or spongy boards that pass a probe test. Replace affected boards before rot spreads to framing." },
                { label: "Structural Rot", urgency: "High", color: "orange", desc: "Soft posts, beams, or ledger. Structural repair required — do not delay." },
                { label: "Ledger & Connection Rot", urgency: "Critical", color: "red", desc: "Rot at the house connection point. Deck collapse risk — address immediately." },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl border p-5 shadow-sm ${
                  item.color === "green" ? "bg-green-50 border-green-200" :
                  item.color === "yellow" ? "bg-yellow-50 border-yellow-200" :
                  item.color === "orange" ? "bg-orange-50 border-orange-200" :
                  "bg-red-50 border-red-200"
                }`}>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    item.color === "green" ? "text-green-700" :
                    item.color === "yellow" ? "text-yellow-700" :
                    item.color === "orange" ? "text-orange-700" :
                    "text-red-700"
                  }`}>{item.urgency} Urgency</div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-xl text-gray-900">Warning Signs to Watch For</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Boards that feel soft or spongy underfoot",
                  "Visible cracks, splits, or splintering",
                  "Discoloration or dark staining on boards",
                  "Loose or wobbly railings",
                  "Stairs that flex or creak excessively",
                  "Gaps between ledger board and house",
                  "Rust stains around fasteners",
                  "Deck that bounces or feels unstable",
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Ballwin Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Phil has been repairing decks in Ballwin and West County for over 35 years. He knows the common issues in shaded lots and the structural details that matter for long-term deck safety.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Full structural assessment", desc: "We probe and inspect every member, not just the visible surface." },
                  { title: "Honest scope", desc: "We'll tell you exactly what needs repair and what can wait." },
                  { title: "Matching materials", desc: "We source lumber and composite that matches your existing deck." },
                  { title: "No subcontractors", desc: "Phil does the work himself — consistent quality every time." },
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
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Services & Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Hero Handyman Pro Home</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-ballwin-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Ballwin Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/deck-repair/"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Deck Repair (Regional)</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/deck-repair-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Deck Repair in Chesterfield MO</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Deck Repair in Ballwin MO?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro at 800-741-6056 for professional deck repair in Ballwin. Free estimates, honest assessment, and work done right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
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
    </div>
  );
}
