import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, AlertTriangle, ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const faqs = [
  {
    question: "How much does fence repair cost in Metro East Illinois?",
    answer: "Most fence repairs in the Metro East range from $150 to $800 depending on the scope. Replacing a single post runs $150–$300. Repairing a gate that won't latch is typically $75–$150. Replacing a full section of privacy fence boards runs $200–$500 per section. We provide written estimates before any work begins."
  },
  {
    question: "Can a leaning fence post be fixed without replacing the whole fence?",
    answer: "In most cases, yes. A leaning post is usually caused by rot at the base (below grade) or frost heave. If the post is structurally sound above ground, we can often sister a new post alongside the old one, set it in concrete, and remove the damaged post. This costs significantly less than replacing the entire fence section."
  },
  {
    question: "How do I know if my fence needs repair or full replacement?",
    answer: "Repair makes sense when damage is isolated to a few boards, one or two posts, or a gate. Full replacement is more cost-effective when more than 40% of the fence is damaged, the posts are rotted at grade throughout, or the fence is over 20 years old and showing widespread deterioration. We'll give you an honest assessment during our estimate."
  },
  {
    question: "What type of fence do you repair?",
    answer: "We repair wood privacy fences, wood picket fences, cedar fences, pressure-treated pine fences, and vinyl/PVC fences. We do not repair chain-link or wrought iron fences. For vinyl fence repairs, we can often source matching replacement panels and posts."
  },
  {
    question: "How long does fence repair take?",
    answer: "Most fence repairs are completed in a single visit. Replacing 2–3 posts and repairing boards typically takes 3–5 hours. Gate repairs usually take 1–2 hours. Larger section replacements may require a second day if concrete needs to cure before the fence is re-attached."
  },
  {
    question: "Do you repair fences in O'Fallon, Edwardsville, and Belleville?",
    answer: "Yes — we serve all of Metro East Illinois including O'Fallon, Edwardsville, Belleville, Collinsville, Glen Carbon, Shiloh, Swansea, Fairview Heights, and surrounding communities. We also serve West St. Louis County including Chesterfield, Ballwin, and St. Charles."
  }
];

