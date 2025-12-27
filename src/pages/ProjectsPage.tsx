import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { SEO } from '@/components/common/SEO';
import { projects } from '@/data/projects';
import { BRAND } from '@/config/brand';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <SEO
        title={`Our Projects - Completed Renovation & Interior Design Projects in ${BRAND.CITY}`}
        description={`Explore our portfolio of ${BRAND.STATS.PROJECTS} successful renovation and interior design projects in ${BRAND.CITY}. Kitchen renovations, bathroom makeovers, full home renovations, and commercial spaces.`}
        keywords={['renovation projects', 'completed projects', 'portfolio', 'home renovation projects', 'interior design projects']}
      />
      <section 
        className="relative text-primary-foreground py-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&q=75&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of successful renovation projects across {BRAND.CITY}.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
