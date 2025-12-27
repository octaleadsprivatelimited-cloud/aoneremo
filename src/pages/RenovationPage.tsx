import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { SEO } from '@/components/common/SEO';
import { renovationServices } from '@/data/services';
import { BRAND } from '@/config/brand';

export default function RenovationPage() {
  return (
    <MainLayout>
      <SEO
        title={`Premium Renovation Services in ${BRAND.CITY}`}
        description={`Professional renovation services in ${BRAND.CITY}. Kitchen renovation, bathroom renovation, full home renovation, office renovation, commercial renovation, flooring, painting, and more. Expert craftsmanship with premium materials.`}
        keywords={['renovation services', 'home renovation', 'kitchen renovation', 'bathroom renovation', 'full home renovation', 'office renovation']}
      />
      {/* Hero */}
      <section 
        className="relative text-primary-foreground py-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1280&q=75&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-20">
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom text-center relative z-10">
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
