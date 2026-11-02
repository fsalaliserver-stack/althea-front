# Plan des interfaces · Althea

## 1. Sur toutes les pages

En-tête (header), de haut en bas :
- le logo, qui ramène à l'accueil ........ a + img
- le panier, avec le nombre d'articles ..... a + span
- le bouton Menu ......................... button
- la recherche ........................... form, label, input
- les liens du menu ...................... nav, ul

Pied (footer) : CGU, Mentions légales, Contact, LinkedIn, Instagram, © 2026 ... ul, p

Sur téléphone : le pied est caché, ses liens vont dans le menu.

## 2. Page Accueil (index.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|------|----------------|--------|
| 1 | Titre | une phrase d'accroche | h1 |
| 2 | Carrousel | 3 slides : image, phrase, lien | section, ul |
| 3 | Présentation | 2 phrases sur Althea | p |
| 4 | Catégories | 4 liens : image + nom | section, ul, a, img |
| 5 | Top Produits | 4 cartes : image, nom, prix, stock | section, ul, article |

## 3. Page Produit (produit.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|------|----------------|--------|
| 1 | Fil d'Ariane | Accueil › Diagnostic › produit | nav, ol |
| 2 | Nom | le nom du produit | h1 |
| 3 | Photos | 3 vues | section, ul, img |
| 4 | Description | texte | p |
| 5 | Prix | le prix | p, data |
| 6 | Disponibilité | « En rupture de stock » | p |
| 7 | Achat | quantité + bouton (désactivés) | form |
| 8 | Caractéristiques | 4 caractéristiques | section, dl |
| 9 | Similaires | 6 cartes | section, ul, article |

Produit épuisé : texte « En rupture de stock » écrit, bouton et quantité désactivés (disabled).

## 4. Les morceaux qui reviennent

| Morceau | Pages | Classe |
|---------|-------|--------|
| Carte produit | accueil, produit | produit |
| Bouton | produit | btn |