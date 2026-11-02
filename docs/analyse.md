# Plan des interfaces · Althea

## 1. Sur toutes les pages

En-tête (header), de haut en bas :
- le logo, qui ramène à l'accueil ........ a + img
- le panier, avec le nombre d'articles ..... a + span
- le bouton Menu ......................... button
- la recherche ........................... form, label, input
- les liens du menu ...................... nav, ul

Le panier a un point rouge quand il contient des articles. Pour une personne qui ne voit pas ce point, on ajoute le nombre d'articles dans un texte caché (span class="visually-hidden"), par exemple « (2 articles) ». Le lecteur d'écran lit « Panier (2 articles) ».

Pied (footer) : CGU, Mentions légales, Contact, LinkedIn, Instagram, © 2026 Althea Systems ... ul, p

Sur téléphone : le pied est caché, ses liens vont dans le menu.

## 2. Page Accueil (index.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|------|----------------|--------|
| 1 | Titre | « Le matériel médical de pointe pour votre cabinet, livré partout » | h1 |
| 2 | Carrousel | 3 slides : image, phrase, lien | section, ul, li, img, p, a |
| 3 | Présentation | 2 phrases sur Althea | p |
| 4 | Catégories | 4 liens : image + nom (Diagnostic, Soins, Mobilier, Consommables) | section, h2, ul, a, img |
| 5 | Top Produits | 4 cartes : image, nom, prix, stock | section, h2, ul, article, h3, p |

Une carte « Top Produits » contient : une image, le nom du produit (lien vers la page produit), le