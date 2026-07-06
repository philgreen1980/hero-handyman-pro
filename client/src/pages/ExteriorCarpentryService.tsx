import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Wrench } from "lucide-react";
import SEO from "@/components/SEO";

export default function ExteriorCarpentryService() {
  const seoData = {
    title: "Exterior Carpentry & Wood Rot Repair | St. Louis | Hero Handyman Pro",
    description: "Expert exterior carpentry & wood rot repair in St. Louis. Fix trim, fascia, siding & porch damage. Stop rot before it spreads. Licensed, 30+ years experience!",
    keywords: "exterior carpentry, wood rot repair, trim repair, fascia repair, siding repair, St Louis carpenter",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/exterior-carpentry"
  };

  const repairs = [
    "Trim and fascia replacement",
    "Siding repair",
    "Window and door trim",
    "Garage door frame repairs",
    "Porch columns and wraps",
    "Threshold repair"
  ];

  const rootCauses = [
    "Failing caulking",
    "Poor flashing",
    "Water drainage issues"
  ];

  const approaches = [
    "Rot-resistant materials",
    "Primed and sealed cuts",
    "Water-shedding installation"
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Exterior Carpentry & Wood Rot Repair
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            Wood rot spreads quickly. We repair damaged trim, siding, fascia, and exterior components.
          </p>
        </div>
      </section>

      {/* Common Repairs Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Repairs</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From small trim repairs to extensive wood rot remediation, we handle all types of exterior carpentry work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Wrench className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">What We Repair</h3>
              </div>
              <ul className="space-y-4">
                {repairs.map((repair, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{repair}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2">
                    <AlertCircle className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1220]">Root Cause Prevention</h3>
                </div>
                <p className="text-[#4b5563] mb-4">
                  We identify and fix the underlying causes of wood rot:
                </p>
                <ul className="space-y-2">
                  {rootCauses.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151]">
                      <span className="text-[#ff5b00] font-bold">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#4b5563] text-sm mt-4">
                  Fixing the root cause prevents future rot and saves you money in the long run.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Our Carpentry Approach</h3>
                <p className="mb-4 text-white/90">
                  We use proven techniques to ensure long-lasting repairs:
                </p>
                <ul className="space-y-2">
                  {approaches.map((approach, i) => (
                    <li key={i} className="flex items-start gap-2 text-white">
                      <span className="font-bold">✓</span>
                      <span>{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Act Fast */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Wood Rot Requires Fast Action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Spreads Quickly</h3>
                <p className="text-[#4b5563] text-sm">
                  Wood rot can spread from a small area to major structural damage in just months
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Costs Increase</h3>
                <p className="text-[#4b5563] text-sm">
                  Early repairs are far less expensive than waiting until the damage becomes extensive
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Protects Your Home</h3>
                <p className="text-[#4b5563] text-sm">
                  Proper repairs protect your home's structure, appearance, and value
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We follow a thorough process to ensure your exterior carpentry repairs last for years.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Assess Damage", desc: "We identify all affected areas and determine the extent of rot" },
              { num: "2", title: "Find the Source", desc: "We locate and fix the water intrusion causing the rot" },
              { num: "3", title: "Quality Repairs", desc: "We replace damaged wood with rot-resistant materials" },
              { num: "4", title: "Seal & Protect", desc: "We prime, seal, and finish all repairs to prevent future damage" }
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

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Exterior Carpentry Projects Near You</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: Belleville Porch Column Replacement</h3>
              <p className="text-gray-700 mb-4">
                We recently worked with a homeowner in Belleville's historic district whose front porch columns were rotting at the base. The home was built in 1925, and the original wood columns had lasted nearly 100 years—but Illinois weather finally caught up with them.
              </p>
              <p className="text-gray-700 mb-4">
                We replaced all four porch columns with new pressure-treated posts wrapped in PVC trim for a traditional look that won't rot. We also repaired the porch floor where water damage had spread, and installed proper flashing to prevent future issues. The project took five days and cost $3,200.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: A structurally sound porch that maintains the home's historic character while using modern, rot-resistant materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Exterior Carpentry Pricing</h3>
              <p className="text-gray-700 mb-4">
                Exterior carpentry projects typically range from $800 to $4,000+ depending on scope. Here's what influences the cost:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Material choice:</strong> Pressure-treated wood, cedar, composite, or PVC trim</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Structural vs. cosmetic:</strong> Load-bearing repairs cost more than trim work</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Access and height:</strong> Second-story work requires scaffolding or lifts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Extent of rot damage:</strong> More damaged wood means more replacement</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We provide detailed estimates that break down materials and labor so you understand exactly what you're paying for.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Wood vs. Composite in Illinois Climate</h3>
            <p className="text-gray-700 mb-3">
              When replacing exterior trim, fascia, or porch components in the Metro East, you have two main options: traditional wood or modern composite materials. Both work well, but they have different trade-offs.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Wood (pressure-treated or cedar)</strong> is less expensive upfront and easier to work with for custom profiles. But in our humid Illinois climate, even treated wood will eventually rot—usually in 15-25 years depending on exposure and maintenance.
            </p>
            <p className="text-gray-700">
              <strong>Composite and PVC trim</strong> costs 30-50% more initially but will never rot, warp, or need painting. For homes in O'Fallon, Edwardsville, Collinsville, and Belleville, we often recommend composite for high-moisture areas (porch columns, fascia near gutters) and wood for less exposed trim where cost is a bigger concern.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Let Wood Rot Spread</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Get your exterior carpentry issues fixed before they become major problems. Contact us today for an inspection.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Schedule Exterior Carpentry Repair
              </Button>
            </Link>
            <Link href="/#contact">
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
