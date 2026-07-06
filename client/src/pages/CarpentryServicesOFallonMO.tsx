import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function CarpentryServicesOFallonMO() {
  const seoData = {
    title: "Carpentry Services O'Fallon MO | Trim, Wood Rot Repair & Finish Carpentry",
    description: "Expert carpentry services in O'Fallon MO. Trim installation, wood rot repair, exterior carpentry, and finish work. Licensed & insured. Call 800-741-6056.",
    keywords: "carpentry services O'Fallon MO, trim repair O'Fallon Missouri, wood rot repair O'Fallon, finish carpentry O'Fallon MO, carpenter O'Fallon",
    canonicalUrl: "https://herohandymanpro.com/carpentry-services-ofallon-mo"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">O'Fallon, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Carpentry Services in O'Fallon MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Skilled carpentry for O'Fallon MO homeowners. Trim and baseboard repair, wood rot replacement, exterior carpentry, and finish work done with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Free Estimates</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-orange-400" /> Serving O'Fallon MO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Carpentry Services We Provide in O'Fallon MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            O'Fallon MO's newer homes have trim, molding, and exterior wood elements that need skilled attention as they age. Whether it's baseboard that has pulled away from the wall, fascia board that has rotted, or cabinet doors that no longer align, our carpentry work is precise and built to last.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Trim & Baseboard Repair",
                desc: "Trim and baseboards in O'Fallon's newer homes often separate from walls as the structure settles, or get damaged during moves and renovations. We re-secure, replace, and touch up trim work so it looks crisp and clean.",
                items: ["Baseboard repair and replacement", "Door and window casing repair", "Crown molding repair and installation", "Quarter round and shoe molding"]
              },
              {
                title: "Wood Rot Repair",
                desc: "Exterior wood elements such as fascia boards, soffits, window sills, and porch posts are vulnerable to rot in Missouri's humid climate. We identify the extent of rot, remove only what is necessary, and replace with properly primed materials.",
                items: ["Fascia and soffit board replacement", "Window sill and apron repair", "Porch post and column repair", "Exterior trim rot replacement"]
              },
              {
                title: "Cabinet Adjustments",
                desc: "Kitchen and bathroom cabinets in O'Fallon homes often need adjustment as the house settles. Doors that do not close flush, drawers that stick, and hinges that have loosened are all common issues we fix efficiently.",
                items: ["Cabinet door alignment and adjustment", "Hinge replacement and tightening", "Drawer slide repair and replacement", "Cabinet box repair and reinforcement"]
              },
              {
                title: "Exterior Carpentry",
                desc: "From porch railings and steps to fence repairs and pergola maintenance, we handle exterior carpentry projects that keep O'Fallon homes looking great and functioning safely.",
                items: ["Porch railing and step repair", "Fence board and post replacement", "Pergola and arbor repair", "Exterior stair repair and replacement"]
              }
            ].map((service, i) => (
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

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Trusted Carpentry Services in O'Fallon MO
              </h2>
              <p className="text-gray-600 mb-4">
                O'Fallon homeowners in Winghaven, Hawk Ridge, Pheasant Point, and throughout St. Charles County trust Hero Handyman Pro for carpentry work that is precise, clean, and built to last. We bring 30+ years of hands-on carpentry experience to every project.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a single baseboard section replaced or a full exterior trim restoration, we approach every job with the same attention to detail. We also handle pre-sale punch list repairs for O'Fallon homeowners preparing to list their homes.
              </p>
              <div className="space-y-3">
                {[
                  "30+ years of carpentry experience",
                  "Precise cuts and clean, finished results",
                  "Pre-sale punch list repairs available",
                  "Serving all O'Fallon MO neighborhoods"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get Your Carpentry Project Done</h3>
              <p className="text-orange-100 mb-6">
                Call Hero Handyman Pro for carpentry services in O'Fallon MO. We provide free estimates and can typically schedule within 1 to 2 business days.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Request a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">More Handyman Services in O'Fallon MO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Drywall Repair", href: "/drywall-repair-ofallon-mo" },
              { title: "Deck Repair", href: "/deck-repair-ofallon-mo" },
              { title: "Door Repair", href: "/door-repair-ofallon-mo" },
              { title: "Door Installation", href: "/door-installation-ofallon-mo" },
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer">
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <span className="text-orange-600 text-sm font-medium">O'Fallon MO</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/handyman-ofallon-mo">
              <Button variant="outline" className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-50">
                View All O'Fallon MO Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
