import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useSeoRoute } from '@/hooks/useSeoRoute';
import {
  Shield,
  Star,
  CheckCircle2,
  Phone,
  ClipboardList,
  Wrench,
  Home,
  DoorOpen,
  Bath,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  ThumbsUp,
  FileCheck,
  Heart,
} from "lucide-react";

const PHONE = "800-741-6056";
const PHONE_HREF = "tel:800-741-6056";

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Does the VA pay for home modifications?",
    a: "Yes. The VA offers several grant programs — including HISA (Home Improvement and Structural Alterations), SAH (Specially Adapted Housing), and SHA (Special Home Adaptation) — that can cover the cost of accessibility modifications for eligible veterans. We provide VA-ready estimates that meet the documentation requirements for these programs.",
  },
  {
    q: "How does the process work?",
    a: "It starts with a free home assessment. We visit your home, evaluate what modifications are needed, and prepare a detailed, VA-ready estimate. Once you or your VA case manager submits the estimate for approval, we schedule installation as soon as funding is confirmed.",
  },
  {
    q: "Do you help with the VA paperwork?",
    a: "We provide the documentation your VA case manager or occupational therapist needs — including itemized estimates formatted for VA grant submissions. While we can't file on your behalf, we make the process as straightforward as possible so you're not navigating it alone.",
  },
  {
    q: "How long does it take?",
    a: "The assessment and estimate can typically be completed within a few days of your call. Installation timelines depend on the scope of work and VA approval timing, but most standard modifications (grab bars, ramps, shower conversions) are completed in one to three days once approved.",
  },
];

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const services = [
  { icon: <Home className="w-7 h-7" />, label: "Wheelchair Ramps", desc: "Custom-built exterior and interior ramps to ANSI/ADA slope standards." },
  { icon: <Bath className="w-7 h-7" />, label: "Walk-In / Roll-In Showers", desc: "Zero-threshold shower conversions for safe, independent bathing." },
  { icon: <Shield className="w-7 h-7" />, label: "Grab Bars & Safety Upgrades", desc: "ADA-compliant grab bars in bathrooms, hallways, and stairways." },
  { icon: <DoorOpen className="w-7 h-7" />, label: "Doorway Widening", desc: "Widen doorways to 32–36\" for wheelchair and walker clearance." },
  { icon: <Wrench className="w-7 h-7" />, label: "Kitchen Accessibility", desc: "Lowered countertops, pull-out shelves, and lever hardware." },
  { icon: <Home className="w-7 h-7" />, label: "Exterior Access Solutions", desc: "Handrails, threshold ramps, and pathway improvements." },
];

// ─── TRUST BADGES ────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: <Award className="w-8 h-8 text-amber-500" />, label: "Veteran-Owned & Operated" },
  { icon: <FileCheck className="w-8 h-8 text-teal-600" />, label: "Licensed & Insured" },
  { icon: <Wrench className="w-8 h-8 text-teal-600" />, label: "Accessibility Modification Experience" },
  { icon: <Clock className="w-8 h-8 text-teal-600" />, label: "Fast VA-Ready Estimates" },
  { icon: <Heart className="w-8 h-8 text-red-500" />, label: "Respectful, Professional Service" },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-teal-600" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-teal-600" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── LEAD FORM ───────────────────────────────────────────────────────────────
