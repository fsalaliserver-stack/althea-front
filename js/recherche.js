// js/recherche.js · recherche et filtres, tout vient de l'adresse (jamais crue sur parole)
import { produits } from './produits.js';
import { afficherCatalogue } from './catalogue.js';
import { trierPar } from './tri.js';

export const normaliser = (texte) =>
  String(texte).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

// Un vrai nombre positif, sinon la valeur par défaut (« abc » est ignoré)
export const lireNombre = (texte, parDefaut) => {
  const n = Number(texte);
  return texte && Number.isFinite(n) && n >= 0 ? n : parDefaut;
};

// Des critères avec des valeurs par défaut : chacun est facultatif
export const filtrerProduits = (liste, { mot = '', prixMin = 0, prixMax = Infinity, dispo = false } = {}) =>
  liste.filter((p) => normaliser(p.nom).includes(normaliser(mot))
    && p.prix >= prixMin
    && p.prix <= prixMax
    && (!dispo || p.stock > 0));

export function initialiserRecherche() {
  const resultats = document.querySelector('#resultats-produits');
  if (!resultats) return;

  const params = new URLSearchParams(location.search);
  const mot = params.get('q') ?? params.get('titre') ?? '';
  const prixMin = lireNombre(params.get('prixMin'), 0);
  const prixMax = lireNombre(params.get('prixMax'), Infinity);
  const dispo = params.get('disponible') === 'oui';

  // Filtrer, puis trier (un tri inconnu, comme « nouveauté », donne le tri recommandé)
  const trouves = trierPar(filtrerProduits(produits, { mot, prixMin, prixMax, dispo }), params.get('tri'));
  afficherCatalogue(resultats, trouves);

  const nb = `${trouves.length} produit${trouves.length > 1 ? 's' : ''}`;
  document.querySelector('#titre-resultats').textContent =
    mot ? `Résultats pour « ${mot} » : ${nb}` : `Résultats : ${nb}`;

  document.querySelector('#aucun-resultat').hidden = trouves.length > 0;

  const pagination = document.querySelector('.pagination');
  if (pagination) pagination.hidden = true;

  // On remet les choix dans les champs : après l'envoi, la page se recharge
  const champ = document.querySelector('#q');
  if (champ) champ.value = mot;

  const formulaire = document.querySelector('.facettes');
  if (formulaire) {
    const regler = (nom, valeur) => {
      if (formulaire.elements[nom]) formulaire.elements[nom].value = valeur;
    };
    regler('titre', mot);
    regler('prixMin', params.get('prixMin') ?? '');
    regler('prixMax', params.get('prixMax') ?? '');
    regler('tri', params.get('tri') ?? '');
    if (formulaire.elements.disponible) formulaire.elements.disponible.checked = dispo;
  }
}