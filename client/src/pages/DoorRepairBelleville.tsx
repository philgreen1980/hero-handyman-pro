import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorRepairBelleville() {
  const seoData = {
    title: "Door Repair & Installation Belleville IL | Hero Handyman Pro",
    description: "Door repair and installation in Belleville IL — sticking doors, broken frames, entry door replacement, storm doors, and hardware. Call Hero Handyman Pro today.",
    keywords: "door repair Belleville IL, door installation Belleville, entry door replacement Belleville, door frame repair Belleville IL, storm door installation Belleville",
    canonicalUrl: "https://herohandymanpro.com/door-repair-belleville-il"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Belleville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair & Installation in Belleville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Sticking doors, broken frames, drafty entry doors, and hardware that won't latch — all fixed by experienced craftsmen. We serve Belleville and all of St. Clair County.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Belleville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Repair & Installation Services in Belleville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Belleville's older housing stock — many homes built in the 1950s through 1980s — means doors that have settled, frames that have shifted, and hardware that has worn out. St. Clair County's humid summers and cold winters cause wood frames to expand and contract, making sticking doors one of the most common repair calls we get.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Interior Door Repair", desc: "Doors that stick, won't latch, or have sagging hinges repaired and adjusted. We plane, shim, and re-hang for a smooth swing." },
              { title: "Exterior & Entry Door Replacement", desc: "Drafty, damaged, or outdated entry doors replaced with properly fitted units. Includes frame repair and weatherstripping." },
              { title: "Storm Door Installation", desc: "Storm doors add a layer of insulation and protect your entry door from Belleville's weather. We install and adjust for a tight fit." },
              { title: "Door Frame Repair", desc: "Rotted or damaged door frames repaired or replaced. Common in Belleville's older homes where moisture has worked into wood frames over decades." },
              { title: "Sliding & Patio Door Repair", desc: "Sliding doors that jump the track, won't lock, or have worn rollers repaired. We also replace broken glass panels." },
              { title: "Hardware & Lockset Installation", desc: "Deadbolts, knobs, levers, and smart locks installed or replaced. We ensure proper alignment so hardware functions smoothly." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Repair vs. Replace — Honest Advice</h2>
              <p className="text-gray-600 mb-4">
                Not every door problem requires a full replacement. Many Belleville homeowners are surprised to learn that a sticking door can be fixed in under an hour, or that a drafty door just needs new weatherstripping rather than a new unit.
              </p>
              <p className="text-gray-600 mb-4">
                We give you an honest assessment. If a repair will solve the problem for years, we'll say so. If the door or frame is too far gone and replacement is the better value, we'll tell you that too — with a clear cost comparison.
              </p>
              <p className="text-gray-600">
                Common repairs that avoid replacement: hinge adjustment, planing a swollen door, replacing worn weatherstripping, re-keying locks, and replacing a damaged threshold.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { situation: "Door sticks in summer only", recommendation: "Repair — plane the high spot after humidity drops, or adjust hinges" },
                { situation: "Door won't latch or lock", recommendation: "Repair — strike plate adjustment or latch replacement" },
                { situation: "Drafts around the door", recommendation: "Repair — new weatherstripping and door sweep" },
                { situation: "Rotted bottom rail or frame", recommendation: "Replace — rot spreads and structural integrity is compromised" },
                { situation: "Door warped beyond adjustment", recommendation: "Replace — warped doors can't be planed back to flat" },
                { situation: "Security upgrade needed", recommendation: "Hardware replacement — new deadbolt and reinforced strike plate" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.situation}</p>
                  <p className="text-sm text-teal-700">{item.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Belleville Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Honest Assessment", desc: "We tell you whether repair or replacement is the better value — no upselling." },
              { title: "Proper Fit", desc: "Doors are hung level and plumb, with proper clearances so they swing and latch correctly for years." },
              { title: "Same-Day Availability", desc: "For urgent repairs, we strive to get to Belleville the same day or next morning." },
              { title: "Transparent Pricing", desc: "Clear estimate before we start. No surprises when the job is done." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-6 bg-teal-900 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Serving Belleville & St. Clair County</h2>
            <p className="text-teal-100 mb-4">
              We repair and install doors throughout Belleville — from the historic homes near the downtown square and Mascoutah Avenue to newer construction near Scott AFB and Frank Scott Parkway. Older Belleville homes often have non-standard door openings that require custom fitting; we have the tools and experience to handle them.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Swansea, Shiloh, O'Fallon, Fairview Heights, and Mascoutah — all within our regular service area.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Historic Downtown Belleville", "Scott AFB Area", "Frank Scott Parkway", "Swansea & Shiloh", "Fairview Heights", "Mascoutah"].map((area, i) => (
              <div key={i} className="bg-teal-800 rounded-xl p-4 text-center">
                <p className="text-teal-100 text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Belleville & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Belleville</Button>
            </Link>
            <Link href="/deck-repair-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Belleville</Button>
            </Link>
            <Link href="/carpentry-services-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Belleville</Button>
            </Link>
            <Link href="/door-installation">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Door Installation</Button>
            </Link>
            <Link href="/handyman-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Belleville</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Door?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Belleville and all of St. Clair County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-teal-600 text-teal-600 hover:bg-teal-50">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
