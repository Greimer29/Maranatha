var persona = {
    usuario: "GreimerKmon",
    contraseña: "2808600328086003",
    Nombres: "Greimer Abel",
    Apellidos: "Pérez Guzmán"
}

var user = document.getElementById("usuario-caja");
var password = document.getElementById("contraseña-caja");
var boton = document.getElementById("boton-boton");
var mensaje = document.getElementById("mensaje");

boton.addEventListener("click", comparar);

function comparar() {
    if ((user.value == persona.usuario) && (password.value == persona.contraseña)) {
        console.log("Entraste.");
        mensaje.innerHTML = "";
    } else if ((user.value == "" || password.value == "")) {
        mensaje.innerHTML = "Please fill in the blank.";
    } else {
        mensaje.innerHTML = "Sorry, but you dont exist in our Databases.";
    }
}