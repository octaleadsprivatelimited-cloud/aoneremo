import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRAND, getWhatsAppLink } from '@/config/brand';
import { cn } from '@/lib/utils';

const renovationLinks = [
  { name: 'All Renovation Services', href: '/renovation' },
  { name: 'Full Home Renovation', href: '/renovation/full-home' },
  { name: 'Kitchen Renovation', href: '/renovation/kitchen' },
  { name: 'Bathroom Renovation', href: '/renovation/bathroom' },
  { name: 'Living Room Renovation', href: '/renovation/living-room' },
  { name: 'Office Renovation', href: '/renovation/office' },
  { name: 'Commercial Renovation', href: '/renovation/commercial' },
  { name: 'Flooring & Tiling', href: '/renovation/flooring' },
  { name: 'Painting & False Ceiling', href: '/renovation/painting' },
  { name: 'Electrical & Plumbing', href: '/renovation/electrical-plumbing' },
];

const interiorLinks = [
  { name: 'All Interior Services', href: '/interiors' },
  { name: 'Modular Kitchen', href: '/interiors/modular-kitchen' },
  { name: 'Wardrobes & Storage', href: '/interiors/wardrobes-storage' },
  { name: '3D Design & Visualization', href: '/interiors/3d-design' },
  { name: 'Furniture & Décor', href: '/interiors/furniture-decor' },
];

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Renovation', href: '/renovation', dropdown: renovationLinks },
  { name: 'Interiors', href: '/interiors', dropdown: interiorLinks },
  { name: 'Before & After', href: '/before-after' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-transparent">
      {/* Main Nav */}
      <nav className="container-custom py-0">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-display font-bold text-sm">A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-xs leading-none text-gray-900 drop-shadow-lg">
                {BRAND.COMPANY_NAME.split(' ')[0]}
              </span>
              <span className="text-[9px] text-gray-700 drop-shadow-lg leading-none">Renovations & Interiors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    'px-2 py-0.5 text-xs font-medium transition-colors flex items-center gap-1 rounded-md text-gray-900 drop-shadow-lg',
                    isActive(link.href)
                      ? 'text-orange-400 bg-white/10'
                      : 'hover:text-orange-400 hover:bg-white/10'
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-strong py-2 animate-fade-in">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors text-gray-900',
                          location.pathname === subLink.href
                            ? 'text-orange-400 bg-gray-100'
                            : 'hover:text-orange-400 hover:bg-gray-100'
                        )}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="forest-outline" size="sm" className="h-7 px-3 text-xs" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button variant="whatsapp" size="sm" className="h-7 px-3 text-xs" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900 drop-shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm text-gray-900 animate-fade-in">
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={cn(
                      'block px-4 py-3 text-sm font-medium transition-colors rounded-md text-gray-900',
                      isActive(link.href)
                        ? 'text-orange-400 bg-gray-100'
                        : 'hover:text-orange-400 hover:bg-gray-100'
                    )}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.dropdown.slice(1).map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-400"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              <Button variant="forest" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Free Quote</Link>
              </Button>
              <Button variant="whatsapp" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
