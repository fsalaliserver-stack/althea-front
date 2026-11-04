// 0 = prioritaire, 1 = autres, 2 = épuisés
const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2;   // épuisé : à la fin (testé EN PREMIER)
  if (prioritaire) return 0;   // prioritaire : en tête
  return 1;                    // les autres : au milieu
};

// Renvoie une COPIE triée
export const trierCatalogue = (liste) =>
  [...liste].sort((a, b) => rang(a) - rang(b));

// Tri par prix : les épuisés restent à la fin (sens = 1 croissant, -1 décroissant)
const parPrix = (sens) => (liste) =>
  [...liste].sort((a, b) => {
    const epuiseA = a.stock === 0;
    const epuiseB = b.stock === 0;
    if (epuiseA !== epuiseB) return epuiseA ? 1 : -1;
    return sens * (a.prix - b.prix);
  });

// Un objet qui range des fonctions sous des noms
export const TRIS = {
  recommande: trierCatalogue,
  'prix-croissant': parPrix(1),
  'prix-decroissant': parPrix(-1),
};

// Liste blanche : une valeur inconnue (venue de l'adresse) devient « recommande »
export const lireTri = (valeur) => (Object.hasOwn(TRIS, valeur) ? valeur : 'recommande');

export const trierPar = (liste, choix) => TRIS[lireTri(choix)](liste);