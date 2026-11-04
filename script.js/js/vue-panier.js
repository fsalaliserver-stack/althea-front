import { panier, calculerTotal, changerQuantite, supprimer } from "./panier.js";
import { trouverProduit } from "./produits.js";
import { formaterPrix } from "./outils.js";
import { mettreAJourIcone } from "./icone-panier.js";

export function afficherPanier() {
    const liste = document.querySelector("#lignes-panier");
    const total = document.querySelector("#total");
    const panierVide = document.querySelector("#panier-vide");

    if (!liste || !total || !panierVide) return;

    liste.replaceChildren();

    panier.forEach((ligne) => {
        const produit = trouverProduit(ligne.id);

        if (!produit) return;

        const li = document.createElement("li");
        li.dataset.id = ligne.id;

        const nom = document.createElement("h2");
        nom.textContent = produit.nom;

        const label = document.createElement("label");
        label.textContent = "Quantité";

        const champ = document.createElement("input");
        champ.type = "number";
        champ.min = "1";
        champ.max = "99";
        champ.value = ligne.quantite;

        label.append(champ);

        const sousTotal = document.createElement("p");
        sousTotal.textContent = formaterPrix(
            produit.prix * ligne.quantite
        );

        const bouton = document.createElement("button");
        bouton.type = "button";
        bouton.textContent = "Supprimer";
        bouton.setAttribute(
            "aria-label",
            `Supprimer ${produit.nom} du panier`
        );

        li.append(nom, label, sousTotal, bouton);
        liste.append(li);
    });

    total.textContent = formaterPrix(calculerTotal());

    panierVide.hidden = panier.length !== 0;

    mettreAJourIcone();
}

export function initialiserVuePanier() {
    const liste = document.querySelector("#lignes-panier");

    if (!liste) return;

    liste.addEventListener("change", (event) => {
        const ligneHTML = event.target.closest("li");

        if (!ligneHTML) return;

        const id = ligneHTML.dataset.id;

        changerQuantite(id, Number(event.target.value));

        afficherPanier();
    });

    liste.addEventListener("click", (event) => {
        const bouton = event.target.closest("button");

        if (!bouton) return;

        const ligneHTML = bouton.closest("li");

        if (!ligneHTML) return;

        supprimer(ligneHTML.dataset.id);

        afficherPanier();

        document.querySelector("#titre-panier")?.focus();
    });
}