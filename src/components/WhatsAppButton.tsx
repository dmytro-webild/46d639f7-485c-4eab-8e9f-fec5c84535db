import { motion } from "motion/react";

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
  label?: string;
};

export default function WhatsAppButton({
  phoneNumber = "212661000000",
  message = "Hello ITRAN VOYAGES MOROCCO! I would like to book a private tour.",
  label = "Book on WhatsApp",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct booking on WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <span className="relative flex size-6 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="size-6 transition-transform duration-300 group-hover:rotate-12"
            aria-hidden="true"
          >
            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.165 8.165 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.78 2.39 1.54 1.54 2.39 3.59 2.39 5.78 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z" />
          </svg>
        </span>
        <span className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-white">
          {label}
        </span>
      </a>
    </motion.div>
  );
}
