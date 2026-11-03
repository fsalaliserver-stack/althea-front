# Sécurité du front · Althea Systems

| Protection                          | Où                                  | Contre quoi                                          |
|-------------------------------------|-------------------------------------|------------------------------------------------------|
| CSP `default-src 'self'`            | `<head>` de chaque page             | scripts et styles injectés ou venus d’un autre site  |
| `object-src 'none'`                 | CSP                                 | plugins (Flash, applets)                             |
| `base-uri 'self'`                   | CSP                                 | détournement de l’adresse de base des liens          |
| `form-action 'self'`                | CSP                                 | formulaires envoyés vers un site pirate              |
| `referrer strict-origin-when-cross-origin` | `<head>` de chaque page      | fuite de l’adresse complète vers les autres sites    |
| `method="post"`                     | Connexion, Inscription              | mot de passe visible dans l’adresse et l’historique  |
| `autocomplete` + `type="password"`  | Connexion, Inscription              | mots de passe faibles, saisie visible                |
| `required`, `minlength`, `maxlength`| formulaires                         | erreurs de saisie (aide seulement, pas une sécurité) |
| liens `https://`                    | pied de page                        | lecture ou modification de la page sur le réseau     |
| `rel="noopener noreferrer"`         | liens `target="_blank"`             | prise de contrôle de l’onglet Althea (tabnabbing)    |
| `.gitignore`                        | racine du dépôt                     | secrets (.env, clés) envoyés sur le dépôt            |

## Limites

- La CSP en balise `meta` est une première protection. En production, le serveur enverra la CSP dans un en-tête HTTP (plus complet : `frame-ancestors`, rapports).
- Les contrôles HTML (`required`, `minlength`) peuvent être retirés dans l’inspecteur : le serveur devra tout revérifier.