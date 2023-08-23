# SETUP DU PROJET
## Installer NodeJS
Prendre la dernière version LTS : <a href="https://nodejs.org/en">En cliquant là</a>

## Installer Angular en global
```
    npm i -g @angular/cli
```
## Extensions utiles
- Angular Schematics => exécution de commande via un menu contextuelle
- Angular Snippets => Raccourcis
- Angular Language Service => Autocomplétion et cie
## Créer un projet
```
    ng new "nom du projet"
```
* routing ? y
* style -> scss
## Si projet cloné (ou si pas de node_modules)
```
    npm i
```
## Lancer le projet (attention, il faut être dans le projet angular)
```
    ng serve --open
```
Version flemme
```
    ng s -o
```
<br/>
<br/>
<hr/>
<br/>

# Installer TailWind
* <a href="https://tailwindcss.com/docs/guides/angular">Lien vers la doc</a>
* Installer Tailwind dans le projet
    ```
        npm install -D tailwindcss postcss autoprefixer
    ```
* Créer le fichier de config tailwind
    ```
        npx tailwindcss init
    ```
* Ajouter dans le fichier de config 
    ```
    content: [
    "./src/**/*.{html,ts}",
  ],
    ```
* Dans le fichier de style global 
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
* Extension sympatchik pour Tailwind :
    Tailwind CSS IntelliSense


<br/>
<br/>
<hr/>
<br/>

# LES COMMANDES POUR CREER DES TRUCS :
## Créer un composant
La version longue
```
    ng generate component (dossier(s)/)nomComponent
```
La version flemme
```
    ng g c (dossier(s)/)nomComponent
```
## Créer un module
La version longue
```
    ng generate module (dossier/)nomModule
```
La version flemme
```
    ng g m (dossier/)nomModule
```
Si on veut lui associer un routing
```
    ng g m (dossier/)nomModule --routing 
```

## Créer un pipe
La version longue
```
    ng generate pipe (dossier/)nomPipe
```
La version flemme
```
    ng g p (dossier/)nomPipe
```

## Créer une directive
La version longue
```
    ng generate d (dossier/)nomDirective
```
La version flemme
```
    ng g d (dossier/)nomDirective
```

## Créer un service
La version longue
```
    ng generate service (dossier/)nomService
```
La version flemme
```
    ng g s (dossier/)nomService
```