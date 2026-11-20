import { motion } from "motion/react";

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
  tooltipText?: string;
};

export default function WhatsAppButton({
  phoneNumber = "212723902185",
  message = "Hello ITRAN VOYAGES MOROCCO! I would like to inquire about a tour.",
  tooltipText = "Chat with us on WhatsApp",
}: WhatsAppButtonProps) {
  const whatsappUrl = message
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999] flex items-center group pointer-events-auto"
    >
      {/* Tooltip */}
      <div
        role="tooltip"
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-neutral-900/95 px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-2xl backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none group-hover:translate-x-0 group-focus-within:translate-x-0 translate-x-2 flex items-center gap-2"
      >
        <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{tooltipText}</span>
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-6 border-l-neutral-900/95" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltipText}
        className="relative flex items-center justify-center size-13 sm:size-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:bg-[#20bd5a] hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* Subtle Pulse Animation Rings */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="size-7 sm:size-8 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.165 8.165 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.78 2.39 1.54 1.54 2.39 3.59 2.39 5.78 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z" />
        </svg>
      </a>
    </motion.div>
  );
}

