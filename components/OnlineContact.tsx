import { CONTENT } from "@/lib/content";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import SectionReveal from "./SectionReveal";
import styles from "./OnlineContact.module.css";

export default function OnlineContact() {
  return (
    <section id="contato" className={`section ${styles.section}`}>
      <div className={`container container-narrow ${styles.inner}`}>
        <SectionReveal>
          <p className="eyebrow">{CONTENT.contact.label}</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className={styles.card}>
            <div className={styles.brandBlock}>
              <h2 className={styles.name}>{CONTENT.brand.name}</h2>
              <p className={styles.role}>{CONTENT.brand.role}</p>
              <p className={styles.location}>{CONTENT.contact.location}</p>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>WhatsApp</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Atendimento</span>
                <p className={styles.infoValue}>{CONTENT.contact.location}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}