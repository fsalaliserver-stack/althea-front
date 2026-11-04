// js/vue-panier.js · une seule fonction redessine tout à partir de l'état
// js/vue-panier.js · une seule fonction redessine tout à partir de l'état
import { panier, changerQuantite, supprimer, calculerTotal } from './panier.js';
import { trouverProduit } from './produits.js';
import { formaterPrix } from './outils.js';
import { mettreAJourIcone } from './icone-panier.js';

export function afficherPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;

  liste.replaceChildren();

  panier.forEach(({ id, quantite }) => {
    const produit = trouverProduit(id);
    if (!produit) return;

    const li = document.createElement('li');
    li.className = 'ligne-panier';
    li.dataset.id = id;

    const nom = document.createElement('p');
    nom.className = 'ligne-nom';
    nom.textContent = produit.nom;

    // Chaque champ a son label : sinon le lecteur d'écran dit seulement « champ numérique »
    const champId = `quantite-${id}`;
    const label = document.createElement('label');
    label.htmlFor = champId;
    label.textContent = 'Quantité';
    const precision = document.createElement('span');
    precision.className = 'visually-hidden';
    precision.textContent = ` de ${produit.nom}`;
    label.append(precision);

    const champ = document.createElement('input');
    champ.id = champId;
    champ.type = 'number';
    champ.min = '1';
    champ.max = '99';
    champ.value = String(quantite);

    const sousTotal = document.createElement('p');
    sousTotal.className = 'sous-total';
    sousTotal.textContent = formaterPrix(produit.prix * quantite);

    const bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'btn supprimer';
    bouton.textContent = 'Supprimer';
    bouton.setAttribute('aria-label', `Supprimer ${produit.nom}`);   // sinon « Supprimer, Supprimer… »

    li.append(nom, label, champ, sousTotal, bouton);
    liste.append(li);
  });

  // Tout ce qui dépend du panier est mis à jour au même endroit
  document.querySelector('#total').textContent = formaterPrix(calculerTotal());
  document.querySelector('#panier-vide').hidden = panier.length > 0;
  mettreAJourIcone();
}
export function initialiserPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;

  // Quantité modifiée : on change l'état, puis on redessine
  liste.addEventListener('change', (event) => {
    const champ = event.target.closest('input[type="number"]');
    if (!champ) return;
    const { id } = champ.closest('li').dataset;
    changerQuantite(id, Number(champ.value));
    afficherPanier();
  });

  // Suppression : le bouton disparaît, donc le focus va sur le titre
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('.supprimer');
    if (!bouton) return;
    supprimer(bouton.closest('li').dataset.id);
    afficherPanier();
    document.querySelector('#titre-panier').focus();
  });

  afficherPanier();
}