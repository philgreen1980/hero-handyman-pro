import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CarpentryServicesBallwin() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Ballwin, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Carpentry Services in Ballwin MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trim repair, exterior carpentry, rot replacement, and finish work done with care and precision. Serving Ballwin and West St. Louis County homeowners who want quality craftsmanship, not just a quick fix.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services in Ballwin</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Ballwin's split-level and ranch-style homes from the 1960s–1990s often feature detailed millwork — chair rails, wainscoting, built-in shelving, and custom trim profiles — that needs careful repair when damaged. We restore, repair, and replace carpentry throughout Ballwin and West County.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Interior Trim Repair</h3>
              <p className="text-gray-600 text-sm">
                Baseboard, door casing, window casing, and crown molding repair and replacement. Ballwin homes from the 1970s–1980s often have unique trim profiles that are no longer stocked at big-box stores. We source matching profiles or mill custom pieces to match the existing work.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Exterior Carpentry</h3>
              <p className="text-gray-600 text-sm">
                Fascia, soffit, rake boards, and corner boards that have rotted or been damaged by moisture, insects, or impact. We replace exterior trim with properly primed and painted material that will last — not just a patch that fails in two seasons.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wood Rot Repair</h3>
              <p className="text-gray-600 text-sm">
                Ballwin's wooded lots and shaded areas accelerate rot in exterior wood. We identify the full extent of rot damage — not just the visible surface — and replace compromised material before it spreads to structural framing. Proper flashing and caulking are included to prevent recurrence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cabinet & Built-In Repair</h3>
              <p className="text-gray-600 text-sm">
                Cabinet doors that have dropped, drawers that stick, and built-in shelving that has shifted or been damaged. We adjust hinges, replace drawer slides, repair face frames, and restore built-ins to proper function and appearance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wainscoting & Accent Work</h3>
              <p className="text-gray-600 text-sm">
                Wainscoting panels, chair rails, and accent wall carpentry repair and installation. Many Ballwin homes have original wainscoting that needs individual panel replacement or full section repair after water damage or impact.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Framing Repairs</h3>
              <p className="text-gray-600 text-sm">
                Structural framing repairs for door openings, window openings, and wall sections that have been damaged by water, rot, or modification. We repair framing to restore structural integrity before finishing work is applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Ballwin Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Phil has been doing carpentry work in Ballwin and West County for over 35 years. He understands the construction details of each era of Ballwin's housing stock — the trim profiles, the framing methods, and the common failure points — and he does the work himself without subcontractors.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Profile matching", desc: "We source or mill trim to match existing profiles — not just the closest thing at the hardware store." },
                  { title: "Full rot assessment", desc: "We identify the full extent of rot before starting, so the repair scope is accurate." },
                  { title: "Proper priming & finishing", desc: "Exterior carpentry is primed on all sides before installation to prevent future rot." },
                  { title: "No subcontractors", desc: "Phil does the work himself — consistent quality and accountability every time." },
                  { title: "Upfront pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices." },
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
              <h3 className="font-bold text-xl text-gray-900 mb-4">Serving All of Ballwin MO</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve homeowners throughout Ballwin, including neighborhoods near Kehrs Mill Road, Claymont Drive, Manchester Road, Ries Road, and surrounding communities in West St. Louis County.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Also serving Chesterfield, Ellisville, Wildwood, and the greater West County area.
              </p>
              <Link href="/handyman-ballwin-mo">
                <span className="text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                  View all Ballwin handyman services →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Services & Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Hero Handyman Pro Home</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-ballwin-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Ballwin Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/carpentry-services/"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Carpentry Services (Regional)</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Handyman Services in Chesterfield MO</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Carpentry Services in Ballwin MO?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro at 800-741-6056 for professional carpentry in Ballwin. Free estimates, honest assessment, and quality work done right the first time.
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
