import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";

export default function DrywallRepairService() {
  const seoData = {
    title: "Drywall Repair | Local Handyman Pros – Hero Handyman Pro®",
    description: "Professional drywall repair by experienced local handymen. Quality workmanship, fair pricing, and dependable service. Request your free estimate today.",
    keywords: "drywall repair, ceiling repair, wall repair, drywall installation, drywall contractor",
    canonicalUrl: "https://herohandymanpro.com/services/drywall-repair"
  };
  const repairs = [
    "Nail pops",
    "Settlement cracks",
    "Holes of all sizes",
    "Water-damaged ceilings",
    "Corner bead damage"
  ];

  const processSteps = [
    "Remove loose material",
    "Proper backing",
    "Tape, mud, sand",
    "Texture match (if available)",
    "Paint touch-ups"
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Drywall & Ceiling Repair
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            We repair drywall cracks, holes, water damage, and ceiling issues.
          </p>
        </div>
      </section>

      {/* What We Repair Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Repair</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From small nail pops to large holes and water damage, we handle all types of drywall and ceiling repairs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#0b1220]">Common Drywall Issues</h3>
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
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Clean Repair Process</h3>
                <p className="text-[#4b5563] mb-4">
                  We follow a proven process to ensure seamless repairs:
                </p>
                <ul className="space-y-2">
                  {processSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151]">
                      <span className="text-[#ff5b00] font-bold">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Leak Prevention</h3>
                </div>
                <p className="text-white/90">
                  If the damage was caused by a leak, we identify whether it is still active. Repairing drywall over an active leak is a waste of money—we'll help you address the source first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Repair Matters */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Professional Drywall Repair Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Seamless Finish</h3>
                <p className="text-[#4b5563] text-sm">
                  Proper technique ensures repairs blend invisibly with the surrounding wall
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Long-Lasting Results</h3>
                <p className="text-[#4b5563] text-sm">
                  We use the right materials and methods to prevent cracks from returning
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Save Time & Mess</h3>
                <p className="text-[#4b5563] text-sm">
                  We handle the dusty work and leave your home clean
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texture Matching */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-10 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#0b1220]">Texture Matching</h2>
                <p className="text-[#4b5563] mb-4">
                  Many homes have textured walls or ceilings. We do our best to match existing textures so repairs blend seamlessly.
                </p>
                <p className="text-[#374151] text-sm">
                  While we can match most common textures, some specialty finishes may require additional work or may not be perfectly replicable. We'll discuss options during the estimate.
                </p>
              </div>
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <h3 className="font-bold text-lg mb-3 text-[#0b1220]">Common Textures We Match</h3>
                <ul className="space-y-2 text-[#374151]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Knockdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Orange peel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Smooth finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">•</span>
                    <span>Light popcorn</span>
                  </li>
                </ul>
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
              Get answers to common questions about drywall and ceiling repair.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={[
              {
                question: "Can you match my existing wall texture?",
                answer: "Yes! We're experienced with all common wall textures including smooth, orange peel, knockdown, and popcorn ceilings. We'll carefully match your existing texture so the repair blends seamlessly. In most cases, you won't be able to tell where the repair was made after we're done."
              },
              {
                question: "Do I need to repaint after drywall repair?",
                answer: "For small repairs, we can often touch up the paint to blend with your existing wall color. For larger repairs or if your paint is older and faded, you may want to repaint the entire wall for the best appearance. We'll prime all repairs and can provide painting services if needed."
              },
              {
                question: "How long does drywall repair take to dry?",
                answer: "Drywall compound typically needs 24 hours to dry between coats. Most repairs require 2-3 coats, so the complete process takes 2-3 days. We can often work on multiple areas during this time to maximize efficiency. Once the final coat is dry, we'll sand, texture, and prime the same day."
              },
              {
                question: "What causes drywall cracks to keep coming back?",
                answer: "Recurring cracks are usually caused by house settlement, temperature changes, or structural movement. We'll assess the cause and use proper techniques like mesh tape and flexible compounds to minimize recurrence. If we find structural issues, we'll let you know so you can address the root cause."
              },
              {
                question: "Can you repair water-damaged drywall?",
                answer: "Yes, but first we need to ensure the water source is fixed and the area is completely dry. Water-damaged drywall often needs to be cut out and replaced rather than patched. We'll check for mold, replace damaged sections, and ensure proper drying before finishing the repair."
              },
              {
                question: "How much does drywall repair cost?",
                answer: "Small hole repairs typically start around $150-$200, while larger repairs or ceiling work can range from $300-$800 depending on size and complexity. We provide free estimates and will give you an exact price before starting work. Most repairs are completed in one visit plus a follow-up for final touch-ups."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Drywall?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Don't let unsightly cracks and holes detract from your home's appearance. Get a professional repair estimate today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/#contact?service=drywall-repair">
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
