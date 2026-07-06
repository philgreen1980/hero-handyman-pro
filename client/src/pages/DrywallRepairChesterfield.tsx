import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairChesterfield() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Chesterfield, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair in Chesterfield MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Fast, clean drywall repairs for Chesterfield homeowners. Holes, cracks, water damage, and ceiling repairs — done right the first time with a finish you can paint over immediately.
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
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Chesterfield MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Drywall Repair Services in Chesterfield MO
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Chesterfield's upscale West County homes — from the estates near Wildhorse Creek to the newer builds in Chesterfield Valley — demand a high standard of finish work. A poorly patched wall stands out in a well-maintained home. We deliver seamless repairs that match your existing texture and are ready for paint.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Drywall Hole Repair",
                desc: "Whether it's a doorknob punch-through, a plumber's access hole, or accidental damage, we patch holes of any size cleanly. Chesterfield homes often have premium finishes — we match texture and feather edges so the repair disappears.",
                items: ["Small nail and anchor holes", "Medium holes (2\"–6\")", "Large structural holes", "Texture matching (orange peel, knockdown, smooth)"]
              },
              {
                title: "Drywall Patching",
                desc: "Cracks along corners, seams, and around windows are common in Chesterfield's newer construction as homes settle. We tape, mud, and finish these properly — not just caulk over them — so they don't reappear next season.",
                items: ["Settlement cracks along seams", "Corner bead damage repair", "Window and door frame cracks", "Tape joint bubbling and separation"]
              },
              {
                title: "Ceiling Drywall Repair",
                desc: "Ceiling repairs are among the most visible in a home. Water stains, sagging sections, and cracks in Chesterfield's vaulted and cathedral ceilings require careful work to restore without leaving visible patches.",
                items: ["Water stain and ring repair", "Sagging ceiling section repair", "Popcorn and textured ceiling matching", "Recessed light cutout repairs"]
              },
              {
                title: "Water Damaged Drywall",
                desc: "After a roof leak, HVAC condensate overflow, or plumbing issue, wet drywall must be fully replaced — not just dried. We remove compromised material, treat for mold if needed, and install new drywall with a finish that matches the surrounding wall.",
                items: ["Wet drywall removal and replacement", "Mold-resistant drywall installation", "Post-leak ceiling and wall repair", "Insurance-ready documentation available"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Why Chesterfield Homeowners Call Us
              </h2>
              <p className="text-gray-600 mb-4">
                Chesterfield is one of St. Louis County's most desirable communities, and homeowners here expect quality. When a drywall repair is done poorly, it's immediately noticeable — especially in rooms with natural light or premium paint finishes.
              </p>
              <p className="text-gray-600 mb-6">
                We've worked in homes throughout Chesterfield Valley, near Baxter Road, and in the established neighborhoods off Olive Boulevard. We understand the finish standards expected here and deliver accordingly.
              </p>
              <div className="space-y-3">
                {[
                  "Seamless texture matching on all repairs",
                  "Paint-ready finish — no sanding required by you",
                  "Same-day and next-day appointments available",
                  "Clean worksite — we protect floors and furniture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get a Free Quote Today</h3>
              <p className="text-teal-100 mb-6">
                Call Hero Handyman Pro for fast drywall repair in Chesterfield MO. We respond quickly and can often schedule same or next day.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-teal-700 hover:bg-teal-50 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Request a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Texture Matching Section */}
      <section className="py-16 px-6 bg-teal-50 border-y border-teal-100">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">The Hardest Part of Any Drywall Repair</span>
              <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">Texture Matching — Done Right</h2>
              <p className="text-gray-700 mb-4">
                Patching a hole is the easy part. Matching the texture around it is what separates a professional repair from an obvious patch — and in Chesterfield's well-maintained homes, an obvious patch is immediately noticeable, especially under natural light or premium paint finishes.
              </p>
              <p className="text-gray-700 mb-4">
                Chesterfield homes span several decades of construction. Newer builds in Chesterfield Valley and near Baxter Road tend toward <strong>orange peel</strong> spray texture or a light <strong>smooth finish</strong>. Older established neighborhoods off Olive Boulevard and near Wildhorse Creek more commonly have <strong>knockdown</strong> or <strong>skip-trowel</strong> hand-applied textures. Getting the match right requires identifying which texture you have before any mud is applied.
              </p>
              <p className="text-gray-700">
                Hero Handyman Pro assesses your existing wall finish before starting any repair, then applies the correct technique — by hand or spray — so the patch blends completely with the surrounding surface and is ready for paint.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Textures We Match in Chesterfield Homes</h3>
              {[
                {
                  name: "Knockdown",
                  desc: "Common in Chesterfield homes built in the 1980s–2000s. Compound is splattered on the wall and lightly flattened with a knife, creating an irregular, mottled pattern. Requires hand application and careful timing to replicate convincingly."
                },
                {
                  name: "Orange Peel",
                  desc: "A fine, bumpy spray texture common in newer Chesterfield Valley construction. Applied with a hopper gun — the key is matching the droplet size and density of the existing texture so the repair area isn't visible at an angle."
                },
                {
                  name: "Skip-Trowel",
                  desc: "A hand-applied texture with a slightly randomized, layered look. Found in custom homes and remodeled spaces throughout West County. Requires a skilled hand — the pattern is never perfectly uniform, which makes matching it a craft skill."
                },
                {
                  name: "Smooth Finish",
                  desc: "Common in newer construction and renovated spaces. Looks simple but is unforgiving — any imperfection in the mud work or feathering is immediately visible under raking light. We skim-coat and sand to a true flat finish."
                },
              ].map((texture, i) => (
                <div key={i} className="bg-white rounded-xl border border-teal-200 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="font-bold text-gray-900">{texture.name}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{texture.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Explore more Hero Handyman Pro services in the St. Louis area, or visit our{" "}
            <Link href="/handyman-chesterfield-mo" className="text-teal-600 hover:underline font-medium">Chesterfield MO handyman services</Link>{" "}
            page for our full service offering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Deck Repair Chesterfield", href: "/deck-repair-chesterfield-mo" },
              { label: "Door Installation Chesterfield", href: "/door-installation-chesterfield-mo" },
              { label: "Carpentry Chesterfield", href: "/carpentry-services-chesterfield-mo" },
              { label: "All Services", href: "/services/" },
              { label: "Service Areas", href: "/service-areas/" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-teal-200 text-teal-700 hover:bg-teal-50 text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
