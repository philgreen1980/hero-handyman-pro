import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Hammer, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const projects = [
  {
    id: 1,
    title: "Deck Board Replacement & Re-Sealing",
    city: "O'Fallon, IL",
    service: "Deck Repair",
    serviceHref: "/handyman-services/deck-repair/",
    date: "March 2026",
    description:
      "A homeowner in the Reserves subdivision noticed several deck boards had gone soft over the winter. Phil replaced 14 boards, reinforced two joists that had surface rot, and re-sealed the entire deck surface. The job took one full day. The homeowner noted the deck now feels more solid than when it was originally built.",
    scope: ["14 deck boards replaced", "Two joists sistered and reinforced", "Full deck surface re-sealed", "Hardware upgraded to stainless steel"],
    outcome: "Deck passed a bounce test and looks brand new. Homeowner avoided a full rebuild — savings estimated at $3,200.",
    testimonial: { name: "Mark & Lisa T.", stars: 5 },
  },
  {
    id: 2,
    title: "Drywall Repair After Plumbing Leak",
    city: "Edwardsville, IL",
    service: "Drywall Repair",
    serviceHref: "/handyman-services/drywall-repair/",
    date: "February 2026",
    description:
      "A slow leak behind the bathroom wall in an older Edwardsville home had caused a 2x3 ft section of drywall to buckle and grow mold. Phil cut out the damaged section, treated the framing with antimicrobial primer, installed new drywall, taped and mudded the seams, and matched the existing orange-peel texture. The repair is invisible.",
    scope: ["Damaged drywall removed and disposed", "Framing treated with antimicrobial primer", "New drywall installed and finished", "Texture matched to existing wall"],
    outcome: "Repair is completely invisible. Homeowner had the room repainted the following week and could not tell where the damage had been.",
    testimonial: { name: "Christine B.", stars: 5 },
  },
  {
    id: 3,
    title: "Front Door Replacement with Storm Door",
    city: "Belleville, IL",
    service: "Door Installation",
    serviceHref: "/handyman-services/door-repair/",
    date: "January 2026",
    description:
      "The original 1980s steel entry door on a Belleville ranch home had a broken threshold, a warped frame, and a gap at the bottom that let cold air in. Phil removed the old door and frame, shimmed and leveled the rough opening, installed a new pre-hung fiberglass door, and added a matching full-view storm door. The homeowner reported their heating bill dropped noticeably the following month.",
    scope: ["Old door and frame removed", "Rough opening shimmed and squared", "Pre-hung fiberglass door installed", "Full-view storm door added", "New threshold and weatherstripping"],
    outcome: "No more drafts. Homeowner estimated $40/month savings on heating based on their utility bill comparison.",
    testimonial: { name: "Patricia L.", stars: 5 },
  },
  {
    id: 4,
    title: "Porch Railing Rebuild",
    city: "Collinsville, IL",
    service: "Exterior Carpentry",
    serviceHref: "/handyman-services/porch-repair/",
    date: "April 2026",
    description:
      "A Collinsville homeowner had a front porch railing that had rotted at the base posts and was no longer code-compliant. Phil removed the old railing, replaced the three post bases with new pressure-treated lumber and post anchors set in concrete, and rebuilt the top and bottom rails with composite material that will not rot. The new railing is solid and meets current IRC code for height and baluster spacing.",
    scope: ["Old railing removed", "Three post bases replaced with new PT lumber", "Post anchors set in concrete", "Composite rails and balusters installed", "Painted to match existing trim"],
    outcome: "Railing is code-compliant and solid. Homeowner's insurance inspector approved the repair on their next visit.",
    testimonial: { name: "Greg N.", stars: 5 },
  },
  {
    id: 5,
    title: "Ceiling Fan Installation — 4 Rooms",
    city: "Glen Carbon, IL",
    service: "Ceiling Fan Installation",
    serviceHref: "/handyman-services/ceiling-fan-installation/",
    date: "March 2026",
    description:
      "A Glen Carbon homeowner bought four new ceiling fans for their bedrooms and living room but did not want to deal with the wiring. Phil installed all four fans in a single afternoon, including upgrading two of the junction boxes to fan-rated boxes that could handle the weight and vibration. All fans were balanced and tested before Phil left.",
    scope: ["4 ceiling fans installed", "2 junction boxes upgraded to fan-rated", "All wiring connections inspected and secured", "Fans balanced and tested"],
    outcome: "All four fans installed in 4.5 hours. Homeowner noted the living room fan made a noticeable difference in comfort within the first week.",
    testimonial: { name: "Tom H.", stars: 5 },
  },
  {
    id: 6,
    title: "Bathroom Faucet & Toilet Rebuild",
    city: "Chesterfield, MO",
    service: "Plumbing Fixtures",
    serviceHref: "/handyman-services/faucet-install-and-repair/",
    date: "February 2026",
    description:
      "A Chesterfield homeowner had a dripping bathroom faucet and a toilet that ran continuously. Phil replaced the faucet with a new brushed nickel model the homeowner had purchased, rebuilt the toilet fill valve and flapper, and re-caulked the base of the toilet. The running toilet had been wasting an estimated 200 gallons per day.",
    scope: ["Bathroom faucet replaced", "Toilet fill valve and flapper rebuilt", "Supply lines replaced with braided stainless", "Toilet base re-caulked"],
    outcome: "No more drips or running water. Homeowner's water bill dropped by $22 the following month.",
    testimonial: { name: "Steve M.", stars: 5 },
  },
  {
    id: 7,
    title: "Interior Trim & Door Casing Repair",
    city: "Ballwin, MO",
    service: "Trim Carpentry",
    serviceHref: "/handyman-services/trim-carpentry/",
    date: "April 2026",
    description:
      "A Ballwin homeowner was preparing to sell their home and had a punch list of trim repairs: two door casings that had pulled away from the wall, a section of baseboard damaged during a furniture move, and several nail pops in the crown molding throughout the main floor. Phil addressed all items in one visit, caulked and touched up paint, and the home passed its pre-listing inspection.",
    scope: ["Two door casings re-secured and caulked", "Baseboard section replaced and painted", "Crown molding nail pops filled and touched up", "All repairs caulked and painted to match"],
    outcome: "Home passed pre-listing inspection. Realtor noted the repairs made a significant difference in the home's presentation.",
    testimonial: { name: "Jennifer K.", stars: 5 },
  },
  {
    id: 8,
    title: "Fence Gate Rebuild & Post Repair",
    city: "Fairview Heights, IL",
    service: "Exterior Carpentry",
    serviceHref: "/handyman-services/porch-repair/",
    date: "March 2026",
    description:
      "A Fairview Heights homeowner had a wooden privacy fence gate that had sagged and no longer latched. The hinge post had rotted at the base. Phil dug out the old post, set a new 4x4 pressure-treated post in concrete, rebuilt the gate frame with new lumber, re-hung the gate, and installed a new self-closing spring hinge and latch. The gate now swings freely and latches securely.",
    scope: ["Rotted hinge post removed and replaced", "New 4x4 PT post set in concrete", "Gate frame rebuilt with new lumber", "Self-closing spring hinge installed", "New latch hardware installed"],
    outcome: "Gate swings freely and latches on the first try. Homeowner noted it is better than when the fence was originally installed.",
    testimonial: { name: "David R.", stars: 5 },
  },
];

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
}

