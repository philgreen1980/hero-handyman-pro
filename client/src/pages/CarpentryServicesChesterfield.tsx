import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CarpentryServicesChesterfield() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Chesterfield, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Carpentry Services in Chesterfield MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Skilled carpentry work for Chesterfield homeowners — from trim repairs and cabinet adjustments to custom built-ins and framing work. Craftsmanship that matches the quality of your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Free Estimates</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-400" /> Serving Chesterfield MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Carpentry Services We Provide in Chesterfield
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Chesterfield's homes range from 1980s ranch-styles with standard trim packages to custom-built estates with elaborate millwork. Both require a carpenter who understands wood movement, proper fastening, and finish quality. We bring that level of care to every job, whether it's a simple trim repair or a more involved custom project.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Trim Repair",
                desc: "Baseboards, door casings, crown molding, and window trim take daily abuse and eventually crack, split, or pull away from walls. In Chesterfield's newer homes, MDF trim is common and requires specific repair techniques. We repair or replace damaged sections and caulk and fill for a seamless finish.",
                items: ["Baseboard repair and replacement", "Door casing and window trim repair", "Crown molding repair and re-attachment", "MDF and wood trim matching"]
              },
              {
                title: "Framing Repairs",
                desc: "Damaged framing — from water infiltration, pest activity, or renovation work — affects structural integrity and the performance of everything attached to it. We repair or sister damaged studs, headers, and blocking to restore proper support before finishing work proceeds.",
                items: ["Stud sistering and reinforcement", "Header repair and replacement", "Blocking installation for fixtures", "Post-water-damage framing repair"]
              },
              {
                title: "Cabinet Adjustments",
                desc: "Kitchen and bathroom cabinets in Chesterfield's homes shift over time as houses settle. Doors that won't close, drawers that stick, and hinges that sag are all fixable without cabinet replacement. We adjust, align, and repair cabinets to operate smoothly again.",
                items: ["Hinge adjustment and replacement", "Drawer slide repair and replacement", "Door alignment and gap correction", "Cabinet hardware installation"]
              },
              {
                title: "Custom Carpentry",
                desc: "Built-in shelving, mudroom benches, window seats, and closet systems add function and value to Chesterfield homes. We design and build custom carpentry solutions that fit your space precisely and match your existing finishes.",
                items: ["Built-in shelving and bookcases", "Mudroom bench and storage systems", "Window seat construction", "Closet organization installation"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context + CTA */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Carpentry That Matches Chesterfield's Standards
              </h2>
              <p className="text-gray-600 mb-4">
                Chesterfield homeowners expect quality. A trim repair that doesn't match the existing profile, a cabinet door that's slightly off-level, or a built-in that doesn't fit the space precisely — these details matter in a well-maintained home.
              </p>
              <p className="text-gray-600 mb-6">
                We've completed carpentry projects throughout Chesterfield, from quick trim repairs in Chesterfield Valley townhomes to custom built-ins in the larger homes near Kehrs Mill Road. We take pride in finish quality and attention to detail.
              </p>
              <div className="space-y-3">
                {[
                  "Precise trim matching and profile replication",
                  "Paint-ready finish on all carpentry work",
                  "Custom projects built to your specifications",
                  "Experienced with all wood species and MDF"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get a Free Carpentry Quote</h3>
              <p className="text-amber-100 mb-6">
                Call Hero Handyman Pro for professional carpentry services in Chesterfield MO. Free estimates, honest pricing, quality results.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-amber-700 hover:bg-amber-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
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

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Explore more Hero Handyman Pro services in Chesterfield, or visit our{" "}
            <Link href="/handyman-chesterfield-mo" className="text-amber-600 hover:underline font-medium">Chesterfield MO handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair Chesterfield", href: "/drywall-repair-chesterfield-mo" },
              { label: "Deck Repair Chesterfield", href: "/deck-repair-chesterfield-mo" },
              { label: "Door Installation Chesterfield", href: "/door-installation-chesterfield-mo" },
              { label: "All Services", href: "/handyman-services/" },
              { label: "Service Areas", href: "/service-areas/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-amber-200 text-amber-700 hover:bg-amber-50 text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
