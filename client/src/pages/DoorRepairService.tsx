import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, DoorOpen, Star } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import SEO from "@/components/SEO";

export default function DoorRepairService() {
  const seoData = {
    title: "Door Installation & Repair | St. Louis & Metro East | Hero Handyman Pro",
    description: "Professional door installation & repair in St. Louis. Fix sticking doors, replace entry doors, install storm doors. Licensed, 30+ years experience. Free estimates!",
    keywords: "door repair, door installation, entry door replacement, storm door installation, interior door repair, St Louis door repair",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/door-repair"
  };

  const services = [
    "Entry door installation",
    "Storm doors",
    "Sliding doors",
    "Interior door replacement",
    "Jamb & threshold repair",
    "Lockset upgrades",
    "Weatherstripping & adjustments"
  ];

  const expectations = [
    { title: "Smooth operation", desc: "No more sticking, scraping, or hard-to-close doors" },
    { title: "Tight weather seal", desc: "Eliminate drafts and improve energy efficiency" },
    { title: "Secure latching", desc: "Doors that close properly and lock securely" },
    { title: "Clean, finished appearance", desc: "Professional installation with attention to detail" }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Door Installation & Repair
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto">
            We fix sticking doors, replace damaged frames, and install new entry and interior doors.
          </p>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl">
              From simple adjustments to complete door replacements, we handle all your door service needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">What We Do</h3>
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
                <h3 className="text-xl font-bold mb-4 text-[#0b1220]">Repair vs Replace</h3>
                <p className="text-[#4b5563] mb-4">
                  Not every door problem requires a full replacement. We diagnose the door's condition and recommend the best solution for your situation and budget.
                </p>
                <p className="text-[#374151] text-sm">
                  Whether it's a simple adjustment, hardware upgrade, or complete door replacement, we'll give you honest advice on what makes the most sense.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Common Door Problems</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Doors that stick or scrape</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Drafty or poorly sealed doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Damaged frames or thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Broken or outdated hardware</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Expect</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              When we complete your door service, you'll enjoy these improvements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expectations.map((item, i) => (
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

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Hero Handyman Pro for Door Work?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Precision Installation</h3>
                <p className="text-[#4b5563] text-sm">
                  Proper door installation requires precision—we ensure perfect fit and function
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Quality Hardware</h3>
                <p className="text-[#4b5563] text-sm">
                  We use reliable hardware and materials that stand up to daily use
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#ff5b00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0b1220]">Clean Workmanship</h3>
                <p className="text-[#4b5563] text-sm">
                  We leave your home clean and your doors looking and working great
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
              Get answers to common questions about our door installation and repair services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={[
              {
                question: "How long does a typical door installation take?",
                answer: "Most door installations can be completed in 2-4 hours, depending on the complexity. A simple interior door replacement might take 1-2 hours, while a full exterior door installation with frame work could take 3-4 hours. We'll give you an accurate time estimate when we assess your specific project."
              },
              {
                question: "Do you provide free estimates for door repair?",
                answer: "Yes! We provide free, no-obligation estimates for all door repair and installation projects. We can often give you a ballpark estimate over the phone, but we prefer to see the door in person to provide the most accurate quote and ensure we understand exactly what you need."
              },
              {
                question: "Should I repair or replace my door?",
                answer: "It depends on the condition of your door and frame. Minor issues like sticking, squeaking, or loose hardware can usually be repaired cost-effectively. However, if your door has significant damage, rot, warping, or major drafts, replacement is often the better long-term investment. We'll assess your door honestly and recommend the most cost-effective solution."
              },
              {
                question: "What types of doors do you work with?",
                answer: "We work with all types of doors including entry doors, storm doors, sliding patio doors, French doors, interior doors, closet doors, and pocket doors. We handle wood, fiberglass, steel, and composite materials. Whether it's a standard size or custom door, we have the experience to install it properly."
              },
              {
                question: "Do you offer a warranty on door installation?",
                answer: "Yes! All our door installation work comes with a lifetime labor warranty. This covers any issues related to our installation workmanship. The doors and hardware we install are covered by manufacturer warranties, which we'll provide documentation for at the time of installation."
              },
              {
                question: "Can you match my existing door style?",
                answer: "Absolutely! We can help you find doors that match your existing style, or we can update your look entirely. We work with quality suppliers who offer a wide range of styles, finishes, and hardware options. Bring us a photo or description of what you're looking for, and we'll help you find the perfect match."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Customer Reviews CTA */}
      <section className="py-12 px-6 bg-teal-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            See What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Read authentic reviews from homeowners who trusted us with their door installation projects.
          </p>
          <Link href="/reviews/door-installation/">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8"
              onClick={() => trackCTAClick('Read Customer Reviews', 'Door Installation - Reviews CTA')}
            >
              <Star className="w-5 h-5 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Local Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Door Repair Experience in Your Area</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Recent Fix: O'Fallon Sticking Door</h3>
              <p className="text-gray-700 mb-4">
                A homeowner in O'Fallon's Winghaven neighborhood called us about a front door that wouldn't close properly. The door had been sticking for months, requiring force to latch, and was letting in drafts that drove up their heating bill.
              </p>
              <p className="text-gray-700 mb-4">
                After inspection, we found the issue: minor foundation settling (common in homes built on St. Louis clay soil) had shifted the door frame slightly. We adjusted the hinges, planed the door edge where it was binding, and installed a new weatherstrip. The entire repair took 90 minutes and cost $275.
              </p>
              <p className="text-gray-700 font-semibold">
                Result: The door now closes smoothly, the drafts are gone, and the homeowner estimates they're saving $30-40/month on heating costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">What Door Repairs Cost</h3>
              <p className="text-gray-700 mb-4">
                Most door repairs in the St. Louis and Metro East area range from $150 to $800, depending on the problem. Here's the typical breakdown:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hinge adjustment/replacement:</strong> $150-$300</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Door planing (sticking doors):</strong> $200-$400</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Lockset/hardware replacement:</strong> $200-$500</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Frame repair/adjustment:</strong> $300-$600</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Full door replacement:</strong> $400-$1,200+ (depending on door quality)</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Every estimate includes parts and labor with no hidden fees. If we can fix it instead of replacing it, we'll tell you.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Why St. Louis Area Doors Stick and Sag</h3>
            <p className="text-gray-700 mb-3">
              If you live in an older St. Louis home—especially in neighborhoods like Soulard, Tower Grove, or the Hill—you've probably dealt with sticking doors. The combination of wood expansion from humidity changes and minor foundation settling creates the perfect conditions for door problems.
            </p>
            <p className="text-gray-700">
              In Metro East Illinois homes, we see similar issues. The seasonal temperature swings cause wood doors to expand in summer and contract in winter. Add in the clay-heavy soil that shifts with moisture, and you've got doors that work fine in October but won't close in July.
            </p>
            <p className="text-gray-700 mt-3">
              The good news? Most door problems are fixable without replacement. A skilled handyman can adjust hinges, plane edges, and reset frames to restore smooth operation—usually in under two hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Door Problems?</h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a simple adjustment or a complete door replacement, we're here to help.
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
            <Link href="/#contact?service=door-repair">
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
