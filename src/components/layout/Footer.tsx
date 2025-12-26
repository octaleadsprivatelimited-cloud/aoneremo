import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, ChevronDown } from 'lucide-react';
import { BRAND } from '@/config/brand';
import { cn } from '@/lib/utils';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Before & After', href: '/before-after' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap.xml', external: true },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
      <div className="container-custom py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-1.5">
            <div>
              <div className="mb-0.5">
                <img 
                  src="/logo.png" 
                  alt={BRAND.COMPANY_NAME}
                  className="h-28 w-auto object-contain"
                />
              </div>
              <p className="text-primary-foreground/80 text-xs leading-tight">
                {BRAND.TAGLINE}. Premium renovation and interior design services in {BRAND.CITY} with 15+ years of experience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5">
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
            <div className="flex items-center gap-3">
              <a
                href={BRAND.SOCIAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.SOCIAL.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRAND.SOCIAL.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={BRAND.SOCIAL.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button
              onClick={() => toggleDropdown('quickLinks')}
              className="md:hidden w-full flex items-center justify-between font-display font-semibold text-base mb-3 text-primary-foreground"
            >
              Quick Links
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === 'quickLinks' && "rotate-180"
                )}
              />
            </button>
            <h4 className="hidden md:block font-display font-semibold text-base mb-3">Quick Links</h4>
            <ul className={cn(
              "space-y-1 overflow-hidden transition-all duration-300",
              "md:block",
              openDropdown === 'quickLinks' ? "max-h-96" : "max-h-0 md:max-h-none"
            )}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors py-0.5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors py-0.5"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Renovation Services */}
          <div>
            <button
              onClick={() => toggleDropdown('renovation')}
              className="md:hidden w-full flex items-center justify-between font-display font-semibold text-base mb-3 text-primary-foreground"
            >
              Renovation Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === 'renovation' && "rotate-180"
                )}
              />
            </button>
            <h4 className="hidden md:block font-display font-semibold text-base mb-3">Renovation Services</h4>
            <ul className={cn(
              "space-y-1 overflow-hidden transition-all duration-300",
              "md:block",
              openDropdown === 'renovation' ? "max-h-96" : "max-h-0 md:max-h-none"
            )}>
              {renovationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Services */}
          <div>
            <button
              onClick={() => toggleDropdown('interior')}
              className="md:hidden w-full flex items-center justify-between font-display font-semibold text-base mb-3 text-primary-foreground"
            >
              Interior Design
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === 'interior' && "rotate-180"
                )}
              />
            </button>
            <h4 className="hidden md:block font-display font-semibold text-base mb-3">Interior Design</h4>
            <ul className={cn(
              "space-y-1 overflow-hidden transition-all duration-300",
              "md:block",
              openDropdown === 'interior' ? "max-h-96" : "max-h-0 md:max-h-none"
            )}>
              {interiorLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Service Area */}
            <div className="mt-4 hidden md:block">
              <h5 className="font-semibold text-sm mb-1.5">Service Areas</h5>
              <p className="text-xs text-primary-foreground/80">
                Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Kondapur, Hitech City, Kukatpally & all of Hyderabad
              </p>
            </div>
            <div className={cn(
              "mt-3 overflow-hidden transition-all duration-300 md:hidden",
              openDropdown === 'interior' ? "max-h-96" : "max-h-0"
            )}>
              <h5 className="font-semibold text-sm mb-1.5">Service Areas</h5>
              <p className="text-xs text-primary-foreground/80">
                Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Kondapur, Hitech City, Kukatpally & all of Hyderabad
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-3 flex justify-center items-center">
          <p className="text-sm text-primary-foreground/70 text-center">
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
        </div>
      </div>
    </footer>
  );
}
