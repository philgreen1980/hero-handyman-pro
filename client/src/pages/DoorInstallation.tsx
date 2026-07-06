import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorInstallation() {
  const seoData = {
    title: "Door Repair & Installation | Edwardsville IL Handyman",
    description: "Need door repair or installation in Edwardsville? Hero Handyman Pro fixes interior, exterior, storm, and damaged doors. Request a free quote.",
    keywords: "door installation near me, door repair near me, exterior door installation, interior door replacement, storm door installation, door frame repair",
    canonicalUrl: "https://herohandymanpro.com/door-installation"
  };

  const services = [
    {
      title: "Interior Door Installation",
      desc: "Bedroom, bathroom, closet, and hallway doors — we install pre-hung and slab doors, adjust hinges, fix sticking or binding issues, and replace hollow-core doors with solid-core upgrades for better sound insulation and durability. Many older Metro East homes have original hollow-core doors that are warped or damaged; replacing them is one of the most cost-effective home upgrades available."
    },
    {
      title: "Exterior Door Replacement",
      desc: "Front entry doors, back doors, and side entry doors are your home's first line of defense against weather and intruders. We install steel, fiberglass, and wood exterior doors with proper weatherstripping, threshold seals, and hardware to maximize security and energy efficiency. Illinois and Missouri winters put significant stress on exterior doors — proper installation prevents air infiltration, moisture damage, and seasonal sticking."
    },
    {
      title: "Storm Door Installation",
      desc: "Storm doors add an extra layer of insulation and protection for your exterior door — reducing energy costs and extending the life of your primary door. We install full-view, ventilating, and security storm doors from leading brands. A properly installed storm door can reduce drafts noticeably and is especially valuable in older homes where the primary door may not seal perfectly."
    },
    {
      title: "Door Frame Repair",
      desc: "Damaged, rotted, or kicked-in door frames compromise both security and appearance. We repair and replace door frames, fix split jambs, rebuild rotted sills, and address any structural issues that affect how your door fits and operates. Frame damage is common in older homes and after forced entry — we restore the frame to full structural integrity before installing or re-hanging the door."
    },
    {
      title: "Sliding & Patio Door Repair",
      desc: "Sliding glass doors and patio doors that stick, jump the track, or won't lock properly are a security risk and a daily frustration. We repair or replace rollers, tracks, handles, and locks — and install new sliding or French patio doors when replacement is the better option."
    },
    {
      title: "Door Hardware & Lockset Installation",
      desc: "Upgrading your locksets, deadbolts, and door handles is one of the fastest ways to improve home security and curb appeal. We install and adjust all types of door hardware — from basic passage sets to smart locks and keypad entry systems — ensuring proper alignment and smooth operation."
    },
  ];

  const commonProblems = [
    "Door sticks or drags on the floor",
    "Door won't latch or stay closed",
    "Visible gap between door and frame",
    "Draft coming through a closed door",
    "Door swings open or closed on its own",
    "Damaged, rotted, or kicked-in door frame",
    "Squeaky or stiff hinges",
    "Broken or outdated lockset or deadbolt",
  ];

  const serviceAreas = [
    { city: "Edwardsville IL", href: "/door-installation-edwardsville-il" },
    { city: "O'Fallon IL", href: "/door-installation-ofallon-il" },
    { city: "Belleville IL", href: "/door-installation-belleville-il" },
    { city: "Chesterfield MO", href: "/door-installation-chesterfield-mo" },
    { city: "Collinsville IL", href: "/door-installation-collinsville-il" },
    { city: "Ballwin MO", href: "/door-installation-ballwin-mo" },
    { city: "Glen Carbon IL", href: "/door-installation-glen-carbon-il" },
    { city: "St. Charles MO", href: "/door-installation-st-charles-mo" },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Metro East IL & West St. Louis County MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Door Installation & Repair
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Interior doors, exterior doors, storm doors, and door frame repairs — installed correctly the first time. Serving homeowners across Edwardsville, O'Fallon, Chesterfield, and the greater St. Louis area.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Installation & Repair Services We Provide</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            A poorly installed door costs you in energy bills, security, and daily frustration. We install and repair all types of doors for homeowners throughout Metro East Illinois and West St. Louis County — with the craftsmanship to make sure they operate smoothly for years.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems + Why It Matters */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Common Door Problems We Fix</h2>
              <p className="text-gray-600 mb-6">
                Door problems are among the most common handyman calls we receive — and for good reason. A sticking door is annoying. A door that won't latch is a security risk. A drafty exterior door costs you money every month in heating and cooling bills.
              </p>
              <p className="text-gray-600 mb-6">
                When someone searches <em>"door installation near me"</em> or <em>"door repair near me,"</em> they usually want it handled quickly. We offer same-day and next-day appointments throughout Metro East Illinois and West St. Louis County.
              </p>
              <ul className="space-y-3">
                {commonProblems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Door Installation Is Harder Than It Looks</h3>
              <p className="text-gray-600 text-sm mb-4">
                Door installation looks straightforward but is easy to get wrong. An improperly hung door will stick, gap, or fail to latch — sometimes within months. Getting it right requires the opening to be plumb and square, the door to be shimmed correctly, and the hardware to be aligned precisely.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Older homes throughout the Metro East and West St. Louis County are especially challenging — settled foundations and out-of-square openings are common, and they require extra care to work around properly.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                We've installed and repaired hundreds of doors across the St. Louis metro area. We take the time to do it right so you're not calling us back in six months because the door is sticking again.
              </p>
              <a href="tel:800-741-6056" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline text-sm">
                <Phone className="w-4 h-4" />
                Call 800-741-6056 for a free estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Installation Near You</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We provide door installation and repair services throughout Metro East Illinois and West St. Louis County Missouri. Click your city for local service details.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.href}>
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer group">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800 group-hover:text-teal-800 text-sm">{area.city}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Also serving Belleville IL, Maryville IL, Troy IL, Des Peres MO, and surrounding communities. <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">View all service areas →</span></Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Door Work</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. Phil, the owner, has been installing and repairing doors in the greater St. Louis area for over 30 years. He knows the older homes in this region, the common problems they present, and how to solve them properly.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Proper Shimming & Leveling", desc: "Every door is set plumb and level regardless of how out-of-square the opening is." },
              { title: "Weatherstripping Included", desc: "We install or replace weatherstripping on all exterior doors for a tight, energy-efficient seal." },
              { title: "Hardware Installation", desc: "Locksets, deadbolts, hinges, and handles installed and adjusted correctly — no rattling, no misalignment." },
              { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises, no middlemen." },
              { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices after the job." },
              { title: "Same-Day Availability", desc: "Need it fixed fast? We offer same-day and next-day appointments for urgent door repairs." },
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
      </section>

      {/* Internal Links */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="font-semibold text-gray-800 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/handyman-services/door-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Door Repair & Replacement Service Page</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/edwardsville"><span className="text-teal-700 hover:underline cursor-pointer">Edwardsville Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/ofallon"><span className="text-teal-700 hover:underline cursor-pointer">O'Fallon Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/deck-repair"><span className="text-teal-700 hover:underline cursor-pointer">Deck Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-near-me"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Near Me</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/"><span className="text-teal-700 hover:underline cursor-pointer">Hero Handyman Pro Home</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need a Door Installed or Repaired? Call Today.</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Same-day and next-day appointments available across Metro East Illinois and West St. Louis County. Call Hero Handyman Pro at 800-741-6056 for a free estimate.
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
