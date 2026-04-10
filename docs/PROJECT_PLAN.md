# PROJECT_PLAN.md – La Cigale Homepage
> **Agent 1 : Chef de Projet**  
> Généré le : 2026-04-09  
> Source de vérité design : Stitch MCP (`3961990880067708357`) + `DESIGN.md`

---

## 1. Vue d'ensemble du projet

### Objectif principal
Concevoir et développer une homepage premium pour **La Cigale**, brasserie Art Nouveau classée Monument Historique à Nantes (fondée en 1895). La homepage doit simultanément :
- Susciter l'émotion et l'envie de visite (storytelling patrimonial)
- Convertir les visiteurs en réservations (CTA proéminent)
- Valoriser l'offre gastronomique (carte, plats signatures)
- Offrir une expérience fluide et accessible sur tous les devices

### Public cible

| Segment | Besoins | Priorité |
|---------|---------|----------|
| **Touristes** (nationaux & internationaux) | Découvrir le lieu, l'histoire, la réputation | Haute |
| **Locaux nantais** | Réserver une table, consulter la carte, offre du jour | Haute |
| **Clientèle affaires** | Privatisation, salons, réceptions | Moyenne |
| **Presse / Influenceurs** | Accès rapide aux informations institutionnelles | Basse |

### Messages clés à transmettre
1. **Prestige et patrimoine** : *"Peut-être la plus belle Brasserie du monde"*
2. **Histoire vivante** : Monument Historique depuis 1895, Art Nouveau d'exception
3. **Excellence gastronomique** : Signatures de Chef, Fruits de Mer, Salon de Thé
4. **Accessibilité** : Réservation facile, confirmation instantanée
5. **Innovation** : Assistant IA Maître d'Hôtel digital

---

## 2. Références design

### Projet Stitch
- **Nom** : La Cigale – Homepage
- **ID** : `3961990880067708357`
- **Accès** : Via MCP Stitch (serveur configuré)

### Écrans de référence

| Écran Stitch | ID | Dimensions | Usage |
|--------------|----|-----------|-------|
| Version A - Patrimoniale (Desktop) | `2c9e74253bd441459c206120f58528eb` | 2560 × 8852 px | Référence principale |
| Version A - Patrimoniale (Mobile) - V2 | `ca636403f4904954a2cf24325944ef32` | 780 × 7030 px | Référence mobile |

### Fichiers de référence
- **`DESIGN.md`** → Palette, typographie, design tokens CSS, contenus officiels
- **`UI_SPECS.md`** → (à générer par Agent 3 Designer UI)

---

## 3. Structure attendue de la homepage

### Navigation (Header)
- Logo / Nom "La Cigale" 
- Liens : Le Patrimoine · La Carte · Les Salons · Privatisation · Histoire · Contact
- CTA bouton "Réserver" (sticky, toujours visible)
- Comportement : fixe au scroll

### Section Hero
- Image de fond plein écran (intérieur Art Nouveau iconique)
- **H1** : *"Peut-être la plus belle Brasserie du monde"*
- Badge/sous-titre : *"Un monument classé au cœur de Nantes"*
- CTA principal : *"Découvrir le lieu"* → ancre `#patrimoine`
- CTA secondaire : *"Réserver ma table"* → ancre `#reservation`

### Section Patrimoine (Brasserie)
- **H2** : *"Une immersion dans le Siècle d'Or"*
- Texte historique complet (Émile Libaudière, 1895, Belle Époque)
- Visuel complémentaire (mosaïques, architecture)
- Layout : image + texte en 2 colonnes (desktop), empilé (mobile)

### Section Carte (Gastronomie)
- **H2** : *"La Gastronomie en Scène"*
- 3 cards (grille 3 colonnes desktop, 1 colonne mobile) :
  1. **Les Signatures** → CTA "Consulter la carte"
  2. **Fruits de Mer** → CTA "Découvrir le banc"
  3. **Salon de Thé** → CTA "Douceurs d'après-midi"

