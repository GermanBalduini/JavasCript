const productos = ["Camilla de cuadriceps, Camilla de Isquios, Prensa, Banco Plano, Banco Inclinado, Poleas Regulables"];

const Carrito = [];

const CamillaDeCuadriceps = 30.000;

nuevoCliente ()

function nuevoCliente(){
    let SaludoBienvenida = prompt("Bienvenido a Maquinas GB-FITNESS, en este momento tenemos stock de los siguientes productos: " + productos + "cual de estos productos te interesan?").toLowerCase()
    if (SaludoBienvenida === "Camilla de cuadriceps"){
        let cantidadProductos = parseInt((prompt("La camilla de cuadriceps tiene un valor de $30.000, cuantas desea?")))
        Carrito.push(cantidadProductos + "Camilla de cuadriceps")
    }
}
