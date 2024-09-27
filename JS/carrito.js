const pintarCarrito = () => {

    // Carrito de compras
    ventanaCarrito.innerHTML = "";
    ventanaCarrito.style.display = "flex";
    const tituloCarrito = document.createElement("div");
    tituloCarrito.className = "tituloCarrito";
    tituloCarrito.innerHTML = `
    <h2>Carrito de compras</h2>`;
    ventanaCarrito.append(tituloCarrito);


    const botonPagar = document.createElement("button");
    botonPagar.className = "botonPagar";
    botonPagar.innerHTML = `
    <h2>Pagar</h2>`
    tituloCarrito.append(botonPagar)

    botonPagar.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire("Necesitas tener al menos un producto en el carrito para proceder con el pago");
        } else {
            Swal.fire({
                title: "¡Muchas gracias por tu compra!",
                text: "Nos vemos pronto",
                imageUrl: "./img/imagenDiscos.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image"
            });
        }

    })

    //Boton para cerrar ventana de carrito de compras
    const cerrarCarrito = document.createElement("h2");
    cerrarCarrito.innerText = "X";
    cerrarCarrito.className = "cerrarCarrito";


    cerrarCarrito.addEventListener("click", () => {
        ventanaCarrito.style.display = "none";
    })
    tituloCarrito.append(cerrarCarrito);





    // Funcion que recorre los productos permitiendote asi mostrar cada producto dentro del carrito
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "contenido-carrito";
        carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} U$S </p>
    <p>Cantidad: ${product.cantidad}</p>
    `
        ventanaCarrito.append(carritoContent);
        let botonEliminar = document.createElement("span");
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.className = "botonEliminar";
        carritoContent.append(botonEliminar)
        botonEliminar.addEventListener("click", eliminarProducto)
    })




    // Funcion para sumar productos en el carrito
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const precioTotal = document.createElement("div")
    precioTotal.className = "precioTotal"
    precioTotal.innerHTML = `Total a pagar: ${total} U$S`
    ventanaCarrito.append(precioTotal)



};

verCarrito.addEventListener("click", pintarCarrito)

//Funcion para eliminar producto del carrito
const eliminarProducto = () => {
    const buscarId = carrito.find((element) => element.id);

    try {
        carrito = carrito.filter((carritoId) => {
            return carritoId !== buscarId;
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo eliminar el producto del carrito",
        });
    }


    contadorCarrito();
    saveLocal();
    pintarCarrito();
};



const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLenght", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"));
}

contadorCarrito();





