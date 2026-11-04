Althea Systems · front
Projet fil rouge (Bachelor CPI Dev, SUP DE VINCI) : le site e-commerce d’Althea Systems, matériel médical pour cabinets. HTML et CSS seuls, sans JavaScrip

## Pages

| Page | Fichier |
|---|---|
| Accueil | index.html |
| Catégorie | categorie.html |
| Produit  | produit.html |
| Recherche | recherche.html |
| Se connecter | connexion.html |
| Créer un compte | inscription.html |
## Responsive

### Les captures

| Page | 360 px | 768 px | 1 280 px |
|---|---|---|---|
| Accueil | ![](docs/captures/accueil_360.png) | ![](docs/captures/accueil_768.png) | ![](docs/captures/accueil_1280.png) |
| Catégorie | ![](docs/captures/categorie_360.png) | ![](docs/captures/categorie_768.png) | ![](docs/captures/categorie_1280.png) |
| Produit | ![](docs/captures/produit_360.png) | ![](docs/captures/produit_768.png) | ![](docs/captures/produit_1280.png) |

Accueil en mode sombre :

![](docs/captures/accueil-dark.png)

### Ce qui cassait, et comment c'est réparé

- Contenu collé aux bords sur ordinateur : conteneur fluide avec `min()` et `margin-inline: auto`.
- Tout empilé sur ordinateur : Flexbox (en-tête, menu, cartes) et Grid (catégories, produits, fiche, recherche).
- Image de la slide trop étroite sur téléphone : `picture` avec une version carrée et une version large.



### Scores Lighthouse

| Page | Accessibilité | Performance |
|---|---|---|
| Accueil | 100 | 93 |
| Catégorie | 100 | 90 |
| Produit | 100 | 100 |