import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Hammer, Home, DoorOpen, PaintBucket, Lightbulb, Droplet, ClipboardList, Accessibility, Phone } from "lucide-react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function Services() {
  const services = [
    {
      title: "Handyman Services",
      description: "Small repairs, odd jobs, and nagging issues. Fast, professional handyman services for all your home needs.",
      icon: Wrench,
      url: "/handyman-services/"
    },
    {
      title: "Deck Repair & Restoration",
      description: "Fix rotten boards, loose railings, damaged steps, and structural issues. Safe, sturdy deck repairs.",
      icon: Hammer,
      url: "/handyman-services/deck-repair/"
    },
    {
      title: "Deck Construction & Replacement",
      description: "New deck construction and full deck replacement. Pressure-treated, composite, and multi-level decks.",
      icon: Home,
      url: "/handyman-services/deck-construction/"
    },
    {
      title: "Porch & Exterior Stair Repair",
      description: "Repair loose railings, sagging steps, rotten posts, and soft porch boards. Safety-focused repairs.",
      icon: Hammer,
      url: "/handyman-services/porch-repair/"
    },
    {
      title: "Exterior Carpentry & Wood Rot Repair",
      description: "Trim, fascia, siding, and exterior wood repair. Root cause prevention and rot-resistant materials.",
      icon: Home,
      url: "/handyman-services/exterior-carpentry/"
    },
    {
      title: "Door Installation & Repair",
      description: "Entry doors, storm doors, sliding doors, and interior door replacement. Jamb repair and lockset upgrades.",
      icon: DoorOpen,
      url: "/handyman-services/door-repair/"
    },
    {
      title: "Drywall & Ceiling Repair",
      description: "Repair cracks, holes, nail pops, and water damage. Texture matching and paint touch-ups included.",
      icon: PaintBucket,
      url: "/handyman-services/drywall-repair/"
    },
    {
      title: "Interior Trim & Finish Carpentry",
      description: "Baseboards, casing, crown molding, wainscoting, and chair rails. Match existing or upgrade to modern styles.",
      icon: Home,
      url: "/handyman-services/trim-carpentry/"
    },
    {
      title: "Home Repair Punch Lists",
      description: "Inspection repairs, pre-sale fixes, move-in punch lists, and rental turnover. Efficient multi-item repairs.",
      icon: ClipboardList,
      url: "/handyman-services/home-repair-services/"
    },
    {
      title: "Senior-Friendly Accessibility Upgrades",
      description: "Grab bars, railings, ramps, lever handles, and safety upgrades. Respectful, no-pressure service.",
      icon: Accessibility,
      url: "/handyman-services/senior-accessibility-upgrades/"
    },
    {
      title: "Ceiling Fan & Light Installation",
      description: "Safe installation of ceiling fans and light fixtures. Switch replacements and disposal of old fixtures.",
      icon: Lightbulb,
      url: "/handyman-services/ceiling-fan-installation/"
    },
    {
      title: "Faucet, Sink & Disposal Repair",
      description: "Fix drips, leaks, and failing fixtures. Faucet replacement, sink sealing, and garbage disposal installation.",
      icon: Droplet,
      url: "/handyman-services/faucet-install-and-repair/"
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.services} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-20 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-[#9ca3af] mb-3 inline-block">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Handyman & Home Repair Services
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Hero Handyman Pro specializes in exterior carpentry, decks, porches, and small-to-medium home repairs throughout Greater St. Louis & Metro East.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Browse Our Services
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Click on any service below to learn more about what we do, see common projects, and get answers to frequently asked questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={i} href={service.url}>
                  <div className="bg-[#f9fafb] rounded-2xl p-6 border-2 border-[#e5e7eb] hover:border-[#ff5b00] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="bg-[#ff5b00]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-[#ff5b00]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1220] mb-3">{service.title}</h3>
                    <p className="text-[#4b5563] mb-4 flex-grow">{service.description}</p>
                    <div className="text-[#ff5b00] font-semibold flex items-center gap-2">
                      Learn More →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Homeowners Choose Hero Handyman Pro
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Professional Craftsmanship</h3>
              <p className="text-[#4b5563]">
                Skilled technicians with years of experience in home repairs, carpentry, and exterior work.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Clear Communication</h3>
              <p className="text-[#4b5563]">
                Upfront pricing, honest recommendations, and regular updates throughout your project.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Licensed & Insured</h3>
              <p className="text-[#4b5563]">
                Fully licensed and insured for your protection and peace of mind on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a quick repair or a complete home improvement project, Hero Handyman Pro is ready to help. Contact us today for fast, professional service.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
