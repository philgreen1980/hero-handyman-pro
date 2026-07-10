import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorInstallation() {
  const seo = useSeoRoute();

  const replacementFaqs = [
    {
      question: "How long does door replacement take?",
      answer: "Most interior door replacements take 1-2 hours per door. Exterior door replacements typically take 3-4 hours. Complex installations with structural modifications may take longer."
    },
    {
      question: "Do I need to replace the door frame?",
      answer: "Not always. If your existing frame is in good condition, level, and square, we can often just replace the door slab. However, exterior doors and damaged frames typically require complete replacement for best results."
    },
    {
      question: "What's the best material for exterior doors?",
      answer: "Steel doors offer the best security and energy efficiency at an affordable price. Fiberglass doors resist warping and require less maintenance. Wood doors provide classic beauty but need more upkeep. We'll help you choose based on your priorities."
    },
    {
      question: "Can you match my existing trim and hardware?",
      answer: "Yes! We can match your existing trim style and finish, or upgrade to new trim throughout for a cohesive look. We also offer a wide selection of hardware finishes to complement your home's style."
    },
    {
      question: "Do you offer same-day door replacement?",
      answer: "For emergency situations (broken doors, security issues), we can often provide same-day service with in-stock doors. Custom door orders typically take 1-2 weeks for delivery before installation."
    }
  ];

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
      <SEO {...seo} />

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

      {/* Repair vs Replacement */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Should I Repair or Replace My Door?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="font-bold text-xl text-teal-800 mb-4">✓ Repair Is Usually the Right Choice When:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The door sticks or drags — often just a hinge adjustment or minor planing</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The latch or deadbolt doesn't align with the strike plate — a quick adjustment</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Weatherstripping is worn or missing but the door slab is in good shape</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The door has a small crack or surface damage but the core is solid</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Hinges are loose or squeaky but the frame is plumb and square</span></li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="font-bold text-xl text-orange-800 mb-4">⚠ Replacement Makes More Sense When:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>The door has significant rot at the bottom or around the frame — moisture has compromised the structure</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>The door is warped or twisted and won't seal properly regardless of adjustments</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>The door is hollow-core and you want better security or soundproofing</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>The door frame is out of square by more than ¾ inch and can't be corrected without major work</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>You're upgrading for energy efficiency — modern insulated doors significantly reduce heating and cooling costs</span></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            Not sure? <a href="tel:800-741-6056" className="text-teal-700 font-semibold hover:underline">Call us at 800-741-6056</a> — we'll assess your door and give you an honest recommendation. We fix what can be fixed and replace what needs replacing.
          </p>
        </div>
      </section>

      {/* Door Replacement Pricing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Replacement Pricing</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Transparent, upfront pricing for complete door replacement — removal of the old door, installation, hardware, and cleanup are all included.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Interior Doors</h3>
              <div className="text-2xl font-bold text-teal-700 mb-4">$250 – $600</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Remove old door</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Install new door & hardware</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Trim & casing included</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-teal-600 shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Most Common</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Exterior Doors</h3>
              <div className="text-2xl font-bold text-teal-700 mb-4">$500 – $1,500</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Remove old door & frame</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Install pre-hung door system</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Weatherstripping & deadbolt</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Patio Doors</h3>
              <div className="text-2xl font-bold text-teal-700 mb-4">$800 – $2,000</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Sliding or French style</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Energy-efficient glass</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />Complete frame replacement & sealing</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Prices vary based on door size, material, style, and installation complexity. Custom doors, sidelights, and structural modifications may increase cost. All estimates include labor, basic hardware, and disposal of the old door.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">What to Expect When You Book Door Service</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">From first call to final adjustment — here's how door installation and repair works with Hero Handyman Pro:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Call or Text Photos", desc: "Describe the problem or send a few photos. For repairs, we can often diagnose the issue and give a ballpark estimate before visiting. For new installations, we'll confirm measurements and door type on-site." },
              { step: "2", title: "On-Site Assessment", desc: "We check the door frame for plumb and square, inspect the existing hardware and weatherstripping, and confirm the scope of work before quoting. Old homes in Metro East often have out-of-square frames that require extra shimming." },
              { step: "3", title: "Written Quote", desc: "You receive a firm written quote before any work begins. For installations, we include the cost of labor and any hardware needed. Door slabs and pre-hung units are typically customer-supplied or we can source them for you." },
              { step: "4", title: "Installation or Repair", desc: "We set the door plumb and level, shim the frame, install hardware, and adjust the latch and deadbolt for smooth operation. Exterior doors get new weatherstripping and threshold adjustment for a tight seal." },
              { step: "5", title: "Hardware & Lock Setup", desc: "All locksets, deadbolts, hinges, and handles are installed and tested. We adjust strike plates for smooth latching and verify the deadbolt throws fully into the frame." },
              { step: "6", title: "Final Walkthrough", desc: "We open and close the door multiple times to verify smooth operation, check the seal, and make any final adjustments. You'll test it yourself before we leave." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Recent Door Projects</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Real door installations and repairs completed by Hero Handyman Pro across Metro East Illinois and West St. Louis County.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "O'Fallon, IL",
                title: "Front Door Replacement",
                desc: "A homeowner near downtown O'Fallon had a 25-year-old fiberglass entry door that had delaminated at the bottom and no longer sealed properly. We removed the old door and frame, installed a new pre-hung steel entry door with a multi-point lock system, shimmed the frame plumb in an out-of-square opening, installed new weatherstripping and threshold, and painted the exterior to match the trim. The homeowner reported a noticeable improvement in energy efficiency."
              },
              {
                city: "Edwardsville, IL",
                title: "Sticking Interior Doors",
                desc: "An Edwardsville homeowner had 4 interior doors that had started sticking after a wet spring — common in older homes with solid wood doors that swell seasonally. We planed each door on the binding edge, re-hung two that had dropped on their hinges, and adjusted the strike plates. All four doors now open and close smoothly through seasonal changes."
              },
              {
                city: "Swansea, IL",
                title: "Sliding Patio Door Repair",
                desc: "A Swansea homeowner had a sliding patio door that had jumped its track and wouldn't slide properly. We removed the door panel, replaced the worn roller assemblies, cleaned and lubricated the track, and re-hung the door with proper tension adjustment. We also replaced the worn weatherstripping along the door bottom. The door now slides smoothly and seals completely."
              },
              {
                city: "Belleville, IL",
                title: "Storm Door Installation",
                desc: "A Belleville homeowner wanted a full-view storm door installed on their front entry to improve ventilation and protect the main door. We installed a retractable screen storm door, shimmed the frame for a plumb fit, adjusted the door closer for proper tension, and installed the latch hardware. The installation took about 3 hours and the homeowner was delighted with the result."
              },
              {
                city: "Collinsville, IL",
                title: "Garage Entry Door Replacement",
                desc: "A Collinsville homeowner needed to replace a hollow-core door between the garage and living space with a fire-rated solid-core door — required by code when an attached garage opens directly into the home. We installed a 20-minute fire-rated solid-core door with self-closing hinges and a proper fire-rated frame, bringing the home into compliance and significantly improving security between the garage and living area."
              },
            ].map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">{project.city}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">Door Installation &amp; Replacement FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {replacementFaqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSchema pageUrl="/door-installation" faqs={replacementFaqs} />

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Door Work</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. Phil, the owner, has been installing and repairing doors in the greater St. Louis area for over 35 years. He knows the older homes in this region, the common problems they present, and how to solve them properly.
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Related Services</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/handyman-services/door-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Door Repair & Replacement</span></Link>
                <Link href="/handyman-services/drywall-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall & Ceiling Repair</span></Link>
                <Link href="/handyman-services/deck-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Deck Repair & Restoration</span></Link>
                <Link href="/handyman-services/trim-carpentry/"><span className="text-teal-700 hover:underline cursor-pointer">Interior Trim & Finish Carpentry</span></Link>
                <Link href="/handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Home Repair Service Packages</span></Link>
                <Link href="/handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">All Handyman Services</span></Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Service Areas</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/gbp/ofallon-il/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation in O'Fallon, IL</span></Link>
                <Link href="/gbp/edwardsville-il/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation in Edwardsville, IL</span></Link>
                <Link href="/handyman-belleville-il"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation in Belleville, IL</span></Link>
                <Link href="/service-areas/collinsville-handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation in Collinsville, IL</span></Link>
                <Link href="/handyman-swansea-il/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation in Swansea, IL</span></Link>
                <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">All Service Areas</span></Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Helpful Articles</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/blog/handyman-vs-contractor-metro-east-il/"><span className="text-teal-700 hover:underline cursor-pointer">Handyman vs. Contractor: Which Do You Need?</span></Link>
                <Link href="/blog/common-home-repairs-after-winter-illinois/"><span className="text-teal-700 hover:underline cursor-pointer">Most Common Home Repairs After Winter</span></Link>
                <Link href="/blog/home-maintenance-tips-metro-east-il/"><span className="text-teal-700 hover:underline cursor-pointer">Home Maintenance Tips for Metro East IL</span></Link>
                <Link href="/blog/2026-handyman-costs-metro-east-il/"><span className="text-teal-700 hover:underline cursor-pointer">2026 Handyman Costs in Metro East IL</span></Link>
                <Link href="/projects/"><span className="text-teal-700 hover:underline cursor-pointer">View Completed Projects</span></Link>
              </div>
            </div>
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
