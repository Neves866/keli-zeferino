import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./EmotionalBreak.module.css";

export default function EmotionalBreak() {
  return (
    <section className={`section ${styles.section}`} aria-label="Acolhimento">
      <div className={`container container-narrow ${styles.inner}`}>
        <SectionReveal>
          <div className={styles.ornament} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className={styles.quote}>{CONTENT.emotionalBreak.phrase}</p>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className={styles.complement}>{CONTENT.emotionalBreak.complement}</p>
        </SectionReveal>
      </div>
    </section>
  );
}