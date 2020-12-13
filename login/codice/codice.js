//simulacion de una base de datos.
var persona = [{
    usuario: "GreimerKmon",
    contraseña: "28086003",
    Nombres: "Greimer Abel",
    Apellidos: "Pérez Guzmán"
}, {
    usuario: "Kenyer",
    contraseña: "28086005",
    Nombres: "Kenyer Josué",
    Apellidos: "Pérez Guzmán"
}, {
    usuario: "Yelito",
    contraseña: "12652491",
    Nombres: "Lennys Yelitza",
    Apellidos: "Guzmán de Pérez"
}, {
    usuario: "Tobias",
    contraseña: "10934709",
    Nombres: "José Tobias",
    Apellidos: "Pérez Martinez"
}];

//capturamos en variables los objetos de HTML
var user = document.getElementById("usuario-caja");
var password = document.getElementById("contraseña-caja");
var boton = document.getElementById("boton-boton");
var mensaje = document.getElementById("mensaje");

//evento click al boton para ingresar
boton.addEventListener("click", comparar);

function comparar() {
    if ((user.value == "" || password.value == "")) {
        mensaje.innerHTML = "Please fill in the blank.";
        console.log("Negado");
    } else {
        mensaje.innerHTML = "Sorry, but you dont exist in our Databases.";
        console.log("Negado");
    }
    let getUsuarioDB = persona.find(estudiante => estudiante.contraseña === password.value && estudiante.usuario === user.value);
    if ((getUsuarioDB)) {
        console.log("Entraste");
        mensaje.innerHTML = "";
        window.location.assign('http://127.0.0.1:5500/pages/user.html');
    }
}

/*function comparar() {
    if ((user.value == persona.usuario) && (password.value == persona.contraseña)) {
        console.log("Entraste.");
        mensaje.innerHTML = "";
        window.location.assign('http://127.0.0.1:5500/pages/user.html');
    } else if ((user.value == "" || password.value == "")) {
        mensaje.innerHTML = "Please fill in the blank.";
    } else {
        mensaje.innerHTML = "Sorry, but you dont exist in our Databases.";
    }
}*/