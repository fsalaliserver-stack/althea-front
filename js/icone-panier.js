
import { compterArticles } from './panier.js';

export function mettreAJourIcone() {
  const panier = document.querySelector('.panier');

  if (!panier) return;

  const nombre = compterArticles();

  panier.classList.toggle('a-des-articles', nombre > 0);

  const texte = panier.querySelector('.sr-only');

  if (texte) {
    texte.textContent = `(${nombre} article${nombre > 1 ? 's' : ''})`;
  }
}
