import { produits } from "./produits.js";
import { trierCatalogue, trierPar, lireTri } from "./tri.js";

import { afficherCatalogue, initialiserAjoutCatalogue } from "./catalogue.js";

import { initialiserMenu } from "./menu.js";
import { initialiserCarrousel } from "./carrousel.js";
import { initialiserFiche } from "./fiche.js";
import { chargerAvis } from "./avis.js";
import { initialiserRecherche } from "./recherche.js";

import { panier, ajouter, CLE, recharger } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";
import { afficherPanier, initialiserVuePanier } from "./vue-panier.js";

import { lancerTests } from "./tests.js";

initialiserMenu();
initialiserCarrousel();

const liste = document.querySelector("#liste-produits");

if (liste) {
    const caseDispo = document.querySelector("#dispo-seulement");
    const nombreProduits = document.querySelector("#nb-produits");
    const choixTri = document.querySelector("#choix-tri");

    const parametres = new URLSearchParams(location.search);

    const triInitial = lireTri(parametres.get("tri"));

    if (choixTri) {
        choixTri.value = triInitial;
    }

    const rafraichir = () => {
        let selection = produits;

        if (caseDispo && caseDispo.checked) {
            selection = produits.filter(
                (produit) => produit.stock > 0
            );
        }

        const produitsTries = trierPar(
            selection,
            choixTri ? choixTri.value : "recommande"
        );

        afficherCatalogue(liste, produitsTries);

        if (nombreProduits) {
            nombreProduits.textContent =
                `${produitsTries.length} produits`;
        }
    };

    caseDispo?.addEventListener("change", rafraichir);

    choixTri?.addEventListener("change", () => {
        const parametres = new URLSearchParams(location.search);

        parametres.set("tri", choixTri.value);

        history.replaceState(
            null,
            "",
            `${location.pathname}?${parametres.toString()}`
        );

        rafraichir();
    });

    initialiserAjoutCatalogue(liste);

    rafraichir();
}

initialiserFiche();

chargerAvis();

initialiserRecherche();

const listePanier = document.querySelector("#lignes-panier");

if (listePanier) {
    initialiserVuePanier();

    if (panier.length === 0) {
        ajouter("thermometre");
        ajouter("stethoscope");
    }

    afficherPanier();
}

mettreAJourIcone();

window.addEventListener("storage", (event) => {
    if (event.key !== CLE) return;

    recharger();

    mettreAJourIcone();

    if (document.querySelector("#lignes-panier")) {
        afficherPanier();
    }
});

if (new URLSearchParams(location.search).has("tests")) {
    lancerTests();
}