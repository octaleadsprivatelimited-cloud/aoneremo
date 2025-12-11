import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { renovationServices } from '@/data/services';
import { BRAND } from '@/config/brand';

export default function RenovationPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6">
            Renovation Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Premium Renovation Services in {BRAND.CITY}
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From complete home makeovers to targeted upgrades, we deliver exceptional renovation 
            services with premium materials and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                href={`/renovation/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
