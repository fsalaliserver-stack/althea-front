// js/outils.js · petites fonctions utiles partout
export const formaterPrix = (prix) => 
    `${prix.toFixed(2).replace('.', ',')} €`;