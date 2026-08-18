import { CONTENT } from "@/lib/content";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import CurrentYear from "./CurrentYear";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{CONTENT.brand.name}</p>
          <p className={styles.tagline}>{CONTENT.footer.tagline}</p>
        </div>

        <div className={styles.meta}>
          <p>
            {CONTENT.contact.addressName} · {CONTENT.contact.addressCity}
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <p className={styles.rights}>
          © <CurrentYear /> {CONTENT.brand.name}. {CONTENT.footer.rights}
        </p>
      </div>
    </footer>
  );
}