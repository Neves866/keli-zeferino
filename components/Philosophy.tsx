import Image from "next/image";
import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section id="atendimento" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionReveal>
            <p className="eyebrow">{CONTENT.philosophy.eyebrow}</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className={styles.title}>{CONTENT.philosophy.title}</h2>
          </SectionReveal>
        </div>

        <div className={styles.grid}>
          <div className={styles.list}>
            {CONTENT.philosophy.items.map((item, i) => (
              <SectionReveal key={item.number} delay={i * 120}>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>{item.number}</span>
                    <span className={styles.itemLine} aria-hidden="true" />
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal
            variant="fade"
            delay={200}
            className={styles.imageWrap}
          >
            <Image
              src="/images/keli-consultorio.jpg"
              alt="Keli Zeferino sentada à mesa do consultório, em um ambiente profissional e acolhedor"
              width={1000}
              height={1500}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={styles.image}
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}