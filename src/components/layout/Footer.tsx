import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { BRAND } from '@/config/brand';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Before & After', href: '/before-after' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

const renovationLinks = [
  { name: 'Full Home Renovation', href: '/renovation/full-home' },
  { name: 'Kitchen Renovation', href: '/renovation/kitchen' },
  { name: 'Bathroom Renovation', href: '/renovation/bathroom' },
  { name: 'Living Room', href: '/renovation/living-room' },
  { name: 'Office & Commercial', href: '/renovation/office' },
  { name: 'Flooring & Tiling', href: '/renovation/flooring' },
  { name: 'Painting & Ceiling', href: '/renovation/painting' },
];

const interiorLinks = [
  { name: 'Modular Kitchen', href: '/interiors/modular-kitchen' },
  { name: 'Wardrobes & Storage', href: '/interiors/wardrobes-storage' },
  { name: '3D Visualization', href: '/interiors/3d-design' },
  { name: 'Furniture & Décor', href: '/interiors/furniture-decor' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-primary-foreground relative"
      style={{
        backgroundImage: 'url(/footer-background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/60"></div>
      
      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <img 
                  src="/logo.png" 
                  alt={BRAND.COMPANY_NAME}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {BRAND.TAGLINE}. Premium renovation and interior design services in {BRAND.CITY} with 15+ years of experience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${BRAND.PHONE}`}
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                {BRAND.PHONE}
              </a>
              <a
                href={`mailto:${BRAND.EMAIL}`}
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                {BRAND.EMAIL}
              </a>
              <a
                href={BRAND.GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm hover:text-accent transition-colors"
              >
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 hover:text-accent">{BRAND.ADDRESS}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={BRAND.SOCIAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BRAND.SOCIAL.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BRAND.SOCIAL.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={BRAND.SOCIAL.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Renovation Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Renovation Services</h4>
            <ul className="space-y-3">
              {renovationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Interior Design</h4>
            <ul className="space-y-3">
              {interiorLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Service Area */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Service Areas</h5>
              <p className="text-sm text-primary-foreground/80">
                Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Kondapur, Hitech City, Kukatpally & all of Hyderabad
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} {BRAND.COMPANY_NAME}. All rights reserved. | Developed by{' '}
            <a 
              href="https://octaleads.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Octaleads Private Limited
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
