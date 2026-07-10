import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Star, ArrowRight, Hammer, Home, DoorOpen, Wrench, Zap, List } from "lucide-react";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function HandymanServicesStLouis() {
  const seo = useSeoRoute();
  const phone = "618-203-3097";

  const services = [
    {
      icon: <Home className="h-7 w-7 text-primary" />,
      title: "Interior Repairs & Updates",
      desc: "Seamless drywall patching, interior door repair and installation, trim and baseboard upgrades, bathroom vanity refreshes, and laundry room organization.",
      link: "/services/handyman-home-repair/",
    },
    {
      icon: <Hammer className="h-7 w-7 text-primary" />,
      title: "Exterior & Deck Maintenance",
      desc: "Deck board replacement, railing reinforcement, stair repair, wood rot removal, siding repair, and fence restoration to protect your home from Metro East weather.",
      link: "/services/deck-porch-repair/",
    },
    {
      icon: <Zap className="h-7 w-7 text-primary" />,
      title: "Fixture & Fan Installation",
      desc: "Safe, professional ceiling fan installation, chandelier and vanity light upgrades, and exterior fixture replacements — all properly supported and balanced.",
      link: "/services/ceiling-fan-installation/",
    },
    {
      icon: <DoorOpen className="h-7 w-7 text-primary" />,
      title: "Doors, Windows & Fixtures",
      desc: "Sticking doors planed and re-hung, sliding glass doors adjusted, window hardware replaced, and new interior doors installed plumb and level.",
      link: "/services/doors-windows/",
    },
    {
      icon: <List className="h-7 w-7 text-primary" />,
      title: "The Honey-Do List",
      desc: "TV mounting with hidden wiring, furniture assembly, heavy mirror and artwork hanging, smoke detector replacement, and all those lingering tasks knocked out in one visit.",
      link: "/services/",
    },
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Handyman Packages",
      desc: "Move-In Ready packages, seasonal tune-ups, and the Hero Maintenance Subscription for homeowners who want proactive, year-round care.",
      link: "/handyman-packages/",
    },
  ];

  const communities = [
    { name: "Edwardsville, IL", desc: "Fixture updates & drywall in historic homes and newer subdivisions", link: "/service-areas/edwardsville-il/" },
    { name: "Belleville, IL", desc: "Historic home maintenance, plaster repair & exterior carpentry", link: "/service-areas/belleville-il/" },
    { name: "O'Fallon, IL", desc: "Deck maintenance, interior updates & honey-do lists for busy professionals", link: "/service-areas/ofallon-il-handyman/" },
    { name: "Collinsville, IL", desc: "Fixture upgrades, drywall repair & exterior maintenance", link: "/service-areas/collinsville-il/" },
    { name: "Glen Carbon, IL", desc: "Interior updates and deck restoration", link: "/service-areas/glen-carbon-il/" },
    { name: "Swansea, IL", desc: "Doors, windows & general home maintenance", link: "/service-areas/" },
    { name: "Shiloh, IL", desc: "Newer subdivision repairs and seasonal upkeep", link: "/service-areas/" },
    { name: "St. Louis, MO", desc: "Cross-river reliability for historic and modern homes", link: "/service-areas/st-louis-mo/" },
  ];

  const reviews = [
    {
      name: "Mark D.",
      loc: "St. Louis, MO",
      text: "I live in St. Louis and was having a terrible time finding someone to come out for a two-day drywall and trim repair project. Contractors either didn't call back or quoted me outrageous prices because the job was 'too small.' Hero Handyman Pro answered immediately, gave me a fair, upfront quote, and the work was flawless. They are my go-to from now on.",
    },
    {
      name: "Sarah P.",
      loc: "Collinsville, IL",
      text: "Hero Handyman Pro has been a lifesaver for our home in Collinsville. They have installed ceiling fans, fixed our deck, and repaired our siding. The technicians are always so polite, and they leave the house spotless. It is so refreshing to find a company that actually communicates.",
    },
  ];

  const steps = [
    { num: "01", title: "Reach Out", desc: "Call us or request a quote online. We will ask a few questions about your project and your location." },
    { num: "02", title: "Clear Estimate", desc: "For many projects, we provide a ballpark estimate right away. For complex jobs, we schedule a quick visit. No hidden fees, ever." },
    { num: "03", title: "Prompt Scheduling", desc: "We focus on 2–3 day projects, so our schedule is agile. We can typically get your project on the calendar much faster than a traditional contractor." },
    { num: "04", title: "Professional Execution", desc: "Our technician arrives on time, completes the work to the highest standard, and cleans up completely before leaving." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />
      <LocalBusinessSchema city="St. Louis" state="MO" pageUrl="https://herohandymanpro.com/handyman-services-st-louis/" />
      <ServiceSchema
        serviceName="Handyman Services"
        description="Professional handyman services across St. Louis and Metro East Illinois — drywall repair, deck maintenance, door installation, ceiling fan installation, and more."
        serviceType="HandymanService"
        areaServed="St. Louis, MO and Metro East Illinois"
        priceRange="$$"
        pageUrl="https://herohandymanpro.com/handyman-services-st-louis/"
      />

      {/* Breadcrumb */}
      <div className="container pt-4">
        <PageBreadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Handyman Services St. Louis & Metro East" }]} />
      </div>

      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              St. Louis & Metro East
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Top-Rated Handyman Services in{" "}
              <span className="text-secondary">St. Louis & Metro East</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-xl">
              The Mississippi River might divide the map, but it doesn't divide the need for high-quality, reliable home maintenance. We bridge the gap — serving both sides of the river with the same premium, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={`tel:${phone}`}>
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider text-lg h-14 px-8">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
              <Link href="/contact/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold uppercase tracking-wider text-lg h-14 px-8">
                  Get a Free Estimate
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex gap-1 text-secondary">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="text-primary-foreground/80 text-sm">4.9-star rated across St. Louis & Metro East</span>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: <Phone className="h-6 w-6" />, title: "We Answer the Phone", desc: "Real people, same-day callbacks" },
              { icon: <Check className="h-6 w-6" />, title: "The 2–3 Day Sweet Spot", desc: "Agile scheduling, fast turnaround" },
              { icon: <Hammer className="h-6 w-6" />, title: "Skilled Craftsmen", desc: "Vetted, uniformed professionals" },
              { icon: <Star className="h-6 w-6" />, title: "Transparent Pricing", desc: "Upfront quotes, no hidden fees" },
            ].map((item, i) => (
              <div key={i} className="bg-primary-foreground/10 rounded-lg p-5 border border-primary-foreground/20">
                <div className="text-secondary mb-3">{item.icon}</div>
                <h3 className="font-bold font-heading mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Cross-River Reliability: Why We Are Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The contracting industry is notorious for poor communication and unreliability. We built Hero Handyman Pro specifically to solve that problem.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "We Actually Answer the Phone", desc: "It is the most common complaint we hear from new clients: \"I called five places, and you are the only one who answered.\" When you call, a real person picks up. If we miss your call, we return it the same day." },
              { title: "Clean, Professional & Uniformed", desc: "Our technicians arrive on time, in clean uniforms, driving marked Hero Handyman Pro vehicles. We use drop cloths, wear shoe covers, and clean up our workspace entirely before we leave." },
              { title: "Technicians You Know by Name", desc: "We are not a massive, faceless franchise that subcontracts your project to the lowest bidder. Our clients across St. Louis and the Metro East get to know our technicians by name." },
              { title: "The 2–3 Day Sweet Spot", desc: "We handle the projects that fall right in the middle of the spectrum — drywall repairs, deck restorations, fixture upgrades, and smaller remodels. Fast, focused, and flawlessly executed." },
            ].map((item, i) => (
              <Card key={i} className="border-t-4 border-t-secondary">
                <CardContent className="p-6">
                  <div className="bg-secondary/10 w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Core Handyman Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive suite of services designed to keep your home looking beautiful and functioning perfectly across St. Louis and the Metro East.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.link}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 h-full border-l-4 border-l-transparent hover:border-l-secondary">
                  <CardContent className="p-6">
                    <div className="bg-primary/5 p-3 rounded-full w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                      {svc.icon}
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-secondary transition-colors">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{svc.desc}</p>
                    <div className="flex items-center text-secondary font-bold uppercase text-xs tracking-wide">
                      Learn More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/handyman-services/">
              <Button size="lg" className="font-bold uppercase tracking-wider">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Serving the Entire Region</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We are proud of our deep roots in the Metro East, but our commitment to quality service extends across the river.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communities.map((c, i) => (
              <Link key={i} href={c.link}>
                <div className="group p-5 rounded-lg border border-border hover:border-secondary hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                  <h3 className="font-heading font-bold text-primary group-hover:text-secondary transition-colors mb-1">{c.name}</h3>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas/">
              <Button variant="outline" className="font-bold uppercase tracking-wider">
                View All Service Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
            <p className="text-primary-foreground/80">Our reputation is built on the satisfaction of our clients. We maintain a 4.9-star rating because we consistently deliver on our promises.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((r, i) => (
              <Card key={i} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="italic mb-4 text-primary-foreground/90">"{r.text}"</p>
                  <div>
                    <p className="font-bold font-heading uppercase tracking-wide">{r.name}</p>
                    <p className="text-sm text-primary-foreground/60">{r.loc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">How Our Process Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We have designed our process to be as frictionless as possible for busy homeowners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-heading font-bold text-secondary/30 mb-3">{step.num}</div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">Ready to Cross It Off the List?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Your home is your sanctuary, and maintaining it shouldn't be a second full-time job. From Edwardsville to Belleville, from Collinsville to St. Louis, Hero Handyman Pro is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${phone}`}>
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-lg h-14 px-8">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
            <Link href="/contact/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider text-lg h-14 px-8">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
