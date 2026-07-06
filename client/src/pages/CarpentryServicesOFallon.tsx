import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CarpentryServicesOFallon() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">O'Fallon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Carpentry Services in O'Fallon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Skilled carpentry for O'Fallon homeowners. Trim repair, framing, cabinet adjustments, and custom finish work — craftsmanship that lasts.
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving O'Fallon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services in O'Fallon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            From replacing damaged baseboards to building custom built-ins, Hero Handyman Pro delivers quality carpentry work for O'Fallon homeowners. Phil has 35+ years of hands-on experience with finish carpentry, framing repairs, and custom woodwork.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trim Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Trim Repair & Replacement</h3>
              <p className="text-gray-600 text-sm">
                Baseboards, door casings, window trim, and crown molding repair and replacement. O'Fallon's newer homes often have builder-grade trim that chips and splits easily. We match existing profiles or upgrade to more durable options — caulked, primed, and ready for paint.
              </p>
            </div>

            {/* Framing Repairs */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Framing Repairs</h3>
              <p className="text-gray-600 text-sm">
                Damaged wall framing from water intrusion, pest damage, or renovation work needs proper structural repair before finishing. We sister damaged studs, repair rotted sill plates, and reinforce compromised framing members in O'Fallon homes — ensuring walls are solid before drywall goes back up.
              </p>
            </div>

            {/* Cabinet Adjustments */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cabinet Adjustments & Repairs</h3>
              <p className="text-gray-600 text-sm">
                Cabinet doors that won't close, drawers that stick, and hinges that sag are common in O'Fallon homes after years of use. We adjust hinges, replace soft-close hardware, repair drawer slides, and fix cabinet boxes — restoring full function without a costly full replacement.
              </p>
            </div>

            {/* Custom Carpentry */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Custom Carpentry</h3>
              <p className="text-gray-600 text-sm">
                Built-in shelving, mudroom benches, window seats, and custom storage solutions. Many O'Fallon homeowners are maximizing their space with custom built-ins that add both function and value. We design and build to your specifications using quality materials that complement your home's style.
              </p>
            </div>

            {/* Wainscoting & Paneling */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wainscoting & Wall Paneling</h3>
              <p className="text-gray-600 text-sm">
                Wainscoting, shiplap, and board-and-batten paneling add character and protection to dining rooms, entryways, and bathrooms. We install and finish wall paneling that transforms plain O'Fallon builder-grade interiors into polished, custom-feeling spaces.
              </p>
            </div>

            {/* Stair Repairs */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Stair & Railing Repairs</h3>
              <p className="text-gray-600 text-sm">
                Squeaky treads, loose balusters, and wobbly newel posts are safety issues and annoyances. We repair interior stairs and railings in O'Fallon homes — tightening, reinforcing, and replacing components as needed for safe, quiet operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why O'Fallon Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Good carpentry is about precision and patience — two things Phil has refined over 35+ years of working in O'Fallon and the Metro East. Every cut is measured twice, every joint is tight, and every finished surface is ready for paint.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Finish Carpentry Expertise", desc: "Trim, molding, and built-ins installed with the precision that shows in the final result." },
                  { title: "Structural Knowledge", desc: "We understand what's load-bearing and what's not — no guesswork on framing repairs." },
                  { title: "Material Matching", desc: "We source profiles and species that match your existing trim for seamless repairs." },
                  { title: "Paint-Ready Finish", desc: "All carpentry work is caulked, sanded, and primed — ready for your painter or our finishing coat." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Serving All of O'Fallon IL</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve homeowners throughout O'Fallon, including neighborhoods near Scott Air Force Base, Regency Park, Hartman Creek, Smiley Elementary area, and surrounding communities in St. Clair County.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Also serving Edwardsville, Belleville, Shiloh, Swansea, and the greater Metro East area.
              </p>
              <Link href="/gbp/ofallon">
                <span className="text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                  View our O'Fallon handyman services →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready for Quality Carpentry in O'Fallon?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for professional carpentry services in O'Fallon. Free estimates and flexible scheduling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 rounded-full px-8 py-6 text-lg font-bold transition-colors">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
