
import { formaterPrix } from './outils.js';

export function creerCarte({ id, nom, prix, stock, image }) {
  const li = document.createElement('li');
  const article = document.createElement('article');
  article.className = 'produit';

  const img = document.createElement('img');
  img.src = image;
  img.alt = '';
  img.width = 400;
  img.height = 300;
  img.loading = 'lazy';

  const h3 = document.createElement('h3');
  const lien = document.createElement('a');
  lien.href = 'produit.html';
  lien.textContent = nom;
  h3.append(lien);

  const pPrix = document.createElement('p');
  pPrix.className = 'prix';

  const data = document.createElement('data');
  data.value = String(prix);
  data.textContent = formaterPrix(prix);
  pPrix.append(data);

  const pStock = document.createElement('p');
  pStock.className = 'stock';

  if (stock === 0) {
    pStock.classList.add('stock-rupture');
  }

  pStock.textContent = stock === 0
    ? 'En rupture de stock'
    : 'En stock';

  // Bouton d'ajout au panier
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.dataset.id = id;
  bouton.textContent = stock === 0
    ? 'Indisponible'
    : 'Ajouter au panier';
  bouton.disabled = stock === 0;

  article.append(img, h3, pPrix, pStock, bouton);
  li.append(article);

  return li;
}

export function afficherCatalogue(liste, produits) {
  liste.replaceChildren();
  produits.forEach((p) => liste.append(creerCarte(p)));
}
