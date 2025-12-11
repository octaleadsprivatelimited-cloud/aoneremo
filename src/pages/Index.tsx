import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { BeforeAfterSection } from '@/components/home/BeforeAfterSection';
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { BRAND } from '@/config/brand';

const Index = () => {
  return (
    <MainLayout>
      {/* SEO Meta */}
      <title>{`Premium Home Renovation in ${BRAND.CITY} | ${BRAND.COMPANY_NAME}`}</title>
      
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
