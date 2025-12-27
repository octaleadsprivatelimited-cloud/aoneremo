export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  text: string;
  image?: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh & Priya Sharma',
    location: 'Jubilee Hills',
    projectType: 'Full Home Renovation',
    rating: 5,
    text: 'aonereno transformed our 15-year-old apartment into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. Their team maintained transparency throughout the project with daily updates.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80',
  },
  {
    id: '2',
    name: 'Lakshmi Devi',
    location: 'Kondapur',
    projectType: 'Kitchen Renovation',
    rating: 5,
    text: 'Our kitchen was a cramped space from the 90s. Now it\'s the most beautiful part of our home. The modular design is so practical and the team understood exactly what we needed for Indian cooking.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: '3',
    name: 'Suresh Kumar',
    location: 'Hitech City',
    projectType: 'Office Renovation',
    rating: 5,
    text: 'Our employees love the new office. The design improved collaboration and the build quality is exceptional. They completed the work on time despite working around our business operations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    id: '4',
    name: 'Anjali & Vikram Reddy',
    location: 'Gachibowli',
    projectType: 'Bathroom Renovation',
    rating: 5,
    text: 'They turned our basic bathroom into a luxury spa. Every morning feels like a five-star hotel experience. The waterproofing work was thorough and professional.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
  },
  {
    id: '5',
    name: 'Neha Kapoor',
    location: 'Banjara Hills',
    projectType: 'Living Room Renovation',
    rating: 5,
    text: 'The living room is now the heart of our home. Every guest compliments the design. aonereno understood our vision perfectly and executed it flawlessly.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: '6',
    name: 'Mohammed Aziz',
    location: 'Tolichowki',
    projectType: 'Full Home Renovation',
    rating: 5,
    text: 'Best decision we made was choosing aonereno. They handled our entire 3BHK renovation professionally. The quality of materials and workmanship is exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
];
