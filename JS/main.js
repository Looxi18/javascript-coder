const shopContainer = document.getElementById("shopContainer");
const verCarrito = document.getElementById("img-carrito");
const ventanaCarrito = document.getElementById("ventanaCarrito")
const cantidadCarrito = document.getElementById("cantidadCarrito")



//Lista de productos
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Recorre todos los productos creados y te los muestra en el HTML

const obtenerProductos = async () => {
    const respuesta = await fetch("./JSON/data.json");
    const data = await respuesta.json();
    data.forEach((product) => {
        let content = document.createElement("div");
        content.innerHTML = `
        <img class="imagenAlbumes" src= "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} U$S
        `;

        shopContainer.append(content);

        // Boton comprar de las cards 
        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "comprar";

        content.append(comprar);



        //Funcion para que cuando clickes en el boton, te agrege cada producto al carrito de compras
        comprar.addEventListener("click", () => {


            try {
                //Alerta cada que se agrega un producto nuevo al carrito
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Has agregado tu producto al carrito correctamente"
                });


                const sumarCantidades = carrito.some((repeatProduct) => repeatProduct.id === product.id);
                if (sumarCantidades) {
                    carrito.map((prod) => {
                        if (prod.id === product.id) {
                            prod.cantidad++;
                        }
                    })

                } else {
                    carrito.push({
                        id: product.id,
                        img: product.img,
                        nombre: product.nombre,
                        precio: product.precio,
                        cantidad: product.cantidad


                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No pudimos agregar el producto al carrito",
                });
            }
            console.log(carrito);
            contadorCarrito();
            saveLocal();


        })
    });


};

obtenerProductos();


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};














































/* const melodyShop = document.createElement("div");
melodyShop.innerHTML = `
<body class="mostrarCarrito">
<div class="container">
        <header>
            <h1>Melody Shop</h1>
            <div class="Carrito">
                <img class="img-carrito" src="img/carrito.png" alt="Carrito de Compras">
        </header>"

    <div class="shopContainer">
            <div class="album">
                <img class="imagenAlbumes" src="img/Linkin-Park.jpg" alt="Disco Living Things de Linkin Park">
                <p>Living Things, Linkin Park | 2012</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="1">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/Rosalia.jpg" alt="Disco El Mal Querer de Rosalia">
                <p>El Mal Querer, Rosalia | 2018</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="2">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/clancy.jpg" alt="Disco Clancy de Twenty One Pilots">
                <p>Clancy, Twenty One Pilots | 2024</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="3">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/slipknot.jpg" alt="Disco Vol.3: The Subliminal Verses de Slipknot">
                <p>Vol.3: The Subliminal Verses, Slipknot | 2005</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="4">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/windwaker.jpg" alt="Disco Love Language de Windwaker">
                <p>Love Language, Windwaker | 2022</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="5">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/hyperviolence.jpg" alt="Disco Hyperviolence de Windwaker">
                <p>Hyperviolence, Windwaker | 2024</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="6">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/obsidian.jpg" alt="Disco Obsidian de Northlane">
                <p>Obsidian, Northlane | 2022</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="7">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/takeMeBackToEden.jpg"
                    alt="Disco Take Me Back To Eden de Sleep Token">
                <p>Take Me Back To Eden, Sleep Token | 2023</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="8">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/apashe.jpg" alt="Disco Renaissance de Apashe">
                <p>Renaissance, Apashe | 2020</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="9">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/disparity.jpg" alt="Disco Disparity de Oceans Ate Alaska">
                <p>Disparity, Oceans Ate Alaska | 2022</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="10">Comprar</button>
            </div>
            <div class="album">
                <img class="imagenAlbumes" src="img/HitMeHardAndSoft.jpg"
                    alt="Disco Hit Me Hard And Soft de Billie Eilish">
                <p>Hit Me Hard And Soft, Billie Eilish | 2024</p>
                <button onclick="AñadirAlCarrito(event)" class="albumBoton" id="11">Comprar</button>
            </div>
        </div>
        <div class="CarritoTab">
<h2>Carrito de compras</h2>
<div class="ListaCarrito">
</div>
<div class="botonesCarritoDeCompras">
    <button class="BotonCerrar">Cerrar</button>
    <button class="BotonPagar">Pagar</button>
</div>
</div>

</body>
        `
document.body.appendChild(melodyShop)

let iconoCarrito = document.querySelector('.img-carrito');
let body = document.querySelector('body');
let cerrarCarrito = document.querySelector('.BotonCerrar');
let ListaCarrito = document.querySelector('.ListaCarrito');

iconoCarrito.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrito')
})

cerrarCarrito.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrito')

})


function Producto(nombre, artista, valor, año, cantidad) {
    this.nombre = nombre
    this.artista = artista
    this.valor = valor
    this.año = año
    this.cantidad = cantidad
}
let album = new Producto("Living Things", "Linkin Park", 15, 2012, 1)
let album2 = new Producto("El mal querer", "Rosalia", 20, 2018, 1)
let album3 = new Producto("Clancy", "Twenty One Pilots", 30, 2024, 1)
let album4 = new Producto("Vol.3: The Subliminal Verses", "Slipknot", 15, 2005, 1)
let album5 = new Producto("Love Language", "Windwaker", 18, 2022, 1)
let album6 = new Producto("Hyperviolence", "Windwaker", 20, 2024, 1)
let album7 = new Producto("Rennaisance", "Apashe", 25, 2020, 1)
let album8 = new Producto("Take Me Back To Eden", "Sleep Token", 25, 2023, 1)
let album9 = new Producto("Obsidian", "Northlane", 18, 2022, 1)
let album10 = new Producto("Disparity", "Oceans Ate Alaska", 26, 2022, 1)
let album11 = new Producto("Hit Me Hard and Soft", "Billie Eilish", 20, 2024, 1)


function AñadirAlCarrito(e) {
    const id = parseInt(e.target.id)
    const producto = productos.find((producto) =>
        producto.id == id
    )
    carrito.push(producto)
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito))
    MostrarCarrito()
}



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

/*let carrito = JSON.parse(localStorage.getItem("carrito")) || []
MostrarCarrito()



 
}


function MostrarCarrito() {
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

function BorrarProducto(e) {
    const id = parseInt(e.target.id)
    const nuevoCarrito = carrito.filter(producto => producto.id !== id
    )
    carrito = nuevoCarrito
    localStorage.setItem("carrito", JSON.stringify(carrito))
    MostrarCarrito()

}


FAlTO HACER ESTA FUNCION function SumarProductos(e) */



