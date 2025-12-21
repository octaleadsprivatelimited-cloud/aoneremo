import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Full Home Renovation',
    description: 'Complete home transformation from floor to ceiling with modern designs and premium materials.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/renovation/full-home',
  },
  {
    title: 'Kitchen Renovation',
    description: 'Modern kitchen makeovers with smart storage, premium countertops, and efficient layouts.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    href: '/renovation/kitchen',
  },
  {
    title: 'Bathroom Renovation',
    description: 'Luxurious bathroom upgrades with premium fixtures, waterproofing, and spa-like finishes.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    href: '/renovation/bathroom',
  },
  {
    title: 'Commercial Renovation',
    description: 'Professional office and retail space transformations that boost productivity and appeal.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    href: '/renovation/commercial',
  },
  {
    title: 'Painting & False Ceiling',
    description: 'Expert painting services and designer ceilings that transform your interiors.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
    href: '/renovation/painting',
  },
  {
    title: 'Flooring & Tiling',
    description: 'Premium flooring solutions including marble, vitrified tiles, and wooden floors.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    href: '/renovation/flooring',
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/30" />
      
      {/* Visible decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-40 w-40 h-40 bg-accent/15 rounded-full blur-2xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full">
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-primary/15 rounded-full blur-2xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Premium Renovation Services"
          subtitle="From kitchen makeovers to complete home transformations, we deliver excellence in every project with transparent pricing and guaranteed quality."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              className={`animate-fade-up animation-delay-${(index % 3) * 100 + 100}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="forest" size="lg" asChild>
            <Link to="/renovation">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
