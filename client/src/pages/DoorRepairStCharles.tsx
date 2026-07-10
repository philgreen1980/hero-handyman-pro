import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorRepairStCharles() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">St. Charles, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair in St. Charles MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Sticking doors, frame damage, hardware failure, and alignment issues fixed for St. Charles County homeowners. We diagnose the real cause and fix it right the first time.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving St. Charles MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Repair Services in St. Charles</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            St. Charles County's clay-heavy soils and Missouri River proximity create seasonal foundation movement that throws door frames out of alignment. Homes along the river corridor and in older St. Charles neighborhoods near Main Street are especially prone to settling-related door problems. We address the frame and hinge issues — not just the symptom.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sticking Door Repair", desc: "Doors that stick or drag are usually caused by seasonal wood swelling, hinge sag, or frame movement from settling. We diagnose the root cause and fix it — not just plane the door edge." },
              { title: "Door Frame Repair", desc: "Damaged, rotted, or out-of-square door frames repaired or replaced. St. Charles's clay soils and river proximity cause seasonal movement that can rack frames over time." },
              { title: "Hinge Repair & Replacement", desc: "Loose, stripped, or broken hinges repaired with proper fasteners. We use longer screws into framing — not just the door jamb — for a lasting fix." },
              { title: "Door Hardware Replacement", desc: "Locksets, deadbolts, knobs, levers, and closers replaced or repaired. We install hardware that matches your door's backset and prep dimensions." },
              { title: "Weatherstripping Replacement", desc: "Worn or damaged weatherstripping replaced on entry doors to restore the seal and reduce drafts. St. Charles winters make a good door seal essential." },
              { title: "Strike Plate Adjustment", desc: "Doors that won't latch or require heavy force to close usually need strike plate adjustment. We adjust or relocate the strike plate so the latch engages cleanly." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Door Problems in St. Charles County Homes</h2>
            <p className="text-gray-600 mb-4">
              St. Charles County's clay-heavy soils expand and contract significantly with seasonal moisture changes. This movement is most pronounced near the Missouri River, where older homes in St. Charles, St. Peters, and along the river corridor experience the most foundation movement. The result is door frames that shift seasonally — doors that stick in summer and gap in winter.
            </p>
            <p className="text-gray-600 mb-4">
              Newer homes in Cottleville and Wentzville are built on engineered foundations that reduce movement, but even these homes see some seasonal door behavior as the house settles in its first few years.
            </p>
            <p className="text-gray-600">
              The most common mistake homeowners make is planing the door edge to fix a sticking problem. This treats the symptom, not the cause — and after the next dry season, the door will gap. We fix the frame and hinge alignment so the door operates correctly in all seasons.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Door Problems We Fix</h3>
            {[
              "Doors that stick or drag in summer humidity",
              "Doors that won't latch without lifting the knob",
              "Doors that swing open or closed on their own",
              "Loose or wobbly door knobs and levers",
              "Deadbolts that are hard to turn or engage",
              "Drafts around entry door frames",
              "Hollow core doors with holes or damage",
              "Exterior doors with rotted bottom rails"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-teal-900 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Serving St. Charles County & Beyond</h2>
            <p className="text-teal-100 mb-4">
              We repair doors throughout St. Charles County — from historic Old Town St. Charles and the Missouri River corridor to newer subdivisions in Cottleville, O'Fallon MO, and Wentzville. We also serve Chesterfield, Ballwin, and West St. Louis County.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Old Town St. Charles", "Cottleville", "O'Fallon MO", "Wentzville", "Chesterfield", "Ballwin"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in St. Charles & West St. Louis County</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in St. Charles</Button>
            </Link>
            <Link href="/deck-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in St. Charles</Button>
            </Link>
            <Link href="/carpentry-services-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in St. Charles</Button>
            </Link>
            <Link href="/handyman-services/door-repair/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Door Installation</Button>
            </Link>
            <Link href="/service-areas/st-charles-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services St. Charles</Button>
            </Link>
            <Link href="/door-repair-chesterfield-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Chesterfield</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Door?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve St. Charles and all of St. Charles County — same-day and next-day appointments available.
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
