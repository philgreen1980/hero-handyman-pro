import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Heart, Phone, DollarSign, Star, ShieldCheck, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const faqs = [
  {
    question: "What is the most important accessibility upgrade for seniors?",
    answer: "Grab bars in the bathroom are consistently the highest-impact upgrade. The bathroom is where the majority of home falls occur — particularly getting in and out of the tub or shower and rising from the toilet. A properly installed grab bar near the toilet and inside the shower can prevent serious injuries. We recommend starting there and expanding to other areas based on your specific mobility needs."
  },
  {
    question: "How much do accessibility upgrades cost?",
    answer: "Costs vary widely by project scope. A single grab bar installation runs $125–$250. A full bathroom accessibility package (grab bars, comfort-height toilet, lever handles, improved lighting) typically costs $600–$1,400. Threshold ramps and handrail additions range from $200–$600 per location. We provide a free, no-obligation quote after a brief consultation — either in person or by phone."
  },
  {
    question: "Do grab bars need to be installed in studs?",
    answer: "Yes — grab bars must be anchored into wall studs or with toggle bolts rated for the load to be safe. A grab bar that pulls out of the wall under body weight is more dangerous than no bar at all. We locate studs with a stud finder, use the correct fasteners for your wall type, and test every bar before we leave. We do not use suction-cup or adhesive grab bars."
  },
  {
    question: "Can accessibility upgrades look attractive, not institutional?",
    answer: "Absolutely. Modern grab bars come in brushed nickel, oil-rubbed bronze, matte black, and polished chrome finishes that match standard bathroom hardware. Lever door handles are available in dozens of styles. Threshold ramps can be painted or stained to blend with flooring. We help you choose finishes that match your existing décor so upgrades feel like natural parts of your home."
  },
  {
    question: "Do you work with occupational therapists or home health agencies?",
    answer: "Yes. We're happy to work from a written recommendation list provided by an occupational therapist or home health agency. If you've already had a home safety assessment, bring that list to your consultation and we'll work through it with you. We can also provide a written scope of work for insurance or Medicaid waiver documentation if needed."
  },
  {
    question: "How long does a typical accessibility upgrade take?",
    answer: "Most single-room upgrades (bathroom grab bars, comfort-height toilet, lever handles) take 2–4 hours. A full-home assessment and installation covering bathroom, stairs, and entrances typically takes one full day. We work at a pace that's comfortable for the household — no rushing, no pressure."
  },
  {
    question: "What areas do you serve for senior accessibility upgrades?",
    answer: "We serve all of Metro East Illinois — O'Fallon, Edwardsville, Belleville, Collinsville, Glen Carbon, Swansea, Shiloh, Fairview Heights — as well as St. Louis, Chesterfield, Ballwin, St. Charles, and Fenton in Missouri. Same-week appointments are typically available."
  },
];

const pricingRanges = [
  { type: "Grab Bar Installation (single)", range: "$125 – $250", note: "Includes stud location, proper anchoring, and load testing" },
  { type: "Grab Bar Package (3 bars)", range: "$300 – $550", note: "Toilet, shower entry, and shower wall — most common bathroom package" },
  { type: "Comfort-Height Toilet", range: "$350 – $650", note: "Includes toilet supply, installation, and haul-away of old unit" },
  { type: "Lever Door Handle (per door)", range: "$75 – $175", note: "Replaces round knobs with ADA-compliant lever handles" },
  { type: "Threshold Ramp", range: "$150 – $400", note: "Aluminum or rubber ramp for doorway threshold transitions" },
  { type: "Handrail Addition", range: "$250 – $600", note: "Stair or hallway handrail, properly anchored to wall studs" },
  { type: "Full Bathroom Package", range: "$600 – $1,400", note: "Grab bars, toilet, lever handles, and lighting — most common full upgrade" },
  { type: "Full-Home Assessment + Install", range: "$900 – $2,500", note: "All rooms, phased or same-day depending on scope" },
];

