import Image from "next/image";
import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./Stories.module.css";

interface StoryItem {
  number: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

function StoryItem({
  item,
  index,
}: {
  item: StoryItem;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={`${styles.story} ${reversed ? styles.storyReversed : ""}`}
    >
      <SectionReveal className={styles.storyImageWrap} variant="fade">
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={1200}
          height={1600}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.storyImage}
        />
      </SectionReveal>

      <div className={styles.storyContent}>
        <SectionReveal delay={120}>
          <div className="editorial-line">
            <span>{item.number}</span>
            <span>História</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <h3 className={styles.storyTitle}>{item.title}</h3>
        </SectionReveal>

        <SectionReveal delay={280}>
          <p className={styles.storyText}>{item.text}</p>
        </SectionReveal>
      </div>
    </article>
  );
}

export default function Stories() {
  return (
    <section id="historias" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionReveal>
            <p className="eyebrow">{CONTENT.stories.eyebrow}</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className={styles.title}>{CONTENT.stories.title}</h2>
          </SectionReveal>
        </div>

        <div className={styles.stories}>
          {CONTENT.stories.items.map((item, i) => (
            <StoryItem key={item.number} item={item} index={i} />
          ))}
        </div>

        <SectionReveal delay={100}>
          <p className={styles.ethicalNote}>{CONTENT.stories.ethicalNote}</p>
        </SectionReveal>
      </div>
    </section>
  );
}