export function initialiserCarrousel() {
  const zone = document.querySelector('#une-defile');
  if (!zone) return;

  const defiler = (sens) => {   // sens : -1 ou 1
    const doux = !matchMedia('(prefers-reduced-motion: reduce)').matches;   // respecte le réglage
    zone.scrollBy({ left: sens * zone.clientWidth, behavior: doux ? 'smooth' : 'auto' });
  };

  document.querySelector('.precedent')?.addEventListener('click', () => defiler(-1));
  document.querySelector('.suivant')?.addEventListener('click', () => defiler(1));

  const pastilles = [...document.querySelectorAll('.pastilles a')];
  const slides = [...zone.children];

  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;   // la slide sort : rien
      const id = entree.target.id;          // la slide qui entre
      pastilles.forEach((a) => {
        if (a.hash === `#${id}`) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { root: zone, threshold: 0.6 });

  slides.forEach((slide) => observateur.observe(slide)); 
}