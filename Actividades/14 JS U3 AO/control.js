var form = document.querySelector('form');
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');

form.onsubmit = function(e) {
    if (user.value === '' || pass.value === '' || !user.value.includes("@") || !user.value.includes(".")) {
        e.preventDefault();
        alert('El usuario debe ser su email completo: "tucorreo@algo.com" y debe proporcionar una contraseña.');
    } else {
        e.preventDefault();
        alert('Usuario registrado con éxito!');
    }

}