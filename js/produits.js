export const produits = [
  { id: 'thermometre', nom: 'Thermomètre médical sans contact', prix: 29.9, stock: 12, prioritaire: false, image: 'img/thermometre.jpeg' },
  { id: 'oxymetre', nom: 'Oxymètre de pouls', prix: 39.9, stock: 20, prioritaire: true, image: 'img/oxymetre.jpeg' },
  { id: 'stethoscope', nom: 'Stéthoscope double pavillon', prix: 59, stock: 0, prioritaire: true, image: 'img/stetoscope.jpeg' },
  { id: 'otoscope', nom: 'Otoscope de diagnostic', prix: 89, stock: 7, prioritaire: true, image: 'img/otoscope.jpeg' },
  { id: 'glucometre', nom: 'Glucomètre', prix: 24.9, stock: 18, prioritaire: false, image: 'img/glucometre.jpeg' },
  { id: 'tensiometre', nom: 'Tensiomètre électronique de bras', prix: 49.9, stock: 0, prioritaire: false, image: 'img/tensiometre.webp' },
  { id: 'gants', nom: 'Gants nitrile <img src="x" onerror="alert(1)">', prix: 9.9, stock: 50, prioritaire: false, image: 'img/glucometre.jpeg' },
];
export const trouverProduit = (id) => produits.find((p) => p.id === id);