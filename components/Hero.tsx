import Image from "next/image";
import { CONTENT } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/keli-hero.jpg"
            alt="Keli Zeferino, nutricionista especialista em fertilidade, sorrindo em um ambiente acolhedor com elementos naturais"
            width={909}
            height={1363}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
            className={styles.heroImage}
          />
          <span className={styles.imageCaption} aria-hidden="true">
            {CONTENT.hero.imageCaption}
          </span>
        </div>

        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow}`}>{CONTENT.hero.eyebrow}</p>

          <h1 className={styles.title}>
            {CONTENT.hero.titlePrefix}
            <em className="font-italic">{CONTENT.hero.titleHighlight}</em>
            {CONTENT.hero.titleSuffix}
          </h1>

          <p className={styles.text}>{CONTENT.hero.text}</p>

          <p className={styles.highlights}>{CONTENT.hero.highlights}</p>

          <div className={styles.actions}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {CONTENT.hero.cta}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>{CONTENT.hero.scrollHint}</span>
      </div>
    </section>
  );
}