import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '@/config/brand';

const beforeAfterItems = [
  { title: '3BHK Living Room', location: 'Jubilee Hills', category: 'Living Room', before: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80', after: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { title: 'Modular Kitchen', location: 'Kondapur', category: 'Kitchen', before: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80', after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { title: 'Master Bathroom', location: 'Gachibowli', category: 'Bathroom', before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', after: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80' },
  { title: 'Full Home Renovation', location: 'Banjara Hills', category: 'Full Home', before: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { title: 'Office Space', location: 'Hitech City', category: 'Commercial', before: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { title: 'Bedroom Makeover', location: 'Madhapur', category: 'Full Home', before: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
];

export default function BeforeAfterPage() {
  return (
    <MainLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Before & After Gallery</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Witness stunning transformations across {BRAND.CITY}. Slide to compare the dramatic before and after results.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterItems.map((item, index) => (
              <div key={index}>
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} className="aspect-[4/3] mb-4" />
                <span className="text-xs font-semibold text-accent">{item.category}</span>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Your Transformation Started <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
