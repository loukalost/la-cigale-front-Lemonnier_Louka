# DESIGN.md – La Cigale Homepage
> **Source de vérité unique : Stitch MCP**  
> Projet : `La Cigale – Homepage` · ID : `3961990880067708357`  
> Écran ref Desktop : `Version A - Patrimoniale (Desktop)` · `2c9e74253bd441459c206120f58528eb`  
> Écran ref Mobile : `Version A - Patrimoniale (Mobile) - V2` · `ca636403f4904954a2cf24325944ef32`  
> Généré le : 2026-04-09

---

## 🎨 Palette de couleurs

| Nom | HEX | Usage |
|-----|-----|-------|
| **Or / Primary** | `#b7860b` | Accent principal, CTA, soulignements, icônes |
| **Fond général** | `#FFFFFF` / crème | Background light mode |
| **Texte principal** | `#1a1209` | Corps de texte, titres (brun profond) |
| **Texte secondaire** | `#6b5a3e` | Sous-titres, légendes |
| **Fond sombre** | `#0d0a05` | Sections contrastées (footer, hero overlay) |

> **Règle** : Aucune couleur en dehors de cette palette ne doit être introduite sans validation maquette Stitch.

---

## ✍️ Typographie

### Famille principale
| Propriété | Valeur |
|-----------|--------|
| **Font family** | `Manrope` (Google Fonts) |
| **Import** | `@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap')` |

### Échelle typographique

| Rôle | Balise | Taille desktop | Taille mobile | Graisse |
|------|--------|----------------|---------------|---------|
| Titre Hero (H1) | `h1` | `72px` | `36px` | `700` |
| Titre section (H2) | `h2` | `48px` | `28px` | `600` |
| Sous-section (H3) | `h3` | `28px` | `20px` | `500` |
| Corps de texte | `p` | `18px` | `16px` | `400` |
| Badge / label | `span` | `14px` | `13px` | `500` |
| Navigation | `nav a` | `16px` | `15px` | `500` |
| CTA bouton | `button/a` | `16px` | `16px` | `600` |

### Design tokens CSS

```css
:root {
  /* Couleurs */
  --color-primary:    #b7860b;
  --color-bg:         #faf8f4;
  --color-text:       #1a1209;
  --color-text-muted: #6b5a3e;
  --color-dark:       #0d0a05;

  /* Typographie */
  --font-family: 'Manrope', sans-serif;
  --font-size-h1: clamp(36px, 5vw, 72px);
  --font-size-h2: clamp(28px, 3.5vw, 48px);
  --font-size-h3: clamp(20px, 2vw, 28px);
  --font-size-body: clamp(16px, 1.2vw, 18px);

  /* Espacement */
  --border-radius: 4px;
  --section-padding: clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px);

  /* Saturation (appliquée via filter si besoin) */
  --saturation: 2;
}
```

---

## 🧩 Composants identifiés

### 1. Navigation (Header)
- Logo texte "La Cigale" à gauche
- Liens : Le Patrimoine · La Carte · Les Salons · Privatisation · Histoire · Contact
- CTA sticky "Réserver" (bouton doré `#b7860b`) à droite
- Comportement : fixe au scroll (sticky)

### 2. Bouton CTA
```
Variante principale : fond #b7860b / texte blanc / border-radius: 4px
Variante secondaire : transparent / bordure #b7860b / texte #b7860b
Hover : légère luminosité +10%
```

### 3. Card Gastronomie
- Image de couverture en haut
- Titre H3 + description + lien CTA
- 3 cards en grille (1/3 chacune sur desktop, pleine largeur sur mobile)

### 4. Badge / Bandeau patrimoine
- Texte en italique, petite taille
- Fond semi-transparent ou trait doré

### 5. Section Réservation — Infos pratiques
- Horaires, adresse, téléphone en bloc structuré
- Formulaire ou composant de réservation tiers

### 6. Chatbot Maître d'Hôtel IA
- Bulle flottante (coin bas-droit)
- Message d'accroche : *"Bonjour, je suis votre Maître d'Hôtel digital..."*
- Style : fond sombre `#0d0a05`, texte blanc, accent doré