### Section Réservation
- **H2** : *"Réserver votre table"*
- Accroche + infos pratiques (horaires, adresse, tél)
- Widget ou formulaire de réservation
- Confirmation instantanée SMS/E-mail

### Section Serveur IA
- Maître d'Hôtel digital (chatbot flottant ou section dédiée)
- Message d'accroche : *"Bonjour, je suis votre Maître d'Hôtel digital..."*
- Interface conversationnelle simple

### Footer
- Liens : Mentions Légales · Presse · Carrières · Plan du Site
- Copyright : *© 1895 La Cigale. Monument Historique.*
- Réseaux sociaux (si présents dans maquette)

---

## 4. Contraintes techniques

| Contrainte | Spécification | Priorité |
|-----------|--------------|----------|
| **Responsive** | Mobile-first, 3 breakpoints (375px / 768px / 1440px) | Critique |
| **Performance** | Images WebP + lazy loading, Lighthouse > 90 | Haute |
| **Accessibilité** | WCAG AA minimum, ARIA labels, navigation clavier | Haute |
| **Fidélité design** | Pixel-perfect vs maquettes Stitch, zéro freestyle | Critique |
| **SEO** | Balises sémantiques, meta, structured data | Moyenne |
| **Compatibilité** | Dernières versions Chrome, Firefox, Safari, Edge | Haute |

---

## 5. Distribution des tâches agents

### ✅ Agent 1 – Chef de Projet (ce document)
- [x] Brief UX et messages clés
- [x] Structure des sections
- [x] Contraintes techniques
- [x] Génération de `PROJECT_PLAN.md`

### 🔲 Agent 2 – Architecte Technique
**Input** : `PROJECT_PLAN.md` + `DESIGN.md`  
**Output** : `ARCHITECTURE.md`  
**Checklist** :
- [ ] Choisir la stack (framework, styling, outils)
- [ ] Définir l'arborescence de fichiers complète
- [ ] Lister les composants alignés sur sections Stitch
- [ ] Définir la stratégie responsive et les conventions de code

### 🔲 Agent 3 – Designer UI
**Input** : `PROJECT_PLAN.md` + `ARCHITECTURE.md` + MCP Stitch  
**Output** : `UI_SPECS.md`  
**Checklist** :
- [ ] Interroger MCP Stitch pour specs détaillées (couleurs précises, espacements, états)
- [ ] Documenter le design system complet (tokens, grille, ombres)
- [ ] Spécifier chaque section (layout, dimensions, typographie, couleurs)
- [ ] Définir les composants réutilisables avec leurs états (hover, active, disabled)
- [ ] **Règle absolue** : Zéro information inventée — tout vient de Stitch

### 🔲 Agent 4 – Développeur Front-End
**Input** : Tous les docs + MCP Stitch  
**Output** : Code source complet + `README.md`  
**Checklist** :
- [ ] Initialiser la structure selon `ARCHITECTURE.md`
- [ ] Implémenter Hero → Patrimoine → Carte → Réservation → IA → Footer
- [ ] Responsive sur les 3 breakpoints
- [ ] Accessibilité WCAG AA
- [ ] `README.md` avec instructions d'installation

---

## 6. Livrables finaux attendus

### Documentation
| Fichier | Responsable | Statut |
|---------|------------|--------|
| `DESIGN.md` | IA (depuis Stitch) | ✅ Généré |
| `PROJECT_PLAN.md` | Agent 1 | ✅ Ce document |
| `ARCHITECTURE.md` | Agent 2 | 🔲 À faire |
| `UI_SPECS.md` | Agent 3 | 🔲 À faire |
| `README.md` | Agent 4 | 🔲 À faire |

### Code
| Livrable | Statut |
|---------|--------|
| Arborescence complète | 🔲 À faire |
| Composants (Hero, Brasserie, Carte, Réservation, IA, Footer) | 🔲 À faire |
| Homepage assemblée et fonctionnelle | 🔲 À faire |
| Responsive validé | 🔲 À faire |

---

> **✅ Agent 1 terminé.** → Passer à l'**Agent 2 – Architecte Technique** : générer `ARCHITECTURE.md`.
