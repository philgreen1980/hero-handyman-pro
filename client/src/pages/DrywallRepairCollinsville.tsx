import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairCollinsville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Collinsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair in Collinsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Fast, clean drywall repairs for Collinsville homeowners. Holes from doorknobs, cracks from settling, water damage, and ceiling repairs — done right the first time with texture matching that blends seamlessly.
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
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in Collinsville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Collinsville's housing stock spans from post-war bungalows near downtown to 1970s–1990s ranch homes and newer subdivisions off Beltline Road and IL-157. Older homes often have plaster walls alongside drywall, while newer construction deals with the typical doorknob holes, water stains, and access patches. Hero Handyman Pro handles all of it — including texture matching across Collinsville's varied wall finishes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hole & Puncture Repair",
                desc: "Doorknob holes, accidental impacts, and furniture damage repaired cleanly. We match your existing texture so the patch disappears."
              },
              {
                title: "Water-Damaged Drywall",
                desc: "Collinsville's older homes are prone to roof leaks and plumbing drips. We cut out the damaged section, replace it, and blend the texture."
              },
              {
                title: "Ceiling Drywall Repair",
                desc: "Sagging sections, water stains, and cracks in ceilings repaired and refinished. Popcorn and smooth ceiling textures both matched."
              },
              {
                title: "Crack & Settlement Repair",
                desc: "Hairline cracks and larger settlement cracks in walls and ceilings properly taped, mudded, and finished — not just painted over."
              },
              {
                title: "Access Panel Patches",
                desc: "After plumbers or electricians cut into walls, we close the opening cleanly with a proper drywall patch and matching finish."
              },
              {
                title: "Textured Drywall Repair",
                desc: "Knockdown, orange peel, skip-trowel, and smooth finishes all matched. Collinsville's older homes often have unique texture profiles we replicate precisely."
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Matching Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Texture Matching — Done Right</h2>
              <p className="text-gray-600 mb-4">
                The hardest part of any drywall repair isn't the patch — it's the texture. A visible patch stands out every time light hits the wall at an angle. Collinsville's housing stock spans multiple eras, each with its own texture style.
              </p>
              <p className="text-gray-600 mb-4">
                Homes built in the 1950s–70s near downtown Collinsville often have hand-applied skip-trowel or knockdown textures. Homes in newer areas off Beltline Road and IL-157 tend toward orange peel or smooth finishes. We identify your exact texture before we start and match it precisely.
              </p>
              <p className="text-gray-600">
                We never just slap on a coat of paint and call it done. Every repair gets the correct texture applied, primed, and finished so it blends with the surrounding wall.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Knockdown", desc: "Common in Collinsville homes built 1970s–1990s. Created by flattening random mud peaks for a mottled look." },
                { name: "Orange Peel", desc: "Subtle spray texture found in newer Collinsville construction off Beltline Road. Requires spray equipment to match correctly." },
                { name: "Skip-Trowel", desc: "Hand-applied texture common in older downtown Collinsville homes. Each application is unique — we study the pattern before matching." },
                { name: "Smooth Finish", desc: "Found in renovated and newer homes. Requires multiple skim coats and careful sanding to achieve a truly flat surface." }
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{t.name}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
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
              { title: "Texture Matching Expertise", desc: "We identify and replicate your exact wall texture — knockdown, orange peel, skip-trowel, or smooth." },
              { title: "Clean Job Sites", desc: "We plastic off work areas, vacuum drywall dust, and leave your home cleaner than we found it." },
              { title: "Same-Day Availability", desc: "For urgent repairs, we strive to get to Collinsville the same day or next morning." },
              { title: "Transparent Pricing", desc: "You get a clear estimate before we start. No surprises when the job is done." }
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
              We repair drywall throughout Collinsville — from the post-war bungalows near downtown and Maryville Road to the ranch homes along IL-159 and newer subdivisions off Beltline Road. Collinsville's mix of housing eras means we regularly work on everything from plaster-over-lath in older homes to standard 5/8" drywall in newer construction.
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
            <Link href="/deck-repair-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Collinsville</Button>
            </Link>
            <Link href="/door-repair-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Collinsville</Button>
            </Link>
            <Link href="/carpentry-services-collinsville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Collinsville</Button>
            </Link>
            <Link href="/drywall-repair">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Drywall Repair</Button>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Drywall?</h2>
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