---

## 📐 Structure des sections

```
┌─────────────────────────────────────────────┐
│  HEADER  — Navigation sticky                │
├─────────────────────────────────────────────┤
│  HERO    — H1 + Badge + CTA                 │
│           (image de fond plein écran)       │
├─────────────────────────────────────────────┤
│  PATRIMOINE — H2 + texte historique         │
│              (image gauche, texte droite)   │
├─────────────────────────────────────────────┤
│  GASTRONOMIE — H2 + 3 cards :               │
│    Les Signatures | Fruits de Mer | Thé     │
├─────────────────────────────────────────────┤
│  RÉSERVATION — H2 + infos + formulaire      │
├─────────────────────────────────────────────┤
│  FOOTER  — Liens + Copyright 1895           │
└─────────────────────────────────────────────┘
       [💬 Chatbot flottant bas-droite]
```

---

## 📱 Guidelines Responsive

| Breakpoint | Largeur | Comportement |
|------------|---------|--------------|
| **Mobile** | `< 768px` (réf. 780px Stitch) | 1 colonne, navigation en hamburger |
| **Tablet** | `768px – 1279px` | 2 colonnes, certaines sections adaptées |
| **Desktop** | `≥ 1280px` (réf. 2560px Stitch) | Layout pleine largeur avec max-width container |

### Règles spécifiques
- `max-width: 1400px; margin: 0 auto;` pour le container principal
- Navigation collapse en hamburger sous 768px
- Les 3 cards gastronomie passent en 1 colonne sur mobile
- La section Patrimoine (image + texte) passe en colonne unique sur mobile
- Chatbot IA : toujours visible, coin bas-droit, réduit à une icône sur mobile

---

## 📋 Contenus officiels (extraits Stitch)

### Navigation
La Cigale · Le Patrimoine · La Carte · Les Salons · Privatisation · Histoire · Contact

### Hero
**H1 :** *"Peut-être la plus belle Brasserie du monde"*  
**Badge :** *"Un monument classé au cœur de Nantes"*  
**CTA :** *"Découvrir le lieu"*

### Patrimoine
**H2 :** *"Une immersion dans le Siècle d'Or"*  
**Texte :** *"Inaugurée en 1895, La Cigale est le chef-d'œuvre de l'architecte-céramiste Émile Libaudière. Ses mosaïques chatoyantes, ses sculptures de bois sombre et ses miroirs aux reflets d'or transportent nos hôtes dans l'effervescence artistique de la Belle Époque."*

### Gastronomie
**H2 :** *"La Gastronomie en Scène"*

| Card | Titre | Texte | CTA |
|------|-------|-------|-----|
| 1 | Les Signatures | *"L'excellence de la tradition française revisitée avec audace par notre Chef."* | Consulter la carte |
| 2 | Fruits de Mer | *"Directement de nos côtes, le meilleur de l'Atlantique servi sur un plateau."* | Découvrir le banc |
| 3 | Salon de Thé | *"Un après-midi suspendu entre pâtisseries fines et thés d'exception."* | Douceurs d'après-midi |

### Réservation
**H2 :** *"Réserver votre table"*  
**Accroche :** *"Assurez-vous un moment hors du temps dans l'un des décors les plus prisés de France."*  
**Horaires :** Ouvert tous les jours de 07:30 à 00:30  
**Adresse :** 4 Place Graslin, 44000 Nantes  
**Tél :** 02 51 84 94 94  
**Confirmation :** instantanée par SMS ou E-mail

### Chatbot IA
*"Bonjour, je suis votre Maître d'Hôtel digital. Puis-je vous guider dans le choix de votre table ou vous présenter nos spécialités du jour ?"*

### Footer
Mentions Légales · Presse · Carrières · Plan du Site  
**Copyright :** © 1895 La Cigale. Monument Historique.

---

> ⚠️ **Règle absolue** : Toute décision esthétique non couverte par ce document doit être validée contre la maquette Stitch avant implémentation. Le design Stitch est la source de vérité unique.
