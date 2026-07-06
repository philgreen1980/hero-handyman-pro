import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function CarpentryServicesEdwardsville() {
  const seoData = {
    title: "Carpentry Services Edwardsville IL | Trim, Repairs & Custom Work",
    description: "Professional carpentry services in Edwardsville IL. Trim repair, framing repairs, cabinet adjustments, and custom carpentry. Call Hero Handyman Pro at 800-741-6056.",
    keywords: "carpentry services Edwardsville IL, trim repair Edwardsville, cabinet repair Edwardsville, custom carpentry Edwardsville",
    canonicalUrl: "https://herohandymanpro.com/carpentry-services-edwardsville-il"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Edwardsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Carpentry Services in Edwardsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trim repair, framing, cabinet adjustments, and custom carpentry work — delivered with the craftsmanship that Edwardsville homeowners have trusted for over 30 years.
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Edwardsville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services for Edwardsville Homeowners</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Good carpentry is the difference between a home that looks finished and one that looks like it was put together in a hurry. We bring the skill and attention to detail that interior and exterior carpentry work demands.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trim Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Trim Repair</h3>
              <p className="text-gray-600 mb-4">
                Baseboards, door casings, window trim, crown molding, and chair rail — we repair, replace, and install all types of interior and exterior trim. Whether a section is damaged, missing, or you're updating the look of a room, we cut and fit trim with precision so joints are tight and profiles match.
              </p>
              <p className="text-gray-600 text-sm">
                Many older Edwardsville homes have original wood trim with character that's worth preserving. We can repair and splice damaged sections rather than replacing entire runs, saving you money while maintaining the original look.
              </p>
            </div>

            {/* Framing Repairs */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Framing Repairs</h3>
              <p className="text-gray-600 mb-4">
                Rotted sill plates, damaged headers, and compromised structural framing need to be addressed before cosmetic repairs can hold. We handle framing repairs for door and window openings, basement rim joists, and areas affected by water damage or pest activity.
              </p>
              <p className="text-gray-600 text-sm">
                Framing repairs are often discovered during other projects. We'll identify any structural issues during our estimate and address them properly so your finished work lasts.
              </p>
            </div>

            {/* Cabinet Adjustments */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Cabinet Adjustments</h3>
              <p className="text-gray-600 mb-4">
                Kitchen and bathroom cabinet doors that won't close, drawers that stick, and hinges that sag are daily frustrations that are easy to fix with the right skills. We adjust, repair, and replace cabinet hardware, reattach loose cabinet boxes, and fix doors that are out of alignment.
              </p>
              <p className="text-gray-600 text-sm">
                We also install new cabinet hardware — pulls, knobs, and soft-close hinges — which is one of the most cost-effective ways to update the look of a kitchen without a full remodel.
              </p>
            </div>

            {/* Custom Carpentry */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Custom Carpentry</h3>
              <p className="text-gray-600 mb-4">
                Built-in shelving, custom closet organizers, window seats, mudroom benches, and other one-of-a-kind carpentry projects. We design and build custom pieces that fit your space and your style — using quality materials that will last.
              </p>
              <p className="text-gray-600 text-sm">
                Custom carpentry adds both function and value to your home. We'll work with you on the design and provide a detailed estimate before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Carpentry Work That Fits Edwardsville Homes</h2>
              <p className="text-gray-600 mb-4">
                Edwardsville has a diverse housing stock — from historic Victorian-era homes near downtown to mid-century ranches and newer construction in the SIUE corridor. Each era of construction has its own carpentry characteristics and common repair needs.
              </p>
              <p className="text-gray-600 mb-4">
                Older homes often have original wood trim with profiles that aren't available at big-box stores. We know how to source matching profiles or create custom solutions that preserve the character of your home.
              </p>
              <p className="text-gray-600 mb-6">
                Newer construction often has trim that was installed quickly and needs adjustment or replacement. We bring the same level of care to every project regardless of the home's age.
              </p>
              <Link href="/gbp/edwardsville">
                <span className="text-teal-700 hover:underline font-semibold cursor-pointer">
                  View our Edwardsville handyman services →
                </span>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Why Craftsmanship Matters</h3>
                <p className="text-gray-600 text-sm">
                  Carpentry work is visible every day. Poorly fitted trim, misaligned cabinet doors, and rough cuts are constant reminders of work done in a hurry. We take the time to do it right — measuring twice, cutting once, and fitting every piece precisely.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Serving All of Edwardsville</h3>
                <p className="text-gray-600 text-sm">
                  We serve homeowners throughout Edwardsville and the surrounding Madison County area, including Glen Carbon, Maryville, Troy, and O'Fallon. Most jobs can be scheduled within 1–2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Get a Free Carpentry Estimate</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for professional carpentry services in Edwardsville IL. From trim repair to custom built-ins, we bring the craftsmanship your home deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
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
