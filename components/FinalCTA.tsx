import { CONTENT } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import SectionReveal from "./SectionReveal";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container container-narrow ${styles.inner}`}>
        <SectionReveal>
          <h2 className={styles.title}>{CONTENT.finalCta.title}</h2>
        </SectionReveal>

        <SectionReveal delay={120}>
          <p className={styles.text}>{CONTENT.finalCta.text}</p>
        </SectionReveal>

        <SectionReveal delay={220}>
          <div className={styles.actions}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {CONTENT.finalCta.cta}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}