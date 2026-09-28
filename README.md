# Questions de compréhension (étape 1)
1. Bun avec la commande "bun install", il télécharge toutes les bibliothèques (react, vite, typescript, ect)

2. La structure de l'application est générée par Vite cad la création des fichiers App.tsx, main.tsx, index.html, etc
La commande est lancée par Bun "bun create vite premier-contact --template react-ts" 

Bun est comme le chef de chantier qui appelle Vite, et Vite est l'architecte qui dessine les plans et pose les murs. 

3. L'option --template react-ts est le modèle utilisé pour créer l'app

"crée-moi un projet qui utilise React et Typescript" 

4. Le nom du dossier crée est "premier-contact" 
bun create vite premier-contact --template react-ts
le nom après vite correpond au nom du dossier créé

5. Le programme qui fournit le serveur de développement est Vite 
quand on tape "bun run dev", bun exécute la commande mais c'est Vite qui fait le vrai travail en : 
- démarrant un serveur web sur http://localhost:5173/ 
- surveille les fichiers
- met à jour le navigateur automatiquement 


6. Les commandes "dev, build et lint" sont déclarées dans le fichier "package.json". 

7. Le fichier qui contient le composant principal de l'application est src/App.tsx car il contient l'interface 
(c'est ce fichier qu'on a modifié pour changer le titre Get started)

8. Quand on enregistre App.tsx, la page se met à jour automatiquement

cmd + s 
Vite détecte le changement 
il recompile juste le fichier modifié 
il envoie la nouvelle version au navigateur 
react remplace uniquement le morceau qui a changé 

9. HMR = Hot Module Replacement 
technique qui permet de remplacer un morceau de code dans une app sans recharger la page entière

Vite fournit le HMR 


# Questions de compréhension (étape 2)
Analogie, imagine une usine :

- index.html = la porte d'entrée de l'usine
- main.tsx = le chef d'atelier qui dit "on commence !"
- App.tsx = la chaîne de production principale
- Les composants (TopicCard, etc.) = les ouvriers qui fabriquent chaque pièce

1. On retrouve l'élément HTML possèdant l'id root dans index.html 
div id="root"  est une boite vide que react va remplir avec l'interface 

2. L'instruction document.getElementbyId("root") cherche l'élément hmtl qui a l'attribut id = "root" donc la boite vide ou se trouvera la future interface  

3. Le composant react rendu dans cet élement est App 

4. Le nom App commence par une maj car react distingue les composants (maj) et les balises html (min) (ex: TopicCard, Header, TopicPreview)

5. StrictMode est un outil de dév qui aide à détecter les pb potentiels dans le code react 

6. ! placé après getElementById('root') est l'opérateur d'assertion non-nulle en ts, il affirme que ce n'est pas NULL 

"Tu as ton téléphone ?" → Il pourrait répondre "oui" ou "non" (comme HTMLElement | null)

Tu dis : "J'affirme que tu as ton téléphone, prête-le moi !" → C'est le !

Tu prends la responsabilité de dire à TypeScript : "Fais-moi confiance, ce n'est pas null."

7. Les styles globaux sont dans le fichier src/index.css, elle s'applique à toute l'application et contient des élements comme la police, les couleurs de fond/texte, etc 

8. Les styles propres au composant App sont dans App.css et il contient par ex, le style de root,le style des logo, le style de card 

# Questiosn de compréhension (étape 3)

1. On utilise {studentName} et non le texte studentName car les accolades {} disent à react que c'est une variable et qu'il faut prendre sa valeur. 

2. Le tsx c'est dynamique, on a des noms de variables, on a des composants, des expresions, des conditionnels, des boucles, des fonctions etc 

3. On utilise className à la place de class car class est un mot réservé en js 

4. La balise <img> se termine par /> car en jsx, toute balise sans contenu doit être fermée explicitement 

5. Un composant react ne peut retourner qu'un seul élement racine.

// ❌ ERREUR : deux éléments racines
return (
  <h1>Titre</h1>
  <p>Description</p>
);
On peut utliser un div pour contourner ça mais sinon le fragment <>...</> retourné par App sert à ce qu'il n'y est pas de div inutile 

6. Les import au début du fichier App.tsx importent du code depuis d'autres fichiers dont on a besoin pour les utiliser dans le fichier actuel (App.tsx) comme la fonction useState 