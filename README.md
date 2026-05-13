# MS-Climatisation — Site vitrine

Site vitrine pour **MS-Climatisation**, artisan frigoriste certifié basé à Charmes (Vosges 88), intervenant dans les Vosges (88) et la Meurthe-et-Moselle (54).

---

## Stack technique

| Outil                      | Rôle                                           |
| -------------------------- | ---------------------------------------------- |
| React 19 + Vite            | Framework et bundler                           |
| React Router DOM v7        | Routing SPA                                    |
| React Leaflet + Leaflet.js | Carte interactive zone d'intervention          |
| MUI Icons                  | Icônes                                         |
| react-helmet-async         | SEO — balises `<head>` dynamiques par page     |
| OpenStreetMap              | Tuiles cartographiques (gratuit, sans clé API) |
| BAN API (data.gouv.fr)     | Géocodage d'adresses (gratuit, sans clé API)   |

---

## Pages

| Route                           | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `/`                             | Page d'accueil (Hero + CTA)                        |
| `/services`                     | Dépannage & installation, marques partenaires      |
| `/zone`                         | Carte interactive de la zone d'intervention        |
| `/contact`                      | Coordonnées directes (téléphone, e-mail)           |
| `/a-propos`                     | Présentation de l'artisan, certifications, valeurs |
| `/mentions-legales`             | Mentions légales (SIRET, NAF, assurance)           |
| `/politique-de-confidentialite` | Politique RGPD                                     |

---

## Installation

```bash
npm install
```

> Certains packages ont des conflits de peer deps avec React 19. Si `npm install` échoue :
>
> ```bash
> npm install --legacy-peer-deps
> ```

## Développement

```bash
npm run dev
```

## Build production

```bash
npm run build
npm run preview   # prévisualiser le build
```

---

## Variables d'environnement

Créer un fichier `.env` à la racine (copier `.env.example`) :

```env
VITE_TEL= 0123456789
VITE_MAIL=mail.example
VITE_SIRET=123456767890
VITE_CODE_NAF=43.22B - Travaux d'installation d'équipements thermiques et de climatisation
VITE_DÉCENALE=Responsabilité civile décenale RCDA-278519527
VITE_BASE_URL=https://test
```

> Les variables `VITE_*` sont exposées côté client. Ne pas y mettre de secrets.

---

## Structure du projet

```
src/
├── components/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── PageLegal/       # Layout partagé pour les pages légales
│   ├── SEO/             # Composant balises meta + JSON-LD
│   └── Zone/            # Carte Leaflet interactive
├── pages/
│   ├── APropos/
│   ├── Contact/
│   ├── MentionsLegales/
│   ├── NotFound/
│   ├── PolitiqueConfidentialite/
│   ├── ServicesPage/
│   └── Zone/
public/
├── robots.txt
├── sitemap.xml
├── ms-logo.png
└── [logos marques].png
```

---

## SEO

- Balises `<title>`, `<meta description>`, `canonical` et Open Graph par page via `react-helmet-async`
- Schéma `LocalBusiness` (Schema.org JSON-LD) sur la page d'accueil
- `public/sitemap.xml` à soumettre dans Google Search Console après déploiement
- `public/robots.txt` pointant vers le sitemap

### Après déploiement

1. Soumettre `https://ms-climatisations.fr/sitemap.xml` dans [Google Search Console](https://search.google.com/search-console)
2. Créer / vérifier la fiche [Google Business Profile](https://business.google.com) (levier SEO local le plus efficace)

---

## Carte interactive

La carte utilise **React Leaflet** avec les tuiles OpenStreetMap. Les départements 54 (bleu) et 88 (orange) sont mis en évidence via un GeoJSON (`public/data/departements.geojson`).

La recherche d'adresse utilise l'**API BAN** (Base Adresse Nationale, data.gouv.fr) — aucune clé API requise.

---

## Logos marques

Les logos des marques partenaires sont dans `public/` :

`LG_LOGO.png` · `DAIKIN_LOGO.png` · `MITSUBISHI_ELECTRIC-LOGO.png` · `SAMSUNG_LOGO.png` · `HISENSE_LOGO.png` · `ATLANTIC_FUJITSU_LOGO.png` · `ALTECH_LOGO.png` · `TOSHIBA_LOGO.png` · `DE_DIETRICH_LOGO.png`
