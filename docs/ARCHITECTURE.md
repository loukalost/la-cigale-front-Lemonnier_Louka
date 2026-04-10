# ARCHITECTURE.md – La Cigale Homepage
> **Agent 2 : Architecte Technique**  
> Input : `PROJECT_PLAN.md` + `DESIGN.md`  
> Généré le : 2026-04-09

---

## 1. Choix de stack

### Framework : HTML / CSS / JavaScript vanilla (+ Vite)

**Justification** :
- La homepage est une **page statique unique** — aucun besoin de routing complexe
- React/Next.js serait over-engineered pour un seul écran sans API dynamique (sauf le chatbot IA)
- **Vite** offre un DX moderne (hot reload, bundling rapide) sans la lourdeur d'un meta-framework
- Zéro dépendance non justifiée → performance Lighthouse > 90 facilement atteignable
- Le chatbot IA est isolé dans un composant web natif (web component ou vanilla JS class)

> Si une version React est souhaitée ultérieurement, Vite facilite la migration.

### Styling : CSS Custom Properties (variables natives)

**Justification** :
- Les design tokens Stitch (`--color-primary`, `--font-size-h1`, etc.) s'expriment naturellement en CSS vars
- Tailwind ajouterait un overhead de build et une abstraction inutile pour une page unique
- CSS Modules sont adaptés à React — hors scope ici
- Approche **mobile-first** avec `min-width` media queries

### Outils

| Outil | Version | Rôle |
|-------|---------|------|
| **Vite** | `^5.x` | Bundler, dev server, build optimisé |
| **PostCSS** | via Vite | Autoprefixer pour compatibilité CSS |
| **ESLint** | `^9.x` | Qualité du code JS |
| **Google Fonts** | CDN | Import Manrope |

### TypeScript : Non
- JS vanilla suffit pour la complexité de ce projet
- Réduit la friction et le temps de mise en œuvre

---

## 2. Arborescence de fichiers

```
c:\DEV\mds-2025-26\no-code\la-cigale\
│
├── index.html                    # Point d'entrée unique
│
├── src/
│   ├── main.js                   # Entry point JavaScript
│   │
│   ├── styles/
│   │   ├── base.css              # Reset, variables CSS (design tokens)
│   │   ├── typography.css        # Styles typographiques globaux
│   │   ├── components.css        # Styles composants réutilisables
│   │   └── animations.css        # Micro-animations, transitions
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── header.js         # Logique (sticky, hamburger)
│   │   │   └── header.css        # Styles navigation
│   │   ├── Hero/
│   │   │   ├── hero.js           # Parallax léger si souhaité
│   │   │   └── hero.css
│   │   ├── SectionPatrimoine/
│   │   │   └── patrimoine.css
│   │   ├── SectionCarte/
│   │   │   ├── carte.js          # Logique tabs si nécessaire
│   │   │   └── carte.css
│   │   ├── SectionReservation/
│   │   │   ├── reservation.js    # Logique formulaire
│   │   │   └── reservation.css
│   │   ├── SectionServeurIA/
│   │   │   ├── chatbot.js        # Interface chatbot (stub)
│   │   │   └── chatbot.css
│   │   └── Footer/
│   │       └── footer.css
│   │
│   └── utils/
│       ├── smooth-scroll.js      # Navigation ancres fluide
│       └── lazy-load.js          # Lazy loading images
│
├── assets/
│   ├── images/
│   │   ├── hero-bg.webp          # Image fond Hero (plein écran)
│   │   ├── patrimoine.webp       # Intérieur Art Nouveau
│   │   ├── signatures.webp       # Plats signatures
│   │   ├── fruits-de-mer.webp    # Plateau fruits de mer
│   │   └── salon-the.webp        # Salon de thé
│   └── icons/
│       └── logo.svg
│
├── DESIGN.md                     # Source de vérité design (Stitch)
├── PROJECT_PLAN.md               # Plan Chef de Projet
├── ARCHITECTURE.md               # Ce document
├── UI_SPECS.md                   # Specs UI Designer (à venir)
├── README.md                     # Documentation (à venir)
│
├── package.json
├── vite.config.js
└── .eslintrc.json
```

---

## 3. Composants alignés sur sections Stitch

### Hiérarchie des composants

```
Page (index.html)
│
├── <Header>                      ← Navigation sticky
│   ├── Logo/Brand
│   ├── NavLinks (Le Patrimoine, La Carte, Les Salons, ...)
│   ├── CTAButton "Réserver"
│   └── HamburgerMenu (mobile only)
│
├── <SectionHero>
│   ├── HeroImage (background)
│   ├── HeroTitle (H1)
│   ├── HeroBadge
│   └── HeroCTAs (primary + secondary)
│
├── <SectionPatrimoine>
│   ├── SectionTitle (H2)
│   ├── PatrimoineImage
│   └── PatrimoineText
│
├── <SectionCarte>
│   ├── SectionTitle (H2)
│   └── CardGrid (3x)
│       └── Card
│           ├── CardImage
│           ├── CardTitle (H3)
│           ├── CardDescription
│           └── CardCTA
│
├── <SectionReservation>
│   ├── SectionTitle (H2)
│   ├── ReservationIntro
│   ├── InfosPratiques (horaires, adresse, tél)
│   └── ReservationForm (ou widget tiers)
│
├── <SectionServeurIA>          ← Chatbot flottant
│   ├── ChatbotTrigger (icône)
│   └── ChatbotWindow
│       ├── ChatbotMessage
│       └── ChatbotInput
│
└── <Footer>
    ├── FooterLinks
    └── FooterCopyright
```

