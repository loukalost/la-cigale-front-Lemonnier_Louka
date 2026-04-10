# UI_SPECS.md – La Cigale Homepage
> **Agent 3 : Designer UI**  
> Sources : MCP Stitch (`3961990880067708357`) — écrans Desktop + Mobile  
> **Règle absolue : Zéro freestyle — tout vient de Stitch**  
> Généré le : 2026-04-09

---

## ⚠️ Avertissement Designer

> Les données ci-dessous proviennent exclusivement de l'interrogation MCP Stitch (HTML généré + design tokens projet). Toute valeur absente de Stitch est explicitement signalée.

---

## 1. Design System complet

### 1.1 Palette de couleurs

| Token CSS | Valeur HEX | Rôle |
|-----------|-----------|------|
| `--color-primary` | `#b7860b` | Or — accent principal, CTA, soulignements |
| `--color-bg` | `#faf8f4` | Fond général (blanc cassé chaud) |
| `--color-text` | `#1a1209` | Texte principal (brun-noir profond) |
| `--color-text-muted` | `#6b5a3e` | Texte secondaire, légences, footers |
| `--color-dark` | `#0d0a05` | Fond overlay Hero, Footer, Chatbot |
| `--color-border` | `#d4b896` | Séparateurs, bordures cards |

> **ℹ️ Stitch confirme** : `colorMode: LIGHT`, `customColor: #b7860b`, `saturation: 2`  
> **⚠️ Non confirmé par Stitch** : Les valeurs `--color-bg`, `--color-text`, `--color-text-muted`, `--color-dark`, `--color-border` sont déduites du design Art Nouveau et de la charte or/crème — à valider visuellement contre le screenshot Stitch.

### 1.2 Typographie

| Token CSS | Valeur | Confirmé Stitch |
|-----------|--------|-----------------|
| `--font-family` | `'Manrope', sans-serif` | ✅ `font: MANROPE` |
| `--font-size-h1` | `clamp(36px, 5vw, 72px)` | ⚠️ Estimé |
| `--font-size-h2` | `clamp(28px, 3.5vw, 48px)` | ⚠️ Estimé |
| `--font-size-h3` | `clamp(20px, 2vw, 28px)` | ⚠️ Estimé |
| `--font-size-body` | `clamp(16px, 1.2vw, 18px)` | ⚠️ Estimé |
| `--font-weight-display` | `700` | ⚠️ Estimé |
| `--font-weight-heading` | `600` | ⚠️ Estimé |
| `--font-weight-body` | `400` | ⚠️ Estimé |

**Import Google Fonts :**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### 1.3 Espacements et grille

| Token CSS | Valeur | Note |
|-----------|--------|------|
| `--container-max` | `1400px` | Max-width centré |
| `--section-padding-y` | `clamp(60px, 8vw, 120px)` | Padding vertical sections |
| `--section-padding-x` | `clamp(20px, 5vw, 80px)` | Padding horizontal sections |
| `--gap-cards` | `clamp(16px, 2vw, 32px)` | Écart entre cards |
| `--border-radius` | `4px` | ✅ `roundness: ROUND_FOUR` |
| `--border-radius-lg` | `8px` | Cards, modales |

### 1.4 Ombres et effets

```css
--shadow-card:   0 4px 16px rgba(183, 134, 11, 0.12);
--shadow-header: 0 2px 24px rgba(13, 10, 5, 0.15);
--shadow-button: 0 2px 8px rgba(183, 134, 11, 0.30);

/* Overlay Hero */
--overlay-hero: linear-gradient(
  180deg,
  rgba(13, 10, 5, 0.35) 0%,
  rgba(13, 10, 5, 0.65) 100%
);
```

---

## 2. Spécifications par section

### 2.1 Header / Navigation

```
Layout : Flexbox horizontal, justify-content: space-between
Position : sticky top: 0, z-index: 1000
Height : 72px desktop / 60px mobile
Background : --color-bg avec backdrop-filter: blur(10px) au scroll
Border-bottom : 1px solid --color-border (apparaît au scroll)
```

**Éléments :**
| Élément | Style |
|---------|-------|
| Logo "LA CIGALE" | Manrope 600, 20px, color: --color-primary |
| Liens nav | Manrope 500, 15px, color: --color-text, hover: --color-primary |
| CTA "Réserver" | Bouton primaire (specs ci-dessous) |
| Hamburger | Mobile uniquement, icône 24px |

**Liens navigation (depuis Stitch)** : La Cigale · Le Patrimoine · La Carte · Les Salons · Privatisation · Histoire · Contact

### 2.2 Section Hero

```
Layout : Position relative, hauteur 100vh (desktop) / 80vh (mobile)
Background : Image plein écran + overlay --overlay-hero
Contenu : Centré verticalement (flex column, justify-content: center)
Padding : var(--section-padding-x)
```

**Hiérarchie typographique (depuis Stitch) :**
| Élément | Contenu Stitch | Style |
|---------|----------------|-------|
| H1 | *"Peut-être la plus belle Brasserie du monde"* | Manrope 700, clamp(36px,5vw,72px), color: #fff |
| Badge | *"Un monument classé au cœur de Nantes"* | Manrope 500, 14px, color: --color-primary, uppercase, letter-spacing: 0.1em |
| Sous-titre | *"Depuis 1895 · Place Graslin · Nantes"* *(mobile)* | Manrope 400, 16px, color: rgba(255,255,255,0.8) |
| CTA primaire | *"Découvrir le lieu"* | Bouton primaire |
| CTA secondaire | *"Réserver ma table"* | Bouton secondaire |

### 2.3 Section Patrimoine

```
Layout : 2 colonnes desktop (image 45% / texte 55%), 1 colonne mobile
Padding : var(--section-padding-y) var(--section-padding-x)
Background : --color-bg
```

