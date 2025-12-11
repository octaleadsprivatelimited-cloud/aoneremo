import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { projects } from '@/data/projects';
import { BRAND } from '@/config/brand';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
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
