export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'renovation' | 'interiors';
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  costRange: {
    basic: string;
    standard: string;
    premium: string;
  };
  timeline: string;
  faqs: { question: string; answer: string }[];
}

export const renovationServices: Service[] = [
  {
    id: 'full-home',
    title: 'Full Home Renovation',
    slug: 'full-home',
    category: 'renovation',
    shortDescription: 'Complete home transformation from floor to ceiling with modern designs.',
    description: 'Transform your entire living space with our comprehensive full home renovation service. We handle everything from demolition to final touches, ensuring a seamless transformation that reflects your lifestyle.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: 'Home',
    features: [
      'Complete structural modifications',
      'Electrical rewiring & plumbing upgrades',
      'Flooring replacement',
      'Wall treatments & painting',
      'Ceiling work including false ceilings',
      'Kitchen & bathroom renovation',
      'Custom storage solutions',
      'Lighting design & installation',
    ],
    costRange: {
      basic: '₹800 - ₹1,200/sqft',
      standard: '₹1,200 - ₹1,800/sqft',
      premium: '₹1,800 - ₹2,500/sqft',
    },
    timeline: '45-90 days',
    faqs: [
      {
        question: 'Do we need to vacate during renovation?',
        answer: 'For full home renovations, we recommend vacating the premises for safety and to expedite the work. We can complete projects 30% faster when the home is vacant.',
      },
      {
        question: 'What is included in the renovation package?',
        answer: 'Our package includes demolition, civil work, electrical, plumbing, flooring, painting, false ceiling, and basic fixtures. Modular furniture and appliances are quoted separately.',
      },
    ],
  },
  {
    id: 'kitchen',
    title: 'Kitchen Renovation',
    slug: 'kitchen',
    category: 'renovation',
    shortDescription: 'Modern kitchen makeovers with premium fittings and smart storage.',
    description: 'Upgrade your cooking space with our expert kitchen renovation services. From layout optimization to premium finishes, we create kitchens that are both beautiful and highly functional.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    icon: 'UtensilsCrossed',
    features: [
      'Layout redesign & optimization',
      'Countertop replacement (granite/quartz)',
      'Backsplash installation',
      'Cabinet refacing or replacement',
      'Plumbing & electrical upgrades',
      'Chimney & hob installation',
      'Waterproofing treatment',
      'Ventilation improvements',
    ],
    costRange: {
      basic: '₹1,000 - ₹1,500/sqft',
      standard: '₹1,500 - ₹2,200/sqft',
      premium: '₹2,200 - ₹3,500/sqft',
    },
    timeline: '20-35 days',
    faqs: [
      {
        question: 'Can I use my kitchen during renovation?',
        answer: 'We set up a temporary cooking area when possible. However, for major renovations, the kitchen will be unusable for 2-3 weeks.',
      },
      {
        question: 'What brands do you use for fittings?',
        answer: 'We partner with premium brands like Jaquar, Kohler, Finolex, and Treelab for all fittings and hardware.',
      },
    ],
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    slug: 'bathroom',
    category: 'renovation',
    shortDescription: 'Luxurious bathroom upgrades with premium sanitaryware and tiles.',
    description: 'Create your personal spa with our bathroom renovation expertise. We specialize in waterproofing, premium fixtures, and space-efficient designs that maximize comfort.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    icon: 'Bath',
    features: [
      'Complete waterproofing',
      'Tile replacement',
      'Sanitaryware upgrade',
      'Shower enclosure installation',
      'Vanity & storage solutions',
      'Lighting & ventilation',
      'Heated flooring (optional)',
      'Anti-slip treatments',
    ],
    costRange: {
      basic: '₹1,200 - ₹1,800/sqft',
      standard: '₹1,800 - ₹2,800/sqft',
      premium: '₹2,800 - ₹4,500/sqft',
    },
    timeline: '12-20 days',
    faqs: [
      {
        question: 'How long does bathroom renovation take?',
        answer: 'A standard bathroom renovation takes 12-20 days depending on the scope. Waterproofing alone requires 5-7 days of curing time.',
      },
      {
        question: 'Do you handle plumbing changes?',
        answer: 'Yes, our team includes licensed plumbers who can relocate fixtures and upgrade the entire plumbing system.',
      },
    ],
  },
  {
    id: 'living-room',
    title: 'Living Room Renovation',
    slug: 'living-room',
    category: 'renovation',
    shortDescription: 'Transform your living space into a stunning entertainment area.',
    description: 'Reimagine your living room with custom designs that blend aesthetics with functionality. From flooring to lighting, we create spaces perfect for relaxation and entertainment.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    icon: 'Sofa',
    features: [
      'Flooring upgrades',
      'False ceiling with ambient lighting',
      'Wall paneling & textures',
      'TV unit wall design',
      'Accent walls',
      'Window treatments',
      'Electrical reorganization',
      'Built-in storage',
    ],
    costRange: {
      basic: '₹600 - ₹900/sqft',
      standard: '₹900 - ₹1,400/sqft',
      premium: '₹1,400 - ₹2,200/sqft',
    },
    timeline: '15-25 days',
    faqs: [
      {
        question: 'Can you create a home theater setup?',
        answer: 'Absolutely! We design integrated home theater systems with acoustic treatments, concealed wiring, and optimized seating layouts.',
      },
    ],
  },
  {
    id: 'office',
    title: 'Office Renovation',
    slug: 'office',
    category: 'renovation',
    shortDescription: 'Professional workspace renovation for productivity and brand identity.',
    description: 'Create inspiring workspaces that boost productivity and reflect your brand. Our office renovation services cover everything from open-plan layouts to executive cabins.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    icon: 'Building2',
    features: [
      'Space planning & layout design',
      'Workstation installation',
      'Conference room setup',
      'Reception area design',
      'Server room construction',
      'Cable management systems',
      'Acoustic treatments',
      'Branding elements integration',
    ],
    costRange: {
      basic: '₹700 - ₹1,100/sqft',
      standard: '₹1,100 - ₹1,700/sqft',
      premium: '₹1,700 - ₹2,600/sqft',
    },
    timeline: '30-60 days',
    faqs: [
      {
        question: 'Can you work after office hours?',
        answer: 'Yes, we offer night and weekend work schedules to minimize disruption to your business operations.',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Renovation',
    slug: 'commercial',
    category: 'renovation',
    shortDescription: 'Retail, restaurant & commercial space transformations.',
    description: 'Elevate your commercial space with renovations designed to attract customers and optimize operations. We specialize in retail, restaurants, clinics, and hospitality projects.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80',
    icon: 'Store',
    features: [
      'Storefront design',
      'Customer flow optimization',
      'Display & shelving systems',
      'Commercial kitchen setup',
      'Compliance with regulations',
      'Signage integration',
      'HVAC modifications',
      'Fire safety systems',
    ],
    costRange: {
      basic: '₹900 - ₹1,400/sqft',
      standard: '₹1,400 - ₹2,200/sqft',
      premium: '₹2,200 - ₹3,800/sqft',
    },
    timeline: '45-90 days',
    faqs: [
      {
        question: 'Do you handle permits and approvals?',
        answer: 'Yes, our team manages all necessary permits, NOCs, and compliance documentation for commercial renovations.',
      },
    ],
  },
  {
    id: 'flooring',
    title: 'Flooring & Tiling',
    slug: 'flooring',
    category: 'renovation',
    shortDescription: 'Premium flooring solutions from marble to engineered wood.',
    description: 'Upgrade your floors with our expert installation services. We work with marble, granite, vitrified tiles, wooden flooring, and epoxy solutions for every space and budget.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: 'Grid3X3',
    features: [
      'Floor leveling & preparation',
      'Tile installation',
      'Marble & granite laying',
      'Wooden & laminate flooring',
      'Epoxy flooring',
      'Pattern design & inlays',
      'Skirting installation',
      'Floor polishing & sealing',
    ],
    costRange: {
      basic: '₹80 - ₹150/sqft',
      standard: '₹150 - ₹300/sqft',
      premium: '₹300 - ₹800/sqft',
    },
    timeline: '7-15 days',
    faqs: [
      {
        question: 'Which flooring is best for homes?',
        answer: 'For living areas, we recommend vitrified tiles or wooden flooring. Bathrooms and kitchens need anti-skid tiles. We help you choose based on usage and budget.',
      },
    ],
  },
  {
    id: 'painting',
    title: 'Painting & False Ceiling',
    slug: 'painting',
    category: 'renovation',
    shortDescription: 'Expert painting and designer ceiling solutions for any space.',
    description: 'Refresh your interiors with professional painting and stunning false ceilings. We use premium paints and create designer ceilings that add character to your spaces.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    icon: 'Paintbrush',
    features: [
      'Surface preparation',
      'Interior painting',
      'Exterior painting',
      'Texture painting',
      'POP false ceiling',
      'Gypsum false ceiling',
      'Wooden ceiling panels',
      'Cove lighting integration',
    ],
    costRange: {
      basic: '₹25 - ₹40/sqft',
      standard: '₹40 - ₹70/sqft',
      premium: '₹70 - ₹150/sqft',
    },
    timeline: '5-12 days',
    faqs: [
      {
        question: 'Which paint brands do you use?',
        answer: 'We are authorized applicators for Asian Paints, Berger, and Dulux. All paints come with manufacturer warranty.',
      },
    ],
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing',
    slug: 'electrical-plumbing',
    category: 'renovation',
    shortDescription: 'Complete electrical rewiring and plumbing overhaul services.',
    description: 'Upgrade your home\'s critical systems with our electrical and plumbing services. We ensure safety, efficiency, and modern conveniences with certified professionals.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    icon: 'Wrench',
    features: [
      'Complete rewiring',
      'MCB/RCCB upgrades',
      'Smart home wiring',
      'Plumbing line replacement',
      'Water heater installation',
      'Water purifier connections',
      'Concealed wiring',
      'Earthing & safety systems',
    ],
    costRange: {
      basic: '₹150 - ₹250/point',
      standard: '₹250 - ₹400/point',
      premium: '₹400 - ₹650/point',
    },
    timeline: '7-14 days',
    faqs: [
      {
        question: 'Do you provide warranty on electrical work?',
        answer: 'Yes, all electrical work comes with a 2-year warranty on labor. Wires and switches carry manufacturer warranty of 5-10 years.',
      },
    ],
  },
];

export const interiorServices: Service[] = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    slug: 'modular-kitchen',
    category: 'interiors',
    shortDescription: 'Customized modular kitchens with smart storage solutions.',
    description: 'Design your dream kitchen with our bespoke modular solutions. We combine Italian design sensibilities with practical Indian cooking requirements to create the perfect kitchen.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    icon: 'ChefHat',
    features: [
      'Custom cabinet design',
      'Soft-close mechanisms',
      'Carousel units & pull-outs',
      'Chimney integration',
      'Built-in appliances',
      'Multiple finish options',
      'Countertop selection',
      'Lighting design',
    ],
    costRange: {
      basic: '₹1,200 - ₹1,800/sqft',
      standard: '₹1,800 - ₹2,800/sqft',
      premium: '₹2,800 - ₹4,500/sqft',
    },
    timeline: '25-40 days',
    faqs: [
      {
        question: 'What is the difference between MDF and plywood?',
        answer: 'MDF is more affordable and uniform but less water-resistant. BWP plywood is recommended for Indian kitchens due to better moisture resistance.',
      },
    ],
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    slug: 'wardrobes-storage',
    category: 'interiors',
    shortDescription: 'Custom wardrobes and storage solutions for organized living.',
    description: 'Maximize your storage with our custom wardrobe and cabinet solutions. From walk-in closets to compact bedroom wardrobes, we design storage that fits your lifestyle.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
    icon: 'DoorClosed',
    features: [
      'Sliding & hinged options',
      'Walk-in closet design',
      'Mirror integration',
      'Accessory organizers',
      'Shoe racks & drawers',
      'Loft storage',
      'Study table integration',
      'Premium hardware',
    ],
    costRange: {
      basic: '₹900 - ₹1,400/sqft',
      standard: '₹1,400 - ₹2,200/sqft',
      premium: '₹2,200 - ₹3,500/sqft',
    },
    timeline: '15-25 days',
    faqs: [
      {
        question: 'What warranty do you provide?',
        answer: 'We provide 10-year warranty on carcass and 5-year warranty on hardware. Shutters and finishes carry 3-year warranty.',
      },
    ],
  },
  {
    id: '3d-design',
    title: '3D Design & Visualization',
    slug: '3d-design',
    category: 'interiors',
    shortDescription: 'Photorealistic 3D renders to visualize your dream home.',
    description: 'See your renovation before it happens with our advanced 3D visualization service. We create photorealistic renders that help you make informed decisions about your space.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: 'Box',
    features: [
      'Floor plan optimization',
      '3D modeling',
      'Photorealistic rendering',
      'Material visualization',
      'Lighting simulation',
      'Virtual walkthroughs',
      'Design iterations',
      'Color scheme testing',
    ],
    costRange: {
      basic: '₹15,000 - ₹25,000',
      standard: '₹25,000 - ₹45,000',
      premium: '₹45,000 - ₹80,000',
    },
    timeline: '5-10 days',
    faqs: [
      {
        question: 'How accurate are the 3D renders?',
        answer: 'Our renders are 95%+ accurate to the final outcome. We use the actual material textures and lighting conditions of your space.',
      },
    ],
  },
  {
    id: 'furniture-decor',
    title: 'Furniture & Décor',
    slug: 'furniture-decor',
    category: 'interiors',
    shortDescription: 'Custom furniture and curated décor for complete interiors.',
    description: 'Complete your interiors with our custom furniture and décor solutions. From sofas to artwork, we source and create pieces that perfectly complement your renovated space.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    icon: 'Armchair',
    features: [
      'Custom sofa design',
      'Dining table sets',
      'Bed & bedroom furniture',
      'Study & office furniture',
      'Curtains & blinds',
      'Artwork curation',
      'Lighting fixtures',
      'Home accessories',
    ],
    costRange: {
      basic: '₹2,00,000 - ₹5,00,000',
      standard: '₹5,00,000 - ₹12,00,000',
      premium: '₹12,00,000 - ₹30,00,000',
    },
    timeline: '30-45 days',
    faqs: [
      {
        question: 'Do you provide imported furniture?',
        answer: 'Yes, we source furniture from Italy, Germany, and Southeast Asia. We also have partnerships with premium Indian manufacturers.',
      },
    ],
  },
];

export const allServices = [...renovationServices, ...interiorServices];
