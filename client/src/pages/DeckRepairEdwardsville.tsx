import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairEdwardsville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Edwardsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair Services in Edwardsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Rotted boards, wobbly railings, or structural damage — we restore Edwardsville decks to safe, solid condition. Honest assessments, quality repairs, fair pricing.
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Edwardsville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services We Provide in Edwardsville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Illinois winters are hard on decks. Freeze-thaw cycles, moisture, and UV exposure cause boards to rot, fasteners to loosen, and railings to wobble. We fix all of it — before small problems become expensive replacements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Replacing Deck Boards */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Replacing Deck Boards</h3>
              <p className="text-gray-600 mb-4">
                Rotted, cracked, or splintering deck boards are a safety hazard and an eyesore. We remove damaged boards and replace them with pressure-treated lumber or composite decking that matches your existing deck as closely as possible.
              </p>
              <p className="text-gray-600 text-sm">
                Edwardsville's humid summers and cold winters accelerate wood decay — especially on decks that don't get regular sealing. We'll also advise on maintenance to extend the life of your new boards.
              </p>
            </div>

            {/* Repairing Loose Railings */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Repairing Loose Railings</h3>
              <p className="text-gray-600 mb-4">
                Wobbly railings are a serious fall hazard, especially for children and elderly family members. We tighten, re-secure, or replace railing posts, balusters, and top rails to bring your deck up to safe, code-compliant standards.
              </p>
              <p className="text-gray-600 text-sm">
                Illinois building code requires deck railings to withstand 200 lbs of lateral force. We make sure yours can handle it.
              </p>
            </div>

            {/* Structural Deck Damage */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Fixing Structural Deck Damage</h3>
              <p className="text-gray-600 mb-4">
                Rotted joists, failing ledger boards, and compromised posts are the most serious deck problems — and the most dangerous if ignored. We assess structural integrity, replace compromised framing members, and ensure your deck is safe to use.
              </p>
              <p className="text-gray-600 text-sm">
                We give honest assessments. If a deck is beyond repair, we'll tell you — and we can discuss deck replacement options as well.
              </p>
            </div>

            {/* Deck Maintenance */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Deck Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Annual deck maintenance is the best way to avoid costly repairs. We handle cleaning, re-fastening loose boards, replacing isolated rotted sections, and applying sealant or stain to protect against moisture and UV damage.
              </p>
              <p className="text-gray-600 text-sm">
                A well-maintained deck in Edwardsville can last 20–30 years. Neglected decks often need full replacement within 10 years.
              </p>
            </div>

            {/* Deck Staining */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Deck Staining</h3>
              <p className="text-gray-600 mb-4">
                A quality stain protects your deck from moisture, UV damage, and mold — extending its life significantly. We prep the surface, apply a penetrating or semi-transparent stain, and ensure even coverage on all boards, railings, and stairs.
              </p>
              <p className="text-gray-600 text-sm">
                Edwardsville's climate means decks should be stained every 2–3 years. We help you choose the right product for your wood type and sun exposure.
              </p>
            </div>

            {/* Deck Sealing */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Deck Sealing</h3>
              <p className="text-gray-600 mb-4">
                Sealing your deck creates a waterproof barrier that prevents moisture from penetrating the wood fibers — the primary cause of rot, warping, and cracking. We apply professional-grade sealers after thorough cleaning and light sanding.
              </p>
              <p className="text-gray-600 text-sm">
                Sealing is especially important for decks with pressure-treated lumber, which can absorb water and swell if left unprotected.
              </p>
            </div>

            {/* Wood Rot Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Wood Rot Repair</h3>
              <p className="text-gray-600 mb-4">
                Soft, spongy, or discolored wood is a sign of rot that will spread if not addressed. We remove and replace rotted sections — whether it's a single board, a post base, or a section of the ledger — and treat surrounding wood to stop further decay.
              </p>
              <p className="text-gray-600 text-sm">
                Catching rot early saves money. A rotted post or ledger board that goes untreated can compromise the entire deck structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Deck Repair for Edwardsville Homeowners</h2>
              <p className="text-gray-600 mb-4">
                Edwardsville's older neighborhoods — particularly those near the historic downtown and the SIUE corridor — have a high concentration of wood decks that were built in the 1980s and 1990s. Many of these decks are now showing their age.
              </p>
              <p className="text-gray-600 mb-4">
                The Metro East climate is particularly tough on outdoor wood structures. Hot, humid summers cause wood to expand and contract, while freeze-thaw cycles in winter work fasteners loose and accelerate rot in any wood that holds moisture.
              </p>
              <p className="text-gray-600 mb-6">
                Hero Handyman Pro has been repairing decks in Edwardsville and the surrounding area for over 35 years. We know what holds up in this climate and what doesn't.
              </p>
              <Link href="/gbp/edwardsville-il/">
                <span className="text-teal-700 hover:underline font-semibold cursor-pointer">
                  View our Edwardsville handyman services →
                </span>
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Signs Your Deck Needs Repair</h3>
              <div className="space-y-3">
                {[
                  "Boards that flex or bounce when walked on",
                  "Visible rot or dark discoloration in wood",
                  "Railings that move when pushed",
                  "Gaps between boards wider than 1/4 inch",
                  "Rusted or popped fasteners",
                  "Ledger board pulling away from the house",
                  "Deck feels lower or uneven in spots",
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Get Your Deck Repaired This Season</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait until a rotten board or loose railing becomes a safety issue. Call Hero Handyman Pro today for a free deck repair estimate in Edwardsville IL.
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