export default function SeniorAccessibilityService() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/handyman-services/" },
        { label: "Senior & Accessibility Upgrades" }
      ]} />
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4 block">Aging in Place</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Senior-Friendly & Accessibility Upgrades
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                Simple, professional modifications that help seniors and individuals with mobility challenges stay safely in the homes they love. Serving St. Louis and all of Metro East Illinois.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Grab Bars", "Comfort-Height Toilets", "Threshold Ramps", "Lever Handles", "Handrails"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" onClick={() => trackCTAClick('Get Free Accessibility Quote', 'Senior Accessibility Hero')}>
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30">
                    Get Free Quote in 24 Hours
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Senior Accessibility Hero')}>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    800-741-6056
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />)}
                  </div>
                  <span className="text-white font-semibold">4.9 · 127+ Reviews</span>
                </div>
                {[
                  "Grab bars anchored into studs — never adhesive",
                  "Respectful, patient service for seniors",
                  "Finishes that match your existing décor",
                  "Works with OT recommendations",
                  "Same-week appointments available",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <Check className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                    <span className="text-[#e5e7eb]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accessibility Modifications Matter */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Aging in Place: The Right Choice for Most Families</h2>
              <p className="text-[#4b5563] text-lg mb-4">
                Nearly 90% of adults over 65 want to stay in their own homes as they age — and with the right modifications, most can. The bathroom is the most dangerous room in the house for seniors: the CDC estimates that 80% of falls among older adults happen in the bathroom, and a single fall can lead to hospitalization, surgery, or loss of independence.
              </p>
              <p className="text-[#4b5563] mb-4">
                The good news is that targeted modifications — a grab bar here, a comfort-height toilet there, a threshold ramp at the front door — can dramatically reduce fall risk without making your home feel like a medical facility. Modern accessibility hardware is attractive, durable, and designed to blend into any décor.
              </p>
              <p className="text-[#4b5563]">
                Hero Handyman Pro has helped hundreds of Metro East and St. Louis families make these changes. We work at a pace that's comfortable for you, explain every step, and clean up completely when we're done.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: "80%", label: "of senior falls happen in the bathroom", icon: ShieldCheck },
                { stat: "$125", label: "starting cost for a properly installed grab bar", icon: DollarSign },
                { stat: "2–4 hrs", label: "typical time for a full bathroom upgrade", icon: Check },
                { stat: "90%", label: "of seniors prefer to age in their own home", icon: Heart },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#f9fafb] rounded-2xl p-5 border border-[#e5e7eb]">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0b1220]">{item.stat}</p>
                    <p className="text-[#4b5563] text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upgrades We Install — by Room */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Accessibility Upgrades by Room</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">We prioritize upgrades based on where risks are highest and where you spend the most time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                room: "Bathroom",
                icon: Heart,
                items: [
                  "Grab bars near toilet (side and rear)",
                  "Grab bars inside shower/tub",
                  "Comfort-height toilet installation",
                  "Lever faucet handles",
                  "Non-slip bath mat anchoring",
                  "Improved lighting (brighter bulbs, night lights)",
                  "Handheld showerhead installation",
                  "Walk-in shower conversion (with contractor)",
                ]
              },
              {
                room: "Stairs & Hallways",
                icon: ShieldCheck,
                items: [
                  "Sturdy handrails on both sides of stairs",
                  "Handrail extension at top and bottom",
                  "Non-slip stair treads",
                  "Motion-sensor lighting at stair top/bottom",
                  "Hallway grab bars for long corridors",
                  "Stair lift preparation (blocking installation)",
                  "Removal of trip hazards (loose carpet, thresholds)",
                ]
              },
              {
                room: "Entrances & Living Areas",
                icon: Check,
                items: [
                  "Threshold ramps for wheelchairs and walkers",
                  "Handrails for front and back steps",
                  "Lever door handles (replaces round knobs)",
                  "Keypad or push-button door locks",
                  "Motion-sensor exterior lighting",
                  "Peephole lowering for wheelchair users",
                  "Furniture rearrangement for wider pathways",
                ]
              },
            ].map((room, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3">
                    <room.icon className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1220]">{room.room}</h3>
                </div>
                <ul className="space-y-2">
                  {room.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#374151] text-sm">
                      <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Accessibility Upgrade Pricing</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Transparent, upfront pricing — you'll know the cost before we start. These ranges reflect typical projects in the St. Louis and Metro East area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {pricingRanges.map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-5 border border-[#e5e7eb]">
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2 mt-0.5 flex-shrink-0">
                    <DollarSign className="h-4 w-4 text-[#ff5b00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1220] text-sm mb-1">{item.type}</h3>
                    <p className="text-[#ff5b00] font-bold text-base mb-1">{item.range}</p>
                    <p className="text-[#6b7280] text-xs">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4b5563] text-sm">
            * Prices are estimates. Final price confirmed before work begins. Most projects qualify for same-week scheduling.
          </p>
        </div>
      </section>

      {/* Real Project Example */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-2">Real Project: O'Fallon IL Bathroom Safety Upgrade</h2>
            <p className="text-[#4b5563]">A typical full-bathroom accessibility package for a Metro East homeowner.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-4">The Situation</h3>
              <p className="text-[#4b5563] mb-4">
                A family in O'Fallon called after their 78-year-old mother had a near-fall getting out of the shower. She lived alone and wanted to stay in her home, but the bathroom felt unsafe. Her daughter had researched grab bars online but wasn't sure which ones to buy or how to install them safely.
              </p>
              <p className="text-[#4b5563]">
                We scheduled a same-week consultation, assessed the bathroom, and completed the full upgrade in one 4-hour visit.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-4">What We Installed</h3>
              <div className="space-y-2 mb-6">
                {[
                  { item: "18\" grab bar beside toilet (stud-anchored)", cost: "$165" },
                  { item: "24\" grab bar inside shower (stud-anchored)", cost: "$185" },
                  { item: "Comfort-height toilet (ADA height)", cost: "$485" },
                  { item: "Lever faucet handles (2 fixtures)", cost: "$210" },
                  { item: "Handheld showerhead with slide bar", cost: "$145" },
                  { item: "Improved lighting (2 fixtures)", cost: "$195" },
                ].map((line, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#f3f4f6] last:border-0">
                    <span className="text-[#4b5563] text-sm">{line.item}</span>
                    <span className="text-[#ff5b00] font-bold text-sm">{line.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-[#0b1220]">Total Project Cost</span>
                  <span className="text-[#ff5b00] font-bold text-lg">$1,385</span>
                </div>
              </div>
              <p className="text-[#6b7280] text-sm italic">
                "The installer was patient and kind with my mother. She feels so much safer now. Worth every penny." — Daughter, O'Fallon IL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Our Approach to Senior Home Modifications</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              We understand that every person's needs are different. We work with you — and your family — to find the right solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Free Consultation", desc: "We discuss your needs by phone or in person. No pressure, no upselling — just honest recommendations." },
              { num: "2", title: "Clear Written Quote", desc: "You receive a detailed, itemized quote before any work begins. No surprises." },
              { num: "3", title: "Professional Installation", desc: "Every grab bar is anchored into studs. Every toilet is properly sealed. Every lever handle is tested." },
              { num: "4", title: "Patient, Respectful Service", desc: "We work at your pace. We explain what we're doing. We clean up completely when we're done." },
            ].map((step, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] text-center">
                <div className="bg-[#ff5b00] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#0b1220] mb-2">{step.title}</h3>
                <p className="text-[#4b5563] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Senior Accessibility Upgrades"
            heading="Get Your Free Accessibility Upgrade Quote"
            subheading="Tell us what you need and we'll respond within 24 hours with a clear, upfront estimate. No obligation."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-2">What Families Are Saying</h2>
            <div className="flex items-center justify-center gap-2 text-[#ff5b00]">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#ff5b00]" />)}
              <span className="text-[#4b5563] ml-2">4.9 average · 127+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Phil installed grab bars and a comfort-height toilet for my 82-year-old father. He was patient, explained everything, and the work is solid. Dad feels much safer now.", author: "Linda K., Edwardsville IL" },
              { text: "We needed threshold ramps and lever handles throughout the house for my wife's walker. Hero Handyman did it all in one day. Professional and reasonably priced.", author: "Robert M., O'Fallon IL" },
              { text: "I was nervous about having workers in the house with my elderly mother. They were incredibly respectful and kind. The grab bars look great and feel rock solid.", author: "Susan T., Belleville IL" },
            ].map((t, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-[#ff5b00] text-[#ff5b00]" />)}
                </div>
                <p className="text-[#374151] italic mb-4">"{t.text}"</p>
                <p className="text-[#6b7280] text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Senior Accessibility FAQs</h2>
            <p className="text-[#4b5563]">Common questions from Metro East and St. Louis families about home accessibility modifications.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-14 px-6 bg-[#0b1220] text-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Serving Metro East & St. Louis Families</h2>
              <p className="text-[#e5e7eb] mb-4">
                We provide senior accessibility upgrades throughout O'Fallon, Edwardsville, Belleville, Collinsville, Glen Carbon, Swansea, Shiloh, and Fairview Heights in Illinois, as well as St. Louis, Chesterfield, Ballwin, St. Charles, and Fenton in Missouri.
              </p>
              <p className="text-[#e5e7eb] mb-4">
                Many Metro East homes were built in the 1960s–1980s and have standard bathroom layouts that can be upgraded without major renovation. We work within existing plumbing and framing in most cases, keeping costs manageable.
              </p>
              <p className="text-[#9ca3af] text-sm">
                We are happy to work from occupational therapist recommendations or Medicaid waiver documentation. Call us to discuss your specific situation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff5b00]">Helpful Resources</h3>
              <div className="space-y-3">
                <Link href="/handyman-pricing/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <DollarSign className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Full Handyman Pricing Guide</p>
                    <p className="text-[#9ca3af] text-xs">Transparent pricing for all services</p>
                  </div>
                </Link>
                <Link href="/service-areas/ofallon-handyman-services/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <ArrowRight className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">O'Fallon IL Handyman Services</p>
                    <p className="text-[#9ca3af] text-xs">Local service page for O'Fallon and Metro East</p>
                  </div>
                </Link>
                <Link href="/handyman-services/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <ArrowRight className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">All Handyman Services</p>
                    <p className="text-[#9ca3af] text-xs">Full list of services we offer</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Accessibility Upgrades Near You</h2>
          <p className="text-[#4b5563] mb-6">We serve all of St. Louis and Metro East Illinois. Find your city below for local availability.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "St. Charles, MO", href: "/service-areas/st-charles-handyman-services/" },
              { name: "Fenton, MO", href: "/service-areas/fenton-handyman-services/" },
              { name: "St. Louis, MO", href: "/service-areas/st-louis-handyman-services/" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <Button variant="outline" className="rounded-full border-[#e5e7eb] hover:border-[#ff5b00] hover:text-[#ff5b00]">
                  {area.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }) }} />
    </div>
  );
}
