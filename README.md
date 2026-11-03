# Althea Systems · front

Site vitrine de matériel médical (projet fil rouge, Bachelor CPI Dev). HTML, CSS, zéro JavaScript à ce stade.

## Pages
`index.html`, `categorie.html`, `produit.html`, `recherche.html`, `connexion.html`, `inscription.html`

## Responsive

| Page | 360 px | 768 px | 1 280 px |
|------|--------|--------|----------|
| Accueil | ![](docs/captures/accueil-360.png) | ![](docs/captures/accueil-768.png) | ![](docs/captures/accueil-1280.png) |
| Catégorie | ![](docs/captures/categorie-360.png) | ![](docs/captures/categorie-768.png) | ![](docs/captures/categorie-1280.png) |
| Produit | ![](docs/captures/produit-360.png) | ![](docs/captures/produit-768.png) | ![](docs/captures/produit-1280.png) |

Accueil en mode sombre : ![](docs/captures/accueil-sombre.png)

### Ce qui cassait, et comment c'est réparé
- Contenu collé aux bords sur ordinateur : conteneur fluide avec `min()` et `margin-inline: auto`.
- Tout empilé sur ordinateur : Flexbox (en-tête, menu, cartes) et Grid (catégories, produits, fiche, recherche).
- Image de la slide trop étroite sur téléphone : `picture` avec une version carrée et une version large.
- *(à compléter avec les constats de `docs/responsive.md`)*

### Scores Lighthouse
| Page | Accessibilité |
|------|---------------|
| Accueil | *(ton score)* |
| Catégorie | *(ton score)* |
| Produit | *(ton score)* |

## Sécurité
Voir `docs/securite.md`.
