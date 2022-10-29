
function Verproductos(){
    let productos = "Maquinas disponibles: \n" +
                    "1) Prensa \n" +
                    "2) Banco plano \n" +
                    "3) Camilla de cuadriceps \n"
                    
                    function nuevoCliente(){
                        let SaludoBienvenida = prompt("Bienvenido a Maquinas GB-FITNESS, en este momento tenemos stock de los siguientes productos: " + productos + "cual de estos productos te interesan?").toLowerCase()
                        if (SaludoBienvenida === "Camilla de cuadriceps"){
                            let cantidadProductos = parseInt((prompt("La camilla de cuadriceps tiene un valor de $30.000, cuantas desea?")))
                            Carrito.push(cantidadProductos + "Camilla de cuadriceps")
                        }
                    }

    let respuesta = prompt ("Ingresa el numero de producto para ver el precio: \n" + productos)
    
    switch (parseInt(respuesta)){
        case 1:
            console.log("Producto elegido: Prensa. Su precio es de $300.000")
            break;
        case 2: 
            console.log("Producto elegido: Banco Plano. Su precio es de $100.000")
            break;
            case 3: 
            console.log("Producto elegido: Camilla de cuadriceps. Su precio es de $80.000")
            break;

            default:
                console.error("No se reconoce el producto ingresado")
    }
    let continuar = confirm("Desea consultar el valor de otro producto?")
    if (continuar){
        Verproductos()
    }
}

const productos = ["Camilla de cuadriceps, Camilla de Isquios, Prensa, Banco Plano, Banco Inclinado, Poleas Regulables"];

const Carrito = [];

const CamillaDeCuadriceps = 30.000;

nuevoCliente ()

