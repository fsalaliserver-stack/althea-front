export async function chargerAvis() {
    const fiche = document.querySelector(".fiche");
    const liste = document.querySelector("#liste-avis");
    const etat = document.querySelector("#etat-avis");

    if (!fiche || !liste || !etat) return;

    try {
        const reponse = await fetch("data/avis.json");

        if (!reponse.ok) {
            throw new Error(`Erreur HTTP : ${reponse.status}`);
        }

        const tousLesAvis = await reponse.json();

        const avis = tousLesAvis.filter((avis) =>
            avis.produit === fiche.dataset.id &&
            Number.isInteger(avis.note) &&
            avis.note >= 1 &&
            avis.note <= 5
        );

        liste.replaceChildren();

        avis.forEach((avisClient) => {
            const li = document.createElement("li");

            const auteur = document.createElement("strong");
            auteur.textContent = avisClient.auteur;

            const etoiles = document.createElement("span");
            etoiles.setAttribute("aria-hidden", "true");
            etoiles.textContent = "★".repeat(avisClient.note);

            const noteAccessible = document.createElement("span");
            noteAccessible.className = "visuellement-cache";
            noteAccessible.textContent =
                `${avisClient.note} sur 5`;

            const texte = document.createElement("p");
            texte.textContent = avisClient.texte;

            li.append(auteur, etoiles, noteAccessible, texte);
            liste.append(li);
        });

        if (avis.length > 0) {
            const somme = avis.reduce(
                (total, avisClient) => total + avisClient.note,
                0
            );

            const moyenne = (somme / avis.length).toFixed(1);

            etat.textContent =
                `${avis.length} avis clients · Note moyenne : ${moyenne}/5`;
        } else {
            etat.textContent = "Aucun avis pour ce produit.";
        }

    } catch (erreur) {
        console.error(erreur);

        etat.textContent =
            "Les avis ne sont pas disponibles pour le moment.";
    }
}