import { trouverProduit } from "./produits.js";

export const CLE = "althea-panier";

const sauvegarder = () => {
    localStorage.setItem(CLE, JSON.stringify(panier));
};

function charger() {
    try {
        const lignes = JSON.parse(localStorage.getItem(CLE)) ?? [];

        if (!Array.isArray(lignes)) return [];

        return lignes.filter((ligne) =>
            trouverProduit(ligne.id) &&
            Number.isInteger(ligne.quantite) &&
            ligne.quantite >= 1 &&
            ligne.quantite <= 99
        );
    } catch {
        return [];
    }
}

export const panier = charger();

export function ajouter(id) {
    const produit = trouverProduit(id);

    if (!produit || produit.stock === 0) return;

    const ligne = panier.find((element) => element.id === id);

    if (ligne) {
        if (ligne.quantite < 99) {
            ligne.quantite += 1;
        }
    } else {
        panier.push({
            id,
            quantite: 1
        });
    }

    sauvegarder();
}

export function changerQuantite(id, quantite) {
    if (!Number.isInteger(quantite) || quantite <= 0) {
        supprimer(id);
        return;
    }

    if (quantite > 99) return;

    const ligne = panier.find((element) => element.id === id);

    if (!ligne) return;

    ligne.quantite = quantite;
    sauvegarder();
}

export function supprimer(id) {
    const index = panier.findIndex((element) => element.id === id);

    if (index !== -1) {
        panier.splice(index, 1);
        sauvegarder();
    }
}

export const compterArticles = () =>
    panier.reduce((total, ligne) => total + ligne.quantite, 0);

export const calculerTotal = () =>
    panier.reduce((total, ligne) => {
        const produit = trouverProduit(ligne.id);

        return total + produit.prix * ligne.quantite;
    }, 0);

export function recharger() {
    panier.splice(0, panier.length, ...charger());
}