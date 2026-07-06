import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairStCharles() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">St. Charles, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Deck Repair in St. Charles MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Rotted boards, loose railings, structural damage, and deck maintenance for St. Charles County homeowners. Safe, solid repairs that extend your deck's life.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving St. Charles MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Deck Repair Services in St. Charles</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            St. Charles County's Missouri River proximity creates high humidity that accelerates wood decay — especially on decks that don't get regular sealing. Many homes in Cottleville, O'Fallon MO, and along the river corridor have decks built in the 1990s and early 2000s that are now showing significant wear. We assess honestly: if a deck can be repaired, we repair it. If it needs replacement, we'll tell you upfront.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Deck Board Replacement", desc: "Rotted, cracked, or splintering boards replaced with pressure-treated lumber or composite decking. Missouri's humid summers and cold winters accelerate wood decay — especially near the river." },
              { title: "Railing Repair & Replacement", desc: "Wobbly railings are a serious fall hazard. We tighten, re-secure, or replace railing posts, balusters, and top rails to bring your deck up to safe, code-compliant standards." },
              { title: "Structural Deck Repair", desc: "Rotted joists, failing ledger boards, and compromised posts are the most dangerous deck problems. We assess structural integrity and replace compromised framing members." },
              { title: "Stair & Step Repair", desc: "Loose stringers, rotted treads, and wobbly handrails are common after Missouri winters. We repair or replace deck stairs to restore safe, solid footing." },
              { title: "Ledger Board Repair", desc: "The ledger board is where your deck attaches to your house. A failing ledger can cause the entire deck to pull away from the home. We inspect, reinforce, or replace ledger boards." },
              { title: "Deck Maintenance & Sealing", desc: "Annual deck maintenance is the best way to avoid costly repairs. We handle cleaning, re-fastening loose boards, replacing isolated rotted sections, and applying sealant or stain." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deck Repair in St. Charles County Homes</h2>
            <p className="text-gray-600 mb-4">
              The Missouri River corridor creates a uniquely humid microclimate that accelerates wood decay. Decks in St. Charles, St. Peters, and along the river bottom are particularly vulnerable — especially those built with standard pressure-treated lumber in the 1990s, before modern treatment standards were adopted.
            </p>
            <p className="text-gray-600 mb-4">
              Newer subdivisions in Cottleville and Wentzville typically have composite or newer pressure-treated decks that are in better shape, but still need regular maintenance to prevent fastener corrosion and board cupping.
            </p>
            <p className="text-gray-600">
              Missouri building code requires deck railings to withstand 200 lbs of lateral force. We make sure every railing we repair or replace meets that standard — not just looks solid.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Warning Signs Your Deck Needs Repair</h3>
            {[
              "Boards that flex or bounce when walked on",
              "Visible rot, soft spots, or dark discoloration",
              "Railings that move when pushed",
              "Gaps between boards wider than 1/4 inch",
              "Rusted, popped, or missing fasteners",
              "Ledger board pulling away from the house",
              "Deck feels uneven or lower in certain spots",
              "Cracked or splintering wood on stairs"
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
              We repair decks throughout St. Charles County — from historic homes near the Missouri River to newer subdivisions in Cottleville, O'Fallon MO, and Wentzville. We also serve Chesterfield, Ballwin, and West St. Louis County.
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
            <Link href="/door-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in St. Charles</Button>
            </Link>
            <Link href="/carpentry-services-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in St. Charles</Button>
            </Link>
            <Link href="/deck-repair">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Deck Repair</Button>
            </Link>
            <Link href="/service-areas/st-charles-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services St. Charles</Button>
            </Link>
            <Link href="/deck-repair-chesterfield-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Chesterfield</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Deck?</h2>
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
