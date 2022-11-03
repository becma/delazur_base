/*-------- FONCTION OUVRIR LA MODALE --------*/

const buttonModal = document.getElementById("buttonModal");
const modalFond = document.getElementById("modalFond");
const modalForm = document.getElementById("modalForm");
const body = document.getElementById("body");
const xbutton = document.getElementById("xbutton");
const buttonSubmit = document.getElementById("buttonSubmit");
const modalConfirm = document.getElementById("modalConfirm");
let inputEmail = document.getElementById("email");
let form = document.querySelector('form');
const buttonClose = document.getElementById("buttonClose");

buttonModal.addEventListener("click", ouvrirModal);

function ouvrirModal(){
    modalForm.style.display="block";
    modalFond.style.display="block";
    body.style.setProperty("overflow", "hidden");
    
}

/*------FONCTION FERMER LA MODALE PAR LE BOUTON X---------*/

xbutton.addEventListener("click", fermerModal);

function fermerModal(){
    modalForm.style.display="none";
    modalFond.style.display="none";
}

/*---------FONTCION VALIDATION EMAIL-------*/

form.addEventListener("submit", validateEmail);

function validateEmail(){
    event.preventDefault();

    let emailValue = inputEmail.value;
    let indexArobas = emailValue.indexOf('@');
    let indexPt = emailValue.indexOf('.');

    if (indexArobas !== -1 && indexPt !== -1){
        modalForm.style.display="none";
        modalConfirm.style.display="block";
    } else{
        inputEmail.style.backgroundColor="#d679a6";
        alert("Votre courriel n'est pas valide!");
    }

}

/*--------FONCTION QUITTER LA MODALE----*/

buttonClose.addEventListener("click", fermerModal);
    




