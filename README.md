Ce projet est un prototype du mécanisme mis en place pour la définition des divers composants du projet ObjectiveArt.

## Guide de démarrage

Pour démarrer le projet, entrer en ligne de commande les instructions suivantes:

### `git clone https://github.com/ThibaultRizzo/objectiveart-proto.git`

Va cloner ce repository

### `cd objectiveart-proto`

Va changer le dossier actuel vers objectiveart-proto

### `yarn`

Va télécharger toutes les librairies nécessaires au projet.


### `yarn start`

Va démarrer l'application en mode développement.<br />
Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans le navigateur.

## Comment ajouter un nouveau composant

### Créer le nouveau fichier

Dupliquer le fichier SampleComponent.js dans le dossier /components.<br/>
Changer le nom du fichier dupliqué en respectant les conventions de nommage => PascalCase<br/>
ex: MonNouveauComposant.js<br/><br/>

Maintenant, remplacer le commentaire par votre HTML.

### Ajouter une nouvelle section

Dans le fichier state.js, dupliquer la section-exemple et ajouter <r/>

- le nom du composant dans le champ 'component'<br/>
- les données à injecter dans le champs data (sous format json)

### Insérer les données injectées dans le nouveau composant

Remplacer le commentaire correspondant par les données injectées. <br/>
Celles-ci peuvent maintenant être insérer dans le HTML entourées de {}<br/>

Exemple: <h1>{title}</h1>
