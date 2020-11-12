// Prompt
//Variabili
var userName = prompt("Inserire il proprio nome");
var userLastName = prompt("Inserire il proprio cognome");
var favoriteColor = prompt("colore preferito?");

//metodo 1
document.getElementById('userPassword').innerHTML = userName + userLastName + favoriteColor + "19";

//metodo 2
var userPassword = document.getElementById('userPassword').innerHTML = userName + userLastName + favoriteColor + "19";
