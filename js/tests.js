// js/tests.js · lancés seulement avec ?tests dans l'adresse
import { formaterPrix } from './outils.js';
import { trierCatalogue, trierPar, lireTri } from './tri.js';
import { normaliser, filtrerProduits } from './recherche.js';

export function lancerTests() {
  const ech = [
    { id: 'a', prix: 10, stock: 0, prioritaire: true },   // épuisé ET prioritaire
    { id: 'b', prix: 30, stock: 5, prioritaire: false },
    { id: 'c', prix: 20, stock: 5, prioritaire: true },
    { id: 'd', prix: 5, stock: 0, prioritaire: false },
  ];
  const tri = trierCatalogue(ech);

  const essais = [
    ['prix 89.9', formaterPrix(89.9) === '89,90 €'],
    ['prix 24', formaterPrix(24) === '24,00 €'],
    ['épuisés à la fin', tri.slice(-2).every((p) => p.stock === 0)],
    ['prioritaire en tête', tri[0].id === 'c'],
    ['épuisé prioritaire à la fin', tri.slice(2).some((p) => p.id === 'a')],
    ['tableau d’origine intact', ech.map((p) => p.id).join() === 'a,b,c,d'],
    ['tri par prix, épuisés à la fin', trierPar(ech, 'prix-croissant').map((p) => p.id).join() === 'c,b,d,a'],
    ['tri inconnu = recommande', lireTri('<script>') === 'recommande'],
        ['normaliser', normaliser(' StéThoscope ') === 'stethoscope'],
    ['filtre prix max', filtrerProduits(ech, { prixMax: 20 }).length === 3],
  ];

  essais.forEach(([nom, ok]) => console.assert(ok, `Échec : ${nom}`));
  const reussis = essais.filter(([, ok]) => ok).length;
  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
}