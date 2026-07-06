import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertTriangle, Star } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import SEO from "@/components/SEO";

export default function DeckRepairService() {
  const seoData = {
    title: "Deck Repair & Construction | St. Louis & Metro East | Hero Handyman Pro",
    description: "Expert deck repair & construction in St. Louis. Fix rotted boards, rebuild railings, or build new decks. Licensed craftsmen, 30+ years experience. Free estimates!",
    keywords: "deck repair, deck builders, deck construction, deck restoration, wood deck repair, St Louis deck repair",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/deck-repair"
  };

  const repairItems = [
    "Rotten or soft deck boards",
    "Loose railings or wobbly posts",
    "Damaged steps and stringers",
    "Ledger and framing issues",
    "Loose or rusted fasteners",
    "Minor structural problems"
  ];

  const hazards = [
    "Larger structural issues",
    "Increased repair costs",
    "Safety hazards"
  ];

  const processSteps = [
    { number: "1", title: "Inspect & diagnose", desc: "We thoroughly examine your deck to identify all problem areas and safety concerns" },
    { number: "2", title: "Provide repair options", desc: "You'll receive clear recommendations with transparent pricing for each repair" },
    { number: "3", title: "Professional deck repairs", desc: "Our skilled team completes the work efficiently using quality materials" },
    { number: "4", title: "Final safety check", desc: "We ensure every repair meets safety standards before considering the job complete" }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Deck Repair & Restoration
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            Your deck should be safe and enjoyable, not a hazard. Hero Handyman Pro repairs decks across Greater St. Louis & the Metro East.
          </p>
        </div>
      </section>

      {/* What We Repair Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Repair</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From minor board replacements to structural fixes, we handle all types of deck repairs to keep your outdoor space safe and beautiful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#0b1220]">Common Deck Repairs</h3>
              <ul className="space-y-4">
                {repairItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2">
                    <AlertTriangle className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1220]">Why Deck Repairs Matter</h3>
                </div>
                <p className="text-[#4b5563] mb-4">
                  Ignoring wood rot or loose components can create:
                </p>
                <ul className="space-y-2">
                  {hazards.map((hazard, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151]">
                      <span className="text-[#ff5b00] font-bold">•</span>
                      <span>{hazard}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Need a Deck Inspection?</h3>
                <p className="mb-6 text-white/90">
                  Not sure what your deck needs? We offer free inspections to assess the condition and provide honest recommendations.
                </p>
                <Link href="/booking/">
                  <Button className="bg-white text-[#ff5b00] hover:bg-white/90 rounded-full px-6 font-semibold w-full">
                    Schedule Free Inspection
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Deck Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We follow a proven process to ensure your deck is repaired correctly and safely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#ff5b00] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#0b1220]">{step.title}</h3>
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

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Get answers to common questions about deck repair and restoration.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={[
              {
                question: "How long does deck repair take?",
                answer: "Most deck repairs can be completed in 1-3 days, depending on the extent of damage. Simple board replacements might take just a few hours, while extensive structural repairs or full deck resurfacing could take 2-3 days. We'll provide a detailed timeline when we inspect your deck."
              },
              {
                question: "How much does deck repair cost?",
                answer: "Deck repair costs vary widely based on the scope of work. Simple repairs like replacing a few boards might cost a few hundred dollars, while extensive structural repairs could run into thousands. We provide free estimates and will give you a detailed breakdown of costs before starting any work."
              },
              {
                question: "Can you match my existing deck boards?",
                answer: "We'll do our best to match your existing decking material, though exact matches can be challenging with older or weathered wood. We can often find close matches, or we can recommend refinishing the entire deck surface for a uniform appearance. We'll discuss all options during your estimate."
              },
              {
                question: "How do I know if my deck needs repair or replacement?",
                answer: "Warning signs include soft or spongy boards, loose railings, visible rot, large cracks or splinters, and wobbly posts. If more than 25% of your deck structure is damaged, replacement might be more cost-effective than repair. We'll inspect your deck and give you an honest assessment."
              },
              {
                question: "Do you offer deck inspections?",
                answer: "Yes! We offer free deck safety inspections with any repair estimate. We'll check the structural integrity, look for rot and damage, test railings and fasteners, and identify any safety concerns. Even if you're not ready for repairs, knowing your deck's condition is valuable for planning and safety."
              },
              {
                question: "What's the best time of year for deck repairs?",
                answer: "Spring and fall are ideal for deck repairs due to moderate temperatures and lower humidity, which help materials cure properly. However, we can perform most deck repairs year-round in St. Louis. If you have safety concerns, don't wait—we'll work with you to schedule repairs as soon as possible."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Customer Reviews CTA */}
      <section className="py-12 px-6 bg-teal-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            See What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Read authentic reviews from homeowners who trusted us with their deck repair projects.
          </p>
          <Link href="/reviews/deck-repair/">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8"
              onClick={() => trackCTAClick('Read Customer Reviews', 'Deck Repair - Reviews CTA')}
            >
              <Star className="w-5 h-5 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Real Deck Repairs in Your Neighborhood</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: Edwardsville Deck Restoration</h3>
              <p className="text-gray-700 mb-4">
                Last month, we helped a homeowner in Edwardsville's Sunset Hills neighborhood whose deck had severe rot damage from Illinois humidity. The deck was only 12 years old, but the combination of freeze-thaw cycles and moisture had destroyed several joists and over 20 deck boards.
              </p>
              <p className="text-gray-700 mb-4">
                We replaced the damaged structural members, installed new pressure-treated deck boards, and added proper flashing to prevent future water intrusion. The project took three days and cost $2,800—far less than the $15,000+ quote they received for a full deck replacement.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: A safe, beautiful deck that should last another 15-20 years with proper maintenance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">What Deck Repairs Actually Cost</h3>
              <p className="text-gray-700 mb-4">
                Most deck repairs in the Metro East and St. Louis area range from $500 to $3,000, depending on the extent of damage. Here's what affects the price:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Deck size:</strong> Larger decks require more materials and labor</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Material choice:</strong> Pressure-treated lumber vs. composite vs. cedar</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Structural vs. cosmetic:</strong> Joist/beam replacement costs more than surface boards</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Access and complexity:</strong> Second-story decks or difficult access increase labor</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Every estimate includes a detailed breakdown so you know exactly what you're paying for. No surprises, no hidden fees.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Why Metro East Decks Need Extra Attention</h3>
            <p className="text-gray-700 mb-3">
              If you live in Illinois, you know our weather is tough on outdoor structures. The freeze-thaw cycles we experience every winter cause wood to expand and contract, which accelerates rot and loosens fasteners. Add in our humid summers, and you've got the perfect recipe for deck deterioration.
            </p>
            <p className="text-gray-700">
              That's why we recommend annual deck inspections for homes in O'Fallon, Edwardsville, Collinsville, and Belleville. Catching small issues early—like a few soft boards or loose railing posts—can save you thousands compared to waiting until major structural damage occurs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Deck?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for small problems to become big safety issues. Get your deck inspected and repaired by professionals.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/#contact?service=deck-repair">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
