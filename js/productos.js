const IVA = 1.21

function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio 
    this.stock = stock 
    this.PrecioFinal = function(){
        return this.precio * IVA
    }
}


const producto1 = new Producto("Prensa", 40000, 3)
const producto2 = new Producto("Banco Plano", 30000, 5)
const producto3 = new Producto("Sillon de cuadriceps", 25000, 3)