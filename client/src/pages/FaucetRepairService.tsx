import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Droplet } from "lucide-react";
import SEO from "@/components/SEO";

export default function FaucetRepairService() {
  const seoData = {
    title: "Faucet, Sink & Toilet Repair | St. Louis & Metro East | Hero Handyman Pro",
    description: "Fix dripping faucets, leaky sinks, running toilets & garbage disposals in St. Louis. Fast, reliable plumbing fixture repairs. Licensed, 30+ years experience!",
    keywords: "faucet repair, sink repair, toilet repair, garbage disposal replacement, plumbing fixtures, St Louis plumbing",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/faucet-install-and-repair"
  };

  const services = [
    "Faucet replacement",
    "Sink tightening & sealing",
    "Garbage disposal replacement",
    "Toilet valve & flapper repairs",
    "Supply line swaps"
  ];

  const cleanWork = [
    "Protect surfaces",
    "Shutoff & testing",
    "Leak prevention",
    "Clean workspace afterward"
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Faucet, Sink & Disposal Repair
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            We fix drips, leaks, and failing plumbing fixtures.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From dripping faucets to failing garbage disposals, we handle common plumbing repairs and replacements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Droplet className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">What We Fix</h3>
              </div>
              <ul className="space-y-4">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">When to Call</h3>
                <p className="text-[#4b5563] mb-4">
                  Don't ignore plumbing issues—they rarely fix themselves and often get worse over time.
                </p>
                <ul className="space-y-2 text-[#374151] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Dripping faucets waste water and money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Leaks can cause water damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Failing disposals create odors and clogs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Common Repairs</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Kitchen and bathroom faucets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Garbage disposals and drain assemblies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Toilet fill valves and flappers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Supply lines and shutoff valves</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean, Respectful Work */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clean, Respectful Work</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We treat your home with care and leave your workspace cleaner than we found it.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {cleanWork.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold text-[#0b1220]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We follow a proven process to ensure reliable, leak-free repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Diagnose the issue", desc: "Identify the problem and explain your options" },
              { num: "2", title: "Shut off water", desc: "Turn off the water supply and protect your space" },
              { num: "3", title: "Repair or replace", desc: "Complete the work with quality parts and proper techniques" },
              { num: "4", title: "Test & verify", desc: "Turn water back on, test for leaks, and clean up" }
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

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Hero Handyman Pro</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Fast Response</h3>
                <p className="text-[#4b5563] text-sm">
                  We know plumbing issues can't wait. We respond quickly and get the job done right.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Quality Parts</h3>
                <p className="text-[#4b5563] text-sm">
                  We use reliable, name-brand parts that last—not cheap replacements that fail quickly.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">No Surprises</h3>
                <p className="text-[#4b5563] text-sm">
                  We provide clear estimates before starting work so you know what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Faucet Repairs in Your Community</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Fix: Collinsville Kitchen Faucet Leak</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in Collinsville called us about a kitchen faucet that had been dripping for weeks. What started as an annoyance had turned into a problem—water was pooling under the sink and damaging the cabinet bottom.
              </p>
              <p className="text-gray-700 mb-4">
                After inspection, we found a worn cartridge (common in single-handle faucets after 5-7 years of use) and a loose supply line connection. We replaced the cartridge, tightened the supply lines, and repaired the water-damaged cabinet with a moisture-resistant patch. The repair took 90 minutes and cost $320.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: No more drip, no more cabinet damage, and the homeowner is saving about 3,000 gallons of water per year (roughly $40 in water bills).
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Faucet Repair Costs</h3>
              <p className="text-gray-700 mb-4">
                Most faucet repairs in the St. Louis and Metro East area cost between $150 and $500. Here's what affects the price:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Faucet type:</strong> Single-handle, double-handle, or pull-down models have different parts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Part availability:</strong> Common brands (Moen, Delta, Kohler) have readily available parts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Supply line condition:</strong> Old or corroded lines may need replacement</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Additional damage:</strong> Water damage to cabinets or countertops adds to the cost</span>
                </li>
              </ul>
              <p className="text-gray-700">
                In most cases, repairing a faucet costs 60-70% less than replacing it. We'll always give you both options with honest recommendations.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Hard Water Issues in Metro East Illinois</h3>
            <p className="text-gray-700 mb-3">
              If you live in O'Fallon, Edwardsville, Collinsville, or Belleville, you've probably noticed the hard water. The Metro East has some of the highest mineral content in Illinois, which means calcium and magnesium build up inside your faucets over time.
            </p>
            <p className="text-gray-700 mb-3">
              This mineral buildup is the #1 reason faucet cartridges fail prematurely in our area. A cartridge that should last 10 years might only last 5-7 years with hard water. You'll notice reduced water pressure, difficulty adjusting temperature, or persistent dripping—all signs the cartridge needs replacement.
            </p>
            <p className="text-gray-700">
              The good news? Cartridge replacement is straightforward and affordable. We keep common cartridges for Moen, Delta, and Kohler faucets in stock, so most repairs can be completed the same day you call.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop That Drip Today</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Don't let a small leak turn into a big problem. Let us fix it fast and right.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Request Plumbing Repair
              </Button>
            </Link>
            <Link href="/#contact?service=fixtures">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
