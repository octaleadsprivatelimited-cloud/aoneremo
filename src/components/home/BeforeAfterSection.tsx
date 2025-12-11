import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const beforeAfterProjects = [
  {
    title: '3BHK Living Room Transformation',
    location: 'Jubilee Hills',
    beforeImage: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    title: 'Modular Kitchen Upgrade',
    location: 'Kondapur',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    title: 'Master Bathroom Renovation',
    location: 'Gachibowli',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
];

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader
          badge="Before & After"
          title="See the Transformation"
          subtitle="Witness the dramatic transformations we've delivered for our clients. Slide to compare before and after results."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterProjects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-up animation-delay-${(index + 1) * 100}`}
            >
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                className="aspect-[4/3] mb-4"
              />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="forest" size="lg" asChild>
            <Link to="/before-after">
              View All Transformations
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
