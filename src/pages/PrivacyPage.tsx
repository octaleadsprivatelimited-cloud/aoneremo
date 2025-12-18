import { MainLayout } from '@/components/layout/MainLayout';
import { BRAND } from '@/config/brand';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-medium p-8 md:p-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">
              This Privacy Policy explains how {BRAND.COMPANY_NAME} collects, uses, and protects your
              information when you use our website and services.
            </p>
            <p className="text-sm text-muted-foreground">
              We only use your contact details to respond to your enquiries and to provide renovation and
              interior design services. We do not sell your data to third parties. For any questions about
              this policy, you can reach us at{' '}
              <a
                href={`mailto:${BRAND.EMAIL}`}
                className="text-primary underline hover:text-primary/80"
              >
                {BRAND.EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


