import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallationStCharles() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">St. Charles, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation in St. Charles MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional door installation for St. Charles County homeowners — entry doors, interior doors, storm doors, and patio doors. Properly hung, plumb, and weathertight the first time.
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
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Installation Services in St. Charles</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            St. Charles County's housing stock spans from 19th-century homes in Old Town St. Charles — where original door openings are rarely square or standard-sized — to modern construction in Cottleville and Wentzville with factory-spec rough openings. We assess every opening before installation and address framing issues before hanging the door, not after.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Entry Door Installation", desc: "Prehung entry door installation including frame, threshold, weatherstripping, and hardware. We ensure a weathertight fit that holds up to St. Charles County's cold winters and humid summers." },
              { title: "Interior Door Installation", desc: "Interior prehung door installation for new openings or replacement of existing doors. We match door heights and profiles in older St. Charles homes where non-standard sizing is common." },
              { title: "Storm Door Installation", desc: "Full-view, ventilating, and retractable screen storm doors installed over existing entry doors. Proper installation prevents the frame racking that causes premature hardware failure." },
              { title: "Patio Door Installation", desc: "Sliding and French patio door installation. We address the framing, threshold, and weathersealing requirements that are often overlooked in DIY installations." },
              { title: "Barn Door Installation", desc: "Sliding barn door hardware and door panel installation for interior applications. We ensure proper wall blocking and header support for smooth, long-lasting operation." },
              { title: "Historic Door Restoration", desc: "Old Town St. Charles homes often have original wood doors worth preserving. We repair, re-hang, and weatherstrip historic doors rather than replacing them when structurally sound." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes a Proper Door Installation</h2>
              <p className="text-gray-600 mb-4">
                A door that's installed out of plumb or out of square will bind, stick, and fail to latch properly — often within the first year. In St. Charles County's newer homes in Cottleville and Wentzville, rough openings are typically standard and square. In older homes near Old Town and the Missouri River corridor, settling can throw openings significantly out of alignment.
              </p>
              <p className="text-gray-600 mb-4">
                We check every rough opening for plumb, level, and square before installing any door. If the opening has settled, we shim and adjust it before setting the door — not after. This is the step most DIY and budget installations skip, and it's why those doors start sticking within a season.
              </p>
              <p className="text-gray-600">
                For exterior doors, we also ensure the threshold is properly sealed and the door is weathertight before we leave. Missouri's cold winters make a properly sealed entry door essential for both comfort and energy efficiency.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Check Rough Opening", desc: "Verify plumb, level, and square. Adjust framing or shim as needed before door installation." },
                { step: "2", title: "Set the Door Unit", desc: "Install the prehung door unit with proper shimming at hinges and latch side for long-term alignment." },
                { step: "3", title: "Secure & Adjust", desc: "Fasten through shims into framing. Adjust hinge and strike positions for smooth operation." },
                { step: "4", title: "Weatherseal & Finish", desc: "Install threshold, weatherstripping, and door sweep. Caulk exterior perimeter. Install hardware." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why St. Charles Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Proper Technique", desc: "We check rough openings for plumb and square before installation — the step most installers skip." },
              { title: "Same-Day Service", desc: "For urgent door replacements, we strive to get to St. Charles the same day or next morning." },
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your protection on every job in St. Charles County." },
              { title: "Historic Home Experience", desc: "Experienced with Old Town St. Charles's non-standard door openings and original wood doors." }
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
            <h2 className="text-3xl font-bold mb-4">Serving St. Charles County & Beyond</h2>
            <p className="text-teal-100 mb-4">
              We install doors throughout St. Charles County — from historic Old Town St. Charles and the Missouri River corridor to newer subdivisions in Cottleville, O'Fallon MO, and Wentzville. We're experienced with both the non-standard openings of older St. Charles homes and the modern rough openings of newer construction.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Chesterfield, Ballwin, and West St. Louis County.
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
            <Link href="/door-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in St. Charles</Button>
            </Link>
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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Install That New Door?</h2>
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
