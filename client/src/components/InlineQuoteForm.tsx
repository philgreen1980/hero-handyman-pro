import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { toast } from "sonner";
import { trackFormSubmission, trackPhoneClick } from "@/lib/analytics";

interface InlineQuoteFormProps {
  service?: string;
  heading?: string;
  subheading?: string;
  bgClass?: string;
}

export default function InlineQuoteForm({
  service = "General Handyman",
  heading = "Get Your Free Quote in 24 Hours",
  subheading = "Tell us about your project and we'll respond within 24 hours with a clear, upfront estimate.",
  bgClass = "bg-[#0b1220]",
}: InlineQuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Request received! We'll be in touch within 24 hours.");
    },
    onError: (err) => {
      toast.error("Something went wrong. Please call us at 800-741-6056.");
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Please fill in your name, phone, and email.");
      return;
    }
    trackFormSubmission(`Inline Quote Form - ${service}`);
    submitMutation.mutate({
      name,
      phone,
      email,
      message: `Service: ${service}\n${message}`,
    });
  };

  if (submitted) {
    return (
      <div className={`${bgClass} rounded-2xl p-8 text-center`}>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#ff5b00] rounded-full p-4 w-fit">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Request Received!</h3>
          <p className="text-gray-300 max-w-sm">
            We'll review your project and get back to you within 24 hours with a clear, upfront estimate.
          </p>
          <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', `Inline Quote Form - ${service} Success`)}>
            <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-5 font-bold flex items-center gap-2 mt-2">
              <Phone className="h-4 w-4" />
              Or Call Now: 800-741-6056
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgClass} rounded-2xl p-8`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
        <p className="text-gray-300 text-sm">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Name *</label>
            <Input
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff5b00]"
              disabled={submitMutation.isPending}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
            <Input
              type="tel"
              placeholder="(618) 555-1234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff5b00]"
              disabled={submitMutation.isPending}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff5b00]"
            disabled={submitMutation.isPending}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Describe Your Project (optional)</label>
          <Textarea
            placeholder={`Tell us about your ${service.toLowerCase()} project — size, location, any photos you can share...`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff5b00] resize-none"
            disabled={submitMutation.isPending}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full py-6 text-base font-bold"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending Request...
            </>
          ) : (
            "Get My Free Quote →"
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          No obligation. We respond within 24 hours. Your info is never shared.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm mb-2">Prefer to call?</p>
        <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', `Inline Quote Form - ${service} Footer`)} className="text-[#ff5b00] font-bold text-lg hover:underline">
          800-741-6056
        </a>
      </div>
    </div>
  );
}
