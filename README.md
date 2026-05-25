# Dossier CAS — Perish Guialakong Demanou

Portfolio numérique du programme CAS (Créativité · Activité · Service) du Baccalauréat International.  
**Collège Catholique Franco-Ouest · Ottawa, Ontario · 2024–2026**

---

## Structure du projet

```
projet/
├── index.html              ← Page d'accueil
├── css/
│   └── style.css           ← Styles globaux
├── js/
│   ├── main.js             ← Logique UI (onglets, lightbox, animations)
│   └── translations.js     ← Système bilingue FR / EN
├── pages/
│   ├── profil.html         ← Profil personnel & objectifs d'apprentissage
│   ├── cas.html            ← Expériences CAS (Créativité / Activité / Service)
│   ├── timeline.html       ← Ligne temporelle & diagrammes Gantt
│   ├── projet-cas.html     ← Projet CAS (Quiz tournoi)
│   └── reflexion.html      ← Réflexion finale & autoévaluation
├── images/                 ← Photos et images du site
├── docs/                   ← Documents PDF
└── vidéos/                 ← Vidéos
```

---

## Ajouter des médias

### Images
1. Copie ton fichier dans `images/` (ex: `photo.jpg`)
2. Dans le fichier HTML concerné, remplace le chemin :
   ```html
   src="../images/photo.jpg"
   ```

### Vidéos
1. Copie ton fichier dans `vidéos/` (ex: `clip.mp4`)
2. Dans le HTML :
   ```html
   src="../vidéos/clip.mp4"
   ```

### PDFs
1. Copie ton fichier dans `docs/` (ex: `document.pdf`)
2. Dans le HTML :
   ```html
   <div class="media-item" style="aspect-ratio:4/3;position:relative;cursor:pointer;"
        onclick="window.open('../docs/document.pdf','_blank')">
     <iframe src="../docs/document.pdf" style="width:100%;height:100%;border:none;border-radius:8px;pointer-events:none;"></iframe>
     <div class="media-overlay"><span class="media-caption">document</span></div>
   </div>
   ```

> **Conseil :** Utilise des noms sans espaces ni accents pour tes fichiers.  
> ✓ `festival-yemba.jpg` &nbsp;|&nbsp; ✗ `festival yemba.jpg`

---

## Héberger le site (Netlify)

1. Va sur [netlify.com](https://netlify.com) et crée un compte gratuit
2. Dans le dashboard → **Add new site → Deploy manually**
3. Glisse-dépose le dossier du projet entier
4. Ton site est en ligne en moins d'une minute

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Accueil — présentation générale du dossier CAS |
| `profil.html` | Qui je suis, ma vision du CAS, les 7 objectifs d'apprentissage |
| `cas.html` | Toutes les activités CAS avec photos, vidéos et documents |
| `timeline.html` | Chronologie complète + diagrammes Gantt Sept. 2024 → Juin 2026 |
| `projet-cas.html` | Projet CAS — Quiz tournoi interscholaire |
| `reflexion.html` | Réflexion finale C/A/S, bilan personnel, autoévaluation |

---

## Activités — Vue d'ensemble

### 🎨 Créativité (7)
Poèmes · Peinture & Design · Arts culinaires · Discours · Langue (Espagnol) · Foire scientifique · Sculpture

### 🏃 Activité (17)
Patinage · Festival Tulipes · Biodôme Montréal · Bunker Diefenbaker · Youth Race Ottawa · Basketball · Festival Yemba · Club de Soccer · Tennis · Annuaire scolaire · Match de football · Downtown Ottawa · Groupe biblique · Jeu d'Échecs · Club de Débat · Gym · Jeu du réseau CECCE

### 🤝 Service (7)
Paroisse N.D. de Lourde · ADN (African Development Network) · Programme CEPAP · Olympiades · Youth Voices · Impact Diaspora · Alliers PANA

---

## Technologies

- HTML5 / CSS3 / JavaScript (vanilla) — aucune dépendance externe
- Système bilingue FR / EN via `translations.js`
- Animations au scroll (Intersection Observer)
- Lightbox intégrée pour photos et vidéos
- Diagrammes Gantt animés

---

*Perish Guialakong Demanou — Programme du Diplôme IB — Juin 2026*
