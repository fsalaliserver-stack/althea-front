# Sécurité · Althea Systems

## Protections mises en place

| Protection | Emplacement | Objectif |
|---|---|---|
| Content Security Policy | Toutes les pages HTML | Limiter les ressources autorisées |
| Referrer Policy | Toutes les pages HTML | Limiter les informations transmises |
| HTTPS | Liens externes | Sécuriser les communications |
| rel="noopener noreferrer" | Liens externes | Protéger l'onglet d'origine |
| method="post" | Connexion et inscription | Ne pas placer les mots de passe dans l'URL |
| required | Formulaires | Vérifier les champs obligatoires |
| minlength | Mot de passe | Imposer une longueur minimale |
| autocomplete | Formulaires | Faciliter la saisie sécurisée |

## Protection du dépôt Git

Le fichier .gitignore exclut :
- Les fichiers .env
- Les clés *.key
- Les fichiers .DS_Store
- Les fichiers Thumbs.db
- Le dossier .vscode/
- Le dossier node_modules/

## Limites

Les contrôles HTML peuvent être supprimés par le visiteur.

Le serveur doit donc vérifier les données reçues.
