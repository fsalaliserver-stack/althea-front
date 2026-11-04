import { trouverProduit } from "./produits.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";

export function initialiserFiche() {
    const fiche = document.querySelector(".fiche");

    if (!fiche) return;

    const produit = trouverProduit(fiche.dataset.id);

    if (!produit) return;

    const formulaire = fiche.querySelector(".achat");
    const bouton = formulaire.querySelector("button");
    const champ = formulaire.querySelector('input[type="number"]');
    const message = formulaire.querySelector(".message-achat");

    if (produit.stock === 0) {
        bouton.disabled = true;
        champ.disabled = true;
        bouton.textContent = "En rupture de stock";
    } else {
        bouton.disabled = false;
        champ.disabled = false;
        bouton.textContent = "Ajouter au panier";
    }

    formulaire.addEventListener("submit", (event) => {
        event.preventDefault();

        const quantite = Number(champ.value);

        if (
            !Number.isInteger(quantite) ||
            quantite < 1 ||
            quantite > 10
        ) {
            message.textContent = "Entre 1 et 10 exemplaires.";
            champ.focus();
            return;
        }

        if (produit.stock === 0) return;

        for (let i = 0; i < quantite; i++) {
            ajouter(produit.id);
        }

        message.textContent =
            `${quantite} × ${produit.nom} ajouté.`;

        mettreAJourIcone();
    });
}