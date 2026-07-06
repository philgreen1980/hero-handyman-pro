import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";

export default function HomeRepairService() {
  const weHandle = [
    "Inspection repair lists",
    "Pre-sale repairs",
    "Move-in punch lists",
    "Rental turnover fixes"
  ];

  const commonRepairs = [
    "Door adjustments",
    "Caulking & sealing",
    "Trim repair",
    "Light fixture replacement",
    "Drywall patching",
    "Hardware adjustments"
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home Repair Services & Punch Lists | Hero Handyman Pro"
        description="Professional home repair services in St. Louis & Metro East. We handle inspection repairs, move-in punch lists, and rental turnover fixes. Fast, reliable service from experienced craftsmen."
        canonicalUrl="https://herohandymanpro.com/handyman-services/home-repair-services/"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Home Repair Services & Punch Lists
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            Perfect for home sellers, buyers, and homeowners with a growing list of repairs.
          </p>
        </div>
      </section>

      {/* We Handle Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Handle</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              Whether you're preparing to sell, just moved in, or managing rental properties, we tackle your entire repair list efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <ClipboardList className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Repair List Types</h3>
              </div>
              <ul className="space-y-4">
                {weHandle.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Use a Punch List Service?</h3>
              <p className="text-white/90 mb-4">
                Instead of calling multiple contractors for small jobs, get everything done at once with one reliable team.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Save time coordinating multiple vendors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Get everything done before closing or move-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>One invoice, one point of contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repair Items */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Repair Items</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              These are the types of repairs we handle on punch lists every day.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-10 shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonRepairs.map((repair, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                    <Check className="h-5 w-5 text-[#ff5b00]" />
                  </div>
                  <span className="text-[#374151]">{repair}</span>
                </div>
              ))}
            </div>
            <p className="text-[#4b5563] text-sm mt-6 text-center">
              ...and many more! If it's on your list, we can handle it.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We make tackling your repair list simple and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Share your list", desc: "Send us your inspection report, punch list, or repair notes" },
              { num: "2", title: "Prioritize repairs", desc: "We review, estimate, and help you prioritize based on urgency" },
              { num: "3", title: "Complete efficiently", desc: "Our team completes all repairs in an organized, timely manner" },
              { num: "4", title: "Provide documentation", desc: "You receive photos and a summary of completed work" }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
                <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">{step.title}</h3>
                <p className="text-[#4b5563] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Home Sellers</h3>
                <p className="text-[#4b5563] text-sm">
                  Complete pre-listing repairs or buyer inspection items quickly to keep your sale on track
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Home Buyers</h3>
                <p className="text-[#4b5563] text-sm">
                  Address inspection items before closing or tackle your move-in punch list
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Property Managers</h3>
                <p className="text-[#4b5563] text-sm">
                  Get rental units ready for new tenants with efficient turnover repairs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Get answers to common questions about our handyman and punch list services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={[
              {
                question: "What's the minimum job size you'll take on?",
                answer: "We don't have a strict minimum, but we do have a minimum service call fee. Whether you have one small repair or a long punch list, we're happy to help. Many customers find it cost-effective to bundle several small tasks into one visit to maximize the value of the service call."
              },
              {
                question: "Can you handle multiple types of repairs in one visit?",
                answer: "Absolutely! That's our specialty. We come equipped to handle a variety of common repairs—drywall, doors, trim, fixtures, and more—all in one visit. Just send us your list and we'll let you know what we can tackle together and what might require a follow-up or specialist."
              },
              {
                question: "How do you charge for punch list work?",
                answer: "We typically charge by the hour for punch list work, with a minimum service call fee. For larger lists, we can provide a fixed-price estimate after reviewing all the items. We'll always give you a clear quote before starting work so there are no surprises."
              },
              {
                question: "Do you provide materials or do I need to buy them?",
                answer: "We can handle it either way. For common items like drywall compound, caulk, and basic hardware, we typically bring what's needed and include it in the price. For specific items like light fixtures, faucets, or specialty materials, we can either purchase them for you or you can buy them yourself—whatever you prefer."
              },
              {
                question: "How quickly can you complete a typical punch list?",
                answer: "Most punch lists can be completed in 2-6 hours, depending on the number and complexity of items. Simple lists might be done in a single visit, while longer lists could require a full day or multiple visits. We'll provide a time estimate when we review your list."
              },
              {
                question: "What if something on my list requires a specialist?",
                answer: "We'll let you know upfront if any items require a licensed specialist (like electrical panel work or HVAC repairs). We can handle most common repairs ourselves, but we'll always be honest about what's within our scope and what needs a specialist to ensure safety and code compliance."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Home Repairs Across St. Louis & Metro East</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: St. Louis Drywall Repair After Pipe Leak</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in St. Louis' Tower Grove neighborhood called us after a slow leak from an upstairs bathroom had damaged the dining room ceiling. By the time they discovered it, there was a 3-foot section of sagging, water-stained drywall.
              </p>
              <p className="text-gray-700 mb-4">
                We cut out the damaged drywall, verified the plumber had fixed the leak, and installed new drywall with proper texture matching. The home was built in 1920, so we had to match the existing plaster texture—a skill that's harder to find these days. We also repaired and repainted the ceiling. Total cost: $850.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: You can't tell there was ever damage. The ceiling looks perfect, and the homeowner avoided a $3,000+ quote from a contractor who wanted to replace the entire ceiling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Home Repair Pricing Guide</h3>
              <p className="text-gray-700 mb-4">
                General home repairs typically range from $200 to $1,500 depending on complexity. Here's what affects the cost:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Damage extent:</strong> Small holes vs. large sections of damaged drywall</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Texture matching:</strong> Smooth vs. knockdown vs. popcorn texture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Painting requirements:</strong> Spot touch-up vs. full wall repaint</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Material type:</strong> Drywall vs. plaster (common in older St. Louis homes)</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We provide itemized estimates so you know exactly what you're paying for. Most repairs can be completed in a single visit.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Plaster vs. Drywall in Older St. Louis Homes</h3>
            <p className="text-gray-700 mb-3">
              If your home was built before 1950—especially in neighborhoods like Soulard, Lafayette Square, the Hill, or Shaw—you likely have plaster walls instead of drywall. Plaster is more durable but requires different repair techniques.
            </p>
            <p className="text-gray-700 mb-3">
              Many handymen today only know how to work with drywall, which leads to poor repairs that crack and fail within a year. We've worked on hundreds of historic St. Louis homes and know how to properly repair plaster: skim coating for small cracks, three-coat plaster for larger holes, and proper lath repair when needed.
            </p>
            <p className="text-gray-700">
              For homes in O'Fallon, Edwardsville, Collinsville, and Belleville (typically built after 1960), you'll have standard drywall. These repairs are faster and less expensive, but still require skill to match texture and blend paint seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Clear Your Repair List?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Send us your punch list and we'll provide a comprehensive estimate to get everything done.
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
            <Link href="/#contact?service=general">
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