export default function Projects() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-wider mb-4">
              <Hammer className="h-4 w-4" /> Project Gallery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6">
              Recent Projects Across St. Louis & Metro East
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Real work. Real results. Browse completed handyman projects from homeowners in Greater St. Louis and Metro East Illinois — deck repairs, drywall, doors, carpentry, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:800-741-6056">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider">
                  <Phone className="h-5 w-5 mr-2" /> Call 800-741-6056
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold uppercase tracking-wider"
                onClick={scrollToContact}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary text-secondary-foreground py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "5.0 Stars", label: "Average Rating" },
              { value: "15+", label: "Cities Served" },
              { value: "Same Week", label: "Scheduling Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-heading font-bold">{stat.value}</div>
                <div className="text-sm font-medium text-secondary-foreground/80 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Completed Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each project below is a real job completed for a homeowner in the Greater St. Louis and Metro East area. Scope, outcome, and homeowner feedback are included for each.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Header */}
                <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {project.city}
                      </span>
                      <Badge variant="secondary" className="text-xs font-bold uppercase tracking-wide">
                        {project.service}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 py-5 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Scope */}
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Work Performed</h4>
                    <ul className="space-y-1">
                      {project.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-secondary/10 border border-secondary/20 rounded-md px-4 py-3">
                    <span className="font-bold text-sm text-primary uppercase tracking-wide">Result: </span>
                    <span className="text-sm text-muted-foreground">{project.outcome}</span>
                  </div>

                  {/* Testimonial + Link */}
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-sm font-bold font-heading text-primary/70 uppercase tracking-wide">
                      — {project.testimonial.name}
                    </p>
                    <Link href={project.serviceHref}>
                      <span className="inline-flex items-center gap-1 text-secondary font-bold text-sm uppercase tracking-wide hover:underline cursor-pointer">
                        View Service <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">We Serve Your Neighborhood</h2>
            <p className="text-muted-foreground">Hero Handyman Pro completes projects throughout Greater St. Louis and Metro East Illinois.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "Shiloh, IL", href: "/handyman-shiloh-il" },
              { name: "Swansea, IL", href: "/handyman-swansea-il" },
              { name: "Fairview Heights, IL", href: "/handyman-fairview-heights-il" },
              { name: "Chesterfield, MO", href: "/handyman-chesterfield-mo" },
              { name: "Ballwin, MO", href: "/handyman-ballwin-mo" },
              { name: "St. Louis, MO", href: "/handyman-st-louis-mo" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <span className="inline-block border border-primary/20 hover:border-secondary hover:text-secondary text-muted-foreground rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-6">
            Ready to Add Your Project to This List?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Call Phil directly or fill out our quick quote form. Most estimates are scheduled within 24 to 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider text-lg h-14 px-8">
                <Phone className="h-5 w-5 mr-2" /> Call 800-741-6056
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold uppercase tracking-wider text-lg h-14 px-8"
              onClick={scrollToContact}
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
