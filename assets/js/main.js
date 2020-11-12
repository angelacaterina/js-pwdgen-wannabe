// Prompt
//Variabili
var userName = prompt("What's your name?");

alert("Hello " + userName);

var userLastName = prompt("What's your last name?");
var favoriteColor = prompt("What's your favourite colour?");

alert("Abbiamo finito con le domande per la creazione della tua password")

//metodo 1
document.getElementById('userPassword').innerHTML = userName + userLastName + favoriteColor + "19";

//metodo 2
var userPassword = document.getElementById('userPassword').innerHTML = userName + userLastName + favoriteColor + "19";
