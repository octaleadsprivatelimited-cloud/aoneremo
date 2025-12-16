import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '@/config/brand';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', location: '', renovationType: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/myzrqkol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Contact Form Submission',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          renovationType: formData.renovationType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({ title: 'Message Sent!', description: 'We will contact you within 2 hours.' });
        setFormData({ name: '', phone: '', email: '', location: '', renovationType: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive'
      });
    }
  };

  return (
    <MainLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and detailed estimate.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href={`tel:${BRAND.PHONE}`} className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Phone className="h-6 w-6 text-primary" /></div>
                    <div><p className="font-semibold">Phone</p><p className="text-muted-foreground">{BRAND.PHONE}</p></div>
                  </a>
                  <a href={`mailto:${BRAND.EMAIL}`} className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Mail className="h-6 w-6 text-primary" /></div>
                    <div><p className="font-semibold">Email</p><p className="text-muted-foreground">{BRAND.EMAIL}</p></div>
                  </a>
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><MapPin className="h-6 w-6 text-primary" /></div>
                    <div><p className="font-semibold">Office</p><p className="text-muted-foreground">{BRAND.ADDRESS}</p></div>
                  </div>
                </div>
              </div>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-medium space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-2">Name *</label><input type="text" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" /></div>
                <div><label className="block text-sm font-medium mb-2">Phone *</label><input type="tel" name="phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" /></div>
              </div>
              <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" /></div>
              <div><label className="block text-sm font-medium mb-2">Location *</label><input type="text" name="location" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" placeholder="e.g., Jubilee Hills" /></div>
              <div><label className="block text-sm font-medium mb-2">Renovation Type</label><input type="text" name="renovationType" value={formData.renovationType} onChange={(e) => setFormData({...formData, renovationType: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" placeholder="e.g., Kitchen Renovation" /></div>
              <div><label className="block text-sm font-medium mb-2">Message</label><textarea name="message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary" /></div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Submit Enquiry <Send className="h-5 w-5" /></Button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
