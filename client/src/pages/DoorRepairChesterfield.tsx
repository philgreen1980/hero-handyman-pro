import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorRepairChesterfield() {
  const seoData = {
    title: "Door Repair Chesterfield MO | Interior, Exterior & Storm Doors",
    description: "Professional door repair in Chesterfield MO. Sticking doors, broken hardware, damaged frames, and storm door repairs. Call Hero Handyman Pro at 800-741-6056.",
    keywords: "door repair Chesterfield MO, door repair Chesterfield, sticking door Chesterfield, door frame repair Chesterfield MO, storm door repair Chesterfield",
    canonicalUrl: "https://herohandymanpro.com/door-repair-chesterfield-mo"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Chesterfield, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Repair Services in Chesterfield MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Sticking doors, broken latches, damaged frames, and drafty exterior doors — repaired correctly the first time. Serving Chesterfield and West St. Louis County homeowners with fast, reliable door repair.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Repair Services in Chesterfield</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Chesterfield's wide temperature swings — frigid winters and humid summers — cause door frames to expand, contract, and shift over time. Many of Chesterfield's upscale homes feature solid-core and custom exterior doors that require precise adjustments to maintain proper fit and security. We repair all types of doors for Chesterfield homeowners.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Interior Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Bedroom, bathroom, and closet doors that stick, bind, or won't latch are among the most common door repair calls in Chesterfield. We adjust hinges, plane sticking edges, repair or replace latches and strike plates, and re-hang doors that have shifted out of alignment.
              </p>
              <p className="text-gray-600 text-sm">
                Many Chesterfield homes built in the 1990s–2000s feature solid-core interior doors that have shifted as framing has settled. A hinge adjustment or strike plate repositioning is usually all it takes to restore smooth operation.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Exterior Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Exterior doors that don't seal properly cost Chesterfield homeowners in heating and cooling bills every month. We repair weatherstripping, adjust thresholds, fix sticking or dragging, and address alignment issues that allow drafts or moisture infiltration.
              </p>
              <p className="text-gray-600 text-sm">
                Chesterfield's freeze-thaw cycles put significant stress on exterior door frames and thresholds. We account for seasonal movement during repairs so your door operates correctly year-round — not just the day we fix it.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Storm Door Repair</h3>
              <p className="text-gray-600 mb-4">
                Storm doors that sag, slam, or won't stay open are a daily frustration. We repair or replace closers, adjust hinges, fix latches, replace damaged glass panels, and address frame issues that prevent proper operation.
              </p>
              <p className="text-gray-600 text-sm">
                A properly functioning storm door adds meaningful insulation value during Chesterfield's cold winters. If your storm door is beyond repair, we handle full replacement too — including popular brands like Larson and Andersen.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Door Frame & Alignment Issues</h3>
              <p className="text-gray-600 mb-4">
                When a door frame is out of square — from foundation settling, moisture damage, or a past forced entry — no amount of hinge adjustment will fix the problem. We repair and rebuild door frames, replace split jambs, and address underlying structural issues.
              </p>
              <p className="text-gray-600 text-sm">
                Foundation settling is common in Chesterfield's clay-heavy soils, particularly in older neighborhoods near Clarkson Road and Long Road. We assess the full scope before recommending a repair approach.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Hardware & Latch Problems</h3>
              <p className="text-gray-600 mb-4">
                Broken locksets, loose deadbolts, misaligned strike plates, and worn-out hinges are security vulnerabilities as well as inconveniences. We repair, adjust, and replace all types of door hardware — from basic passage sets to deadbolts and smart locks.
              </p>
              <p className="text-gray-600 text-sm">
                Upgrading your locksets and deadbolts is one of the fastest ways to improve home security. We install and adjust all hardware to ensure proper alignment and smooth operation.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Repair vs. Replace — Honest Assessment</h3>
              <p className="text-gray-600 mb-4">
                Sometimes repair is the right answer. Sometimes replacement is. We'll give you an honest assessment of which approach makes more sense for your situation — and we handle both. We install pre-hung interior doors, exterior door units, and storm doors when full replacement is the better long-term value.
              </p>
              <p className="text-gray-600 text-sm">
                We won't recommend replacement if repair will do the job. But if a door is warped, rotted, or structurally compromised, we'll tell you upfront rather than doing a repair that won't hold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
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
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Chesterfield Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Phil has been repairing and installing doors in Chesterfield and West County for over 30 years. He knows the common issues in each neighborhood and the door brands popular in Chesterfield's construction eras — and he does the work himself, without subcontractors.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Honest assessment first", desc: "We'll tell you whether repair or replacement is the right call before any work begins." },
                  { title: "Proper shimming & leveling", desc: "Every door is set plumb and level regardless of how out-of-square the opening is." },
                  { title: "No subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises." },
                  { title: "Upfront pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices." },
                  { title: "Same-day availability", desc: "For urgent door repairs, we offer same-day and next-day appointments in Chesterfield." },
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
            <Link href="/handyman-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Chesterfield Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/door-installation"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Installation & Repair (Regional)</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/door-repair-ofallon-il"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Repair in O'Fallon IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/door-repair-edwardsville-il"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Repair in Edwardsville IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/door-repair-belleville-il"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Door Repair in Belleville IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Drywall Repair in Chesterfield</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/deck-repair-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Deck Repair in Chesterfield</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/carpentry-services-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Carpentry Services in Chesterfield</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Door Repair in Chesterfield MO?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Same-day and next-day appointments available. Call Hero Handyman Pro at 800-741-6056 for door repair in Chesterfield — we'll assess the problem and give you an honest, upfront quote.
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
