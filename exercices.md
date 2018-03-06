```js
let poll = {
  title: "Que boire au petit dej ?",
  options: [
    {text: "Thé", checked: false},
    {text: "Café", checked: false},
    {text: "Jus d'orange", checked: false},
    {text: "Rien, je suis en retard", checked: false},
  ]
}
```
1. Créer un component nommé `answer.vue` et remplacer le component `create` par `answer` dans `App.vue`
1. Générer un formulaire comportant des radios et un bouton submit à partir de l'objet ci-dessus.
1. Au submit du form, récupérer l'index de l'option qui à été cochée.
1. Toujours au moment du submit, mettre à jour l'objet `poll`

```js
{
  id: 1,
  title: "Que boire au petit dej ?",
  options: [
    {id: 1, text: "Thé", count: 10},
    {id: 2, text: "Café", count: 15},
    {id: 3, text: "Jus d'orange", count: 2},
    {id: 4, text: "Rien, je suis en retard", count: 21}
  ]
}
```

1. Créer un component nommé `result.vue` et remplacer le component `answer` par `result` dans `App.vue`
1. Calculer le nombre total de votes
1. Calculer le pourcentage de votes pour chaque options
1. Générer dans la vue une progressbar par options et leur attribuer le pourcentage calculé précédement
1. Ajouter également un label affichant la donnée `text` des options