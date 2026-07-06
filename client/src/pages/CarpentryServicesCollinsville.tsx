import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CarpentryServicesCollinsville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Collinsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Carpentry Services in Collinsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trim repair, exterior carpentry, wood rot replacement, and finish carpentry for Collinsville homeowners. Skilled craftsmanship that respects the character of your home — from post-war bungalows near downtown to newer Madison County subdivisions.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Collinsville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services in Collinsville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Collinsville's housing stock spans from post-war bungalows with original millwork near downtown to 1970s–1990s ranch homes and newer subdivisions off Beltline Road and IL-157. Older homes have detailed trim profiles that need careful matching; newer homes need practical finish carpentry and exterior rot repairs. We handle all of it — with the same attention to detail regardless of the home's age.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Interior Trim Repair", desc: "Baseboards, door casings, crown molding, and chair rails repaired or replaced. We match existing profiles so repairs blend with original millwork." },
              { title: "Exterior Carpentry", desc: "Fascia boards, soffits, rake boards, and exterior trim repaired or replaced. Collinsville's humidity accelerates rot in unprotected wood." },
              { title: "Wood Rot Repair", desc: "Rotted wood replaced with properly treated lumber or composite materials. We treat surrounding areas to stop rot from spreading." },
              { title: "Cabinet Adjustment & Repair", desc: "Cabinet doors that sag, won't close, or have broken hinges adjusted and repaired. We also replace damaged drawer slides and hardware." },
              { title: "Built-In Shelving & Storage", desc: "Custom built-in shelves, bookcases, and storage solutions built to fit your space. Painted or stained to match existing finishes." },
              { title: "Framing Repairs", desc: "Minor structural framing repairs — sistering damaged joists, replacing rotted sill plates, and reinforcing weakened framing members." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Older Homes Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Carpentry for Collinsville's Older Homes</h2>
              <p className="text-gray-600 mb-4">
                Collinsville has a significant stock of pre-1960 housing near the downtown area and along Maryville Road. These homes often have original woodwork — wide-profile baseboards, detailed door casings, and wood floors — that deserves careful repair rather than replacement with modern profiles that don't quite match.
              </p>
              <p className="text-gray-600 mb-4">
                We take the time to match original profiles, source period-appropriate materials when possible, and repair rather than replace when the original wood is sound. A well-repaired piece of original millwork is always better than a modern substitute.
              </p>
              <p className="text-gray-600">
                For newer Collinsville homes in subdivisions off Beltline Road and IL-157, we provide standard finish carpentry — clean, accurate, and properly finished to match your existing interior.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Profile Matching", desc: "We identify your existing trim profile and source matching material or custom-route it to match." },
                { title: "Repair Over Replace", desc: "Original wood that can be repaired is always preferable to replacement — we assess honestly." },
                { title: "Proper Priming & Painting", desc: "All carpentry repairs are primed and painted to match surrounding surfaces." },
                { title: "Clean Joints & Corners", desc: "Coped joints, mitered corners, and scarf joints done correctly so repairs don't open up seasonally." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Collinsville Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Profile Matching Expertise", desc: "We match existing trim profiles so repairs blend seamlessly with original millwork." },
              { title: "Proper Materials", desc: "We use the right wood species and treatment for each application — interior vs. exterior, painted vs. stained." },
              { title: "Same-Day Availability", desc: "For urgent repairs, we strive to get to Collinsville the same day or next morning." },
              { title: "Transparent Pricing", desc: "Clear estimate before we start. No surprises when the job is done." }
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
            <h2 className="text-3xl font-bold mb-4">Serving Collinsville & Madison County</h2>
            <p className="text-teal-100 mb-4">
              We perform carpentry work throughout Collinsville — from the post-war bungalows near downtown and Maryville Road to the ranch homes along IL-159 and newer subdivisions off Beltline Road. Collinsville's humid climate means exterior wood — fascia, soffits, and trim — needs regular attention to prevent rot from spreading into structural members.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Maryville, Troy, Edwardsville, Granite City, and Belleville — all within our regular service area.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Downtown Collinsville", "Beltline Road Area", "Maryville Road", "IL-157 Corridor", "Maryville & Troy", "Edwardsville & Belleville"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Collinsville & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Collinsville</Button>
            </Link>
            <Link href="/deck-repair-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Collinsville</Button>
            </Link>
            <Link href="/door-repair-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Collinsville</Button>
            </Link>
            <Link href="/carpentry-services">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Carpentry Services</Button>
            </Link>
            <Link href="/handyman-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Collinsville</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Carpentry Project?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Collinsville and all of Madison County — same-day and next-day appointments available.
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
