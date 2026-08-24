import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./OnlineCare.module.css";

export default function OnlineCare() {
  return (
    <section id="atendimento-online" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionReveal>
            <p className="eyebrow">{CONTENT.onlineCare.eyebrow}</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className={styles.title}>{CONTENT.onlineCare.title}</h2>
          </SectionReveal>
          <SectionReveal delay={180}>
            <p className={styles.text}>{CONTENT.onlineCare.text}</p>
          </SectionReveal>
        </div>

        <div className={styles.grid}>
          {CONTENT.onlineCare.steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 120}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}