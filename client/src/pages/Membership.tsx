import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Phone, Mail, Calendar, DollarSign, Gift, Star, Shield } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function Membership() {
  const seo = useSeoRoute();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form validation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPayment(true);
      // Scroll to payment section
      document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const benefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Same Day/Next Day Service",
      description: "Priority scheduling for urgent repairs"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "15% Discount on All Services",
      description: "Save on every repair and project"
    },

    {
      icon: <Shield className="w-5 h-5" />,
      title: "No Scheduling Fees",
      description: "Save $79 per call - included with membership"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "$25 Referral Rewards",
      description: "Earn rewards for each membership referral"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Seasonal Home Care Tips",
      description: "Expert advice delivered to your inbox"
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-cyan-900 text-white py-16 px-6">
        <div className="container max-w-[1120px] mx-auto text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎉 SUMMER SPECIAL: Free Deck Design Service (June-August 2026)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hero Handyman Pro Membership Plan
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-6 max-w-3xl mx-auto">
            The perfect plan to save time and money
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-5xl md:text-6xl font-bold">$97</div>
            <div className="text-left">
              <div className="text-2xl font-semibold">/year</div>
              <div className="text-sm text-teal-200">Just $8.08/month</div>
            </div>
          </div>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Affordable and reliable home care for budget-conscious homeowners.
          </p>
          <a href="#signup">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
              Join Now & Start Saving
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Membership Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-teal-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-700 p-3 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-teal-50">
        <div className="container max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            How Much Can You Save?
          </h2>
          <Card className="border-2 border-teal-700">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-lg">Annual membership</span>
                  <span className="text-2xl font-bold text-teal-700">$97</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-lg">Scheduling fees saved (3 calls/year @ $79 each)</span>
                  <span className="text-2xl font-bold text-green-600">+$237</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-lg">15% discount on services ($2,000/year avg)</span>
                  <span className="text-2xl font-bold text-green-600">+$300</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-teal-50 -mx-8 px-8 py-6 -mb-8">
                  <span className="text-xl font-bold">Total Annual Savings</span>
                  <span className="text-3xl font-bold text-green-600">$440+</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-gray-600 mt-6">
            *Based on average homeowner usage. Your savings may vary.
          </p>
        </div>
      </section>

      {/* Spring Special */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-amber-50 border-y border-orange-200">
        <div className="container max-w-[900px] mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-500">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Special: June to August 2026
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Join now and receive a <strong>FREE Deck Design Service</strong> (valued at $250)
            </p>
            <p className="text-gray-600">
              Perfect timing to plan your outdoor space before fall! Our expert will assess your deck needs, 
              provide design recommendations, and give you a detailed quote — completely free with your membership.
            </p>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 px-6 bg-white">
        <div className="container max-w-[600px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below to begin your membership enrollment
            </p>
          </div>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              {!showPayment ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(618) 555-0123"
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Continue to Payment"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By continuing, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              ) : (
                <div id="payment-section" className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-green-700">
                      <Check className="w-5 h-5" />
                      <span className="font-semibold">Information received!</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Thank you, {formData.name}. Complete your payment below to activate your membership.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Hero Handyman Pro Membership</span>
                        <span className="font-semibold">$97.00</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Spring Special: Free Deck Design</span>
                        <span className="font-semibold">$0.00</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
                        <span>Total Due Today</span>
                        <span className="text-teal-700">$97.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Stripe Payment Link */}
                  <a href="https://buy.stripe.com/dRmcN6916fpz4HzdDX2sM00" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
                    >
                      <Shield className="w-5 h-5 mr-2" />
                      Complete Secure Payment
                    </Button>
                  </a>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      🔒 Secure checkout powered by Stripe
                    </p>
                    <button
                      onClick={() => setShowPayment(false)}
                      className="text-sm text-teal-700 hover:underline"
                    >
                      ← Back to edit information
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How does the membership work?</h3>
                <p className="text-gray-600">
                  Pay $97 once per year and enjoy priority scheduling, 15% off all services, no scheduling fees, 
                  and exclusive member benefits. Your membership activates immediately upon payment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes! While we hope you'll love the savings and convenience, you can cancel anytime. 
                  Your benefits remain active through the end of your paid year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What services are included?</h3>
                <p className="text-gray-600">
                  All our handyman services qualify for the 15% discount: deck repair, door installation, 
                  drywall repair, bathroom remodeling, window installation, and more. Large projects over $5,000 
                  receive a custom discount quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">When does the Summer Special end?</h3>
                <p className="text-gray-600">
                  The free deck design service is available for memberships purchased between June 1 and August 31, 2026. 
                  The design service must be scheduled by September 30, 2026.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How do I schedule services as a member?</h3>
                <p className="text-gray-600">
                  Simply call us directly at 800-741-6056 and identify yourself as a member to receive priority scheduling. Members get same-day or next-day service whenever possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The membership has already paid for itself! I've used them three times this year and the 15% discount 
                  plus no scheduling fees saved me over $400."
                </p>
                <div className="font-semibold">Jennifer M.</div>
                <div className="text-sm text-gray-500">O'Fallon, IL</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The membership has been fantastic! The priority service means I never have to wait long for repairs, and the 15% discount really adds up over time."
                </p>
                <div className="font-semibold">Robert K.</div>
                <div className="text-sm text-gray-500">Edwardsville, IL</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Best investment for our home! The seasonal tips alone are worth it, but the savings and priority 
                  service make this a no-brainer."
                </p>
                <div className="font-semibold">Lisa & Tom D.</div>
                <div className="text-sm text-gray-500">St. Louis, MO</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-700 to-cyan-800 text-white">
        <div className="container max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 500+ Homeowners Saving with Membership
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Start saving today with priority service, exclusive discounts, and peace of mind for your home repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#signup">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Join Now - $97/Year
              </Button>
            </a>
            <a href="tel:800-741-6056">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Questions? Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
