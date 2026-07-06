import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ServiceDetail() {
  // This is a template that would be dynamically populated or duplicated for specific services
  // For this build, I'll create the specific content for "Handyman & Home Repair" as requested
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-wider mb-4">
              Service Category
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6">
              Handyman & Home Repair Services in Greater St. Louis
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              From honey-do lists to critical home maintenance, we handle the small jobs so you don't have to.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider">
                Get a Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* What We Fix */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">What We Fix</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our skilled craftsmen are equipped to handle a wide range of general home repairs. We focus on quality, efficiency, and leaving your home cleaner than we found it.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Drywall patching & repair",
                "Door adjustments & hardware",
                "Trim & molding installation",
                "Furniture assembly",
                "Picture & mirror hanging",
                "Shelf installation",
                "Caulking & weatherproofing",
                "Minor painting touch-ups"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Choose Hero Handyman?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <span className="font-heading font-bold text-xl text-primary">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">We Show Up On Time</h3>
                  <p className="text-muted-foreground">We know your time is valuable. We schedule specific windows and stick to them.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <span className="font-heading font-bold text-xl text-primary">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Quality Craftsmanship</h3>
                  <p className="text-muted-foreground">We don't cut corners. Every repair is done to last, using the right materials and techniques.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <span className="font-heading font-bold text-xl text-primary">03</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Clean & Respectful</h3>
                  <p className="text-muted-foreground">We treat your home with respect, wearing boot covers and cleaning up our workspace thoroughly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-lg">Do you charge by the hour or by the job?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For most small handyman tasks, we can provide a fixed price estimate upfront so there are no surprises. For larger or more complex lists, we may offer hourly rates. Contact us for a specific quote.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-lg">Are you insured?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, Hero Handyman Pro is fully insured for your peace of mind and protection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-lg">Do I need to provide the materials?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We can pick up materials for you, or you can provide them if you have specific preferences. We'll discuss this during the estimate process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="font-heading font-bold text-xl text-primary mb-4">Other Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/deck-porch-repair/">
                  <span className="flex items-center justify-between hover:text-secondary cursor-pointer group">
                    Deck Repair <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </li>
              <li className="border-t border-border/50 pt-3">
                <Link href="/services/doors-windows/">
                  <span className="flex items-center justify-between hover:text-secondary cursor-pointer group">
                    Doors & Windows <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </li>
              <li className="border-t border-border/50 pt-3">
                <Link href="/services/drywall-interior-repair/">
                  <span className="flex items-center justify-between hover:text-secondary cursor-pointer group">
                    Drywall Repair <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>
            <h3 className="font-heading font-bold text-2xl mb-4 relative z-10">Ready to get started?</h3>
            <p className="mb-6 relative z-10 text-primary-foreground/90">Contact us today for a free estimate on your home repair project.</p>
            <Link href="/#contact">
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase relative z-10">
                Request Estimate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
