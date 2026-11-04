// js/panier.js · l'état du panier
import { trouverProduit } from './produits.js';

export const CLE = 'althea-panier';

const sauvegarder = () => {
  try {
    localStorage.setItem(CLE, JSON.stringify(panier));   // tableau → texte : seulement { id, quantite }
  } catch {
    // stockage indisponible : on continue sans sauvegarde
  }
};

// Relecture sécurisée : le stockage se modifie dans l'inspecteur, on ne le croit pas
function charger() {
  try {
    const lues = JSON.parse(localStorage.getItem(CLE)) ?? [];   // texte → tableau
    if (!Array.isArray(lues)) return [];
    return lues
      .filter((l) => l && trouverProduit(l.id)
        && Number.isInteger(l.quantite) && l.quantite >= 1 && l.quantite <= 99)
      .map(({ id, quantite }) => ({ id, quantite }));
  } catch {
    return [];   // texte abîmé : panier vide
  }
}

export const panier = charger();   // relu au chargement de chaque page
// splice remplace le CONTENU du tableau : panier est une const importée ailleurs
export function recharger() {
  panier.splice(0, panier.length, ...charger());
}

export function ajouter(id) {
  const produit = trouverProduit(id);
  if (!produit || produit.stock === 0) return;
  const ligne = panier.find((l) => l.id === id);
  if (ligne) {
    if (ligne.quantite < 99) ligne.quantite += 1;
  } else {
    panier.push({ id, quantite: 1 });
  }
  sauvegarder();
}

export function supprimer(id) {
  const index = panier.findIndex((l) => l.id === id);
  if (index !== -1) panier.splice(index, 1);
  sauvegarder();
}

export function changerQuantite(id, quantite) {
  if (!Number.isInteger(quantite)) return;
  if (quantite <= 0) return supprimer(id);
  const ligne = panier.find((l) => l.id === id);
  if (!ligne) return;
  ligne.quantite = Math.min(quantite, 99);
  sauvegarder();
}

export const compterArticles = () =>
  panier.reduce((somme, { quantite }) => somme + quantite, 0);

export const calculerTotal = () => {
  const total = panier.reduce(
    (somme, { id, quantite }) => somme + (trouverProduit(id)?.prix ?? 0) * quantite, 0);
  return Math.round(total * 100) / 100;
};