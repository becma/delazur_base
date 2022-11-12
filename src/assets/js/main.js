/*<!--Javascript
    let form= document.querySelector("form");
    let emailInput=document.querySelector("input[type=email");
form.addEventListener("submit", function ()){
event.preventDefault();
        let indexArobas = emailValue.indexOf('@');
        let indexDot = emailValue.indexOf('.');
        if (indexArobas !== -1 && indexDot !== -1){
        } 
        console.log();
        }*/

        
// Fonction ouvrir modale

const abonne = document.getElementById("abonne");
const myModal = document.getElementById("myModal");
const modalcontent = document.getElementById("modalcontent");
const body = document.getElementById("body");
const boutonferme = document.getElementById("boutonferme");
const mainbtn = document.getElementById("mainbtn");
const modalsubmit = document.getElementById("modalsubmit");
let inputEmail = document.getElementById("email");
let form = document.querySelector('form');
const ferme = document.getElementById("ferme");

abonne.addEventListener("click", ouvrirModal);

function ouvrirModal() {
    modalcontent.style.display = "block";
    myModal.style.display = "block";
    body.style.setProperty("overflow", "hidden");

}

// Fermer la modale avec le bouton X

boutonferme.addEventListener("click", fermerModal);

function fermerModal() {
    modalcontent.style.display = "none";
    myModal.style.display = "none";
}

// Fonction validation email

form.addEventListener("submit", validateEmail);

function validateEmail() {
    event.preventDefault();

    let emailValue = inputEmail.value;
    let indexArobas = emailValue.indexOf('@');
    let indexPt = emailValue.indexOf('.');

    if (indexArobas !== -1 && indexPt !== -1) {
        modalcontent.style.display = "none";
        modalsubmit.style.display = "block";
    } else {
        inputEmail.style.backgroundColor = "#d679a6";
        alert("Votre courriel n'est pas valide!");
    }

}

// Fonction fermer la modale

ferme.addEventListener("click", fermerModal);
