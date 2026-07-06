import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";

export default function AboutRebrand() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16 px-6 border-b border-orange-200">
        <div className="container max-w-[800px] mx-auto text-center">
          <div className="bg-white rounded-full p-4 shadow-lg inline-block mb-6">
            <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            🎉 Rapid Repair Pro is Now<br />
            <span className="text-teal-700">Hero Handyman Pro</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Same trusted service, same experienced team, new name that better reflects our commitment to being your home's hero.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container max-w-[800px] mx-auto">
          
          {/* Why the Change */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why the Change?</h2>
            <p className="text-lg text-gray-700 mb-4">
              After serving the St. Louis and Metro East communities for years as Rapid Repair Pro, we realized our name didn't fully capture what we do best: being the reliable hero homeowners turn to when they need quality repairs and craftsmanship they can trust.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-teal-800">Hero Handyman Pro</strong> better represents our mission—to be the dependable professional who shows up, solves problems, and treats every home like our own. We're not just about speed; we're about doing the job right the first time with honesty, skill, and care.
            </p>
            <p className="text-lg text-gray-700">
              This rebrand reflects our growth, our values, and our commitment to being the handyman service you can count on—your home's hero.
            </p>
          </div>

          {/* What Stays the Same */}
          <div className="bg-teal-50 rounded-xl p-8 border-2 border-teal-200 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Stays the Same</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Same Owner & Team</h3>
                  <p className="text-gray-700">Phil Green and the same skilled craftsmen you've trusted for years.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Same Phone Number</h3>
                  <p className="text-gray-700">Call us at <a href="tel:800-741-6056" className="text-teal-700 font-semibold hover:underline">800-741-6056</a> — it's the same number you've always used.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Same Service Area</h3>
                  <p className="text-gray-700">We still serve O'Fallon, Edwardsville, Collinsville, Belleville, St. Louis, and surrounding communities.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Same Quality Standards</h3>
                  <p className="text-gray-700">Licensed, insured, background-checked, and committed to workmanship you can trust.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Your Warranties Are Honored</h3>
                  <p className="text-gray-700">All existing warranties, appointments, and customer records remain fully valid and unchanged.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Same Services</h3>
                  <p className="text-gray-700">Deck repairs, door installation, drywall, carpentry, ceiling fans, fixtures, and general handyman work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's New */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's New</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-teal-800 mb-2">✨ A Fresh Brand Identity</h3>
                <p className="text-gray-700">
                  Our new name and logo better communicate who we are: your trusted local hero for home repairs and improvements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-teal-800 mb-2">🌐 New Website</h3>
                <p className="text-gray-700">
                  You're looking at it! A cleaner, easier-to-navigate site with detailed service pages, service area information, and a simple quote request form.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-teal-800 mb-2">📧 New Email Address</h3>
                <p className="text-gray-700">
                  Reach us at <a href="mailto:info@herohandymanpro.com" className="text-teal-700 font-semibold hover:underline">info@herohandymanpro.com</a> (the old email still works during the transition).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-teal-800 mb-2">🚀 Expanded Online Presence</h3>
                <p className="text-gray-700">
                  We're making it easier to find us, learn about our services, and get in touch—whether you're a longtime customer or discovering us for the first time.
                </p>
              </div>
            </div>
          </div>

          {/* For Existing Customers */}
          <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Existing Customers</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>You don't need to do anything.</strong> Your contact information, service history, warranties, and scheduled appointments are all intact. When you call or email, we'll recognize you immediately.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions about the rebrand or need to reference past work, just reach out—we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="tel:800-741-6056">
                <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 800-741-6056
                </Button>
              </a>
              <a href="mailto:info@herohandymanpro.com">
                <Button size="lg" variant="outline" className="border-2 border-teal-800 text-teal-800 hover:bg-cyan-50 rounded-full px-6">
                  Email Us
                </Button>
              </a>
            </div>
          </div>

          {/* Looking Forward */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Forward</h2>
            <p className="text-lg text-gray-700 mb-4">
              This rebrand is about more than a new name—it's about reinforcing our commitment to you. We're investing in better tools, clearer communication, and an even stronger reputation as the handyman service St. Louis and Metro East homeowners trust most.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for your continued trust and support. We're excited to serve you as <strong className="text-teal-800">Hero Handyman Pro</strong>—your home's hero, now and always.
            </p>
            <p className="text-lg text-gray-700 mt-6 italic">
              — Phil Green, Owner & Founder
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-8">
                Back to Home
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
