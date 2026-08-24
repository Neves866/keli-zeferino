import Image from "next/image";
import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./AboutKeli.module.css";

export default function AboutKeli() {
  return (
    <section id="sobre" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <SectionReveal className={styles.imageWrap} variant="fade">
            <Image
              src="/images/keli-sobre.jpg"
              alt="Keli Zeferino, nutricionista especialista em fertilidade, sorrindo em um ambiente acolhedor"
              width={1000}
              height={1500}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={styles.image}
            />
          </SectionReveal>

          <div className={styles.content}>
            <SectionReveal>
              <p className="eyebrow">{CONTENT.about.eyebrow}</p>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h2 className={styles.title}>{CONTENT.about.title}</h2>
            </SectionReveal>

            {CONTENT.about.paragraphs.map((paragraph, i) => (
              <SectionReveal key={i} delay={150 + i * 40}>
                <p className={styles.text}>{paragraph}</p>
              </SectionReveal>
            ))}

            <SectionReveal delay={280}>
              <div className={styles.signature}>
                <span className={styles.signatureName}>
                  {CONTENT.brand.name}
                </span>
                <span className={styles.signatureRole}>
                  {CONTENT.brand.role}
                </span>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Divisor visual — fotografia da própria Keli em sua gestação.
            Contexto pessoal, nunca associada a resultados de pacientes. */}
        <SectionReveal
          variant="fade"
          delay={100}
          className={styles.personalDivider}
        >
          <figure className={styles.personalFigure}>
            <Image
              src="/images/keli-gestacao-divisor.jpg"
              alt="Keli Zeferino durante sua própria gestação, em um momento pessoal e delicado"
              width={1000}
              height={714}
              sizes="(max-width: 1024px) 100vw, 80vw"
              className={styles.personalImage}
            />
            <figcaption className={styles.personalCaption}>
              {CONTENT.about.personalCaption}
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}