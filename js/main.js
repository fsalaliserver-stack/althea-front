// js/main.js · point d'entrée, chargé sur TOUTES les pages
import { produits } from './produits.js';
import { trierPar, lireTri } from './tri.js';
import { afficherCatalogue } from './catalogue.js';
import { ajouter, recharger, CLE } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { initialiserMenu } from './menu.js';
import { initialiserCarrousel } from './carrousel.js';
import { initialiserFiche } from './fiche.js';
import { chargerAvis } from './avis.js';
import { initialiserRecherche } from './recherche.js';
import { afficherPanier, initialiserPanier } from './vue-panier.js';
import { lancerTests } from './tests.js';

// Délégation : un seul écouteur par liste pour tous les boutons « Ajouter »
const brancherAjout = (liste) => {
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button[data-id]');
    if (!bouton) return;
    ajouter(bouton.dataset.id);
    mettreAJourIcone();
  });
};

// Page Catégorie : filtrer, trier, afficher
const liste = document.querySelector('#liste-produits');
if (liste) {
  const caseDispo = document.querySelector('#dispo-seulement');
  const choixTri = document.querySelector('#choix-tri');
  const nb = document.querySelector('#nb-produits');

  choixTri.value = lireTri(new URLSearchParams(location.search).get('tri'));

  const rafraichir = () => {
    const choisis = caseDispo.checked ? produits.filter((p) => p.stock > 0) : produits;
    const tries = trierPar(choisis, choixTri.value);
    afficherCatalogue(liste, tries);
    nb.textContent = `${tries.length} produit${tries.length > 1 ? 's' : ''}`;
  };

  caseDispo.addEventListener('change', rafraichir);
  choixTri.addEventListener('change', () => {
    const params = new URLSearchParams(location.search);
    params.set('tri', choixTri.value);
    history.replaceState(null, '', `?${params}`);
    rafraichir();
  });

  brancherAjout(liste);
  rafraichir();
}

const resultats = document.querySelector('#resultats-produits');
if (resultats) brancherAjout(resultats);

initialiserMenu();
initialiserCarrousel();
initialiserFiche();
chargerAvis();
initialiserRecherche();
initialiserPanier();
mettreAJourIcone();

// Un autre onglet a modifié le panier : on se met à jour
window.addEventListener('storage', (event) => {
  if (event.key !== CLE) return;
  recharger();
  mettreAJourIcone();
  afficherPanier();
});

// Tests : seulement avec ?tests dans l'adresse
if (new URLSearchParams(location.search).has('tests')) lancerTests();