function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectDescription: "",
    isVeteran: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitMutation = trpc.vaLead.submit.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: (err) => setError(err.message || "Something went wrong. Please call us directly."),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    submitMutation.mutate(form);
  };

  if (submitted) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-14 h-14 text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-teal-800 mb-2">We'll Be in Touch Soon</h3>
        <p className="text-gray-600 mb-4">Thank you, {form.name}. A member of our team will contact you within one business day to schedule your free home assessment.</p>
        <a href={PHONE_HREF}>
          <Button className="bg-teal-700 hover:bg-teal-800 text-white font-bold">
            <Phone className="w-4 h-4 mr-2" /> Call Now: {PHONE}
          </Button>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(618) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
          <input
            type="text"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="O'Fallon, Edwardsville, St. Louis…"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
        <textarea
          rows={3}
          value={form.projectDescription}
          onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
          placeholder="Describe the modifications needed (e.g., wheelchair ramp, roll-in shower, grab bars)…"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={form.isVeteran}
          onChange={(e) => setForm({ ...form, isVeteran: e.target.checked })}
          className="mt-1 w-4 h-4 accent-teal-600"
        />
        <span className="text-sm text-gray-700">I am a veteran or assisting a veteran with this request</span>
      </label>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <Button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg h-14 rounded-xl"
      >
        {submitMutation.isPending ? "Submitting…" : "Request Free Accessibility Assessment"}
      </Button>
      <p className="text-xs text-center text-gray-400">No obligation. We'll contact you within one business day.</p>
    </form>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function VAHomeModifications() {
  const seo = useSeoRoute();
  return (
    <>
      <SEO {...seo} />

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-teal-700 shadow-lg">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 text-white font-bold text-lg">
          <Phone className="w-5 h-5" />
          Call Now: {PHONE}
        </a>
      </div>

      <div className="flex flex-col min-h-screen pb-16 md:pb-0">

        {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-br from-[#0b1220] via-[#0f2040] to-[#0b1220] text-white py-20 md:py-32 px-6 overflow-hidden">
          {/* Subtle star/flag pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px"}} />
          {/* Red accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-700" />

          <div className="relative max-w-[1120px] mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Award className="w-4 h-4" />
                Veteran-Owned. We Understand — And We're Here to Serve.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                VA Home Accessibility Modifications —{" "}
                <span className="text-teal-400">Done Right the First Time</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white/90 mb-3">
                Stay safe. Stay independent. Stay in your home.
              </p>
              <p className="text-lg text-white/75 mb-8 max-w-2xl">
                We help veterans navigate VA funding and complete accessibility upgrades — wheelchair ramps, roll-in showers, grab bars, and more — with care and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-form">
                  <Button size="lg" className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-teal-900/40">
                    Get a Free Accessibility Assessment
                  </Button>
                </a>
                <a href={PHONE_HREF}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-bold text-lg h-14 px-8 rounded-xl">
                    <Phone className="w-5 h-5 mr-2" />
                    Call {PHONE}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. TRUST / AUTHORITY ═════════════════════════════════════════════ */}
        <section className="py-14 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1120px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="bg-gray-50 rounded-full p-3">{b.icon}</div>
                  <span className="text-sm font-semibold text-gray-700 leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. SERVICES ══════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1120px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Accessibility Modifications We Provide</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Every modification is completed to VA grant documentation standards and built to last.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal-50 text-teal-700 rounded-lg p-3 w-fit mb-4">{s.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-1">{s.label}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#lead-form">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 h-12 rounded-xl">
                  Request Free Assessment
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ══ 4. VA PROCESS ════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1120px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We Help You Through the VA Process</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">You don't have to figure this out alone — we guide you every step of the way.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-teal-100" />
              {[
                { step: "1", icon: <Home className="w-7 h-7" />, title: "Free Home Assessment", desc: "We visit your home, evaluate what modifications are needed, and discuss your goals and VA eligibility." },
                { step: "2", icon: <ClipboardList className="w-7 h-7" />, title: "VA-Ready Estimate for Approval", desc: "We prepare a detailed, itemized estimate formatted for HISA, SAH, or SHA grant submission — ready for your VA case manager." },
                { step: "3", icon: <Wrench className="w-7 h-7" />, title: "Professional Installation", desc: "Once approved, our team completes the work efficiently and to a high standard, with minimal disruption to your home." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  <div className="relative z-10 bg-teal-700 text-white rounded-full w-20 h-20 flex items-center justify-center mb-5 shadow-lg shadow-teal-200">
                    {item.icon}
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={PHONE_HREF}>
                <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 h-12 rounded-xl">
                  <Phone className="w-4 h-4 mr-2" /> Call to Start: {PHONE}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ══ 5. WHY CHOOSE US ═════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#0b1220] to-[#0f2040] text-white">
          <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Heart className="w-4 h-4" />
                You served us. Now we're here to serve you.
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Veterans Choose Hero Handyman Pro</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5 text-amber-400" />, text: "We understand military values and service — no runaround, no excuses." },
                  { icon: <CheckCircle2 className="w-5 h-5 text-teal-400" />, text: "Clear communication — we explain everything in plain language, no confusion." },
                  { icon: <Clock className="w-5 h-5 text-teal-400" />, text: "Fast turnaround — we move quickly so you're not waiting months for safety upgrades." },
                  { icon: <ThumbsUp className="w-5 h-5 text-teal-400" />, text: "Reliable scheduling — we show up when we say we will." },
                  { icon: <Star className="w-5 h-5 text-amber-400" />, text: "Work done right the first time — quality craftsmanship you can trust." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <span className="text-white/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2 text-teal-300">VA Grant Programs We Work With</h3>
              <p className="text-white/70 text-sm mb-6">We provide VA-ready estimates compatible with all major VA accessibility grant programs.</p>
              <div className="space-y-4">
                {[
                  { name: "HISA Grant", desc: "Home Improvement and Structural Alterations — up to $6,800 for service-connected veterans." },
                  { name: "SAH Grant", desc: "Specially Adapted Housing — for veterans with severe service-connected disabilities." },
                  { name: "SHA Grant", desc: "Special Home Adaptation — for veterans with specific service-connected disabilities." },
                ].map((g, i) => (
                  <div key={i} className="border-l-2 border-teal-500 pl-4">
                    <div className="font-bold text-white">{g.name}</div>
                    <div className="text-sm text-white/60">{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. SOCIAL PROOF ══════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1120px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Veterans & Families Are Saying</h2>
              <div className="flex justify-center gap-1 text-amber-400 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Robert H.", loc: "O'Fallon, IL", text: "They handled everything — the estimate, the VA paperwork coordination, and the installation. My wife can finally use our bathroom safely. Can't thank them enough." },
                { name: "Linda M.", loc: "Edwardsville, IL", text: "My father is a Vietnam vet and needed a wheelchair ramp. Hero Handyman Pro was professional, fast, and genuinely cared. The ramp was done in one day." },
                { name: "James T.", loc: "St. Louis, MO", text: "I was overwhelmed by the VA process. They walked me through everything and had a VA-ready estimate ready within two days. Highly recommend." },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{r.text}"</p>
                  <div>
                    <div className="font-bold text-gray-800">{r.name}</div>
                    <div className="text-sm text-gray-400">{r.loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. STRONG CTA ════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-teal-700 text-white">
          <div className="max-w-[1120px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Make Your Home Safe and Accessible</h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              A free home assessment costs nothing. One call is all it takes to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#lead-form">
                <Button size="lg" className="w-full sm:w-auto bg-white text-teal-800 hover:bg-teal-50 font-bold text-lg h-14 px-8 rounded-xl">
                  Request Free Assessment
                </Button>
              </a>
              <a href={PHONE_HREF}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-teal-800 font-bold text-lg h-14 px-8 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {PHONE}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ══ 8. LEAD FORM ═════════════════════════════════════════════════════ */}
        <section id="lead-form" className="py-16 px-6 bg-gray-50">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get Your Free Home Assessment</h2>
              <p className="text-gray-500">Fill out the form below and we'll contact you within one business day to schedule a visit.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <LeadForm />
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Prefer to call?{" "}
              <a href={PHONE_HREF} className="text-teal-700 font-semibold hover:underline">{PHONE}</a>
            </p>
          </div>
        </section>

        {/* ══ 9. FAQ ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500">Common questions about VA home modification funding and our process.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-4">Still have questions? We're happy to talk through your situation.</p>
              <a href={PHONE_HREF}>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 h-12 rounded-xl">
                  <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ══ 10. FOOTER ═══════════════════════════════════════════════════════ */}
        <footer className="bg-[#0b1220] text-white py-10 px-6">
          <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-extrabold text-xl mb-1">Hero Handyman Pro</div>
              <div className="text-white/60 text-sm">Serving St. Louis & Metro East</div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                <Award className="w-3.5 h-3.5" />
                Veteran-Owned Business
              </div>
            </div>
            <div className="text-center">
              <a href={PHONE_HREF} className="text-2xl font-bold text-teal-400 hover:text-teal-300">{PHONE}</a>
              <div className="text-white/50 text-sm mt-1">Mon–Sat 7am–6pm CT</div>
            </div>
            <div className="text-sm text-white/50 text-center md:text-right">
              <div>Serving St. Louis & Metro East Illinois</div>
              <Link href="/" className="text-teal-400 hover:underline mt-1 inline-block">← Back to Hero Handyman Pro</Link>
            </div>
          </div>
        </footer>

      </div>

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          }
        }))
      })}} />
    </>
  );
}
