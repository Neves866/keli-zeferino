# AI_HANDOFF_MOBILE.md

## Objetivo
Terceira rodada de ajustes EXCLUSIVAMENTE mobile/responsividade (360/390/430/768). Desktop ≥1024px aprovado e preservado.

## Itens concluídos
- Espaçamento mobile global (~3rem por seção via `.section`) e tipografia (h1/h2/h3 com line-height menor).
- Botões com touch target confortável (`.btn` min-height 3rem).
- Header: altura 4.5rem (72px), brandRole oculto, hamburger 44x44 mínimo.
- Hero: conteúdo antes da foto, sem 100svh, foto aspect 4/5 max 420px, object-fit cover, caption oculta, H1 2.05–2.25rem, CTA full-width.
- EmotionalBreak: padding 2.75rem, quote responsivo.
- Philosophy: nowrap removido, itemTitle quebra linha, foto menos alta (4/5 max 420px).
- Stories: gap/padding compactados, line-height 1.75, ethicalNote mais próximo.
- AboutKeli: foto 4/5 max 420px, foto gestação 4/3 max 340px, sombras mais leves.
- OnlineCare: timeline editorial no mobile (number + title lado a lado).
- OnlineContact: card padding 1.4rem, sombra sutil, gaps reduzidos.
- FinalCTA: padding 3rem, CTA full-width.
- WhatsAppFloat: min 50x50, safe-area, sombra mais leve.
- Footer: gaps 1.5rem, rights mais próximos.
- Testimonials: width/height reais por imagem (971x821, 674x1600, 1075x1181, 1010x777).
- Testimonials: clicar no print abre lightbox ampliada (overlay escuro, object-fit contain, X 44px, Escape fecha, backdrop fecha, scroll bloqueado, role=dialog, aria-modal, safe-area).
- Testimonials: indicator 1/4, swipe hint "Deslize para ver mais", dots com área clicável maior (~44px via background-clip content-box + padding).

## Itens pendentes
Nenhum item de design pendente identificado. Build será validado em seguida.

## Arquivos alterados (working tree)
- app/globals.css
- components/AboutKeli.module.css
- components/EmotionalBreak.module.css
- components/FinalCTA.module.css
- components/Footer.module.css
- components/Header.module.css
- components/Hero.module.css
- components/OnlineCare.module.css
- components/OnlineContact.module.css
- components/Philosophy.module.css
- components/Stories.module.css
- components/Testimonials.tsx
- components/Testimonials.module.css (adicionados .controls, .swipeHint, .counter, .imageButton; .dot com touch target)
- components/WhatsAppFloat.module.css
- lib/content.ts
- components/TestimonialLightbox.tsx (novo)
- components/TestimonialLightbox.module.css (novo)

## Último resultado do npm run build
✅ Sucesso — Next.js 15.5.23, 6/6 páginas estáticas geradas, sem erros TypeScript.
