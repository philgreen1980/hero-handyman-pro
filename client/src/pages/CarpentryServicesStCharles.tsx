import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function CarpentryServicesStCharles() {
  const seoData = {
    title: "Carpentry Services St. Charles MO | Trim, Wood Rot Repair & Exterior Carpentry",
    description: "Professional carpentry services in St. Charles MO — trim installation, wood rot repair, exterior carpentry, and finish work. Hero Handyman Pro serves all of St. Charles County.",
    keywords: "carpentry services St. Charles MO, wood rot repair St. Charles, trim installation St. Charles MO, exterior carpentry St. Charles, finish carpentry St. Charles County",
    canonicalUrl: "https://herohandymanpro.com/carpentry-services-st-charles-mo"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">St. Charles, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Carpentry Services in St. Charles MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trim installation, wood rot repair, exterior carpentry, and finish work for St. Charles County homeowners. Skilled craftsmanship that respects your home's character.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving St. Charles MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services in St. Charles</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            St. Charles County's housing stock spans from 19th-century homes in Old Town St. Charles to modern construction in Cottleville and Wentzville. Older homes near Main Street and the Missouri River often have original wood trim profiles that require matching or custom milling. Newer homes typically use standard profiles that are easier to source. We work with both.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Interior Trim Installation", desc: "Baseboard, door casing, window casing, crown molding, and chair rail installation. We match existing profiles in older St. Charles homes and install standard profiles in newer construction." },
              { title: "Wood Rot Repair", desc: "Rotted exterior trim, sill plates, fascia, and soffits repaired or replaced. Missouri's humid summers and wet springs accelerate wood decay on north-facing and shaded surfaces." },
              { title: "Exterior Trim Repair", desc: "Fascia boards, soffits, corner boards, and decorative trim repaired or replaced. We use moisture-resistant materials on exterior applications to extend service life." },
              { title: "Stair & Railing Carpentry", desc: "Stair treads, risers, newel posts, balusters, and handrails repaired or replaced. We match existing profiles and wood species in older St. Charles homes." },
              { title: "Built-In Carpentry", desc: "Shelving, built-in bookcases, window seats, and storage solutions built to fit your space. We design for function and match your home's existing style." },
              { title: "Finish Carpentry", desc: "Wainscoting, coffered ceilings, fireplace surrounds, and decorative millwork. We handle the detail work that defines a room's character." }
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Carpentry in St. Charles County Homes</h2>
            <p className="text-gray-600 mb-4">
              Old Town St. Charles is one of Missouri's most historic neighborhoods, with homes dating to the early 1800s. These properties often have original wood details — wide-plank floors, hand-milled trim profiles, and decorative millwork — that require careful matching when repairs are needed. We take the time to source or mill matching profiles rather than substituting modern stock trim that looks out of place.
            </p>
            <p className="text-gray-600 mb-4">
              Homes along the Missouri River corridor are particularly vulnerable to wood rot due to the high humidity and seasonal flooding that affects the area. We frequently repair and replace rotted sill plates, exterior trim, and porch framing in these neighborhoods.
            </p>
            <p className="text-gray-600">
              Newer subdivisions in Cottleville and Wentzville use standard modern profiles that are straightforward to match and repair. We handle both ends of the spectrum — historic restoration-quality work and efficient modern repairs.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Carpentry Projects in St. Charles</h3>
            {[
              "Baseboard and door casing replacement after flooring install",
              "Rotted fascia and soffit repair on older homes",
              "Exterior trim replacement on river-adjacent properties",
              "Crown molding installation in dining rooms and master bedrooms",
              "Stair tread replacement on aging staircases",
              "Window sill and apron repair from water infiltration",
              "Built-in shelving and storage in older homes without closets",
              "Porch column and post repair on historic properties"
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
              We provide carpentry services throughout St. Charles County — from historic Old Town St. Charles and the Missouri River corridor to newer subdivisions in Cottleville, O'Fallon MO, and Wentzville. We also serve Chesterfield, Ballwin, and West St. Louis County.
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
            <Link href="/door-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in St. Charles</Button>
            </Link>
            <Link href="/carpentry-services">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Carpentry Services</Button>
            </Link>
            <Link href="/service-areas/st-charles-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services St. Charles</Button>
            </Link>
            <Link href="/carpentry-services-chesterfield-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Chesterfield</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Carpentry Project?</h2>
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
