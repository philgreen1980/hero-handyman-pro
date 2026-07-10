import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Ruler } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function TrimCarpentryService() {
  const seo = useSeoRoute();
  const services = [
    "Baseboards",
    "Window & door casing",
    "Crown molding",
    "Wainscoting",
    "Chair rails",
    "Small built-ins & shelving"
  ];

  const standards = [
    { title: "Tight joints", desc: "Precise cuts and perfect miters for seamless connections" },
    { title: "Smooth surfaces", desc: "Properly sanded and prepped for finishing" },
    { title: "Clean transitions", desc: "Professional coping and scribing techniques" },
    { title: "Ready for paint or stain", desc: "All nail holes filled and surfaces prepared" }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Interior Trim & Finish Carpentry
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            We install and repair interior trim that makes your home look clean and finished.
          </p>
        </div>
      </section>

      {/* Trim Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trim Services</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From simple baseboards to elegant crown molding, we handle all types of interior trim installation and repair.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Ruler className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">What We Install</h3>
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
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Match or Modernize</h3>
                <p className="text-[#4b5563] mb-4">
                  We can match your existing trim style for repairs and additions, or help you upgrade to modern profiles that refresh your home's look.
                </p>
                <p className="text-[#374151] text-sm">
                  Whether you're repairing damaged trim or adding new molding to enhance your space, we'll ensure a perfect match or a seamless upgrade.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Why Trim Matters</h3>
                <p className="text-white/90 mb-4">
                  Quality trim work transforms a room from "builder-grade" to "custom-crafted." It's the finishing touch that makes your home feel complete and polished.
                </p>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Covers gaps and imperfections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Adds visual interest and character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Increases home value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Standards */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Craftsmanship Standards</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We take pride in delivering trim work that meets professional carpentry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2 mt-1">
                    <Check className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#0b1220]">{item.title}</h3>
                    <p className="text-[#4b5563] text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Trim Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Measure & Plan", desc: "Precise measurements and material selection" },
                { num: "2", title: "Cut & Fit", desc: "Professional cutting and test-fitting" },
                { num: "3", title: "Install", desc: "Secure installation with proper fasteners" },
                { num: "4", title: "Finish", desc: "Fill, sand, and prep for painting or staining" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0b1220]">{step.title}</h3>
                  <p className="text-[#4b5563] text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Trim Carpentry Across St. Louis & Metro East</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Project: Edwardsville Crown Molding Installation</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in Edwardsville wanted to add crown molding to their living room and dining room to give the space a more finished, upscale look. They had gotten quotes from two contractors: one for $2,800 and another for $3,200. Both seemed high for what should be a straightforward job.
              </p>
              <p className="text-gray-700 mb-4">
                We installed 120 linear feet of 4.5-inch crown molding in both rooms, including coping the inside corners for seamless joints and caulking all gaps. The home had 9-foot ceilings, which makes crown molding installation more challenging (you need scaffolding instead of a ladder). We also painted the molding to match the existing trim. Total cost: $1,850.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: The homeowner saved nearly $1,000 compared to contractor quotes, and the crown molding looks professionally installed. The coped joints are tight, the paint is smooth, and the room feels much more elegant.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Trim Carpentry Pricing Guide</h3>
              <p className="text-gray-700 mb-4">
                Trim carpentry costs vary based on material, complexity, and room size. Here's what affects the price:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Material type:</strong> MDF ($8-12/ft installed) vs. hardwood ($15-25/ft installed)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Trim style:</strong> Simple baseboard vs. crown molding vs. wainscoting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Room complexity:</strong> Square rooms vs. angled walls vs. vaulted ceilings</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Finish work:</strong> Pre-primed vs. stain-grade vs. custom paint matching</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We provide detailed estimates with material costs broken out separately. Most trim projects can be completed in 1-2 days.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Why Trim Carpentry Matters in Home Value</h3>
            <p className="text-gray-700 mb-3">
              Quality trim work is one of the most cost-effective ways to increase your home's perceived value. Real estate agents consistently report that homes with crown molding, chair rail, and detailed baseboards sell faster and for higher prices than homes with basic builder-grade trim.
            </p>
            <p className="text-gray-700 mb-3">
              In the St. Louis metro area, where many homes were built in the 1970s-1990s with minimal trim, adding crown molding or upgrading baseboards can make your home stand out in listings. Buyers notice the details—tight joints, smooth paint, and consistent reveals—even if they can't articulate why a room "feels" more finished.
            </p>
            <p className="text-gray-700">
              For older homes in St. Louis city neighborhoods (Soulard, Tower Grove, the Hill), matching existing historic trim profiles is critical. We have access to custom millwork shops that can replicate period-appropriate moldings, ensuring repairs blend seamlessly with original woodwork.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Trim?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Whether you need repairs or want to add new trim to enhance your home, we're here to help.
          </p>
          <p className="text-[#e5e7eb] text-base mb-6 max-w-xl mx-auto">
            Serving homeowners in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>, <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Request Trim Work
              </Button>
            </Link>
            <Link href="/#contact">
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
