# Althea Systems

Projet e-commerce de matériel médical.

## Présentation

Althea Systems propose du matériel médical destiné aux professionnels de santé.

Le projet présente plusieurs interfaces :
- Accueil
- Catégorie
- Produit
- Recherche
- Connexion
- Inscription

## Technologies

- HTML5
- CSS3
- Responsive Design
- Flexbox
- CSS Grid
- Media Queries

## Arborescence

althea-front/
├── index.html
├── categorie.html
├── produit.html
├── recherche.html
├── connexion.html
├── inscription.html
├── css/
│   ├── variables.css
│   └── style.css
├── img/
├── docs/
│   ├── analyse.md
│   ├── audit.md
│   ├── responsive.md
│   └── securite.md
└── README.md

## Responsive

Les interfaces sont conçues pour :
- 360 px : téléphone
- 768 px : tablette
- 1 280 px : ordinateur

Les corrections responsive utilisent Flexbox, Grid et les Media Queries.

Les captures des tests seront ajoutées dans docs/captures/.

## Accessibilité

- Liens d'évitement
- Labels associés aux champs
- Navigation au clavier
- Contrastes adaptés
- Images avec textes alternatifs
- Respect de prefers-reduced-motion

## Sécurité

- Content Security Policy
- Referrer Policy
- Formulaires POST pour les mots de passe
- Liens externes sécurisés
- Fichier .gitignore

## Tests

Les tests à réaliser :
- Validateur HTML
- Validateur CSS
- Lighthouse
- Affichage responsive
- Mode sombre
- Navigation clavier
- Impression