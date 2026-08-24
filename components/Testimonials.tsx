"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const items = CONTENT.testimonials.items;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = useCallback(
    (index: number) => {
      const next = (index + items.length) % items.length;
      setCurrent(next);
      const track = trackRef.current;
      if (track) {
        track.scrollTo({
          left: next * track.clientWidth,
          behavior: "smooth",
        });
      }
    },
    [items.length]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    if (index !== current) setCurrent(index);
  }, [current]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollTo(current - 1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollTo(current + 1);
    }
  };

  return (
    <section id="depoimentos" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionReveal>
            <p className="eyebrow">{CONTENT.testimonials.eyebrow}</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className={styles.title}>{CONTENT.testimonials.title}</h2>
          </SectionReveal>
          <SectionReveal delay={180}>
            <p className={styles.supportText}>
              {CONTENT.testimonials.supportText}
            </p>
          </SectionReveal>
        </div>

        <SectionReveal delay={120}>
          <div
            className={styles.carousel}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de pacientes"
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              aria-label="Depoimento anterior"
              onClick={() => scrollTo(current - 1)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.viewport}>
              <div className={styles.track} ref={trackRef}>
                {items.map((item, i) => (
                  <figure
                    key={item.src}
                    className={styles.slide}
                    aria-hidden={i !== current}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={1100}
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 70vw, 640px"
                      className={styles.image}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </figure>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              aria-label="Próximo depoimento"
              onClick={() => scrollTo(current + 1)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </SectionReveal>

        <SectionReveal delay={160}>
          <div className={styles.dots} role="tablist" aria-label="Escolher depoimento">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                aria-label={`Ir para o depoimento ${i + 1}`}
                aria-selected={i === current}
                role="tab"
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className={styles.disclaimer}>{CONTENT.testimonials.disclaimer}</p>
        </SectionReveal>
      </div>
    </section>
  );
}