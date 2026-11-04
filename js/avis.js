//avis chargés avec fetch, affichés en texte seulement
function creerAvis({ auteur, note, texte }) {
  const li = document.createElement('li');
  li.className = 'avis-client';

  const pAuteur = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = auteur;                          

  const etoiles = document.createElement('span');
  etoiles.setAttribute('aria-hidden', 'true');          // un dessin : le lecteur d'écran l'ignore
  etoiles.textContent = ` ${'★'.repeat(note)}${'☆'.repeat(5 - note)}`;

  const noteCachee = document.createElement('span');
  noteCachee.className = 'visually-hidden';
  noteCachee.textContent = ` ${note} sur 5`;            // lu à la place des étoiles

  pAuteur.append(strong, etoiles, noteCachee);

  const pTexte = document.createElement('p');
  pTexte.textContent = texte;

  li.append(pAuteur, pTexte);
  return li;
}

export async function chargerAvis() {
  const fiche = document.querySelector('.fiche');
  const liste = document.querySelector('#liste-avis');
  const etat = document.querySelector('#etat-avis');
  if (!fiche || !liste || !etat) return;

  try {
    const reponse = await fetch('data/avis.json');      // attendre la réponse
    if (!reponse.ok) throw new Error(reponse.status);   // 404 : on passe au catch
    const tous = await reponse.json();                  // texte JSON → tableau

    // Les avis de CE produit, avec une note entière de 1 à 5
    const avis = tous.filter((a) => a.produit === fiche.dataset.id
      && Number.isInteger(a.note) && a.note >= 1 && a.note <= 5);

    liste.replaceChildren();
    avis.forEach((a) => liste.append(creerAvis(a)));

    if (avis.length === 0) {
      etat.textContent = 'Aucun avis pour ce produit.';
      return;
    }
    const moyenne = avis.reduce((somme, a) => somme + a.note, 0) / avis.length;
    etat.textContent = `${avis.length} avis · note moyenne ${moyenne.toFixed(1).replace('.', ',')} sur 5`;
  } catch (erreur) {
    console.error(erreur);   // pour le développeur
    etat.textContent = 'Les avis ne sont pas disponibles pour le moment.';   // pour le client
  }
}