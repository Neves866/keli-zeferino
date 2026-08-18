"use client";

import { useEffect, useState } from "react";
import { CONTENT } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label="Keli Zeferino — Início">
          <span className={styles.brandName}>{CONTENT.brand.name}</span>
          <span className={styles.brandRole}>{CONTENT.brand.role}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul>
            {CONTENT.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.headerCta}`}
        >
          Agendar consulta
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav aria-label="Navegação mobile">
          <ul>
            {CONTENT.nav.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: `${i * 40}ms` }}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}