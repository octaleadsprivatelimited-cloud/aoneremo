import { useState } from 'react';
import { Send, Upload, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BRAND, getWhatsAppLink } from '@/config/brand';
import { useToast } from '@/hooks/use-toast';

const renovationTypes = [
  'Full Home Renovation',
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Living Room',
  'Office / Commercial',
  'Flooring & Tiling',
  'Painting & Ceiling',
  'Other',
];

const budgetRanges = [
  'Below ₹5 Lakhs',
  '₹5 - 10 Lakhs',
  '₹10 - 20 Lakhs',
  '₹20 - 50 Lakhs',
  'Above ₹50 Lakhs',
];

export function EnquiryFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    renovationType: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/myzrqkol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Enquiry Form Submission',
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          renovationType: formData.renovationType,
          budget: formData.budget,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Enquiry Submitted!',
          description: 'Our team will contact you within 2 hours.',
        });
        setFormData({
          name: '',
          phone: '',
          location: '',
          renovationType: '',
          budget: '',
        });
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit enquiry. Please try again or contact us directly.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <SectionHeader
              badge="Get Started"
              title="Request Your Free Quote"
              subtitle="Tell us about your renovation project and get a detailed quote within hours. Our team will analyze your requirements and provide a comprehensive estimate."
              align="left"
              className="mb-8"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us Directly</h4>
                  <a href={`tel:${BRAND.PHONE}`} className="text-primary font-medium">
                    {BRAND.PHONE}
                  </a>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 8 PM, Mon - Sat</p>
                </div>
              </div>

              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={getWhatsAppLink('Hi, I want to discuss my renovation project.')} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp Instead
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location / Area *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Jubilee Hills, Hyderabad"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Renovation Type *</label>
                <select
                  name="renovationType"
                  required
                  value={formData.renovationType}
                  onChange={(e) => setFormData({ ...formData, renovationType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select renovation type</option>
                  {renovationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Photos (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drag photos here or click to upload
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG up to 5MB each
                  </p>
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Enquiry
                <Send className="h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our privacy policy. We'll never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
