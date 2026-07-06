import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import SEO from "@/components/SEO";

export default function SeniorAccessibilityService() {
  const upgrades = [
    "Grab bars",
    "Railings",
    "Threshold ramps",
    "Lever handles",
    "Comfort-height toilets",
    "Lighting upgrades"
  ];

  const approaches = [
    "Respectful consultation",
    "No-pressure recommendations",
    "Phased or full-home upgrades"
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Senior-Friendly & Accessibility Upgrades | Hero Handyman Pro"
        description="Accessibility modifications in St. Louis & Metro East. Install grab bars, railings, threshold ramps, and lever handles. Help seniors age in place safely with respectful, professional home modifications."
        canonicalUrl="https://herohandymanpro.com/handyman-services/senior-accessibility-upgrades/"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Senior-Friendly & Accessibility Upgrades
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            We help seniors and individuals with mobility challenges safely stay in their homes.
          </p>
        </div>
      </section>

      {/* Upgrades We Install Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upgrades We Install</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              Simple modifications can make a big difference in safety and independence at home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Heart className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Safety Upgrades</h3>
              </div>
              <ul className="space-y-4">
                {upgrades.map((upgrade, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <div className="bg-[#ff5b00]/10 rounded-full p-1 mt-0.5">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <span className="text-base">{upgrade}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Blended Safety + Style</h3>
                <p className="text-[#4b5563] mb-4">
                  We install clean, solid hardware that blends into the home. Safety features don't have to look institutional—they can be attractive and functional.
                </p>
                <p className="text-[#374151] text-sm">
                  We help you choose finishes and styles that match your existing décor while providing the support you need.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Why Accessibility Matters</h3>
                <p className="text-white/90 mb-4">
                  Aging in place means staying in the home you love. Simple upgrades can:
                </p>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Prevent falls and injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Increase confidence and independence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Delay or avoid assisted living</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We understand that every home and every person's needs are different. We work with you to find the right solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((approach, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold text-[#0b1220]">{approach}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Upgrades by Room */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Upgrades by Room</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We can help you prioritize upgrades based on where you spend the most time and where risks are highest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Bathroom</h3>
              <ul className="space-y-2 text-[#374151] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Grab bars near toilet and shower</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Comfort-height toilet installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Lever faucet handles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Improved lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Stairs & Hallways</h3>
              <ul className="space-y-2 text-[#374151] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Sturdy handrails on both sides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Better lighting with switches at both ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Non-slip stair treads</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Entrances</h3>
              <ul className="space-y-2 text-[#374151] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Threshold ramps for wheelchairs/walkers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Railings for steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Lever door handles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff5b00]">•</span>
                  <span>Motion-sensor lighting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Home Safer Today</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            We're here to help you or your loved ones stay safe and independent at home. Let's discuss what upgrades make sense for your situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Schedule Accessibility Upgrade
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Request Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
