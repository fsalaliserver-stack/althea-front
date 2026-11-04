export function initialiserMenu() {
    const bouton = document.querySelector(".menu-bouton");

    if (!bouton) return;

    bouton.setAttribute("aria-expanded", "false");

    const fermer = () => {
        bouton.setAttribute("aria-expanded", "false");
    };

    bouton.addEventListener("click", () => {
        const ouvert =
            bouton.getAttribute("aria-expanded") === "true";

        bouton.setAttribute("aria-expanded", String(!ouvert));
    });

    document.addEventListener("keydown", (event) => {
        const ouvert =
            bouton.getAttribute("aria-expanded") === "true";

        if (event.key === "Escape" && ouvert) {
            fermer();
            bouton.focus();
        }
    });
}