const carrito = []
const container = document.querySelector("contenedor-maquinas")

const boton = ()=> {
    const botonComprar = document.querySelectorAll(".btn btn-primary")
          botonComprar.forEach(btn => btn.addEventListener("click", (e)=> agregarAlCarrito(e)))
}

const cargarMisProductos = ()=> {
    container.innerHTML = ""
    productos.forEach(producto => container.innerHTML += retornoCard(producto))
    activarBotonesAdd()
}


const agregarAlCarrito = (e)=> {
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if (resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
        }
}

const guardarCarrito = ()=> {
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No hay un carrito guardado")
    }
}

recuperarCarrito()

cargarMisProductos()