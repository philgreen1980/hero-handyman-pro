import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function DoorInstallationGlenCarbon() {
  const seoData = {
    title: "Door Installation Glen Carbon IL | Entry, Interior & Storm Door Install",
    description: "Professional door installation in Glen Carbon IL — entry doors, interior doors, storm doors, and patio doors. Hero Handyman Pro serves all of Madison County.",
    keywords: "door installation Glen Carbon IL, entry door installation Glen Carbon, interior door installation Glen Carbon IL, storm door installation Glen Carbon, patio door Glen Carbon IL",
    canonicalUrl: "https://herohandymanpro.com/door-installation-glen-carbon-il"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Glen Carbon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Door Installation in Glen Carbon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional door installation for Glen Carbon homeowners — entry doors, interior doors, storm doors, and patio doors. Properly hung, plumb, and weathertight the first time.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Glen Carbon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Door Installation Services in Glen Carbon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Glen Carbon's newer subdivisions — particularly those developed in the 1990s and 2000s along IL-157 and near SIUE — feature standard modern rough openings that accept prehung doors without framing adjustment. Older homes near downtown Glen Carbon and the Maryville border may require shimming and squaring before installation. We assess every opening before starting.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Entry Door Installation", desc: "Prehung entry door installation including frame, threshold, weatherstripping, and hardware. We ensure a weathertight fit that holds up to Glen Carbon's seasonal temperature swings." },
              { title: "Interior Door Installation", desc: "Interior prehung door installation for new openings or replacement of existing doors. We match existing door heights and profiles in older Glen Carbon homes." },
              { title: "Storm Door Installation", desc: "Full-view, ventilating, and retractable screen storm doors installed over existing entry doors. Proper installation prevents the frame racking that causes premature hardware failure." },
              { title: "Patio Door Installation", desc: "Sliding and French patio door installation. We address the framing and threshold requirements that are often overlooked in DIY installations." },
              { title: "Barn Door Installation", desc: "Sliding barn door hardware and door panel installation for interior applications. We ensure proper wall blocking and header support." },
              { title: "Pet Door Installation", desc: "Pet door installation in existing door panels or walls. We select the correct size and insulation rating for Glen Carbon's climate." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes a Proper Door Installation</h2>
              <p className="text-gray-600 mb-4">
                A door that's installed out of plumb or out of square will bind, stick, and fail to latch properly — often within the first year. In Glen Carbon's newer homes, rough openings are typically standard and square. In older homes, settling can throw openings out of alignment, requiring shimming before installation.
              </p>
              <p className="text-gray-600 mb-4">
                We check the rough opening for plumb, level, and square before installing any door. If the opening has settled, we shim and adjust it before setting the door — not after. This is the step most DIY and budget installations skip, and it's why those doors start sticking within a season.
              </p>
              <p className="text-gray-600">
                For exterior doors, we also ensure the threshold is properly sealed and the door is weathertight before we leave. A door that leaks air or water around the frame is an installation problem, not a product problem.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Check Rough Opening", desc: "Verify plumb, level, and square. Adjust framing or shim as needed before door installation." },
                { step: "2", title: "Set the Door Unit", desc: "Install the prehung door unit with proper shimming at hinges and latch side for long-term alignment." },
                { step: "3", title: "Secure & Adjust", desc: "Fasten through shims into framing. Adjust hinge and strike positions for smooth operation." },
                { step: "4", title: "Weatherseal & Finish", desc: "Install threshold, weatherstripping, and door sweep. Caulk exterior perimeter. Install hardware." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Glen Carbon Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Proper Technique", desc: "We check rough openings for plumb and square before installation — the step most installers skip." },
              { title: "Same-Day Service", desc: "For urgent door replacements, we strive to get to Glen Carbon the same day or next morning." },
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your protection on every job." },
              { title: "Transparent Pricing", desc: "Clear estimate before we start. No surprises when the job is done." }
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
            <h2 className="text-3xl font-bold mb-4">Serving Glen Carbon & Madison County</h2>
            <p className="text-teal-100 mb-4">
              We install doors throughout Glen Carbon — from newer subdivisions near SIUE and IL-157 to older homes near downtown and the Maryville border. Glen Carbon's mix of construction eras means we're experienced with both standard modern rough openings and older frames that need adjustment before installation.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Edwardsville, Collinsville, Belleville, O'Fallon, and surrounding Madison and St. Clair County communities.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["IL-157 Corridor", "SIUE Area", "Downtown Glen Carbon", "Maryville Border", "Edwardsville & Collinsville", "Belleville & O'Fallon"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Glen Carbon & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/door-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Glen Carbon</Button>
            </Link>
            <Link href="/drywall-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Glen Carbon</Button>
            </Link>
            <Link href="/deck-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Glen Carbon</Button>
            </Link>
            <Link href="/carpentry-services-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Glen Carbon</Button>
            </Link>
            <Link href="/door-installation">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Door Installation</Button>
            </Link>
            <Link href="/service-areas/glen-carbon-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Glen Carbon</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Install That New Door?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Glen Carbon and all of Madison County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
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
