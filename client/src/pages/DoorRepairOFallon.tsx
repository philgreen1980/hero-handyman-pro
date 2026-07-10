import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorRepairOFallon() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">O'Fallon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair Services in O'Fallon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Sticking doors, broken latches, damaged frames, and drafty exterior doors — repaired correctly the first time. Serving O'Fallon homeowners with fast, reliable door repair throughout St. Clair County.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Repair Services in O'Fallon IL</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            O'Fallon's wide temperature swings — from sub-zero winters to 95°F summers — put constant stress on doors and frames. Hero Handyman Pro repairs all types of doors for O'Fallon homeowners, from quick adjustments to full frame replacement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Interior Door Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Interior Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Bedroom, bathroom, closet, and hallway doors that stick, bind, or won't latch are among the most common repair calls we receive in O'Fallon. We adjust hinges, plane sticking edges, repair or replace latches and strike plates, and re-hang doors that have shifted out of alignment.
              </p>
              <p className="text-gray-600 text-sm">
                Many O'Fallon homes built in the 1990s have hollow-core doors that have warped or been damaged over time. A simple hinge adjustment or strike plate repositioning is usually all it takes to restore smooth operation.
              </p>
            </div>

            {/* Exterior Door Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Exterior Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Exterior doors that don't seal properly cost O'Fallon homeowners in heating and cooling bills every month. We repair weatherstripping, adjust thresholds, fix sticking or dragging, and address alignment issues that allow drafts or moisture infiltration.
              </p>
              <p className="text-gray-600 text-sm">
                O'Fallon's freeze-thaw cycles cause exterior doors to expand and contract seasonally. We account for this during repairs so your door operates correctly year-round, not just when we leave.
              </p>
            </div>

            {/* Storm Door Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Storm Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Storm doors that sag, slam, or won't stay open are a daily frustration. We repair or replace closers, adjust hinges, fix latches, replace damaged glass panels, and address any frame issues that prevent proper operation.
              </p>
              <p className="text-gray-600 text-sm">
                A properly functioning storm door adds meaningful insulation value — especially valuable in O'Fallon where winter winds off the Mississippi River corridor can be significant. If your storm door is beyond repair, we handle full replacement too.
              </p>
            </div>

            {/* Door Frame & Alignment */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Door Frame & Alignment Issues</h3>
              <p className="text-gray-600 mb-4">
                When a door frame is out of square — from foundation settling, moisture damage, or a past forced entry — no amount of hinge adjustment will fix the problem. We repair and rebuild door frames, replace split jambs, and address the underlying structural issues that cause persistent alignment problems.
              </p>
              <p className="text-gray-600 text-sm">
                Foundation settling is common in O'Fallon's clay-heavy soils, particularly in neighborhoods near Scott Air Force Base and Hartman Creek. We assess the full scope before recommending a repair approach.
              </p>
            </div>

            {/* Hardware & Latch Problems */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Hardware & Latch Problems</h3>
              <p className="text-gray-600 mb-4">
                Broken locksets, loose deadbolts, misaligned strike plates, and worn-out hinges are security vulnerabilities as well as inconveniences. We repair, adjust, and replace all types of door hardware — from basic passage sets to deadbolts and smart locks.
              </p>
              <p className="text-gray-600 text-sm">
                Upgrading your locksets and deadbolts is one of the fastest ways to improve home security. We install and adjust all hardware to ensure proper alignment and smooth operation.
              </p>
            </div>

            {/* Repair vs. Replace */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Repair vs. Replace — Honest Assessment</h3>
              <p className="text-gray-600 mb-4">
                Sometimes repair is the right answer. Sometimes replacement is. We'll give you an honest assessment of which approach makes more sense for your situation — and we handle both. We install pre-hung interior doors, exterior door units, and storm doors when a full replacement is the better long-term value.
              </p>
              <p className="text-gray-600 text-sm">
                We won't recommend replacement if repair will do the job. But if a door is warped, rotted, or structurally compromised, we'll tell you upfront rather than doing a repair that won't hold.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why O'Fallon Homeowners Call Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Phil, the owner of Hero Handyman Pro, has been repairing and installing doors in O'Fallon and the Metro East for over 35 years. He knows the neighborhoods here — the common settling patterns near Scott Air Force Base, the door brands popular in O'Fallon's 1990s–2000s construction boom, and the shortcuts that cause problems down the road.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Honest assessment first", desc: "We'll tell you whether repair or replacement is the right call before any work begins." },
                  { title: "Proper shimming & leveling", desc: "Every door is set plumb and level regardless of how out-of-square the opening is." },
                  { title: "No subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises." },
                  { title: "Upfront pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices." },
                  { title: "Same-day availability", desc: "For urgent door repairs, we offer same-day and next-day appointments." },
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

            {/* Warning Signs */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-xl text-gray-900">Signs Your Door Needs Repair</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Door sticks or drags on the floor or frame",
                  "Door won't latch or stay closed on its own",
                  "Visible gap between door and frame",
                  "Draft or light visible around a closed door",
                  "Door swings open or closed on its own",
                  "Damaged, rotted, or kicked-in door frame",
                  "Squeaky, stiff, or loose hinges",
                  "Broken, loose, or misaligned lockset or deadbolt",
                  "Storm door slams, sags, or won't stay open",
                  "Door that was forced open and no longer closes securely",
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Services & Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/">
              <span className="text-teal-700 hover:underline font-medium cursor-pointer">Hero Handyman Pro Home</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/ofallon-il/">
              <span className="text-teal-700 hover:underline font-medium cursor-pointer">O'Fallon Handyman Services</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/door-repair/">
              <span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Installation & Repair (Regional)</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair-ofallon-il">
              <span className="text-teal-700 hover:underline font-medium cursor-pointer">Drywall Repair in O'Fallon IL</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/door-repair-edwardsville-il">
              <span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Repair in Edwardsville IL</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Door Repair in O'Fallon IL?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Same-day and next-day appointments available. Call Hero Handyman Pro at 800-741-6056 for door repair in O'Fallon IL — we'll assess the problem and give you an honest, upfront quote.
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
