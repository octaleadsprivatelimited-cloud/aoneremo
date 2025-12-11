import { Link } from 'react-router-dom';
import { MapPin, Ruler, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-card card-hover block',
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={project.afterImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" />
            {project.area}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">{project.budgetRange}</span>
          <span className="inline-flex items-center gap-2 text-muted-foreground text-sm group-hover:text-primary transition-colors">
            View Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
