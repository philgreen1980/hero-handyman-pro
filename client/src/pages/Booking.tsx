import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Wrench } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Booking() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    serviceType: "",
    serviceDescription: "",
    address: "",
    city: "",
    state: "IL",
    zipCode: "",
    preferredDate: "",
    preferredTimeSlot: "morning" as "morning" | "afternoon" | "evening",
  });

  const createBooking = trpc.bookings.create.useMutation({
    onSuccess: () => {
      toast.success("Booking request submitted successfully! We'll contact you soon.");
      // Reset form
      setFormData({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        serviceType: "",
        serviceDescription: "",
        address: "",
        city: "",
        state: "IL",
        zipCode: "",
        preferredDate: "",
        preferredTimeSlot: "morning",
      });
    },
    onError: (error) => {
      toast.error(`Failed to submit booking: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone || 
        !formData.serviceType || !formData.address || !formData.city || 
        !formData.zipCode || !formData.preferredDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    createBooking.mutate({
      ...formData,
      preferredDate: new Date(formData.preferredDate),
    });
  };

  const serviceTypes = [
    "Deck & Porch Repair",
    "Drywall & Interior Repair",
    "Door & Window Installation/Repair",
    "Plumbing Fixtures",
    "Electrical Fixtures",
    "General Handyman Services",
    "Other"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">Book a Service</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule your handyman service online. We'll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-t-4 border-t-secondary">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-primary mb-6">Service Request Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> Contact Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="font-medium text-sm">Full Name *</label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="font-medium text-sm">Phone *</label>
                          <Input 
                            id="phone" 
                            placeholder="(800) 741-6056" 
                            value={formData.customerPhone}
                            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-medium text-sm">Email *</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.customerEmail}
                          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                        <Wrench className="h-5 w-5" /> Service Details
                      </h3>
                      <div className="space-y-2">
                        <label htmlFor="serviceType" className="font-medium text-sm">Service Type *</label>
                        <Select 
                          value={formData.serviceType} 
                          onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="description" className="font-medium text-sm">Project Description</label>
                        <Textarea 
                          id="description" 
                          placeholder="Tell us about your project..." 
                          className="min-h-[100px]"
                          value={formData.serviceDescription}
                          onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> Service Location
                      </h3>
                      <div className="space-y-2">
                        <label htmlFor="address" className="font-medium text-sm">Street Address *</label>
                        <Input 
                          id="address" 
                          placeholder="123 Main St" 
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="city" className="font-medium text-sm">City *</label>
                          <Input 
                            id="city" 
                            placeholder="O'Fallon" 
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="state" className="font-medium text-sm">State *</label>
                          <Select 
                            value={formData.state} 
                            onValueChange={(value) => setFormData({ ...formData, state: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="IL">IL</SelectItem>
                              <SelectItem value="MO">MO</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="zip" className="font-medium text-sm">ZIP Code *</label>
                          <Input 
                            id="zip" 
                            placeholder="62269" 
                            value={formData.zipCode}
                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                        <Calendar className="h-5 w-5" /> Preferred Schedule
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="date" className="font-medium text-sm">Preferred Date *</label>
                          <Input 
                            id="date" 
                            type="date" 
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="timeSlot" className="font-medium text-sm">Time Slot *</label>
                          <Select 
                            value={formData.preferredTimeSlot} 
                            onValueChange={(value: "morning" | "afternoon" | "evening") => 
                              setFormData({ ...formData, preferredTimeSlot: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                              <SelectItem value="evening">Evening (5pm - 7pm)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider h-12"
                      disabled={createBooking.isPending}
                    >
                      {createBooking.isPending ? "Submitting..." : "Submit Booking Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-4">What Happens Next?</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <span>We'll review your request within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <span>You'll receive a call to confirm details and pricing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <span>We'll schedule your service at a convenient time</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <span>Our team arrives on time and gets the job done right</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-4">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">Prefer to talk to someone? Give us a call!</p>
                  <a href="tel:800-741-6056">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                      Call 800-741-6056
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
