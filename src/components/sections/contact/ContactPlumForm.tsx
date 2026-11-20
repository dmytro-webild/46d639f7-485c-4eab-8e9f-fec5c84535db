import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import EraArchWindow from "@/components/kit/EraArchWindow";
import { useKitMotion, usePreloadImages } from "@/components/kit/kitMotion";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Detail = { label: string; value: string };

type FormLabels = { name?: string; email?: string; enquiry?: string; message?: string; sending?: string; sent?: string; thanks?: string };

type ContactPlumFormProps = {
  title?: string;
  script?: string;
  options?: string[];
  labels?: FormLabels;
  submitText?: string;
  imageSrc?: string;
  imageAlt?: string;
  details?: Detail[];
  ariaLabel?: string;
  className?: string;
};

const ContactPlumForm = ({
  title = "Get in touch",
  script = "hello",
  options = ["A booking", "An event", "Something else"],
  labels,
  submitText = "Send",
  imageSrc,
  imageAlt = "",
  details = [],
  ariaLabel,
  className,
}: ContactPlumFormProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const timer = useRef<number>(undefined);
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "200%");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state !== "idle") return;
    const form = event.currentTarget;
    setState("sending");
    timer.current = window.setTimeout(() => {
      setState("sent");
      form.reset();
    }, 1200);
  };

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: kit.base, ease: kit.ease, delay },
  });

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative bg-secondary py-[var(--section-space)] text-secondary-foreground", className)}>
      <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)]">
          <EraTitle text={title} script={script} align="left" className="max-w-[3.95em]" />
          <motion.form {...fade(0.2)} onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.name ?? "Name"}</p>
                <input name="name" required autoComplete="name" className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.email ?? "Email"}</p>
                <input name="email" type="email" required autoComplete="email" className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
              </label>
            </div>
            {options.length > 0 && (
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.enquiry ?? "Enquiry"}</p>
                <select name="topic" defaultValue={options[0]} className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground">
                  {options.map((option) => (
                    <option key={option} value={option} className="bg-secondary text-secondary-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="flex flex-col gap-2">
              <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.message ?? "Message"}</p>
              <textarea name="message" rows={3} className="resize-none border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={state !== "idle"} className="btn-secondary disabled:cursor-default">
                {state === "sending" ? (labels?.sending ?? "Sending") : state === "sent" ? (labels?.sent ?? "Sent") : submitText}
              </button>
              <a
                href="https://wa.me/212723902185?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20a%20private%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-5 py-2.5 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] transition-colors duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.165 8.165 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.78 2.39 1.54 1.54 2.39 3.59 2.39 5.78 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/>
                </svg>
                Book via WhatsApp
              </a>
              <p aria-live="polite" className="text-[length:var(--text-small)] text-secondary-foreground/75">
                {state === "sent" ? (labels?.thanks ?? "Thank you, we will reply within a day.") : ""}
              </p>
            </div>
          </motion.form>
        </div>

        <div className="flex flex-col gap-8">
          {imageSrc && (
            <div className="flex w-full flex-col border border-secondary-foreground/25 p-2 lg:min-h-[28rem] lg:flex-1">
              <EraArchWindow className="aspect-[4/5] w-full lg:aspect-auto lg:flex-1">
                <Media src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              </EraArchWindow>
            </div>
          )}
          {details.length > 0 && (
            <motion.dl {...fade(0.3)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {details.map((detail, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{detail.label}</dt>
                  <dd className="text-[length:var(--text-body)] leading-[1.5] [overflow-wrap:anywhere]">{detail.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPlumForm;
