//  bouton d'achat selon le stock, quantité vérifiée
import { trouverProduit } from './produits.js';
import { ajouter } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';

export function initialiserFiche() {
  const fiche = document.querySelector('.fiche');
  if (!fiche) return;

  const produit = trouverProduit(fiche.dataset.id);
  if (!produit) return;

  const formulaire = fiche.querySelector('.achat');
  const champ = formulaire.querySelector('#quantite');
  const bouton = formulaire.querySelector('button');
  const message = formulaire.querySelector('.message-achat');

  const epuise = produit.stock === 0;
  champ.disabled = epuise;
  bouton.disabled = epuise;
  bouton.textContent = epuise ? 'En rupture de stock' : 'Ajouter au panier';

  formulaire.addEventListener('submit', (event) => {
    event.preventDefault();   // pas de rechargement de la page
    if (epuise) return;

    const quantite = Number(champ.value);   // le champ donne du texte : on le change en nombre
    // Sécurité : min et max du HTML se suppriment dans l'inspecteur, donc on revérifie
    if (!Number.isInteger(quantite) || quantite < 1 || quantite > 10) {
      message.textContent = 'Entrez une quantité entière entre 1 et 10.';
      champ.focus();
      return;   
    }

    for (let i = 0; i < quantite; i++) ajouter(produit.id);   
    mettreAJourIcone();
    message.textContent = `${quantite} × ${produit.nom} ajouté${quantite > 1 ? 's' : ''} au panier.`;
  });
}