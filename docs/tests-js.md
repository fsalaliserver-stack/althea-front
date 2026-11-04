# Tests JavaScript · Althea Systems

| Test | Attendu | OK |
|------|---------|----|
| Ordre du catalogue | prioritaires, autres, épuisés (stéthoscope en bas) | ✔ |
| Produit piège (gants) | nom en texte, aucune alerte | ✔ |
| Filtre « Disponibles seulement » | plus aucun épuisé, nombre mis à jour | ✔ |
| Tri par prix | épuisés toujours à la fin ; adresse `?tri=` mise à jour | ✔ |
| `categorie.html?tri=<script>` | tri recommandé, sans erreur | ✔ |
| Menu burger | s'ouvre, se ferme ; Échap ferme et rend le focus | ✔ |
| Carrousel | Précédent/Suivant, pastille active suit la slide | ✔ |
| Fiche : quantité 0, 50, « abc » | refusées avec un message | ✔ |
| Fiche : produit épuisé | champ et bouton désactivés | ✔ |
| Avis | avis piégé en texte, note 50 ignorée, message si fichier absent | ✔ |
| Recherche « stethoscope » sans accent | trouve le stéthoscope | ✔ |
| Recherche `?q=<img src=x onerror=alert(1)>` | texte affiché, aucune alerte | ✔ |
| Panier : oxymètre ×2 | 79,80 € | ✔ |
| Panier : rechargement | le panier est conservé | ✔ |
| Panier : 2 onglets | total et point rouge mis à jour | ✔ |
| `categorie.html?tests` | « Tests : 10 / 10 réussis » | ✔ |