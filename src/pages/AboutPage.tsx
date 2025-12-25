import { MainLayout } from '@/components/layout/MainLayout';
import { BRAND } from '@/config/brand';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SEO } from '@/components/common/SEO';
import { CheckCircle2, Users, Award, Clock, Ruler, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <MainLayout>
      <SEO
        title={`About ${BRAND.COMPANY_NAME} - Premium Home Renovation Experts in ${BRAND.CITY}`}
        description={`Learn about ${BRAND.COMPANY_NAME} - ${BRAND.STATS.EXPERIENCE} years of experience in premium home renovation and interior design in ${BRAND.CITY}. ${BRAND.STATS.PROJECTS} projects delivered with ${BRAND.STATS.SATISFACTION} customer satisfaction.`}
        keywords={['about aonereno', 'renovation company', 'interior design company', 'home renovation experts']}
      />
      {/* Hero / Intro */}
      <section 
        className="relative overflow-hidden text-primary-foreground"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-slate-900/90"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-copper/40 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-20 lg:py-24 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              About {BRAND.COMPANY_NAME}
            </span>
            <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting premium renovations for modern homes in{' '}
              <span className="text-accent">{BRAND.CITY}</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-xl">
              {BRAND.COMPANY_NAME} combines design thinking, engineering precision, and on-site
              craftsmanship to deliver renovations that feel custom-built for the way you live.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-accent">
                  {BRAND.STATS.PROJECTS}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/80">Projects Delivered</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-accent">
                  {BRAND.STATS.EXPERIENCE}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/80">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-accent">
                  {BRAND.STATS.DESIGNERS}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/80">Design Experts</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                End-to-end project management
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Transparent pricing & timelines
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm border border-gray-200 shadow-strong p-6 md:p-8 space-y-6 text-gray-900">
              <h2 className="font-display text-xl md:text-2xl font-semibold text-gray-900">Why homeowners choose us</h2>
              <p className="text-sm md:text-base text-gray-700">
                We act as your renovation partner, not just a contractor – aligning every decision with
                your lifestyle, budget, and long-term plans for your home.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-gray-900">Premium finishes</p>
                    <p className="text-xs text-gray-600">Curated materials & fixtures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-gray-900">On-time delivery</p>
                    <p className="text-xs text-gray-600">Defined project milestones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-gray-900">Specialist teams</p>
                    <p className="text-xs text-gray-600">Design, civil, MEP & more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hammer className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-gray-900">Execution-first</p>
                    <p className="text-xs text-gray-600">Site-first decision making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-12 md:py-16 lg:py-20 bg-secondary/40">
        <div className="container-custom grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div className="space-y-6">
            <SectionHeader
              badge="Our Story"
              title="A renovation partner built for modern homeowners"
              subtitle="From quick facelifts to full-gut transformations, we bring structure, clarity, and design excellence to every project."
            />
            <div className="space-y-4 text-muted-foreground text-sm md:text-base">
              <p>
                {BRAND.COMPANY_NAME} was started with a simple belief – renovation doesn&apos;t have to be
                chaotic. With a clear process, strong technical teams, and transparent communication, your
                project can feel exciting instead of stressful.
              </p>
              <p>
                Our designers, project engineers, and vendor partners work as one team to ensure that what
                you see in concept drawings is what you experience in your finished space – down to the last
                detail.
              </p>
              <p>
                Whether it&apos;s a single room or your entire home, we treat every project like a flagship
                build, with quality checks at every stage.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <h3 className="font-display text-lg font-semibold mb-3">What we stand for</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>Designs that are beautiful, practical, and age gracefully over time.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>Clear timelines, structured communication, and weekly progress updates.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>Use of branded materials with strong warranties and service support.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>Respect for your home, neighbours, and building guidelines.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                Our mission
              </p>
              <p className="mt-3 text-sm md:text-base">
                To make high-quality renovation accessible, predictable, and enjoyable for homeowners in{' '}
                {BRAND.CITY}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Snapshot */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle background with diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background" />
        
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        {/* Corner accent elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent/10" />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            badge="How We Work"
            title="A simple, transparent 4-step process"
            subtitle="From first call to handover, you always know what’s happening next."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We understand your goals, budget, and constraints in a detailed consultation.',
              },
              {
                step: '02',
                title: 'Design & BOQ',
                desc: 'Our team shares concepts, 3D views, and a clear item-wise quotation.',
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Civil, electrical, plumbing, and finishing work with on-site supervision.',
              },
              {
                step: '04',
                title: 'Handover',
                desc: 'Final quality checks, cleaning, and walkthrough of your finished space.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-strong"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 opacity-0 group-hover:opacity-100 transition" />
                <p className="font-display text-sm font-semibold text-accent mb-2">{item.step}</p>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to plan your renovation with {BRAND.COMPANY_NAME}?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Share a few details about your home and we&apos;ll send a tailored plan and estimate –
            no spam, no hard sells.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


