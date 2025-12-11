import { SectionHeader } from '@/components/common/SectionHeader';
import { ClipboardCheck, MapPin, Box, FileCheck, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Consultation',
    description: 'Share your requirements and vision. We understand your needs, lifestyle, and budget to create the perfect plan.',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Site Visit',
    description: 'Our expert team visits your space for detailed measurements, structural assessment, and feasibility analysis.',
  },
  {
    icon: Box,
    step: '03',
    title: '3D Design',
    description: 'Visualize your renovated space with photorealistic 3D renders before any work begins. Iterate until perfect.',
  },
  {
    icon: FileCheck,
    step: '04',
    title: 'Budget Approval',
    description: 'Receive a detailed, itemized quotation. Transparent pricing with no hidden costs. Approve and we begin.',
  },
  {
    icon: Hammer,
    step: '05',
    title: 'Execution',
    description: 'Our skilled team executes the renovation with precision. Daily updates keep you informed of progress.',
  },
  {
    icon: Key,
    step: '06',
    title: 'Handover',
    description: 'Final walkthrough, quality check, and handover. Your transformed space is ready with complete documentation.',
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader
          badge="Our Process"
          title="How We Work"
          subtitle="A systematic approach ensures your renovation is smooth, transparent, and delivered on time. Here's our proven 6-step process."
          className="mb-16"
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-8 right-8 h-0.5 bg-border hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className={`relative bg-background rounded-xl p-8 shadow-soft animate-fade-up animation-delay-${(index % 3) * 100 + 100}`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-lg shadow-medium">
                  {item.step}
                </div>

                <div className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
