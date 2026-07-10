import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Shield, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function PorchRepairService() {
  const seo = useSeoRoute();
  const problems = [
    "Rotten porch posts and beams",
    "Loose or missing railings",
    "Cracked or uneven steps",
    "Soft porch boards",
    "Rotted trim or skirt boards"
  ];

  const safetyItems = [
    "Correct railing height",
    "Step consistency",
    "Solid structural support"
  ];

  const enhancements = [
    "Trim replacement",
    "Column replacement",
    "Paint/stain preparation"
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Porch Repair" }
  ]} />
      <SEO {...seo} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Porch & Exterior Stair Repair
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            Loose railings, sagging steps, and rotten porch boards are safety issues. We repair porches and exterior stairs.
          </p>
        </div>
      </section>

      {/* Problems We Fix Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We Fix</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From structural issues to cosmetic damage, we handle all types of porch and exterior stair repairs to keep your home safe and welcoming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#0b1220]">Common Porch Issues</h3>
              <ul className="space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2">
                    <Shield className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1220]">Safety-Focused Repairs</h3>
                </div>
                <p className="text-[#4b5563] mb-4">
                  We ensure every porch repair meets safety standards:
                </p>
                <ul className="space-y-2">
                  {safetyItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#374151]">
                      <span className="text-[#ff5b00] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Curb Appeal Enhancements</h3>
                </div>
                <p className="mb-4 text-white/90">
                  Optional add-ons to improve your porch's appearance:
                </p>
                <ul className="space-y-2 mb-6">
                  {enhancements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white">
                      <span className="font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact">
                  <Button className="bg-white text-[#ff5b00] hover:bg-white/90 rounded-full px-6 font-semibold w-full">
                    Discuss Enhancement Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Porch Repairs Matter */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Porch Repairs Matter</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Safety First</h3>
                <p className="text-[#4b5563] text-sm">
                  Prevent falls and injuries by fixing loose railings, uneven steps, and structural weaknesses
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Prevent Bigger Issues</h3>
                <p className="text-[#4b5563] text-sm">
                  Small repairs now can prevent costly structural damage and full porch replacements later
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Boost Curb Appeal</h3>
                <p className="text-[#4b5563] text-sm">
                  A well-maintained porch improves your home's appearance and value
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Porch Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We follow a thorough process to ensure your porch is safe, sturdy, and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Inspection", desc: "We assess structural integrity and identify all problem areas" },
              { num: "2", title: "Recommendations", desc: "You receive clear repair options with honest pricing" },
              { num: "3", title: "Professional Repairs", desc: "Our team completes the work using quality materials" },
              { num: "4", title: "Safety Check", desc: "We verify all repairs meet safety standards" }
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Porch Repair Across St. Louis & Metro East</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: O'Fallon Porch Floor Replacement</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in O'Fallon contacted us after noticing their front porch floor felt "spongy" when they walked on it. When we inspected it, we found that water had been pooling against the house (due to clogged gutters), causing the rim joist and several floor joists to rot. The porch was structurally unsafe.
              </p>
              <p className="text-gray-700 mb-4">
                We removed the old porch decking, replaced the rotted rim joist and three floor joists, installed new pressure-treated decking, and added proper flashing to prevent future water intrusion. We also recommended they clean their gutters regularly to prevent the issue from recurring. Total cost: $2,400.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: The porch is now structurally sound and safe for the family to use. The homeowner avoided a $6,000+ quote from a contractor who wanted to rebuild the entire porch foundation unnecessarily.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Porch Repair Pricing Guide</h3>
              <p className="text-gray-700 mb-4">
                Porch repair costs depend on the extent of damage and materials needed. Here's what affects the price:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Surface repairs:</strong> Replacing boards or railings ($500-1,500)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Structural repairs:</strong> Fixing joists, beams, or posts ($1,500-4,000)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Material type:</strong> Pressure-treated wood vs. composite vs. cedar</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Access difficulty:</strong> Ground-level vs. elevated porches</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We provide honest assessments—if only a few boards need replacing, we won't recommend rebuilding the entire porch. Most repairs can be completed in 1-3 days.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Climate Challenges for Porches in Our Region</h3>
            <p className="text-gray-700 mb-3">
              The St. Louis metro area and Metro East Illinois experience significant temperature swings and humidity fluctuations throughout the year. Summer temperatures regularly exceed 90°F with high humidity, while winter can bring ice, snow, and temperatures below 20°F. This freeze-thaw cycle is particularly hard on porches.
            </p>
            <p className="text-gray-700 mb-3">
              Water is the enemy of wood porches. When water gets trapped between boards, in cracks, or against the house, it leads to rot and structural failure. In our region, this is accelerated by spring rains, summer thunderstorms, and winter snow melt. Proper drainage, flashing, and regular maintenance are critical.
            </p>
            <p className="text-gray-700">
              For homes in O'Fallon, Edwardsville, Collinsville, and Belleville, we recommend inspecting your porch annually—especially after winter. Look for soft spots, loose railings, and any areas where water might be pooling. Catching small issues early can save you thousands in structural repairs later.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Porch?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for small problems to become safety hazards. Get your porch inspected and repaired by professionals.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Book Porch Repair
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Request Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
