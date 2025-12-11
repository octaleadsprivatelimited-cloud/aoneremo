import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/brand';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-strong hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground fill-primary-foreground" />
    </a>
  );
}
