let form = document.querySelector('form');
let emailInput = document.querySelector('input[type=email]');

form.addEventListener('submit', function () {
    event.preventDefault();
    let indexArobas = emailInput.value.indexOf('@');
    let indexDot = emailInput.value.indexOf(".");

    if (indexArobas !== -1 && indexDot !== -1) {
        // alert("Ça fonctionne");
        form.submit();
    }
})
