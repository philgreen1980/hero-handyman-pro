import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import LazyProjectGallery from "@/components/LazyProjectGallery";
import type { ProjectPair } from "@/components/ProjectGallery";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const carpentryProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint and open joints – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Interior trim & carpentry repair",
    city: "Belleville, IL",
  },
  {
    beforeSrc: "/images/carpentry-before-collinsville.webp",
    afterSrc: "/images/carpentry-after-collinsville.webp",
    beforeAlt: "Rotted and broken wooden privacy fence with missing boards – Collinsville IL",
    afterAlt: "New cedar privacy fence boards installed and looking great – Collinsville IL",
    caption: "Fence board replacement",
    city: "Collinsville, IL",
  },
  {
    beforeSrc: "/images/deck-before-glencarbonIL.webp",
    afterSrc: "/images/deck-after-glencarbonIL.webp",
    beforeAlt: "Severely rotted deck boards with holes and moss growth – Glen Carbon IL",
    afterAlt: "New pressure-treated deck boards installed with stainless screws – Glen Carbon IL",
    caption: "Deck board replacement",
    city: "Glen Carbon, IL",
  },
];

export default function ExteriorCarpentryService() {
  const seo = useSeoRoute();  const repairs = [
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
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Exterior Carpentry" }
  ]} />
      <SEO {...seo} />
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

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={carpentryProjects}
        title="Recent Carpentry Projects in Your Area"
        subtitle="Before-and-after results from carpentry and wood repair jobs across St. Louis & Metro East."
      />

      {/* What to Expect */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">What to Expect When You Book Exterior Carpentry</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">From first call to finished repair — here's how exterior carpentry work goes with Hero Handyman Pro:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Call or Send Photos", desc: "Describe the issue or send a few photos of the damaged wood. We can often diagnose the extent of rot and give a ballpark estimate before visiting — saving you time and giving you a realistic cost expectation upfront." },
              { step: "2", title: "On-Site Assessment", desc: "We probe suspect wood, check behind trim and fascia for hidden rot, and assess whether the damage is cosmetic or structural. Older homes in Metro East often have rot that extends further than the visible surface suggests." },
              { step: "3", title: "Material Recommendation", desc: "We discuss wood vs. composite options based on your budget and the location of the repair. High-moisture areas (fascia near gutters, porch columns) benefit most from composite. We'll give you an honest recommendation, not an upsell." },
              { step: "4", title: "Written Quote", desc: "You receive a firm written quote before any work begins. We break down materials and labor so you understand exactly what you're paying for. No surprises after the job." },
              { step: "5", title: "Repair Day", desc: "We remove all damaged wood, treat any remaining surfaces with wood hardener or preservative, install new material, and prime or paint to match. Most exterior carpentry repairs are completed in a single day." },
              { step: "6", title: "Cleanup & Walkthrough", desc: "All old wood, nails, and debris are removed and disposed of. We walk you through the completed repair and point out any adjacent areas to monitor in the future." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner Q&A */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Common Homeowner Questions About Exterior Carpentry</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Why does exterior wood rot so quickly in Illinois?",
                a: "The Metro East climate is tough on wood. Humid summers, wet springs, and freeze-thaw cycles in winter create ideal conditions for moisture to penetrate wood grain. Once water gets in, rot follows. The most vulnerable spots are areas where wood is close to soil, trapped behind gutters, or exposed to pooling water — like porch columns, fascia boards, and deck ledgers."
              },
              {
                q: "Can I just paint over rotted wood?",
                a: "No — and this is one of the most common mistakes homeowners make. Paint over rot just traps moisture inside and accelerates the decay. The only real fix is to remove the rotted material and replace it with sound wood or composite. We use wood hardener on partially soft wood to stabilize it before replacement where appropriate."
              },
              {
                q: "How do I know if the rot is just cosmetic or structural?",
                a: "Cosmetic rot affects the surface of trim, fascia, or siding but hasn't reached load-bearing components. Structural rot affects posts, beams, ledgers, or joists. The test is simple: probe the wood with a screwdriver. If it sinks in easily, the rot is deeper than it looks. We always probe suspect areas during our assessment before quoting."
              },
              {
                q: "Should I repair or replace my porch columns?",
                a: "If the rot is limited to the base of the column (the most common failure point), we can often repair just the base section and save the rest. If the column is hollow and the rot has traveled more than 12 inches up, full replacement is usually more cost-effective. We'll give you an honest assessment — not a recommendation designed to maximize our invoice."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
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
            Serving homeowners in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
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
