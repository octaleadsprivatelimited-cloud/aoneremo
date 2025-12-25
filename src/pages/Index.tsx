import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { BeforeAfterSection } from '@/components/home/BeforeAfterSection';
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { SEO } from '@/components/common/SEO';
import { BRAND } from '@/config/brand';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BRAND.COMPANY_NAME,
    "url": BRAND.WEBSITE,
    "description": `Premium home renovation and interior design services in ${BRAND.CITY}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BRAND.WEBSITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <MainLayout>
      <SEO
        title={`Premium Home Renovation & Interior Design Services in ${BRAND.CITY}`}
        description={`${BRAND.COMPANY_NAME} offers premium home renovation and interior design services in ${BRAND.CITY}. Kitchen renovation, bathroom renovation, full home renovation, modular kitchen, office renovation, and more. ${BRAND.STATS.PROJECTS} projects completed. Get free quote today!`}
        keywords={['home renovation', 'interior design', 'kitchen renovation', 'bathroom renovation']}
        structuredData={structuredData}
      />
      
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <FeaturedProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ProcessSection />
      <EnquiryFormSection />
    </MainLayout>
  );
};

export default Index;
