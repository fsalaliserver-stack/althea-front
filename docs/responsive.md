# Audit Responsive Design - État des lieux (Avant correction)

Ces trois largeurs couvrent les écrans les plus courants : 
- **360 px** : Téléphone (mobile)
- **768 px** : Tablette
- **1024 px** : Ordinateur (desktop)

---

## Tableau de constat

| Page | 360 px (Téléphone) | 768 px (Tablette) | 1024 px (Ordinateur) |
| :--- | :--- | :--- | :--- |
| **Accueil** (`index.html`) | - Image de couverture trop grande (déborde horizontalement)<br>- Bouton d'action collé aux bords de l'écran<br>- Lignes de texte coupées à droite | - Navigation du menu sur 2 lignes déséquilibrées<br>- Espacement vertical insuffisant entre les cartes | - Lignes de texte trop longues (supérieures à 80 caractères, lecture difficile)<br>- Grand espace vide inutilisé sur les côtés droit et gauche |
| **Produit** (`product.html`) | - Image du produit dépasse à 360 px (défilement horizontal requis)<br>- Formulaire de sélection d'options tronqué<br>- Le prix s'affiche au-dessus du bouton au lieu d'être aligné | - Grille produit / description désalignée<br>- Bouton "Ajouter au panier" non centré | - Image du produit exagérément grande (prend toute la hauteur)<br>- Colonne de description collée au bord droit de la fenêtre |

---

## Prochaines étapes

1. **Avant de coder :** Conserver ce tableau comme référence pour cibler précisément les correctifs CSS (media queries, `max-width: 100%`, `padding`, `margin`).
2. **Après les corrections :** Ajouter une section *« Après correction »* sous ce tableau ou cocher les éléments résolus pour comparer l'avant et l'après.

## Carrousel sans JavaScript

| Ce qui marche en CSS seul | Ce qui manque (jour 3) |
|---|---|
| glisser avec tab puis clavier et à la souris | des flèches Précédent / Suivant |
| s'arrêter net sur chaque slide | un défilement automatique |
| aller à une slide avec les pastilles | la pastille active |