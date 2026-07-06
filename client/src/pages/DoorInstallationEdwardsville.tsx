import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallationEdwardsville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Edwardsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation & Replacement in Edwardsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Interior doors, exterior doors, storm doors, and door frame repairs — installed correctly the first time. Serving Edwardsville homeowners with reliable, professional door work.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Edwardsville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Services in Edwardsville IL</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            A poorly installed door costs you in energy bills, security, and daily frustration. We install and replace all types of doors for Edwardsville homeowners — with the craftsmanship to make sure they operate smoothly for years.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Interior Doors */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Interior Doors</h3>
              <p className="text-gray-600 mb-4">
                Bedroom, bathroom, closet, and hallway doors — we install pre-hung and slab doors, adjust hinges, fix sticking or binding issues, and replace hollow-core doors with solid-core upgrades for better sound insulation and durability.
              </p>
              <p className="text-gray-600 text-sm">
                Many Edwardsville homes built in the 1970s–1990s have original hollow-core doors that are warped or damaged. Replacing them is one of the most cost-effective home improvement upgrades available.
              </p>
            </div>

            {/* Exterior Doors */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Exterior Doors</h3>
              <p className="text-gray-600 mb-4">
                Front entry doors, back doors, and side entry doors are your home's first line of defense against weather and intruders. We install steel, fiberglass, and wood exterior doors with proper weatherstripping, threshold seals, and hardware to maximize security and energy efficiency.
              </p>
              <p className="text-gray-600 text-sm">
                Illinois winters put significant stress on exterior doors. Proper installation prevents air infiltration, moisture damage, and the frustrating sticking that comes with seasonal wood expansion.
              </p>
            </div>

            {/* Storm Doors */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Storm Doors</h3>
              <p className="text-gray-600 mb-4">
                Storm doors add an extra layer of insulation and protection for your exterior door — reducing energy costs and extending the life of your primary door. We install full-view, ventilating, and security storm doors from leading brands.
              </p>
              <p className="text-gray-600 text-sm">
                A properly installed storm door can reduce drafts noticeably and is especially valuable in older Edwardsville homes where the primary door may not seal perfectly.
              </p>
            </div>

            {/* Door Frame Repair */}
            <div className="border border-gray-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Door Frame Repair</h3>
              <p className="text-gray-600 mb-4">
                Damaged, rotted, or kicked-in door frames compromise both security and appearance. We repair and replace door frames, fix split jambs, rebuild rotted sills, and address any structural issues that affect how your door fits and operates.
              </p>
              <p className="text-gray-600 text-sm">
                Frame damage is common in older homes and after forced entry. We restore the frame to full structural integrity before installing or re-hanging the door.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">What Sets Our Door Installation Apart</h2>
              <p className="text-gray-600 mb-6">
                Door installation looks simple but is easy to get wrong. An improperly hung door will stick, gap, or fail to latch — sometimes within months. We take the time to level, plumb, and shim every door correctly so it operates smoothly through every season.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Proper shimming & leveling", desc: "Every door is set plumb and level regardless of how out-of-square the opening is." },
                  { title: "Weatherstripping included", desc: "We install or replace weatherstripping on all exterior doors for a tight seal." },
                  { title: "Hardware installation", desc: "Locksets, deadbolts, hinges, and handles installed and adjusted correctly." },
                  { title: "Seasonal adjustment advice", desc: "We'll tell you what to expect as the door settles through Illinois seasons." },
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
              <div className="mt-6">
                <Link href="/gbp/edwardsville">
                  <span className="text-teal-700 hover:underline font-semibold cursor-pointer">
                    View our Edwardsville handyman services →
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Common Door Problems We Fix</h3>
              <div className="space-y-3">
                {[
                  "Door sticks or drags on the floor",
                  "Door won't latch or stay closed",
                  "Visible gap between door and frame",
                  "Draft coming through closed door",
                  "Door swings open or closed on its own",
                  "Damaged or rotted door frame",
                  "Squeaky or stiff hinges",
                  "Broken or outdated lockset",
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Ready for a New Door?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for professional door installation in Edwardsville IL. We'll measure, recommend, and install — you just enjoy the result.
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
