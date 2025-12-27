import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { BRAND, getWhatsAppLink } from '@/config/brand';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      <div className="container-custom relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <span className="inline-block px-4 py-2 bg-accent/20 text-white text-sm font-semibold rounded-full mb-6">
              #1 Renovation Experts in {BRAND.CITY}
            </span>
            
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Premium Home{' '}
              <span className="text-orange-400">Renovation</span>{' '}
              Experts in {BRAND.CITY}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-4 max-w-xl mx-auto lg:mx-0">
              Kitchen • Bathroom • Full Home • Commercial
            </p>
            
            <p className="text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your space with our expert renovation services. From concept to completion, 
              we deliver exceptional quality with transparent pricing and on-time delivery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-orange-400">{BRAND.STATS.PROJECTS}</p>
                <p className="text-sm text-white/80">Projects Done</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-orange-400">{BRAND.STATS.SATISFACTION}</p>
                <p className="text-sm text-white/80">Quality Assured</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-orange-400">{BRAND.STATS.EXPERIENCE}</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="h-5 w-5 text-primary" />
                3D Design Preview
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="h-5 w-5 text-primary" />
                Same-Day Quote
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="h-5 w-5 text-primary" />
                Premium Materials
              </div>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="animate-fade-up animation-delay-200">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              className="aspect-[4/3] shadow-strong"
            />
            <div className="flex items-center justify-center gap-4 mt-4">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Play className="h-4 w-4" />
                Watch Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
