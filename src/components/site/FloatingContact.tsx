import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/products";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello ROTO TANKS, I'd like a quote.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-bold text-sm"
      >
        <MessageCircle className="size-5" strokeWidth={2.5} />
        WhatsApp
      </a>
      <a
        href={`tel:${CONTACT_PHONE_TEL}`}
        aria-label={`Call ${CONTACT_PHONE}`}
        className="flex items-center gap-2 bg-navy text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-bold text-sm"
      >
        <Phone className="size-5" strokeWidth={2.5} />
        {CONTACT_PHONE}
      </a>
    </div>
  );
}
