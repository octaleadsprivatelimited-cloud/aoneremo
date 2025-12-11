export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does a typical home renovation take?',
    answer: 'A full home renovation typically takes 45-90 days depending on the scope. Kitchen renovations take 20-35 days, bathroom renovations 12-20 days, and painting/false ceiling work 5-12 days. We provide detailed timelines during the consultation.',
    category: 'general',
  },
  {
    id: '2',
    question: 'What is the cost per square foot for renovation?',
    answer: 'Renovation costs vary based on scope and materials. Basic renovations start at ₹800/sqft, standard at ₹1,200/sqft, and premium at ₹1,800+/sqft. We provide detailed quotes after site inspection.',
    category: 'pricing',
  },
  {
    id: '3',
    question: 'Do you provide a warranty on your work?',
    answer: 'Yes, we provide comprehensive warranties: 10 years on structural work, 5 years on waterproofing, 3 years on modular work, and 2 years on electrical and plumbing labor. All materials carry manufacturer warranty.',
    category: 'general',
  },
  {
    id: '4',
    question: 'Can we stay in the house during renovation?',
    answer: 'For partial renovations like kitchen or bathroom, you can stay. For full home renovations, we recommend vacating for safety and faster completion. We complete projects 30% faster when homes are vacant.',
    category: 'general',
  },
  {
    id: '5',
    question: 'What brands do you use for materials?',
    answer: 'We partner with premium brands: Asian Paints & Berger for paints, Kajaria & Johnson for tiles, Jaquar & Kohler for sanitaryware, Hettich & Hafele for hardware, Havells for electricals, and Greenply for plywood.',
    category: 'materials',
  },
  {
    id: '6',
    question: 'How do payments work?',
    answer: 'We follow a milestone-based payment structure: 10% advance, 30% at demolition completion, 30% at mid-project, and 30% upon handover. This ensures transparency and accountability.',
    category: 'pricing',
  },
  {
    id: '7',
    question: 'Do you provide 3D designs before starting work?',
    answer: 'Yes, we provide photorealistic 3D renders for all projects above ₹5 lakhs at no extra cost. For smaller projects, 3D design is available at nominal charges. This helps you visualize the final outcome.',
    category: 'design',
  },
  {
    id: '8',
    question: 'What areas do you serve?',
    answer: 'We currently serve all areas in Hyderabad including Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Kondapur, Hitech City, Kukatpally, and surrounding regions.',
    category: 'general',
  },
  {
    id: '9',
    question: 'Can you handle structural changes?',
    answer: 'Yes, we handle structural modifications including wall demolition, beam work, and column adjustments. All structural work is done under engineer supervision with proper approvals.',
    category: 'renovation',
  },
  {
    id: '10',
    question: 'Do you provide daily progress updates?',
    answer: 'Yes, we share daily photo and video updates via WhatsApp. You also get access to a project dashboard where you can track progress, payments, and timelines in real-time.',
    category: 'general',
  },
];

export const faqCategories = [
  { id: 'general', name: 'General Questions' },
  { id: 'pricing', name: 'Pricing & Payments' },
  { id: 'materials', name: 'Materials & Brands' },
  { id: 'design', name: 'Design Process' },
  { id: 'renovation', name: 'Renovation Work' },
];
