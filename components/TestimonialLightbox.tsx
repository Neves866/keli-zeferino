"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./TestimonialLightbox.module.css";

interface TestimonialLightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClose: () => void;
}

export default function TestimonialLightbox({
  src,
  alt,
  width,
  height,
  onClose,
}: TestimonialLightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada do depoimento"
    >
      <button
        ref={closeBtnRef}
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Fechar visualização"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className={styles.imageWrap}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="100vw"
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}
