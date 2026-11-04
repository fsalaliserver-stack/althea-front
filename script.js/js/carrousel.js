export function initialiserCarrousel() {
    const zone = document.querySelector(".defile");

    if (!zone) return;

    const precedent = document.querySelector(".precedent");
    const suivant = document.querySelector(".suivant");

    const doux = !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const defiler = (sens) => {
        zone.scrollBy({
            left: sens * zone.clientWidth,
            behavior: doux ? "smooth" : "auto"
        });
    };

    precedent?.addEventListener("click", () => defiler(-1));
    suivant?.addEventListener("click", () => defiler(1));

    const slides = [...zone.children];
    const pastilles = document.querySelectorAll(".pastilles a");

    if (!slides.length || !pastilles.length) return;

    const observateur = new IntersectionObserver((entrees) => {
        entrees.forEach((entree) => {
            if (!entree.isIntersecting) return;

            const id = entree.target.id;

            pastilles.forEach((pastille) => {
                if (pastille.hash === `#${id}`) {
                    pastille.setAttribute("aria-current", "true");
                } else {
                    pastille.removeAttribute("aria-current");
                }
            });
        });
    }, {
        root: zone,
        threshold: 0.6
    });

    slides.forEach((slide) => {
        observateur.observe(slide);
    });
}