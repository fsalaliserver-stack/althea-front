import { produits } from "./produits.js";
import { afficherCatalogue } from "./catalogue.js";
import { trierPar, lireTri } from "./tri.js";

export const normaliser = (texte) =>
    texte
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

export const filtrerProduits = (
    liste,
    {
        mot = "",
        prixMin = 0,
        prixMax = Infinity,
        dispo = false
    } = {}
) => {
    return liste.filter((produit) =>
        normaliser(produit.nom).includes(normaliser(mot)) &&
        produit.prix >= prixMin &&
        produit.prix <= prixMax &&
        (!dispo || produit.stock > 0)
    );
};

export const lireNombre = (texte, parDefaut) => {
    const nombre = Number(texte);

    return texte !== null &&
        texte !== "" &&
        Number.isFinite(nombre) &&
        nombre >= 0
        ? nombre
        : parDefaut;
};

export function initialiserRecherche() {
    const liste = document.querySelector("#resultats-produits");

    if (!liste) return;

    const parametres = new URLSearchParams(location.search);

    const mot = parametres.get("q") ??
        parametres.get("titre") ??
        "";

    const prixMin = lireNombre(
        parametres.get("prixMin"),
        0
    );

    const prixMax = lireNombre(
        parametres.get("prixMax"),
        Infinity
    );

    const dispo = parametres.get("disponible") === "oui";

    const tri = lireTri(parametres.get("tri"));

    const criteres = {
        mot,
        prixMin,
        prixMax,
        dispo
    };

    const resultats = filtrerProduits(produits, criteres);
    const resultatsTries = trierPar(resultats, tri);

    afficherCatalogue(liste, resultatsTries);

    const titre = document.querySelector("#titre-resultats");

    if (titre) {
        titre.textContent =
            `Résultats pour « ${mot} » : ${resultatsTries.length} produits`;
    }

    const aucunResultat = document.querySelector("#aucun-resultat");

    if (aucunResultat) {
        aucunResultat.hidden = resultatsTries.length !== 0;
    }

    const champRecherche = document.querySelector(
        'input[name="q"]'
    );

    if (champRecherche) {
        champRecherche.value = mot;
    }

    const champNom = document.querySelector(
        'input[name="titre"]'
    );

    if (champNom) {
        champNom.value = mot;
    }

    const champPrixMin = document.querySelector(
        'input[name="prixMin"]'
    );

    if (champPrixMin) {
        champPrixMin.value = parametres.get("prixMin") ?? "";
    }

    const champPrixMax = document.querySelector(
        'input[name="prixMax"]'
    );

    if (champPrixMax) {
        champPrixMax.value = parametres.get("prixMax") ?? "";
    }

    const champDispo = document.querySelector(
        'input[name="disponible"]'
    );

    if (champDispo) {
        champDispo.checked = dispo;
    }

    const champTri = document.querySelector(
        'select[name="tri"]'
    );

    if (champTri) {
        champTri.value = tri;
    }

    const pagination = document.querySelector(".pagination");

    if (pagination) {
        pagination.hidden = true;
    }
}