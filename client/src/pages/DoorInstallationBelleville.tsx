import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallationBelleville() {
  const seo = useSeoRoute();  const services = [
    {
      title: "Interior Door Installation",
      desc: "Belleville's older housing stock — much of it built in the 1950s through 1980s — often has original hollow-core interior doors that are long overdue for replacement. We install solid-core upgrades, pre-hung doors, and bifold closet doors throughout Belleville homes.",
      items: ["Solid-core door upgrades", "Pre-hung door installation", "Bifold and barn door installation", "Pocket door installation and repair"]
    },
    {
      title: "Exterior Entry Door Installation",
      desc: "Belleville's climate — hot, humid summers and cold winters — puts significant stress on exterior doors. Proper installation with correct shimming, weatherstripping, and threshold sealing is critical to prevent drafting, binding, and energy loss. We install steel and fiberglass entry doors built for Metro East conditions.",
      items: ["Steel and fiberglass entry doors", "French door installation", "Door frame replacement", "Threshold and weatherstripping installation"]
    },
    {
      title: "Storm Door Installation",
      desc: "Storm doors are a cost-effective upgrade for Belleville homes, adding insulation and protecting the primary entry door from weather. We install full-view, ventilating, and retractable screen storm doors sized to fit your existing frame precisely.",
      items: ["Full-view storm doors", "Ventilating storm doors", "Retractable screen doors", "Aluminum and vinyl frame options"]
    },
    {
      title: "Door Frame & Threshold Repair",
      desc: "Many Belleville homes have experienced water intrusion around door frames over the decades, leading to rotted sills, split jambs, and damaged thresholds. We repair or replace frames and thresholds before installing new doors so the installation is built on a solid foundation.",
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
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">Belleville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation & Replacement in Belleville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional door installation for Belleville homes and businesses. Interior doors, exterior entry doors, storm doors, and door frame repairs — installed plumb, sealed tight, and operating smoothly from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Serving Belleville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Door Installation Services in Belleville IL
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Belleville is St. Clair County's largest city, with a diverse housing stock ranging from historic homes near the downtown square to post-war neighborhoods and newer subdivisions along the outer edges. Across all of these, doors are one of the most common service requests — whether it's upgrading aging interior doors, replacing a drafty exterior entry, or installing a storm door for added protection. We handle all of it, and we do the work right.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
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
                Why Belleville Homeowners Call Us for Door Installation
              </h2>
              <p className="text-gray-600 mb-4">
                Belleville's older neighborhoods — particularly those near West Main Street, Mascoutah Avenue, and the historic downtown district — have homes where original doors are decades old and no longer performing well. Swollen frames, drafty thresholds, and hardware that's worn out are all common. In newer areas like the subdivisions off Frank Scott Parkway, the requests tend to be upgrades: solid-core interior doors, storm door additions, and entry door replacements.
              </p>
              <p className="text-gray-600 mb-6">
                Phil has served Belleville and St. Clair County for over 35 years. He does the work himself — no subcontractors — and takes the time to ensure every door is plumb, properly shimmed, and sealed before he leaves.
              </p>
              <div className="space-y-3">
                {[
                  "Doors installed plumb and level — no binding or gaps",
                  "Proper weatherstripping and threshold sealing",
                  "Hardware installation included",
                  "Same-day and next-day appointments available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get a Free Quote Today</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for door installation in Belleville IL. We respond quickly and can often schedule same or next day.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
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
      <section className="py-16 px-6 bg-orange-50 border-y border-orange-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Types We Install in Belleville</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From a single interior door replacement to a full exterior entry upgrade, we handle all door types found in Belleville's diverse housing stock.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Steel Entry Doors", desc: "Durable, energy-efficient, and low-maintenance. The most popular exterior door choice for Belleville homeowners replacing aging wood or aluminum doors." },
              { name: "Fiberglass Entry Doors", desc: "Excellent insulation and won't warp, rot, or dent. Ideal for Belleville homes with south- or west-facing entries that see significant sun and weather exposure." },
              { name: "Solid-Core Interior Doors", desc: "A significant upgrade over hollow-core builder doors. Better sound dampening and a more substantial feel — popular in Belleville bedrooms and home offices." },
              { name: "French Doors", desc: "Interior and exterior French door installation for dining rooms, home offices, and patio entries. Requires precise framing to operate smoothly." },
              { name: "Storm Doors", desc: "Full-view and ventilating storm doors for added insulation and protection. Particularly useful on Belleville homes with older primary entry doors." },
              { name: "Sliding Patio Doors", desc: "Replacement and installation of sliding glass patio doors. We ensure proper track alignment and weatherstripping for smooth, draft-free operation." },
            ].map((type, i) => (
              <div key={i} className="bg-white rounded-xl border border-orange-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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
            Explore more Hero Handyman Pro services in Belleville, or visit our{" "}
            <Link href="/handyman-belleville-il" className="text-orange-600 hover:underline font-medium">Belleville IL handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair Belleville", href: "/drywall-repair-belleville-il" },
              { label: "Deck Repair Belleville", href: "/deck-repair-belleville-il" },
              { label: "Door Repair Belleville", href: "/door-repair-belleville-il" },
              { label: "Carpentry Belleville", href: "/carpentry-services-belleville-il" },
              { label: "All Services", href: "/handyman-services/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-orange-200 text-orange-700 hover:bg-orange-50 text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Install That New Door?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Belleville and all of St. Clair County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
