import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface LeadMagnetFormProps {
  title: string;
  description: string;
  pdfUrl: string;
  pdfFilename: string;
}

export default function LeadMagnetForm({ title, description, pdfUrl, pdfFilename }: LeadMagnetFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Store lead in database
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          source: 'deck_maintenance_checklist',
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      // Show success state
      setIsSuccess(true);
      toast.success('Success! Your download will start shortly.');

      // Trigger PDF download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 border-2 border-teal-600">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-teal-900">Download Starting!</h3>
          <p className="text-teal-700 mb-4">
            Your {title} is downloading now. Check your email for a copy and helpful deck maintenance tips.
          </p>
          <p className="text-sm text-teal-600">
            Didn't get the download? <a href={pdfUrl} download={pdfFilename} className="underline font-semibold">Click here</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border-2 border-orange-500">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <Download className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Download Free Checklist
            </>
          )}
        </Button>

        <p className="text-xs text-gray-600 text-center">
          We respect your privacy. Your information will never be shared. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
