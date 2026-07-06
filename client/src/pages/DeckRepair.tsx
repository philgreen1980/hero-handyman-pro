import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function DeckRepair() {
  const seoData = {
    title: "Deck Repair Services | Boards, Railings & Structural Repairs",
    description: "Professional deck repair including rotted boards, loose railings, structural damage, and deck maintenance. Serving Edwardsville, O'Fallon, Chesterfield, and West St. Louis County.",
    keywords: "deck repair near me, deck board replacement, railing repair, rotted deck repair, deck maintenance, structural deck repair",
    canonicalUrl: "https://herohandymanpro.com/deck-repair"
  };

  const services = [
    {
      title: "Deck Board Replacement",
      desc: "Rotted, cracked, splintering, or soft deck boards are a safety hazard and an eyesore. We remove damaged boards and replace them with pressure-treated lumber or composite decking that matches your existing deck as closely as possible. The St. Louis region's humid summers and cold winters accelerate wood decay — especially on decks that don't get regular sealing."
    },
    {
      title: "Railing Repair & Replacement",
      desc: "Wobbly railings are a serious fall hazard, especially for children and elderly family members. We tighten, re-secure, or replace railing posts, balusters, and top rails to bring your deck up to safe, code-compliant standards. Illinois and Missouri building codes require deck railings to withstand 200 lbs of lateral force — we make sure yours can handle it."
    },
    {
      title: "Structural Deck Repair",
      desc: "Rotted joists, failing ledger boards, and compromised posts are the most serious deck problems — and the most dangerous if ignored. We assess structural integrity, replace compromised framing members, and ensure your deck is safe to use. We give honest assessments: if a deck is beyond repair, we'll tell you upfront."
    },
    {
      title: "Stair & Step Repair",
      desc: "Deck stairs take more abuse than any other part of the structure. Loose stringers, rotted treads, and wobbly handrails are common after a few Illinois winters. We repair or replace deck stairs to restore safe, solid footing — whether it's a single step or a full staircase."
    },
    {
      title: "Ledger Board Repair",
      desc: "The ledger board is where your deck attaches to your house — the most critical structural connection. A failing ledger can cause the entire deck to pull away from the home. We inspect, reinforce, or replace ledger boards and ensure proper flashing to prevent water intrusion behind the board."
    },
    {
      title: "Deck Maintenance & Sealing",
      desc: "Annual deck maintenance is the best way to avoid costly repairs. We handle cleaning, re-fastening loose boards, replacing isolated rotted sections, and applying sealant or stain to protect against moisture and UV damage. A well-maintained deck can last 20–30 years. A neglected one often needs full replacement within 10."
    },
  ];

  const warningSigns = [
    "Boards that flex or bounce when walked on",
    "Visible rot, soft spots, or dark discoloration in wood",
    "Railings that move when pushed",
    "Gaps between boards wider than 1/4 inch",
    "Rusted, popped, or missing fasteners",
    "Ledger board pulling away from the house",
    "Deck feels uneven or lower in certain spots",
    "Cracked or splintering wood on stairs or treads",
  ];

  const serviceAreas = [
    { city: "Edwardsville IL", href: "/deck-repair-edwardsville-il" },
    { city: "O'Fallon IL", href: "/deck-repair-ofallon-il" },
    { city: "Belleville IL", href: "/deck-repair-belleville-il" },
    { city: "Chesterfield MO", href: "/deck-repair-chesterfield-mo" },
    { city: "Collinsville IL", href: "/deck-repair-collinsville-il" },
    { city: "Ballwin MO", href: "/deck-repair-ballwin-mo" },
    { city: "Glen Carbon IL", href: "/deck-repair-glen-carbon-il" },
    { city: "St. Charles MO", href: "/deck-repair-st-charles-mo" },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Metro East IL & West St. Louis County MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Deck Repair Services
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Rotted boards, loose railings, structural damage, and worn-out stairs — restored to safe, solid condition. Serving homeowners across Edwardsville, O'Fallon, Chesterfield, and the greater St. Louis area.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services We Provide</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Illinois and Missouri winters are hard on decks. Freeze-thaw cycles, moisture, and UV exposure cause boards to rot, fasteners to loosen, and railings to wobble. We fix all of it — before small problems become expensive full replacements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs + Why Repair Matters */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Signs Your Deck Needs Repair</h2>
              <p className="text-gray-600 mb-6">
                Most deck problems start small and get worse with every season. A single rotted board leads to moisture spreading to the joists. A loose railing post becomes a fall hazard. Catching these issues early is the difference between a $300 repair and a $10,000 replacement.
              </p>
              <p className="text-gray-600 mb-6">
                When someone searches <em>"deck repair near me,"</em> they usually already know something is wrong. We offer free estimates throughout Metro East Illinois and West St. Louis County — so you know exactly what you're dealing with before committing to anything.
              </p>
              <ul className="space-y-3">
                {warningSigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Deck Repair Is Worth Doing Right</h3>
              <p className="text-gray-600 text-sm mb-4">
                A deck is one of the most-used outdoor spaces in a home — and one of the most dangerous when it's in poor condition. Deck collapses and railing failures cause thousands of injuries every year in the U.S.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Beyond safety, a well-maintained deck adds real value to your home. A rotted or structurally compromised deck is a red flag during home inspections and can derail a sale or force a price reduction.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                We've repaired hundreds of decks across the St. Louis metro area. We know what holds up in this climate, what corners get cut during original construction, and how to fix it properly the first time.
              </p>
              <a href="tel:800-741-6056" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline text-sm">
                <Phone className="w-4 h-4" />
                Call 800-741-6056 for a free deck inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Near You</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We provide deck repair services throughout Metro East Illinois and West St. Louis County Missouri. Click your city for local service details and city-specific information.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.href}>
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer group">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800 group-hover:text-teal-800 text-sm">{area.city}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Also serving Belleville IL, Maryville IL, Troy IL, Des Peres MO, and surrounding communities. <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">View all service areas →</span></Link>
          </p>
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
                The St. Louis region's climate — hot, humid summers and hard freeze-thaw winters — is among the most demanding for outdoor wood structures in the Midwest. Moisture penetrates end grain, fastener holes, and any spot where the finish has worn away. Over time, that moisture causes wood fibers to break down. The challenge is that early rot is often hidden beneath the deck surface or inside structural members where it's not visible during a casual inspection.
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
                  desc: "The ledger board attaches the deck to your house. Rot here is the leading cause of deck collapses. We inspect every ledger connection as part of our assessment — a step many contractors skip."
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

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Deck Repair</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. Phil, the owner, has been repairing decks in the greater St. Louis area for over 30 years. He knows the climate, the common failure points, and how to fix them properly.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Honest Assessments", desc: "We tell you what actually needs repair vs. what can wait. No upselling, no unnecessary work." },
              { title: "Local & Accountable", desc: "We live and work in the Metro East. Our reputation in Edwardsville, O'Fallon, and Chesterfield is everything to us." },
              { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises, no middlemen." },
              { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices after the job." },
              { title: "Climate-Appropriate Materials", desc: "We use pressure-treated lumber and hardware rated for the St. Louis region's humidity and freeze-thaw cycles." },
              { title: "Free Estimates", desc: "We'll come out, assess your deck, and give you a clear written estimate — no charge, no obligation." },
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
      </section>

      {/* Internal Links */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="font-semibold text-gray-800 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/handyman-services/deck-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Deck Repair & Restoration Service Page</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/exterior-carpentry/"><span className="text-teal-700 hover:underline cursor-pointer">Exterior Carpentry & Wood Rot Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/edwardsville"><span className="text-teal-700 hover:underline cursor-pointer">Edwardsville Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/ofallon"><span className="text-teal-700 hover:underline cursor-pointer">O'Fallon Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-near-me"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Near Me</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/"><span className="text-teal-700 hover:underline cursor-pointer">Hero Handyman Pro Home</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Get Your Deck Repaired This Season</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait until a rotten board or loose railing becomes a safety issue. Call Hero Handyman Pro at 800-741-6056 for a free deck repair estimate across Metro East Illinois and West St. Louis County.
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
