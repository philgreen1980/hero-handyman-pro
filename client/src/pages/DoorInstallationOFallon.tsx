import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorInstallationOFallon() {
  const seoData = {
    title: "Door Installation O'Fallon IL | Interior & Exterior Doors",
    description: "Professional door installation and replacement in O'Fallon IL. Interior doors, exterior doors, storm doors, and door frame repair. Call Hero Handyman Pro at 800-741-6056.",
    keywords: "door installation O'Fallon IL, exterior door replacement O'Fallon, interior door O'Fallon, storm door installation O'Fallon",
    canonicalUrl: "https://herohandymanpro.com/door-installation-ofallon-il"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">O'Fallon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation & Replacement in O'Fallon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Expert door installation for O'Fallon homeowners. Interior doors, exterior entry doors, storm doors, and frame repairs — installed level, plumb, and weather-tight.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving O'Fallon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Installation Services in O'Fallon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            A properly installed door improves security, energy efficiency, and curb appeal. Hero Handyman Pro handles all types of door installations for O'Fallon homeowners — from a single interior door to a full exterior entry replacement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interior Doors */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Interior Doors</h3>
              <p className="text-gray-600 text-sm">
                Bedroom, bathroom, closet, and hallway door installation and replacement. Many O'Fallon homes built in the 1990s have hollow-core doors that are ready for an upgrade. We hang pre-hung doors or slab doors, ensuring smooth operation and proper clearance for your flooring.
              </p>
            </div>

            {/* Exterior Doors */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Exterior Doors</h3>
              <p className="text-gray-600 text-sm">
                Front entry, back door, and side entry replacements. O'Fallon's temperature swings from below zero to 95°F+ mean exterior doors need proper weatherstripping and threshold seals to prevent drafts and moisture intrusion. We install fiberglass, steel, and wood entry doors with proper flashing and caulking.
              </p>
            </div>

            {/* Storm Doors */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Storm Doors</h3>
              <p className="text-gray-600 text-sm">
                Storm doors add an extra layer of protection against O'Fallon's harsh winters and spring storms. We install full-view, ventilating, and security storm doors from leading brands. Proper installation ensures the door closer operates smoothly and the door seals tightly against the frame.
              </p>
            </div>

            {/* Door Frame Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Door Frame Repair</h3>
              <p className="text-gray-600 text-sm">
                Damaged or rotted door frames compromise security and allow drafts. We repair split jambs, replace rotted sill plates, and reinforce kick-in damage. Frame repair is often more cost-effective than full door replacement and restores proper door function quickly.
              </p>
            </div>

            {/* Door Adjustments */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Door Adjustments & Repairs</h3>
              <p className="text-gray-600 text-sm">
                Sticking, dragging, or not latching properly? O'Fallon's seasonal humidity causes wood doors to swell and stick in summer. We plane, adjust hinges, and re-align strike plates to restore smooth operation — often a quick fix that avoids a full replacement.
              </p>
            </div>

            {/* Sliding & Patio Doors */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Sliding & Patio Doors</h3>
              <p className="text-gray-600 text-sm">
                Sliding glass doors that stick, jump the track, or have broken rollers are a common issue in O'Fallon homes with rear deck access. We repair or replace rollers, tracks, and handles — and can replace the full sliding door unit when needed.
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
                Door installation looks simple but requires precision — a door that's not level or plumb will bind, stick, and wear unevenly. Phil brings 30+ years of carpentry experience to every door installation in O'Fallon, ensuring it's done right the first time.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Precision Installation", desc: "Every door is hung level, plumb, and with proper clearances for smooth long-term operation." },
                  { title: "Energy Efficiency Focus", desc: "We seal and weatherstrip every exterior door to reduce heating and cooling costs." },
                  { title: "Supply or Install", desc: "We can source your door or install one you've already purchased — your choice." },
                  { title: "Clean Finish", desc: "We trim, caulk, and paint to match your existing interior for a seamless look." },
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
          <h2 className="text-3xl font-bold mb-3">Need a Door Installed in O'Fallon?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for professional door installation in O'Fallon. Free estimates and fast scheduling available.
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
