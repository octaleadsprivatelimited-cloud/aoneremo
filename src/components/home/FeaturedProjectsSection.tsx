import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectCard } from '@/components/common/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjectsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          badge="Our Portfolio"
          title="Featured Renovation Projects"
          subtitle="Explore our recent renovation projects showcasing exceptional craftsmanship, innovative designs, and satisfied clients across Hyderabad."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`animate-fade-up animation-delay-${(index % 3) * 100 + 100}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="forest" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
