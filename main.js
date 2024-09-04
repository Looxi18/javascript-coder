let iconoCarrito = document.querySelector('.img-carrito');
let body = document.querySelector('body');
let cerrarCarrito = document.querySelector('.BotonCerrar');
let ListaCarrito = document.querySelector('.ListaCarrito');

iconoCarrito.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrito')
})

cerrarCarrito.addEventListener ('click', () => {
    body.classList.toggle('mostrarCarrito')
    
})


function Producto(id, nombre, artista, valor, año, cantidad) {
    this.id = id
    this.nombre = nombre
    this.artista = artista
    this.valor = valor
    this.año = año
    this.cantidad = cantidad
}
let album = new Producto(1, "Living Things", "Linkin Park", 15, 2012, 1)
let album2 = new Producto(2, "El mal querer", "Rosalia", 20, 2018, 1)
let album3 = new Producto(3, "Clancy", "Twenty One Pilots", 30, 2024, 1)
let album4 = new Producto(4, "Vol.3: The Subliminal Verses", "Slipknot", 15, 2005, 1)
let album5 = new Producto(5, "Love Language", "Windwaker", 18, 2022, 1)
let album6 = new Producto(6, "Hyperviolence", "Windwaker", 20, 2024, 1)
let album7 = new Producto(7, "Rennaisance", "Apashe", 25, 2020, 1)
let album8 = new Producto(8, "Take Me Back To Eden", "Sleep Token", 25, 2023, 1)
let album9 = new Producto(9, "Obsidian", "Northlane", 18, 2022, 1)
let album10 = new Producto(10, "Disparity", "Oceans Ate Alaska", 26, 2022, 1)
let album11 = new Producto(11, "Hit Me Hard and Soft", "Billie Eilish", 20, 2024, 1)
 
const productos = [
    album,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7,
    album8,
    album9,
    album10,
    album11
] 


//Almacenar productos que agreguemos al carrito

 let carrito = JSON.parse(localStorage.getItem("carrito")) || []
 MostrarCarrito()

  

 function AñadirAlCarrito(e){
    const id = parseInt(e.target.id)
    const producto = productos.find((prod) =>
        prod.id == id
    )
    carrito.push(producto)
    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
    MostrarCarrito()
}


function MostrarCarrito(){
    ListaCarrito.innerHTML = ""
    for (let index = 0; index < carrito.length; index++) {
    ListaCarrito.innerHTML += `
        <article class="item">
                        <div>
                        </div>
                        <div>
                            <p class="NombreArticulo">${carrito[index].nombre}</p>
                        </div>
                        <div>
                            <p class="PrecioTotal">$${carrito[index].valor}</p>
                        </div>
                        </div>
                        <button onclick="BorrarProducto(event)" id="${carrito[index].id}">Eliminar</button>
                    </article>
                    `
        
    }
}

function BorrarProducto(e){
    const id = parseInt(e.target.id) 
    const nuevoCarrito = carrito.filter(producto => producto.id !== id
    )
    carrito = nuevoCarrito
    localStorage.setItem("carrito", JSON.stringify(carrito))
    MostrarCarrito()

}


/* FAlTO HACER ESTA FUNCION function SumarProductos(e) */ 

    
