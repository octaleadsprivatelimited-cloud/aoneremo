import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { interiorServices } from '@/data/services';
import { BRAND } from '@/config/brand';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Palette, Sparkles, Award } from 'lucide-react';

export default function InteriorsPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" 
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
              Interior Design Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Bespoke Interior Design in {BRAND.CITY}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              From modular kitchens to complete home interiors, we create stunning spaces 
              that blend aesthetics with functionality. Experience luxury living designed just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="copper" size="lg" asChild>
                <a href={`tel:${BRAND.PHONE}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
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

      {/* Why Our Interiors */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Personalized Designs</h3>
              <p className="text-muted-foreground">Every design is tailored to your lifestyle, preferences, and budget with unlimited revisions.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">3D Visualization</h3>
              <p className="text-muted-foreground">See your space before execution with photorealistic 3D renders and virtual walkthroughs.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Factory-finished modular units with 10-year warranty and branded hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Complete Interior Solutions"
            subtitle="From concept to installation, we handle every aspect of your interior design project with precision and care."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {interiorServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                href={`/interiors/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Create Your Dream Interiors"
            subtitle="A systematic approach to designing and delivering exceptional interiors."
          />
          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements, lifestyle, and budget' },
              { step: '02', title: '3D Design', desc: 'Creating detailed 3D renders with material options' },
              { step: '03', title: 'Manufacturing', desc: 'Factory production with quality checks' },
              { step: '04', title: 'Installation', desc: 'On-site installation by expert teams' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Design Your Dream Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book a free consultation with our interior designers and get a personalized quote for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="copper" size="lg" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
