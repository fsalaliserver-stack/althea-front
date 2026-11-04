import { formaterPrix } from "./outils.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";

export function creerCarte(produit) {
    const { id, nom, prix, stock } = produit;

    const li = document.createElement("li");
    li.className = "carte";

    const article = document.createElement("article");
    article.className = "produit";

    const image = document.createElement("img");
    image.src = `img/${id}.jpg`;
    image.alt = nom;

    const h3 = document.createElement("h3");
    const lien = document.createElement("a");

    lien.href = `produit.html?id=${id}`;
    lien.textContent = nom;

    h3.append(lien);

    const pPrix = document.createElement("p");
    pPrix.className = "prix";
    pPrix.textContent = formaterPrix(prix);

    const pStock = document.createElement("p");
    pStock.className = "stock";

    if (stock === 0) {
        li.classList.add("stock-rupture");
        pStock.textContent = "En rupture de stock";
    } else {
        pStock.textContent = "En stock";
    }

    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.dataset.id = id;

    if (stock === 0) {
        bouton.disabled = true;
        bouton.textContent = "Indisponible";
    } else {
        bouton.textContent = "Ajouter au panier";
    }

    article.append(image, h3, pPrix, pStock, bouton);
    li.append(article);

    return li;
}

export function afficherCatalogue(liste, produits) {
    liste.replaceChildren();

    produits.forEach((produit) => {
        liste.append(creerCarte(produit));
    });
}

export function initialiserAjoutCatalogue(liste) {
    if (!liste) return;

    liste.addEventListener("click", (event) => {
        const bouton = event.target.closest("button[data-id]");

        if (!bouton || bouton.disabled) return;

        ajouter(bouton.dataset.id);
        mettreAJourIcone();
    });
}