import { Award, Heart, MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: Award,
    value: '12+',
    label: 'Years of Service',
  },
  {
    icon: Heart,
    value: '50,000+',
    label: 'Lives Impacted',
  },
  {
    icon: MapPin,
    value: '1000+',
    label: 'Villages/Places Programs',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Volunteers',
  },
];

export function StatsSection() {
  return (
    <section className="relative bg-[#1e3a5f] py-12 lg:py-16 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isLastInRow = (index + 1) % 2 === 0;
            const isLastRow = index >= stats.length - 2;
            return (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center justify-center px-4 lg:px-8 py-6 lg:py-8",
                  // Mobile borders
                  !isLastInRow && "border-r border-gray-600/30",
                  !isLastRow && "border-b border-gray-600/30",
                  // Desktop borders
                  index < stats.length - 1 && "lg:border-r lg:border-gray-600/30",
                  index === 0 && "lg:pl-0",
                  index === stats.length - 1 && "lg:pr-0 lg:border-r-0"
                )}
              >
                {/* Icon */}
                <div className="mb-4 lg:mb-6">
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-orange-500 stroke-2" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="mb-2 lg:mb-3">
                  <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
                    {stat.value}
                  </p>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm lg:text-base font-medium text-white/90 text-center px-2 max-w-[180px] sm:max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