export default function FenceRepairService() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Fence Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Hero Handyman Pro",
          "telephone": "800-741-6056",
          "areaServed": ["O'Fallon IL", "Edwardsville IL", "Belleville IL", "Collinsville IL", "Metro East Illinois"]
        },
        "serviceType": "Fence Repair",
        "description": "Professional fence repair services including leaning post repair, broken board replacement, gate repair, and full section replacement.",
        "areaServed": "Metro East Illinois and Greater St. Louis"
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b1220] to-[#1a2540] text-white py-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-[#ff5b00]" />
              <span className="text-[#ff5b00] font-semibold uppercase tracking-wide text-sm">Fence Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fence Repair in Metro East Illinois & Greater St. Louis
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Leaning posts, broken boards, sagging gates, and rotted sections — Hero Handyman Pro repairs wood and vinyl fences throughout O'Fallon, Edwardsville, Belleville, Collinsville, and surrounding communities. Founded by Coast Guard veteran Phil Green with 35+ years of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Request Your Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper-local intro */}
      <section className="py-12 px-6 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Metro East Illinois is tough on fences. Humid summers, heavy spring rains, and freeze-thaw cycles in winter accelerate post rot and board warping — especially in older neighborhoods where fences have been standing for 15+ years. From established subdivisions in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> and <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> to older homes near downtown <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link> and <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link>, we see the same pattern: one or two bad posts cause the whole fence line to lean, boards start pulling away, and the gate stops latching. Most of these problems are repairable without replacing the entire fence.
          </p>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Common Fence Problems We Fix</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">These are the most common fence issues homeowners in Metro East Illinois call us about:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🪵", title: "Leaning or Fallen Posts", desc: "Posts that lean, wobble, or have fallen are usually caused by rot at the base below grade. This is the most common fence failure in Metro East — and often repairable without replacing the entire fence line." },
              { icon: "🔨", title: "Broken or Missing Boards", desc: "Individual privacy fence boards split, crack, or blow off in storms. We replace broken boards with matching lumber and stain or paint to blend with the existing fence." },
              { icon: "🚪", title: "Gates That Won't Latch or Swing", desc: "Sagging gates, misaligned latches, and gates that drag on the ground are common in older fences. We re-hang gates, replace hardware, and add diagonal bracing to prevent future sagging." },
              { icon: "💧", title: "Rot at Post Bases", desc: "Wood posts set in concrete are vulnerable to rot where the post meets the concrete — water pools there and accelerates decay. We can sister new posts alongside rotted ones without removing the old concrete." },
              { icon: "🌪️", title: "Storm Damage", desc: "High winds can push entire fence sections over or snap boards. We assess storm damage quickly and can often complete emergency repairs within 24–48 hours to restore privacy and security." },
              { icon: "🔩", title: "Loose or Failing Hardware", desc: "Hinges, latches, post caps, and fence clips corrode and fail over time. We replace failing hardware and can upgrade to stainless or galvanized components for longer service life." },
              { icon: "📐", title: "Fence Sections Out of Level", desc: "Frost heave in Illinois winters can push posts up or sideways, leaving fence sections uneven. We re-set heaved posts and re-level sections after the ground stabilizes in spring." },
              { icon: "🏚️", title: "Rotted Top Rails", desc: "Horizontal top rails on privacy fences collect water and rot from the top down. We replace rotted rails and can install rail caps to prevent future water infiltration." },
              { icon: "🎨", title: "Weathered or Peeling Finish", desc: "Fences that haven't been stained or sealed in years are vulnerable to accelerated rot. We can clean, sand, and apply a fresh stain or sealant to extend fence life by 5–10 years." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0b1220] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#0b1220]">Should I Repair or Replace My Fence?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-l-4 border-green-500 p-8">
              <h3 className="text-xl font-bold mb-4 text-green-700">✓ Repair Makes Sense When:</h3>
              <ul className="space-y-3">
                {[
                  "Damage is limited to 1–3 posts or a small section of boards",
                  "The fence is less than 15 years old and structurally sound overall",
                  "A gate needs re-hanging or new hardware",
                  "A few boards are broken or missing but the posts are solid",
                  "Storm damage is localized to one section",
                  "The fence just needs cleaning, staining, or sealing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border-l-4 border-orange-500 p-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700">⚠ Replacement May Be Better When:</h3>
              <ul className="space-y-3">
                {[
                  "More than 40% of posts are rotted or leaning",
                  "The fence is over 20 years old with widespread deterioration",
                  "Multiple sections have failed or are failing simultaneously",
                  "The fence style is discontinued and matching materials aren't available",
                  "The cost of repairs approaches 60–70% of full replacement cost",
                  "You want to upgrade to a different material (wood to vinyl, etc.)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-sm max-w-3xl">
            We'll give you an honest assessment during our estimate. If repair is the right call, we'll repair it. If replacement makes more financial sense, we'll tell you that too — and can refer you to trusted fence contractors in the Metro East area.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">What to Expect When You Book Fence Repair</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">From first call to finished repair — here's how fence repair goes with Hero Handyman Pro:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Send Photos or Call", desc: "Text or email a few photos of the damage. We can often diagnose the issue and give a ballpark estimate before visiting. For larger jobs, we schedule a brief on-site assessment." },
              { step: "2", title: "On-Site Assessment", desc: "We probe posts for rot, check the fence line for level, assess gate hardware, and identify any hidden damage. We'll tell you exactly what needs repair and what can wait." },
              { step: "3", title: "Written Quote", desc: "You receive a firm written quote before any work begins. We itemize materials and labor so you understand exactly what you're paying for. No surprises." },
              { step: "4", title: "Material Sourcing", desc: "We source matching lumber, hardware, or vinyl components. For wood fences, we use pressure-treated posts and can match cedar or pine boards to your existing fence." },
              { step: "5", title: "Repair Day", desc: "We set new posts in concrete, replace boards, re-hang gates, and install new hardware. Most repairs are completed in a single visit. Post replacements may require a second visit after concrete cures." },
              { step: "6", title: "Cleanup & Walkthrough", desc: "All old materials, concrete debris, and packaging are removed. We walk you through the completed repair and test gate operation before leaving." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-[#ff5b00] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-[#0b1220] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Recent Fence Repair Projects</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Real fence repairs completed by Hero Handyman Pro across Metro East Illinois.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "O'Fallon, IL",
                title: "3 Leaning Posts & Gate Repair",
                desc: "A homeowner in O'Fallon had three privacy fence posts that had rotted at the base and were leaning significantly after a wet spring. The gate had also dropped and was dragging on the ground. We sistered new pressure-treated posts alongside the rotted ones, set them in concrete, removed the old posts, re-attached the fence boards, and re-hung the gate with new heavy-duty hinges and a self-closing latch. The fence line is now plumb and the gate swings and latches correctly."
              },
              {
                city: "Edwardsville, IL",
                title: "Storm Damage — Full Section Replacement",
                desc: "A severe thunderstorm pushed over an 18-foot section of a 6-foot privacy fence in Edwardsville. Two posts had snapped at grade and the fence boards were scattered across the yard. We removed the debris, extracted the broken post stumps, set two new posts in concrete, and installed new fence boards to match the existing cedar fence. The repair was completed within 48 hours of the storm."
              },
              {
                city: "Belleville, IL",
                title: "Vinyl Fence Panel Replacement",
                desc: "A Belleville homeowner had two vinyl fence panels that had cracked after a vehicle backed into the fence. We sourced matching white vinyl panels and posts from the original manufacturer, removed the damaged sections, and installed the new panels. The repair blended seamlessly with the existing fence. Vinyl fence repairs require sourcing exact-match components — we have supplier relationships that make this possible."
              },
              {
                city: "Collinsville, IL",
                title: "Sagging Gate Rebuild",
                desc: "A wood gate in Collinsville had been sagging for years — the original builder hadn't installed diagonal bracing, so the gate had racked over time. We removed the gate, rebuilt it with a proper diagonal tension rod, replaced the failing hinges with heavy-duty strap hinges, and re-hung it with a self-closing spring. The homeowner had been lifting the gate to open it for two years. Now it swings freely and latches on its own."
              },
              {
                city: "Glen Carbon, IL",
                title: "Fence Staining & Sealing",
                desc: "A Glen Carbon homeowner had a 10-year-old cedar fence that had never been stained. The wood was gray and weathered but structurally sound. We pressure-washed the fence, let it dry for 48 hours, replaced three cracked boards, and applied a semi-transparent cedar stain with UV protection. The fence looks like new and should last another 10+ years with periodic re-staining."
              },
            ].map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#ff5b00] uppercase tracking-wide">{project.city}</span>
                </div>
                <h3 className="font-bold text-[#0b1220] mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phil EEAT Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-gradient-to-br from-[#0b1220] to-[#1a2540] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#ff5b00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Veteran-Owned</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Licensed & Insured</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">About Your Metro East Fence Repair Specialist</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hero Handyman Pro was founded by Phil Green, a U.S. Coast Guard veteran with over 35 years of hands-on experience in home repair and carpentry. Phil built Hero Handyman Pro on a simple principle: homeowners deserve dependable communication, professional craftsmanship, and a handyman who makes home repair easy — not stressful.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We're a local Metro East team — not a franchise, not a call center. When you call Hero Handyman Pro, you're talking to the people who will actually show up and do the work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "35+ Years Experience", icon: "🏆" },
                  { label: "Veteran-Owned Business", icon: "🎖️" },
                  { label: "Licensed & Insured", icon: "✅" },
                  { label: "Same-Week Service Available", icon: "📅" },
                  { label: "Written Estimates", icon: "📋" },
                  { label: "Local Metro East Team", icon: "📍" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <p className="text-white text-xs font-semibold">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Fence Repair FAQs</h2>
            <p className="text-gray-600">Common questions from Metro East homeowners about fence repair.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4 text-center">Fence Repair Near You</h2>
          <p className="text-gray-600 mb-6 text-center">We serve all of Metro East Illinois and West St. Louis County.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "Shiloh, IL", href: "/service-areas/shiloh-il-handyman-services/" },
              { name: "Swansea, IL", href: "/service-areas/swansea-il-handyman-services/" },
              { name: "Fairview Heights, IL", href: "/service-areas/fairview-heights-il-handyman-services/" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <Button variant="outline" className="rounded-full border-gray-200 hover:border-[#ff5b00] hover:text-[#ff5b00]">
                  {area.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-[#0b1220] mb-3">Related Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Deck Repair", href: "/handyman-services/deck-porch-repair/" },
                  { label: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/" },
                  { label: "Porch Repair", href: "/handyman-services/porch-repair/" },
                  { label: "Home Repair Services", href: "/handyman-services/home-repair-services/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#ff5b00] hover:underline text-sm flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#0b1220] mb-3">Helpful Articles</h3>
              <ul className="space-y-2">
                {[
                  { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
                  { label: "Home Maintenance Tips for Metro East", href: "/blog/home-maintenance-tips-metro-east/" },
                  { label: "Handyman vs Contractor: Which Do You Need?", href: "/blog/handyman-vs-contractor-metro-east-il/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#ff5b00] hover:underline text-sm flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#0b1220] mb-3">Service Packages</h3>
              <ul className="space-y-2">
                {[
                  { label: "Handyman Membership", href: "/membership/" },
                  { label: "Service Packages", href: "/service-packages/" },
                  { label: "Get an Estimate", href: "/contact/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#ff5b00] hover:underline text-sm flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Fence?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't let a leaning post or broken gate become a bigger problem. Call or text for a free estimate — we respond same day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                Request Your Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }) }} />
    </div>
  );
}
