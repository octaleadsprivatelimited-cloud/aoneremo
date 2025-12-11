import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, image, href, className }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-card card-hover block',
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Link>
  );
}
