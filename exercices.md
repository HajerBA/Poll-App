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