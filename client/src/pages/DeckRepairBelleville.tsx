import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairBelleville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Belleville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair in Belleville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Rotted boards, wobbly railings, and structural damage repaired by experienced craftsmen. We serve Belleville and all of St. Clair County with same-day and next-day availability.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Belleville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services in Belleville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Belleville's humid summers and cold winters accelerate deck deterioration. Homes near the Kaskaskia River floodplain and older neighborhoods around the downtown square see accelerated wood rot. We repair all types of deck damage — from cosmetic board replacement to structural ledger repairs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Deck Board Replacement", desc: "Individual rotted or cracked boards replaced to match the existing deck. We source pressure-treated lumber and composite materials." },
              { title: "Railing Repair & Replacement", desc: "Wobbly or rotted railings are a safety hazard. We repair or replace balusters, top rails, and post bases to code." },
              { title: "Structural Repair", desc: "Rotted joists, beams, and posts replaced before they compromise the deck's integrity. We assess the full structure before recommending repairs." },
              { title: "Stair Repair", desc: "Loose treads, rotted stringers, and unstable handrails repaired. Belleville's freeze-thaw cycles are hard on stair connections." },
              { title: "Ledger Board Repair", desc: "The ledger board where your deck connects to the house is the most critical structural element. We inspect and repair ledger connections properly." },
              { title: "Deck Staining & Sealing", desc: "After repairs, we apply penetrating stain or sealant to protect the wood from Belleville's humidity and UV exposure." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rot vs Cosmetic Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Rot vs. Cosmetic Damage — Know the Difference</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Not all deck damage is equal. Belleville's climate — humid summers, cold winters, and spring flooding near the Kaskaskia lowlands — creates both cosmetic wear and genuine structural rot. Here's how to tell them apart.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "Low", label: "Surface Cosmetic", color: "bg-green-100 text-green-800", desc: "Graying, surface cracking, and peeling finish. Cleaned, sanded, and resealed — no replacement needed." },
              { level: "Moderate", label: "Board-Level Rot", color: "bg-yellow-100 text-yellow-800", desc: "Soft spots, discoloration, and spongy feel in individual boards. Boards replaced; structure still sound." },
              { level: "High", label: "Structural Rot", color: "bg-orange-100 text-orange-800", desc: "Rot in joists, beams, or posts. Deck is unsafe to use. Structural members replaced before surface work." },
              { level: "Critical", label: "Ledger & Connection Rot", color: "bg-red-100 text-red-800", desc: "Rot where the deck meets the house. Highest risk of deck collapse. Requires immediate repair." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.color}`}>{item.level} Urgency</span>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-gray-400" />
                  {item.label}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Belleville Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Structural Assessment First", desc: "We inspect the full deck structure before recommending repairs — no surprises mid-job." },
              { title: "Proper Materials", desc: "We use pressure-treated lumber rated for ground contact where needed, not standard framing lumber." },
              { title: "Same-Day Availability", desc: "For urgent safety repairs, we strive to get to Belleville the same day or next morning." },
              { title: "Transparent Pricing", desc: "Clear estimate before we start. No change orders unless you request additional work." }
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
            <h2 className="text-3xl font-bold mb-4">Serving Belleville & St. Clair County</h2>
            <p className="text-teal-100 mb-4">
              We repair decks throughout Belleville — from the older ranch homes near Mascoutah Avenue and the historic district to newer construction near Frank Scott Parkway and the Scott AFB corridor. St. Clair County's clay-heavy soil causes post heaving that accelerates structural damage; we account for local soil conditions in every repair.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Swansea, Shiloh, O'Fallon, Fairview Heights, and Mascoutah — all within our regular service area.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Historic Downtown Belleville", "Scott AFB Area", "Frank Scott Parkway", "Swansea & Shiloh", "Fairview Heights", "Mascoutah"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Belleville & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/drywall-repair-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Belleville</Button>
            </Link>
            <Link href="/door-repair-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Belleville</Button>
            </Link>
            <Link href="/carpentry-services-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Belleville</Button>
            </Link>
            <Link href="/handyman-services/deck-repair/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Deck Repair</Button>
            </Link>
            <Link href="/handyman-belleville-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Belleville</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix Your Deck?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Belleville and all of St. Clair County — same-day and next-day appointments available.
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
