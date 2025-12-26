import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND } from '@/config/brand';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords = [],
  image = `https://aonereno.com/logo.png`,
  url,
  type = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || `${BRAND.WEBSITE}${location.pathname}`;
  const fullTitle = title ? `${title} | ${BRAND.COMPANY_NAME}` : `${BRAND.COMPANY_NAME} - ${BRAND.TAGLINE}`;
  const metaDescription = description || `${BRAND.COMPANY_NAME} - Premium home renovation and interior design services in ${BRAND.CITY}. Kitchen, bathroom, full home & commercial renovations. Get free quote today!`;
  const metaKeywords = [...BRAND.KEYWORDS, ...keywords].join(', ');

  // Memoize structured data JSON to prevent unnecessary re-renders
  const structuredDataJson = useMemo(() => {
    return structuredData ? JSON.stringify(structuredData) : null;
  }, [structuredData]);

  useEffect(() => {
    try {
      // Update document title
      document.title = fullTitle;

      // Update or create meta tags
      const updateMetaTag = (property: string, content: string, isProperty = false) => {
        try {
          const attribute = isProperty ? 'property' : 'name';
          let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, property);
            document.head.appendChild(element);
          }
          element.content = content;
        } catch (error) {
          console.warn(`Failed to update meta tag ${property}:`, error);
        }
      };

    // Basic meta tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);
    updateMetaTag('author', BRAND.COMPANY_NAME);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', BRAND.COMPANY_NAME, true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

      // Add structured data (JSON-LD) - Only add if structuredData is provided
      if (structuredDataJson) {
        try {
          // Remove any existing dynamic JSON-LD scripts with our ID
          const existingDynamicScript = document.querySelector('script#dynamic-structured-data');
          if (existingDynamicScript) {
            existingDynamicScript.remove();
          }

          // Add new structured data
          const scriptTag = document.createElement('script');
          scriptTag.type = 'application/ld+json';
          scriptTag.textContent = structuredDataJson;
          scriptTag.id = 'dynamic-structured-data';
          document.head.appendChild(scriptTag);
        } catch (error) {
          console.warn('Failed to update structured data:', error);
        }
      } else {
        // Remove dynamic script if no structured data
        try {
          const existingDynamicScript = document.querySelector('script#dynamic-structured-data');
          if (existingDynamicScript) {
            existingDynamicScript.remove();
          }
        } catch (error) {
          console.warn('Failed to remove structured data:', error);
        }
      }
    } catch (error) {
      console.error('SEO component error:', error);
    }
  }, [fullTitle, metaDescription, metaKeywords, image, currentUrl, type, noindex, structuredDataJson]);

  return null;
}

