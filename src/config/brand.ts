// Brand Configuration - Update these values for different clients
export const BRAND = {
  COMPANY_NAME: "Aonereno",
  TAGLINE: "Transforming Homes with Premium Renovation Expertise",
  CITY: "Hyderabad",
  PHONE: "+91 81066 29333",
  WHATSAPP: "+91 81066 29333",
  EMAIL: "info@aonereno.com",
  WEBSITE: "https://aonereno.com",
  ADDRESS: "Plot 42, Jubilee Hills, Road No. 5, Hyderabad, Telangana 500033",
  GOOGLE_MAPS: "https://maps.app.goo.gl/5RFrwLR7XHLDiwbw7",
  SOCIAL: {
    FACEBOOK: "https://facebook.com/aonereno",
    INSTAGRAM: "https://instagram.com/aonereno",
    YOUTUBE: "https://youtube.com/@aonereno",
    LINKEDIN: "https://linkedin.com/company/aonereno",
  },
  STATS: {
    PROJECTS: "500+",
    SATISFACTION: "100%",
    EXPERIENCE: "15+",
    DESIGNERS: "25+",
  },
  KEYWORDS: [
    "aonereno",
    "home renovation Hyderabad",
    "kitchen renovation",
    "bathroom renovation",
    "interior design Hyderabad",
    "modular kitchen",
    "renovation contractors",
    "home renovation services",
    "full home renovation",
    "commercial renovation",
    "office renovation",
    "living room renovation",
    "flooring and tiling",
    "painting services",
    "false ceiling",
    "electrical and plumbing",
    "wardrobes and storage",
    "3D design visualization",
    "furniture and decor",
    "home renovation company",
    "best renovation services Hyderabad",
    "affordable renovation",
    "premium home renovation",
  ],
} as const;

export const getWhatsAppLink = (message?: string) => {
  const phone = BRAND.WHATSAPP.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent("Hi, I'm interested in your renovation services.");
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
