import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Lightbulb } from "lucide-react";
import SEO from "@/components/SEO";

export default function CeilingFanService() {
  const seoData = {
    title: "Ceiling Fan & Light Installation | Local Handyman Pros – Hero Handyman Pro®",
    description: "Professional ceiling fan & light installation by experienced local handymen. Quality workmanship, fair pricing, and dependable service. Request your free estimate today.",
    keywords: "ceiling fan installation, light fixture installation, electrical fixtures, ceiling fan repair",
    canonicalUrl: "https://herohandymanpro.com/services/electrical-fixtures"
  };
  const services = [
    "Ceiling fan installs",
    "Light fixture swaps",
    "Switch & dimmer replacements",
    "Disposal of old fixtures"
  ];

  const whyPro = [
    { title: "Correct mounting", desc: "Proper support for safe, wobble-free operation" },
    { title: "Safe wiring", desc: "Code-compliant electrical connections" },
    { title: "Clean installation", desc: "Professional finish with no visible wires or gaps" },
    { title: "Balanced fan operation", desc: "Properly balanced blades for quiet, smooth performance" }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Ceiling Fan & Light Fixture Installation
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            Brighten your home with safe, professional fixture installation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From ceiling fans to chandeliers, we handle all types of light fixture and fan installations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Lightbulb className="h-8 w-8 text-[#ff5b00]" />
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

            <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Common Installations</h3>
              <p className="text-white/90 mb-4">
                We install a wide variety of fixtures:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Ceiling fans with lights or remotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Chandeliers and pendant lights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Recessed lighting upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Track lighting and modern fixtures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire a Pro */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hire a Pro</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Electrical work requires expertise. Here's what you get with professional installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyPro.map((item, i) => (
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

      {/* Installation Process */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We make fixture installation simple and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Turn off power", desc: "Safety first—we shut off the circuit and verify it's dead" },
              { num: "2", title: "Remove old fixture", desc: "Carefully disconnect and dispose of your old fixture" },
              { num: "3", title: "Install new fixture", desc: "Mount and wire your new fan or light securely" },
              { num: "4", title: "Test & balance", desc: "Verify operation and balance ceiling fans for smooth performance" }
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

      {/* Safety & Code Compliance */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Safety & Code Compliance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Electrical Safety</h3>
                <p className="text-[#4b5563] mb-4">
                  Improper wiring can cause fires, shocks, or fixture failure. We follow all electrical codes and use proper techniques to ensure your safety.
                </p>
                <ul className="space-y-2 text-[#374151] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Proper wire sizing and connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Secure mounting to ceiling joists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Grounding for safety</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Ceiling Fan Specifics</h3>
                <p className="text-[#4b5563] mb-4">
                  Ceiling fans require special mounting boxes rated for the weight and vibration. We ensure your fan is installed safely and operates smoothly.
                </p>
                <ul className="space-y-2 text-[#374151] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Fan-rated electrical box installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Blade balancing for quiet operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5b00]">✓</span>
                    <span>Remote or wall switch setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Lighting?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Let us handle the installation so you can enjoy your new ceiling fan or light fixture worry-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Book Fixture Installation
              </Button>
            </Link>
            <Link href="/#contact?service=ceiling-fan">
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
