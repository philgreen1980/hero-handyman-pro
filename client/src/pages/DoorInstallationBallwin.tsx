import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallationBallwin() {
  const seo = useSeoRoute();  const services = [
    {
      title: "Interior Door Installation",
      desc: "Replace hollow-core doors with solid-core upgrades, install new bedroom and bathroom doors, or swap out builder-grade hardware for something more substantial. Ballwin's 1980s–2000s construction era means many homes still have original hollow-core doors that are overdue for an upgrade.",
      items: ["Solid-core door upgrades", "Pre-hung door installation", "Bifold and barn door installation", "Pocket door installation and repair"]
    },
    {
      title: "Exterior Entry Door Installation",
      desc: "A properly installed exterior door is your home's first line of defense against weather, drafts, and security threats. Ballwin's seasonal temperature swings — from humid summers to icy winters — demand a door that's installed plumb and sealed tight to prevent binding, drafting, and premature wear.",
      items: ["Steel and fiberglass entry doors", "French door installation", "Door frame replacement", "Threshold and weatherstripping installation"]
    },
    {
      title: "Storm Door Installation",
      desc: "Storm doors add an extra layer of insulation and protection for Ballwin homes, particularly on north- and west-facing entries that take the brunt of winter weather. We install full-view, ventilating, and retractable screen storm doors to fit your existing frame precisely.",
      items: ["Full-view storm doors", "Ventilating storm doors", "Retractable screen doors", "Aluminum and vinyl frame options"]
    },
    {
      title: "Door Frame & Threshold Repair",
      desc: "A door is only as good as its frame. Rotted sills, split jambs, and damaged thresholds are common in Ballwin homes that have experienced water intrusion around the entry. We repair or replace frames and thresholds before installing new doors so the installation lasts.",
      items: ["Rotted sill and jamb replacement", "Threshold replacement", "Frame squaring and shimming", "Exterior trim and casing repair"]
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Ballwin, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation & Replacement in Ballwin MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional door installation for Ballwin homes. Interior doors, exterior entry doors, storm doors, and door frame repairs — installed plumb, sealed tight, and operating smoothly from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-400" /> Serving Ballwin MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Door Installation Services in Ballwin MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Ballwin's established West County neighborhoods — from Kehrs Mill Road to Clayton Road — are home to a mix of 1970s–2000s construction where doors are frequently in need of replacement or upgrade. Whether it's a builder-grade hollow-core interior door that never felt right or an exterior entry door that drafts in winter, proper installation makes the difference between a door that works and one that becomes a recurring problem.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Why Ballwin Homeowners Call Us for Door Installation
              </h2>
              <p className="text-gray-600 mb-4">
                Ballwin is one of St. Louis County's most established West County communities, with a housing stock that spans several decades. Homes along Kehrs Mill Road and near the Ballwin Athletic Complex tend to be 1980s–1990s construction where original exterior doors are reaching the end of their service life. Newer subdivisions off Clayton Road have more recent builds where interior door upgrades are the more common request.
              </p>
              <p className="text-gray-600 mb-6">
                Phil has been installing and repairing doors in Ballwin and West County for over 35 years. He does the work himself — no subcontractors — and takes the time to ensure every door is plumb, properly shimmed, and sealed before he leaves.
              </p>
              <div className="space-y-3">
                {[
                  "Doors installed plumb and level — no binding or gaps",
                  "Proper weatherstripping and threshold sealing",
                  "Hardware installation included",
                  "Same-day and next-day appointments available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get a Free Quote Today</h3>
              <p className="text-blue-100 mb-6">
                Call Hero Handyman Pro for door installation in Ballwin MO. We respond quickly and can often schedule same or next day.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Request a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 px-6 bg-blue-50 border-y border-blue-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Types We Install in Ballwin</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From a single interior door replacement to a full exterior entry upgrade, we handle all door types found in Ballwin's West County homes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Steel Entry Doors", desc: "Durable, energy-efficient, and low-maintenance. The most popular exterior door choice for Ballwin homeowners replacing aging wood doors." },
              { name: "Fiberglass Entry Doors", desc: "Excellent insulation and won't warp, rot, or dent. Ideal for Ballwin homes with south- or west-facing entries that see significant sun exposure." },
              { name: "Solid-Core Interior Doors", desc: "A significant upgrade over hollow-core builder doors. Better sound dampening and a more substantial feel — popular in Ballwin master bedrooms and home offices." },
              { name: "French Doors", desc: "Interior and exterior French door installation for dining rooms, home offices, and patio entries. Requires precise framing to operate smoothly." },
              { name: "Storm Doors", desc: "Full-view and ventilating storm doors for added insulation and protection. Particularly useful on Ballwin homes with north-facing entries." },
              { name: "Sliding Patio Doors", desc: "Replacement and installation of sliding glass patio doors. We ensure proper track alignment and weatherstripping for smooth, draft-free operation." },
            ].map((type, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-bold text-gray-900">{type.name}</span>
                </div>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Explore more Hero Handyman Pro services in Ballwin, or visit our{" "}
            <Link href="/handyman-ballwin-mo" className="text-blue-600 hover:underline font-medium">Ballwin MO handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair Ballwin", href: "/drywall-repair-ballwin-mo" },
              { label: "Deck Repair Ballwin", href: "/deck-repair-ballwin-mo" },
              { label: "Door Repair Ballwin", href: "/door-repair-ballwin-mo" },
              { label: "Carpentry Ballwin", href: "/carpentry-services-ballwin-mo" },
              { label: "All Services", href: "/handyman-services/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Install That New Door?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Ballwin and all of West St. Louis County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
        </div>
      </section>
    </div>
  );
}
