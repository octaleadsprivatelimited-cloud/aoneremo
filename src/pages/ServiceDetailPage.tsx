import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import { renovationServices, interiorServices, Service } from '@/data/services';
import { BRAND } from '@/config/brand';
import { Phone, MessageCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { toast } = useToast();
  const path = window.location.pathname;
  const isInteriors = path.startsWith('/interiors');
  
  const services = isInteriors ? interiorServices : renovationServices;
  const service = services.find(s => s.slug === slug);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectDetails: '',
  });
  
  if (!service) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to={isInteriors ? '/interiors' : '/renovation'}>
            <Button>Back to Services</Button>
          </Link>
        </div>
        </div>
      </MainLayout>
    );
  }

  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/myzrqkol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Service Quote Request - ${service.title}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          projectDetails: formData.projectDetails,
          service: service.title,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Enquiry Submitted!',
          description: 'We will contact you within 24 hours.',
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectDetails: '',
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
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/30" />
        </div>
        <div className="relative container-custom h-full flex items-end pb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
              {isInteriors ? 'Interior Design' : 'Renovation Service'}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="copper" size="lg" asChild>
                <a href={`tel:${BRAND.PHONE}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href={`https://wa.me/${BRAND.WHATSAPP.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-secondary py-8 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Timeline</span>
              </div>
              <p className="text-xl font-bold text-foreground">{service.timeline}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Warranty</span>
              </div>
              <p className="text-xl font-bold text-foreground">Up to 10 Years</p>
            </div>
            <div className="hidden md:block text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Free Consultation</span>
              </div>
              <p className="text-xl font-bold text-foreground">Available Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                badge="What's Included"
                title={`Complete ${service.title} Package`}
                subtitle="Our comprehensive service covers everything you need for a successful project."
                align="left"
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6 text-center">
                <h3 className="font-display text-2xl font-bold">Get Free Quote</h3>
                <p className="text-primary-foreground/80 mt-2">Fill the form and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                  <textarea 
                    name="projectDetails"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Enquiry
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Or call us directly at <a href={`tel:${BRAND.PHONE}`} className="text-accent font-semibold hover:underline">{BRAND.PHONE}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Brands */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            badge="Quality Assurance"
            title="Premium Materials & Trusted Brands"
            subtitle="We partner with industry-leading brands to ensure quality and durability."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Asian Paints', 'Jaquar', 'Kohler', 'Finolex', 'Treelab', 'Havells', 'Kajaria', 'Somany', 'HDMHR', 'Century'].map((brand) => (
              <div key={brand} className="bg-card p-6 rounded-xl text-center border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionHeader
                  badge="FAQs"
                  title={`${service.title} Questions`}
                  subtitle="Find answers to commonly asked questions about this service."
                  align="left"
                />
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            badge="Explore More"
            title="Related Services"
            subtitle="Discover other services that complement your project."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {otherServices.map((relatedService) => (
              <Link 
                key={relatedService.id} 
                to={`/${isInteriors ? 'interiors' : 'renovation'}/${relatedService.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={relatedService.image} 
                    alt={relatedService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{relatedService.shortDescription}</p>
                  <span className="inline-flex items-center text-accent font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get a free consultation and detailed quote for your project. Our experts are ready to help transform your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="copper" size="lg" asChild>
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href={`https://wa.me/${BRAND.WHATSAPP.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
