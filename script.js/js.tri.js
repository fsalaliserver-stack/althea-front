const rang = (produit) => {
    const { stock, prioritaire } = produit;

    if (stock === 0) return 2;
    if (prioritaire) return 0;

    return 1;
};

export const trierCatalogue = (liste) =>
    [...liste].sort((a, b) => rang(a) - rang(b));

export const TRIS = {
    recommande: trierCatalogue,

    "prix-croissant": (liste) =>
        [...liste].sort((a, b) => {
            if (a.stock === 0 && b.stock !== 0) return 1;
            if (a.stock !== 0 && b.stock === 0) return -1;
            return a.prix - b.prix;
        }),

    "prix-decroissant": (liste) =>
        [...liste].sort((a, b) => {
            if (a.stock === 0 && b.stock !== 0) return 1;
            if (a.stock !== 0 && b.stock === 0) return -1;
            return b.prix - a.prix;
        })
};

export const lireTri = (valeur) =>
    Object.hasOwn(TRIS, valeur) ? valeur : "recommande";

export const trierPar = (liste, choix) =>
    TRIS[lireTri(choix)](liste);