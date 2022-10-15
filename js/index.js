let NombreCompleto = prompt ("Ingresa tu nombre completo");

if (NombreCompleto === "German Balduini"){
    console.log ("Bienvenido German")
}else{
    alert ("No se reconoce el nombre completo")
}



function saludar(usuario){
    console.log("Bienvenido", usuario)
}

function login() {
    
    let usuario = prompt("Ingresa tu nombre de usuario:")
    
    if (usuario !==""){
        
        saludar(usuario)
    
    } else {
        
        console.warn("No se reconoce el usuario")
    
    }

}


function Verproductos(){
    let productos = "Maquinas disponibles: \n" +
                    "1) Prensa \n" +
                    "2) Banco plano \n" +
                    "3) Camilla de cuadriceps \n"

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
