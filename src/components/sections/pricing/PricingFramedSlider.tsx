import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import { useImageReady, usePreloadImages } from "@/components/kit/kitMotion";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Spec = { label: string; value: string };

type Plan = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  specs?: Spec[];
  imageSrc?: string;
  imageAlt?: string;
  cta?: { text: string; href: string };
  whatsappUrl?: string;
};

type PricingFramedSliderProps = {
  title?: string;
  script?: string;
  items?: Plan[];
  imageSrc?: string;
  imageAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const PricingFramedSlider = ({
  title = "Rooms and suites",
  script = "stay",
  items = [
    { name: "Garden Room", price: "€240", period: "per night", description: "A quiet room that opens onto the lemon garden.", specs: [{ label: "Guests", value: "2" }], cta: { text: "Book", href: "#contact" } },
  ],
  imageSrc,
  imageAlt = "",
  ariaLabel,
  className,
}: PricingFramedSliderProps) => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "200%");
  const revealRef = useRef<HTMLDivElement>(null);
  const revealIn = useInView(revealRef, { once: true, margin: "0px 0px -10% 0px" });
  const revealReady = useImageReady(revealRef, revealIn);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const leadY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const count = items.length;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: count > 1, align: "center" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => setActive(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused || reduce || count < 2) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 6000);
    return () => window.clearInterval(id);
  }, [emblaApi, paused, reduce, count]);

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative z-10 text-secondary-foreground", !imageSrc && "-mt-16", className)}>
      {imageSrc && (
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <MotionMedia
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            style={reduce ? undefined : { y: leadY }}
            className="absolute inset-x-0 top-0 h-[106%] w-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10 bg-secondary py-[var(--section-space)] [clip-path:polygon(4rem_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%,0_4rem)]">
        <div className="mx-auto w-[var(--container)]">
          <EraTitle text={title} script={script} rule className="max-w-[4.05em]" />

          <motion.div
            ref={revealRef}
            initial={reduce ? false : "hidden"}
            animate={reduce || (revealIn && revealReady) ? "show" : "hidden"}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="mt-[clamp(2.5rem,5vw,4rem)]"
          >
            <motion.div variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.9, ease: [0.75, 0, 0.25, 1] } } }}>
            <div ref={emblaRef} className="overflow-hidden">
              <ul className="flex">
                {items.map((item, i) => (
                  <li key={`${i}-${item.name}`} aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} className="min-w-0 shrink-0 grow-0 basis-full">
                    <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[1fr_minmax(0,22rem)_1fr] lg:items-end xl:grid-cols-[1fr_minmax(0,26rem)_1fr]">
                      {item.imageSrc && (
                        <div className="order-1 mx-auto flex aspect-[4/5] w-full max-w-[26rem] flex-col overflow-hidden rounded-[var(--radius-image)] lg:order-2">
                          <Media src={item.imageSrc} alt={item.imageAlt ?? ""} loading="lazy" decoding="async" className="min-h-0 w-full flex-1 object-cover" />
                        </div>
                      )}
                      <h3 className="order-2 text-center text-[length:var(--text-h1)] [overflow-wrap:anywhere] lg:order-4 lg:col-span-3">{item.name}</h3>
                      {item.specs && item.specs.length > 0 && (
                        <dl className="order-3 grid grid-cols-2 gap-x-[var(--gap)] gap-y-6 lg:order-1 lg:grid-cols-1 lg:justify-items-end lg:text-right">
                          {item.specs.map((spec, s) => (
                            <div key={s} className="flex flex-col gap-1.5">
                              <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">{spec.label}</dt>
                              <dd className="text-[length:var(--text-h3)] leading-none [font-family:var(--font-heading)]">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className="order-4 flex flex-col items-start gap-4 lg:order-3">
                        <div className="flex items-baseline gap-3">
                          <p className="text-[length:var(--text-h1)] leading-none [font-family:var(--font-heading)]">{item.price}</p>
                          {item.period && <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">{item.period}</p>}
                        </div>
                        {item.description && <p className="max-w-[22rem] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{item.description}</p>}
                        <div className="flex flex-wrap items-center gap-3">
                          {item.cta && (
                            <a href={item.cta.href} className="btn-secondary">
                              {item.cta.text}
                            </a>
                          )}
                          {item.whatsappUrl && (
                            <a
                              href={item.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-4 py-2.5 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] transition-colors duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                            >
                              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.165 8.165 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.78 2.39 1.54 1.54 2.39 3.59 2.39 5.78 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/>
                              </svg>
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </motion.div>

            {count > 1 && (
              <div className="mt-[clamp(2rem,4vw,3rem)] flex items-center justify-center gap-6">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>
                <div className="flex items-center gap-4">
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">{active + 1}</p>
                  <div aria-hidden="true" className="h-px w-16 bg-current" />
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">{count}</p>
                </div>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => emblaApi?.scrollNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFramedSlider;
