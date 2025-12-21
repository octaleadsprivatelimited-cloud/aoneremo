import { MainLayout } from '@/components/layout/MainLayout';
import { BRAND } from '@/config/brand';

export default function TermsPage() {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-medium p-8 md:p-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">
              These Terms of Service govern your use of {BRAND.COMPANY_NAME}&apos;s website and services.
            </p>
            <p className="text-sm text-muted-foreground">
              By using our website or contacting us for renovation or interior services, you agree that all
              work will be subject to mutually agreed quotations, timelines, and scope documents shared by
              our team. For detailed terms for your specific project, please refer to the proposal shared by
              {` ${BRAND.COMPANY_NAME}.`}
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}



