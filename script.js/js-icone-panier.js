import { compterArticles } from "./panier.js";

export function mettreAJourIcone() {
    const icones = document.querySelectorAll(".panier");

    icones.forEach((icone) => {
        const nombre = compterArticles();

        icone.classList.toggle("a-des-articles", nombre > 0);

        let texteCache = icone.querySelector(".texte-panier");

        if (!texteCache) {
            texteCache = document.createElement("span");
            texteCache.className = "texte-panier visuellement-cache";
            icone.append(texteCache);
        }

        texteCache.textContent = `(${nombre} articles)`;
    });
}