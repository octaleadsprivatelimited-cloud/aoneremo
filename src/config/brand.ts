// Brand Configuration - Update these values for different clients
export const BRAND = {
  COMPANY_NAME: "A-One Reno",
  TAGLINE: "Transforming Homes with Premium Renovation Expertise",
  CITY: "Hyderabad",
  PHONE: "+91 81066 29333",
  WHATSAPP: "+91 81066 29333",
  EMAIL: "info@aonereno.com",
  ADDRESS: "Plot 42, Jubilee Hills, Road No. 5, Hyderabad, Telangana 500033",
  GOOGLE_MAPS: "https://maps.app.goo.gl/5RFrwLR7XHLDiwbw7",
  SOCIAL: {
    FACEBOOK: "https://facebook.com/abcrenovations",
    INSTAGRAM: "https://instagram.com/abcrenovations",
    YOUTUBE: "https://youtube.com/@abcrenovations",
    LINKEDIN: "https://linkedin.com/company/abcrenovations",
  },
  STATS: {
    PROJECTS: "500+",
    SATISFACTION: "100%",
    EXPERIENCE: "15+",
    DESIGNERS: "25+",
  },
} as const;

export const getWhatsAppLink = (message?: string) => {
  const phone = BRAND.WHATSAPP.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent("Hi, I'm interested in your renovation services.");
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