### Composants réutilisables

| Composant | Description | Usage |
|-----------|-------------|-------|
| `CTAButton` | Bouton doré (variante primaire/secondaire) | Header, Hero, Cards, Footer |
| `Card` | Carte gastronomie (image + titre + texte + CTA) | Section Carte (×3) |
| `SectionWrapper` | Conteneur section avec padding standard | Toutes les sections |
| `SectionTitle` | H2 avec style doré uniforme | Patrimoine, Carte, Réservation |

---

## 4. Stratégie responsive

### Breakpoints (mobile-first)

```css
/* Mobile first = styles par défaut pour mobile */

/* Tablette */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1440px) { ... }

/* Large desktop (ref maquette Stitch : 2560px) */
@media (min-width: 1920px) { ... }
```

### Comportements adaptatifs par composant

| Composant | Mobile (< 768px) | Tablette (768-1439px) | Desktop (≥ 1440px) |
|-----------|-----------------|----------------------|---------------------|
| **Header** | Hamburger menu | Semi-compacte | Barre complète sticky |
| **Hero** | H1 36px, padding réduit | H1 52px | H1 72px, plein écran |
| **Patrimoine** | 1 colonne empilée | 2 colonnes 40/60 | 2 colonnes 50/50 |
| **Carte (Cards)** | 1 colonne | 2 colonnes | 3 colonnes |
| **Réservation** | 1 colonne | 2 colonnes | 2 colonnes max-width |
| **Chatbot IA** | Icône compacte | Icône + label | Bulle complète |
| **Footer** | Liens empilés | 2 colonnes | Horizontal |

### Gestion des images responsives
```html
<img
  src="assets/images/hero-bg.webp"
  srcset="assets/images/hero-bg-mobile.webp 780w,
          assets/images/hero-bg-desktop.webp 2560w"
  sizes="100vw"
  loading="lazy"
  alt="Intérieur de la Brasserie La Cigale, Nantes"
/>
```

---

## 5. Conventions de code

### Naming

```
CSS classes     → BEM : .section-carte__card--featured
JS functions    → camelCase : initStickyHeader()
JS variables    → camelCase : const heroEl
Fichiers        → kebab-case : smooth-scroll.js
IDs HTML        → kebab-case : id="section-reservation"
```

### Structure d'un composant JS

```javascript
// components/Header/header.js

/**
 * Header – Navigation sticky avec hamburger mobile
 * Référence Stitch : Section Navigation (home_desktop)
 */

const header = {
  el: document.querySelector('.header'),

  init() {
    this.bindStickyScroll();
    this.bindHamburger();
  },

  bindStickyScroll() {
    window.addEventListener('scroll', () => {
      this.el.classList.toggle('header--scrolled', window.scrollY > 80);
    });
  },

  bindHamburger() {
    const toggle = this.el.querySelector('.header__hamburger');
    toggle?.addEventListener('click', () => {
      this.el.classList.toggle('header--open');
    });
  },
};

export default header;
```

### Gestion des assets (images)
- Format : **WebP obligatoire** (fallback PNG via `<picture>`)
- Nommage : `{section}-{description}.webp` (ex: `hero-interieur.webp`)
- Lazy loading natif : `loading="lazy"` sur toutes les images hors Hero
- Alt text : obligatoire, descriptif, en français

### Variables CSS — Organisation

```css
/* src/styles/base.css */
:root {
  /* Couleurs */
  --color-primary:    #b7860b;
  --color-bg:         #faf8f4;
  --color-text:       #1a1209;
  --color-text-muted: #6b5a3e;
  --color-dark:       #0d0a05;

  /* Typo */
  --font-family:     'Manrope', sans-serif;
  --font-size-h1:    clamp(36px, 5vw, 72px);
  --font-size-h2:    clamp(28px, 3.5vw, 48px);
  --font-size-h3:    clamp(20px, 2vw, 28px);
  --font-size-body:  clamp(16px, 1.2vw, 18px);

  /* Espacements */
  --border-radius:      4px;
  --section-padding-y:  clamp(60px, 8vw, 120px);
  --section-padding-x:  clamp(20px, 5vw, 80px);
  --container-max:      1400px;
}
```

---

> **✅ Agent 2 terminé.** → Passer à l'**Agent 3 – Designer UI** : générer `UI_SPECS.md` en interrogeant MCP Stitch.
