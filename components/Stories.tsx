import { CONTENT } from "@/lib/content";
import SectionReveal from "./SectionReveal";
import styles from "./Stories.module.css";

interface StoryItem {
  number: string;
  title: string;
  text: string;
}

function StoryItem({ item }: { item: StoryItem }) {
  return (
    <article className={styles.story}>
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
          <SectionReveal delay={180}>
            <p className={styles.introduction}>{CONTENT.stories.introduction}</p>
          </SectionReveal>
        </div>

        <div className={styles.stories}>
          {CONTENT.stories.items.map((item) => (
            <StoryItem key={item.number} item={item} />
          ))}
        </div>

        <SectionReveal delay={100}>
          <p className={styles.ethicalNote}>{CONTENT.stories.ethicalNote}</p>
        </SectionReveal>
      </div>
    </section>
  );
}