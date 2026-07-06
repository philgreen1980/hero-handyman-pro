import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Hammer } from "lucide-react";
import SEO from "@/components/SEO";

export default function DeckConstructionService() {
  const deckTypes = [
    "Pressure-treated wood decks",
    "Composite decks",
    "Ground-level platforms",
    "Multi-level decks",
    "Replacement rails and landings"
  ];

  const processSteps = [
    { number: "1", title: "Consultation & measurement", desc: "We visit your property to discuss your vision and take precise measurements" },
    { number: "2", title: "Design & estimate", desc: "You'll receive a detailed design proposal with transparent pricing" },
    { number: "3", title: "Permitting (if needed)", desc: "We handle all necessary permits and inspections for your project" },
    { number: "4", title: "Construction", desc: "Our skilled team builds your deck with quality materials and craftsmanship" },
    { number: "5", title: "Final walkthrough", desc: "We ensure every detail meets your expectations before completion" }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Deck Construction & Replacement | Hero Handyman Pro"
        description="Custom deck construction in St. Louis & Metro East. Build new wood or composite decks, multi-level platforms, and replacement railings. Quality materials, expert craftsmanship, and full permit handling."
        canonicalUrl="https://herohandymanpro.com/handyman-services/deck-construction/"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Deck Construction & Replacement
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            When repairs aren't enough, we build safe, beautiful decks designed to last.
          </p>
        </div>
      </section>

      {/* Types of Decks Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Decks We Build</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              Whether you're building your first deck or replacing an old one, we create outdoor spaces that enhance your home and lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Deck Options</h3>
              </div>
              <ul className="space-y-4">
                {deckTypes.map((type, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Repair vs Replace Guidance</h3>
                <p className="text-[#4b5563] mb-4">
                  Not sure if you need a full replacement or just repairs? We inspect your deck and provide honest, no-pressure recommendations.
                </p>
                <p className="text-[#374151] text-sm">
                  Our goal is to help you make the best decision for your budget and safety—whether that's targeted repairs or a complete rebuild.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Ready to Build Your Dream Deck?</h3>
                <p className="mb-6 text-white/90">
                  Let's discuss your vision and create a deck that fits your space, style, and budget.
                </p>
                <Link href="/contact/">
                  <Button className="bg-white text-[#ff5b00] hover:bg-white/90 rounded-full px-6 font-semibold w-full">
                    Request Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deck Build Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              From initial consultation to final walkthrough, we guide you through every step of your deck construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#ff5b00] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold mb-3 text-[#0b1220] leading-tight">{step.title}</h3>
                  <p className="text-[#4b5563] text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#e5e7eb]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Hero Handyman Pro for Your Deck?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Quality Materials</h3>
                <p className="text-[#4b5563] text-sm">We use premium lumber and hardware designed to withstand St. Louis weather</p>
              </div>
              <div>
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Expert Craftsmanship</h3>
                <p className="text-[#4b5563] text-sm">Years of experience building decks that are safe, sturdy, and beautiful</p>
              </div>
              <div>
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Transparent Pricing</h3>
                <p className="text-[#4b5563] text-sm">Clear estimates with no hidden fees or surprise charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Deck Building Across St. Louis & Metro East</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: Belleville 12x16 Deck Build</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in Belleville wanted to add a deck off their back door to create an outdoor entertaining space. They had a concrete patio that was cracked and uneven, and they wanted something more functional and attractive. They got quotes from three contractors ranging from $8,500 to $12,000.
              </p>
              <p className="text-gray-700 mb-4">
                We built a 12x16-foot deck using pressure-treated lumber for the frame and composite decking for the surface (low maintenance, no splinters, won't rot). We included a 36-inch-wide staircase down to the yard, composite railings with aluminum balusters, and proper ledger board attachment with through-bolts and flashing. Total cost: $7,200.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: The homeowner saved over $1,300 compared to the lowest contractor quote, and the deck is built to code with a 10-year warranty on materials. They now have a beautiful outdoor space for grilling and entertaining.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Deck Construction Pricing Guide</h3>
              <p className="text-gray-700 mb-4">
                Deck construction costs vary based on size, materials, and site conditions. Here's what affects the price:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Deck size:</strong> Typical costs are $35-55 per square foot installed</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Decking material:</strong> Pressure-treated wood vs. composite vs. PVC</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Height & complexity:</strong> Ground-level vs. elevated vs. multi-level</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Railings & stairs:</strong> Basic vs. decorative vs. custom designs</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We provide detailed estimates with material and labor costs broken out. Most decks can be completed in 3-7 days depending on size and complexity.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Building Codes & Permits in Our Region</h3>
            <p className="text-gray-700 mb-3">
              Most municipalities in the St. Louis metro area and Metro East Illinois require building permits for decks over a certain size (typically 200 square feet or decks attached to the house). Permits ensure the deck is built to code for safety—proper footing depth, joist spacing, railing height, and ledger board attachment.
            </p>
            <p className="text-gray-700 mb-3">
              We handle all permit applications and inspections as part of our service. Building codes in Illinois and Missouri are similar but have some differences (especially regarding frost line depth for footings—48 inches in our region). We're familiar with local requirements in O'Fallon, Edwardsville, Collinsville, Belleville, and St. Louis County.
            </p>
            <p className="text-gray-700">
              Beware of contractors who suggest "skipping the permit to save money." Unpermitted decks can cause problems when you sell your home, and insurance may not cover injuries if the deck wasn't built to code. We always pull permits and pass inspections on the first try.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Deck Project?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Let's turn your backyard into the outdoor living space you've always wanted.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Start Your Deck Project
              </Button>
            </Link>
            <Link href="/contact/">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Request an Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
