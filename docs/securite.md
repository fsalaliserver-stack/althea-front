# Protections du jour · Althea Systems

| Où | Protection | Contre quoi |
|----|------------|-------------|
| Toutes les pages, `<head>` | CSP `default-src 'self'` | du code (script, style) glissé dans la page ou chargé depuis un autre site |
| Toutes les pages, `<head>` | `referrer` strict-origin-when-cross-origin | l'envoi de l'adresse complète aux autres sites |
| Connexion, Inscription | `method="post"` | le mot de passe visible dans l'adresse et l'historique |
| Connexion, Inscription | `type="password"`, `autocomplete` adapté | mot de passe affiché à l'écran, gestionnaires de mots de passe bloqués |
| Inscription | `minlength="12"` | mots de passe trop faciles à deviner |
| Liens externes | `https://`, `rel="noopener noreferrer"` | lecture du trafic, prise de contrôle de l'onglet Althea |
| Dépôt Git | `.gitignore` | envoi de secrets (`.env`, clés) sur le dépôt |

## Limite

Les contrôles HTML (`required`, `minlength`) peuvent être retirés par le visiteur avec l'inspecteur : le serveur devra tout revérifier. De même, une CSP écrite dans une balise `meta` protège moins qu'une CSP envoyée par le serveur : en production, elle sera envoyée dans un en-tête HTTP.
