export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  area: string;
  budgetRange: string;
  category: string;
  scope: string[];
  materials: string[];
  timeline: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  testimonial: {
    text: string;
    author: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'jubilee-hills-3bhk-transformation',
    title: '3BHK Luxury Transformation',
    location: 'Jubilee Hills, Hyderabad',
    area: '1,850 sqft',
    budgetRange: '₹28-32 Lakhs',
    category: 'Full Home Renovation',
    scope: [
      'Complete demolition & reconstruction',
      'Kitchen & bathroom renovation',
      'False ceiling with cove lighting',
      'Vitrified tile flooring',
      'Modular wardrobes in all bedrooms',
      'Modular kitchen with appliances',
    ],
    materials: [
      'Asian Paints Royale',
      'Kajaria tiles',
      'Jaquar sanitaryware',
      'Finolex hardware',
      'Treelab accessories',
    ],
    timeline: '65 days',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    testimonial: {
      text: 'ABC Renovations transformed our 15-year-old apartment into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommend!',
      author: 'Ramesh & Priya Sharma',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'kondapur-kitchen-makeover',
    title: 'Premium Kitchen Makeover',
    location: 'Kondapur, Hyderabad',
    area: '180 sqft',
    budgetRange: '₹8-10 Lakhs',
    category: 'Kitchen Renovation',
    scope: [
      'Complete kitchen demolition',
      'New layout design',
      'Modular kitchen installation',
      'Countertop replacement',
      'Backsplash installation',
      'Chimney & hob integration',
    ],
    materials: [
      'Marine plywood',
      'Quartz countertop',
      'Treelab accessories',
      'Faber chimney',
      'Johnson tiles',
    ],
    timeline: '28 days',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    ],
    testimonial: {
      text: 'Our kitchen was a cramped space from the 90s. Now it\'s the most beautiful part of our home. The team understood exactly what we needed for an Indian kitchen.',
      author: 'Lakshmi Devi',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'gachibowli-bathroom-spa',
    title: 'Master Bathroom Spa Conversion',
    location: 'Gachibowli, Hyderabad',
    area: '85 sqft',
    budgetRange: '₹4-5 Lakhs',
    category: 'Bathroom Renovation',
    scope: [
      'Complete waterproofing',
      'Premium tile installation',
      'Rain shower setup',
      'Jacuzzi installation',
      'Heated towel rails',
      'Ambient lighting',
    ],
    materials: [
      'Imported Italian tiles',
      'Kohler fixtures',
      'Grohe faucets',
      'Saint Gobain glass',
    ],
    timeline: '18 days',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    ],
    testimonial: {
      text: 'They turned our basic bathroom into a luxury spa. Every morning feels like a five-star hotel experience. Worth every rupee!',
      author: 'Anjali & Vikram Reddy',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'hitech-city-office',
    title: 'IT Office Modernization',
    location: 'Hitech City, Hyderabad',
    area: '3,500 sqft',
    budgetRange: '₹55-65 Lakhs',
    category: 'Commercial Renovation',
    scope: [
      'Open plan layout design',
      'Meeting room construction',
      'Server room setup',
      'Reception area',
      'Cafeteria design',
      'Acoustic treatments',
    ],
    materials: [
      'Raised flooring',
      'Glass partitions',
      'Armstrong ceiling',
      'Branded workstations',
    ],
    timeline: '45 days',
    beforeImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
    ],
    testimonial: {
      text: 'Our employees love the new office. The design improved collaboration and the build quality is exceptional. Completed on time despite working around our operations.',
      author: 'Suresh Kumar, CEO TechStart Solutions',
    },
    featured: true,
  },
  {
    id: '5',
    slug: 'banjara-hills-living-room',
    title: 'Contemporary Living Room',
    location: 'Banjara Hills, Hyderabad',
    area: '450 sqft',
    budgetRange: '₹12-15 Lakhs',
    category: 'Living Room Renovation',
    scope: [
      'False ceiling with profiles',
      'Wooden flooring',
      'TV unit wall',
      'Custom lighting',
      'Furniture sourcing',
      'Art curation',
    ],
    materials: [
      'Engineered wood flooring',
      'POP ceiling',
      'LED lighting',
      'Italian marble accents',
    ],
    timeline: '22 days',
    beforeImage: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    gallery: [],
    testimonial: {
      text: 'The living room is now the heart of our home. Every guest compliments the design. ABC Renovations understood our vision perfectly.',
      author: 'Neha Kapoor',
    },
    featured: false,
  },
  {
    id: '6',
    slug: 'madhapur-2bhk-renovation',
    title: '2BHK Complete Makeover',
    location: 'Madhapur, Hyderabad',
    area: '1,100 sqft',
    budgetRange: '₹18-22 Lakhs',
    category: 'Full Home Renovation',
    scope: [
      'All rooms renovation',
      'Two bathroom upgrades',
      'Modular kitchen',
      'Balcony conversion',
      'Complete painting',
      'Electrical upgrade',
    ],
    materials: [
      'Greenply plywood',
      'Somany tiles',
      'Havells wiring',
      'Anchor switches',
    ],
    timeline: '55 days',
    beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [],
    testimonial: {
      text: 'Exceptional service from start to finish. The team was professional, punctual, and the quality is outstanding. Our flat feels brand new!',
      author: 'Rahul Menon',
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