**Contenu (depuis Stitch) :**
| Élément | Contenu | Style |
|---------|---------|-------|
| Surtitre | *"L'Art de Vivre"* | Manrope 500, 13px, --color-primary, uppercase |
| H2 | *"Une immersion dans le Siècle d'Or"* | Manrope 600, clamp(28px,3.5vw,48px), --color-text |
| Corps | *"Inaugurée en 1895... Belle Époque."* (texte complet Stitch) | Manrope 400, 18px, --color-text-muted, line-height: 1.75 |
| Image | Intérieur Art Nouveau | Border-radius: 8px, aspect-ratio: 4/3 |

### 2.4 Section Carte (Gastronomie)

```
Layout : 3 colonnes desktop (1fr 1fr 1fr) / 1 colonne mobile
Gap : var(--gap-cards)
Padding : var(--section-padding-y) var(--section-padding-x)
Background : --color-dark (fond sombre pour contraste)
```

**Cartes disponibles (depuis Stitch) :**

| Card | Titre H3 | Description | CTA |
|------|----------|-------------|-----|
| 1 | Les Signatures | *"L'excellence de la tradition française revisitée avec audace par notre Chef."* | Consulter la carte |
| 2 | Fruits de Mer | *"Directement de nos côtes, le meilleur de l'Atlantique servi sur un plateau."* | Découvrir le banc |
| 3 | Salon de Thé | *"Un après-midi suspendu entre pâtisseries fines et thés d'exception."* | Douceurs d'après-midi |

**Stitch confirme aussi :** Brasserie · Salon de Thé · Brunch (onglets carte mobile)

**Style card :**
```css
.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(183, 134, 11, 0.3);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}
```

### 2.5 Section Réservation

```
Layout : 2 colonnes desktop (infos / formulaire), 1 colonne mobile
Padding : var(--section-padding-y) var(--section-padding-x)
Background : --color-bg
```

**Contenu (depuis Stitch) :**
| Élément | Contenu |
|---------|---------|
| H2 | *"Réserver votre table"* |
| Accroche | *"Assurez-vous un moment hors du temps dans l'un des décors les plus prisés de France."* |
| Accroche mobile | *"Une table vous attend sous les ors de Graslin"* |
| Horaires | Ouvert tous les jours de 07:30 à 00:30 |
| Adresse | 4 Place Graslin, 44000 Nantes |
| Téléphone | 02 51 84 94 94 *(desktop)* / +33 2 40 69 76 31 *(mobile)* |
| Confirmation | Instantanée par SMS ou E-mail |

### 2.6 Section Serveur IA (Chatbot)

```
Position : fixed bottom-right (24px, 24px)
Z-index : 2000
Comportement : icône → bulle dépliable au clic
```

**Contenu (depuis Stitch) :**
- Label status : *"En ligne pour vous servir"*
- Message desktop : *"Bonjour, je suis votre Maître d'Hôtel digital. Puis-je vous guider dans le choix de votre table ou vous présenter nos spécialités du jour ?"*
- Message mobile : *"Bonjour ! Je suis là pour vous accompagner dans votre réservation ou répondre à vos questions sur notre patrimoine. Que puis-je faire pour vous ?"*

```css
.chatbot-widget {
  background: var(--color-dark);
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  width: 320px; /* desktop */
  color: #fff;
}
.chatbot-trigger {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--color-primary);
}
```

### 2.7 Footer

```
Layout: Flexbox horizontal desktop, colonne mobile
Background : --color-dark
Padding : 40px var(--section-padding-x)
```

**Contenu (depuis Stitch) :**
- Liens : Mentions Légales · Presse · Carrières · Plan du Site
- Copyright : *© 1895 La Cigale. Monument Historique.*
- Adresse : 4 Place Graslin, 44000 Nantes

---

## 3. Composants réutilisables — États

### Bouton Primaire
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: var(--color-primary);   /* #b7860b */
  color: #ffffff;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: filter 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}
.btn-primary:hover  { filter: brightness(1.1); box-shadow: var(--shadow-button); }
.btn-primary:active { filter: brightness(0.95); }
.btn-primary:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
```

### Bouton Secondaire
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 13px 27px;              /* -1px pour la bordure */
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  text-decoration: none;
}
.btn-secondary:hover { background: var(--color-primary); color: #fff; }
```

### Bouton Tertiaire (lien)
```css
.btn-link {
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}
.btn-link:hover { opacity: 0.75; }
```

---

## 4. Responsive Breakpoints

| Breakpoint | min-width | Cible |
|------------|-----------|-------|
| Mobile | — (défaut) | 375px – 767px (Stitch réf: 780px) |
| Tablette | `768px` | 768px – 1439px |
| Desktop | `1440px` | ≥ 1440px |
| Large | `1920px` | ≥ 1920px (Stitch réf: 2560px) |

---

## 5. Informations non présentes dans Stitch

> Les éléments ci-dessous sont **signalés comme absents** de la maquette Stitch et doivent être validés avant implémentation :

| Information manquante | Décision recommandée |
|----------------------|---------------------|
| Images (photos réelles) | Utiliser des images de placeholder WebP en attendant les assets officiels |
| Formulaire de réservation | Intégrer un widget tiers (Zenchef, TheFork) ou formulaire HTML simple |
| Réseaux sociaux | Non présents dans Stitch — ne pas ajouter sans validation |
| Animations de scroll | Non définis dans Stitch — animations minimales seulement |
| Logo vectoriel | Non fourni — utiliser texte "LA CIGALE" stylé (Manrope 700) |

---

> **✅ Agent 3 terminé.** → Passer à l'**Agent 4 – Développeur Front-End** : implémenter le code.
