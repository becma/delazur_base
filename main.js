let patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");

$('body').on('keyup change paste cut', '#myEmail', function() {

    let res = patt.test($(this).val()) === true  ? 'Correct Email' : 'You have entered some crap';
$('.result').text(res)
});