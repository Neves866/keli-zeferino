import { CONTENT } from "@/lib/content";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import SectionReveal from "./SectionReveal";
import styles from "./LocationContact.module.css";

export default function LocationContact() {
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
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Endereço</span>
                <p className={styles.infoValue}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Antonio+de+Paula+Nunes,+1685+-+Cacoal+-+RO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    {CONTENT.contact.addressName}
                  </a>
                  <br />
                  {CONTENT.contact.addressCity}
                </p>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Atendimento</span>
                <p className={styles.infoValue}>{CONTENT.contact.hours}</p>
              </div>

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
            </div>

            <p className={styles.reference}>{CONTENT.contact.reference}</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}