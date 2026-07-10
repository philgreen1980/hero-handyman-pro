import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorRepairGlenCarbon() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Glen Carbon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair in Glen Carbon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Sticking doors, broken hardware, damaged frames, and storm door repairs for Glen Carbon homeowners. Fast, reliable service with same-day and next-day availability throughout Madison County.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Glen Carbon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Repair Services in Glen Carbon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Glen Carbon's 1990s–2000s construction era means most homes have standard pre-hung interior and exterior doors that are now reaching the age where hinges sag, frames shift, and weatherstripping fails. Madison County's clay soil causes seasonal foundation movement that throws door frames out of square — the most common cause of sticking doors we see in the area.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sticking & Binding Doors", desc: "Doors that stick in summer or bind in winter are usually caused by seasonal wood movement or frame settling. We diagnose the cause and fix it properly — not just plane off wood that will bind again next season." },
              { title: "Exterior Door Repair", desc: "Weather exposure, foundation movement, and hardware wear all affect exterior doors. We repair frames, adjust hinges, replace weatherstripping, and restore proper operation." },
              { title: "Interior Door Repair", desc: "Sagging hinges, damaged door stops, and misaligned latches repaired. We also repair hollow-core doors damaged by impacts or doorknob holes." },
              { title: "Storm Door Repair", desc: "Broken closers, bent frames, damaged screens, and misaligned latches on storm doors repaired or replaced. Glen Carbon's wind exposure is hard on storm door hardware." },
              { title: "Door Hardware Repair", desc: "Broken locksets, loose hinges, damaged strike plates, and worn door handles replaced. We stock common hardware and can source specialty items." },
              { title: "Door Frame Repair", desc: "Rotted or damaged door frames repaired or replaced. We also repair frames damaged by forced entry or impact." }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Repair vs. Replace — Honest Assessment</h2>
              <p className="text-gray-600 mb-4">
                Not every door problem requires a full replacement. In Glen Carbon's 1990s–2000s homes, most door issues are caused by hinge wear, frame settling, or weatherstripping failure — all of which are repairable at a fraction of replacement cost.
              </p>
              <p className="text-gray-600 mb-4">
                We give you an honest assessment before recommending replacement. If the door slab is sound and the frame is square, repair is almost always the right call. If the frame has rotted through or the door has been damaged beyond repair, we'll tell you that too — and give you a fair replacement quote.
              </p>
              <p className="text-gray-600">
                Glen Carbon's clay soil causes more frame settling than most homeowners expect. A door that sticks seasonally is usually a settling issue, not a door problem — and planing the door without addressing the frame just means it will bind again in a year.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Repair: Sticking & Binding", desc: "Hinge adjustment, frame shimming, or minor planing. Usually $75–$200 depending on cause." },
                { title: "Repair: Hardware Replacement", desc: "New lockset, hinges, or strike plate. Usually $100–$250 including parts." },
                { title: "Repair: Weatherstripping", desc: "New weatherstripping and door sweep. Usually $75–$150. Improves energy efficiency immediately." },
                { title: "Replace: Rotted Frame", desc: "When the frame has rotted through, replacement is necessary. We handle full prehung door installation." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Glen Carbon Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Honest Diagnosis", desc: "We tell you whether repair or replacement makes more sense — and why. No upselling." },
              { title: "Same-Day Service", desc: "For urgent door repairs, we strive to get to Glen Carbon the same day or next morning." },
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your protection on every job." },
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
            <h2 className="text-3xl font-bold mb-4">Serving Glen Carbon & Madison County</h2>
            <p className="text-teal-100 mb-4">
              We repair doors throughout Glen Carbon — from established neighborhoods near the Edwardsville border to newer subdivisions off IL-159. Glen Carbon's clay-heavy soil causes more foundation movement than homeowners expect, and we regularly diagnose sticking doors that are actually frame-settling issues rather than door problems.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Edwardsville, Maryville, Collinsville, Troy, and surrounding Madison County communities.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Downtown Glen Carbon", "Edwardsville Border", "IL-159 Corridor", "Glen Carbon Elementary Area", "Maryville & Troy", "Collinsville & Edwardsville"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Glen Carbon & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Glen Carbon</Button>
            </Link>
            <Link href="/deck-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Glen Carbon</Button>
            </Link>
            <Link href="/carpentry-services-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Glen Carbon</Button>
            </Link>
            <Link href="/handyman-services/door-repair/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Installation</Button>
            </Link>
            <Link href="/service-areas/glen-carbon-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Glen Carbon</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Door?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Glen Carbon and all of Madison County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
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
