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
  imageWidth: number;
  imageHeight: number;
  imageFit?: "contain";
}

function StoryItem({ item }: { item: StoryItem }) {
  // Prints de conversa (proporção muito vertical) são exibidos por
  // completo, sem corte, dentro de um frame discreto.
  const contained = item.imageFit === "contain";

  return (
    <article className={styles.story}>
      <SectionReveal delay={60}>
        <div
          className={`${styles.storyImageWrap} ${
            contained ? styles.storyImageFrame : ""
          }`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={item.imageWidth}
            height={item.imageHeight}
            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 30vw"
            className={contained ? styles.storyImageContain : styles.storyImage}
          />
        </div>
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