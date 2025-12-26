import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50" 
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      {/* Main Nav */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full py-2 z-50">
            <img 
              src="/logo.png" 
              alt={BRAND.COMPANY_NAME}
              className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
            />
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
                    'px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 rounded-lg',
                    isActive(link.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown 
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeDropdown === link.name && "rotate-180"
                      )} 
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors duration-150',
                          location.pathname === subLink.href
                            ? 'text-orange-500 bg-orange-50 font-medium'
                            : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
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
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="default" 
              className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-orange-500 hover:text-orange-500" 
              asChild
            >
              <Link to="/contact">
                <Phone className="h-4 w-4" />
                Get Quote
              </Link>
            </Button>
            <Button 
              variant="whatsapp" 
              size="default" 
              className="h-10 px-4 text-sm font-medium shadow-sm hover:shadow-md transition-shadow" 
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors z-50",
              isOpen && "text-orange-500"
            )}
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) {
                setMobileDropdownOpen(null);
              }
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
            <div className="py-4 space-y-1">
              {mainLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.href}
                          className={cn(
                            'flex-1 block px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2',
                            isActive(link.href)
                              ? 'text-orange-500 bg-orange-50'
                              : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                          className={cn(
                            'px-4 py-3 text-gray-700 hover:text-orange-500 transition-colors rounded-lg mr-2',
                            mobileDropdownOpen === link.name && 'text-orange-500'
                          )}
                          aria-label={`Toggle ${link.name} menu`}
                        >
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              mobileDropdownOpen === link.name && 'rotate-180'
                            )}
                          />
                        </button>
                      </div>
                      {mobileDropdownOpen === link.name && (
                        <div className="pl-6 space-y-1 mt-1 animate-in slide-in-from-top duration-200">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              className={cn(
                                'block px-4 py-2.5 text-sm rounded-lg mx-2 transition-colors',
                                location.pathname === subLink.href
                                  ? 'text-orange-500 bg-orange-50 font-medium'
                                  : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                              )}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        'block px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2',
                        isActive(link.href)
                          ? 'text-orange-500 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 px-4 pb-4 pt-4 border-t border-gray-200 bg-gray-50">
              <Button variant="default" className="w-full h-11 font-medium" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Get Free Quote
                </Link>
              </Button>
              <Button variant="whatsapp" className="w-full h-11 font-medium" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <MessageCircle className="h-4 w-4" />
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
