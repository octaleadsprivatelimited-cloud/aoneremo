import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative bg-card rounded-xl p-8 shadow-soft',
        className
      )}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground leading-relaxed mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.projectType} • {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
