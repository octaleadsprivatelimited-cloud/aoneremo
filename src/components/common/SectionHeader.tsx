import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  children,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
