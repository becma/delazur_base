//Lancement de la modale lorsqu'on appui sur le bouton "S'abonner pour être au courant des dates ajoutées"
const abonner = document.getElementById("btn-abon");

abonner.addEventListener("click", function () {
    modale.style.display = "block";
})

//Soumettre le courriel et valider qu'il contient les éléments nécessaire
let email = document.getElementById("email");
const soumettre = document.getElementById("btn-soumettre");
const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Validation qu'il n'y a pas de caractère interdit dans le courriel, mais qu'il y a bien @ et .

//Afficage de la modale de remerciement pour l'inscription à l'infolettre
const modale = document.getElementById("modale");
const inscrit = document.getElementById("modale-inscrit");

soumettre.addEventListener("click", function () {
    if (email.value.match(validation)) {
        modale.style.display = "none";
        inscrit.style.display = "block";
    } else {
        alert("Votre courriel n'est pas valide!"); //Affichage d'une alerte si l'adresse courriel n'est pas valide
    }
})

//Fermeture de la modale après remerciement d'inscription
const fermer = document.getElementById("btn-fermer");

fermer.addEventListener("click", function () {
    inscrit.style.display = "none";
})

//Fermeture de la modale avec le X dans le coin
const fermerXModale = document.getElementsByClassName("x-ferme");

for (i = 0; i < fermerXModale.length; i++) {
    fermerXModale[i].addEventListener("click", function () {
        modale.style.display = "none";
        inscrit.style.display = "none";
    });
}