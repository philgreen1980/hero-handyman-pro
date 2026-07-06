import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.contact} />
      <section className="py-12 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-7">
            <span className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">Contact</span>
            <h2 className="text-3xl font-bold mt-1.5 mb-2">Get in Touch</h2>
            <p className="text-[#4b5563] max-w-2xl">
              Ready to start your project? Call us or book online for a free estimate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3 text-[#374151]">
                <p><strong>Phone:</strong> <a href="tel:800-741-6056" className="text-[#ff5b00] hover:underline">800-741-6056</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@herohandymanpro.com" className="text-[#ff5b00] hover:underline">info@herohandymanpro.com</a></p>
                <p><strong>Service Area:</strong> Greater St. Louis & Metro East</p>
              </div>
              <div className="mt-8">
                <Link href="/booking/">
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-6 font-semibold">
                    Book Online Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-[#374151]">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
