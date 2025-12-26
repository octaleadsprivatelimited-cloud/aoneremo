import { Shield, Palette, Clock, Users, Award, Headphones } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

const reasons = [
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'No hidden costs. Detailed quotations with itemized breakdowns before we begin any work.',
  },
  {
    icon: Palette,
    title: 'Premium Materials',
    description: 'We use only the best brands - Asian Paints, Jaquar, Havells, Finolex, and more.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Strict project timelines with daily progress updates. We value your time.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '25+ experienced designers and skilled contractors delivering excellence.',
  },
  {
    icon: Award,
    title: 'Workmanship Warranty',
    description: 'Up to 10 years warranty on structural work and 5 years on installations.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal project manager and 24/7 support throughout your renovation journey.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section 
      className="section-padding relative"
      style={{
        backgroundImage: 'url(/why-choose-background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why Choose Us"
          title="The ABC Renovations Difference"
          subtitle="We're not just contractors - we're your partners in creating the perfect space. Here's why hundreds of families trust us with their homes."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`bg-background rounded-xl p-8 shadow-soft card-hover animate-fade-up animation-delay-${(index % 4) * 100 + 100}`}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">Trusted brands we work with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {['Asian Paints', 'Jaquar', 'Havells', 'Finolex', 'Kohler', 'Kajaria'].map((brand) => (
              <span key={brand} className="font-display font-semibold text-lg text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
