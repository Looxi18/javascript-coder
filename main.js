

function melodyShop() {
    let nombre = 'none'
    let album = 'none'
    function bienvenida() {
        nombre = prompt("Hola, Bienvenido a Melody Shop, tu tienda musical ¿Como te llamas?")
        if (nombre == '') {
            alert("Debes de ingresar un nombre para poder comprar en la tienda")
            bienvenida();
        }
        else if (nombre === null) {
            alert("¡Hasta Luego, te esperamos pronto!")
            bienvenida();
        }
        else {
            inicio()
        }

        album = prompt("¡Buenas " + nombre + "! ¿Que álbum musical deseas comprar? \n Escribe el numero que corresponda para elegir el álbum \n 1. Living Things (Linkin Park) \n 2. El mal querer (Rosalia) \n 3. Clancy (Twenty One Pilots) \n 4. Vol.3: The Subliminal Verses (Slipknot) \n 5. Love Language (Windwaker) \n 6. Renaissance (Apashe)")
    }
    bienvenida()
    function inicio() {
        album = prompt("¡Buenas " + nombre + "! ¿Que álbum musical deseas comprar? \n Escribe el numero que corresponda para elejir el álbum \n 1. Living Things (Linkin Park) \n 2. El mal querer (Rosalia) \n 3. Clancy (Twenty One Pilots) \n 4. Vol.3: The Subliminal Verses (Slipknot) \n 5. Love Language (Windwaker) \n 6. Renaissance (Apashe)")
        if (album == '') {
            let confirmacion = confirm("Debes elegir una de las opciones disponibles para poder continuar con tu compra o cancelar si deseas salir de la tienda")
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Hasta Luego, te esperamos pronto!")
            bienvenida();
        } else if (album === null) {
            alert("¡Hasta Luego, te esperamos pronto!")
            bienvenida();
        }
        else {
            comprar()
        }

    }


    function disfrutaTuAlbum() {
        console.log("Album adquirido con exito ¡Que lo disfrutes!")
    }

    disfrutaTuAlbum()


    function comprar() {
        if (album == 1) {
            confirmacion = confirm("Compraste Living Things de Linkin Park, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        if (album == 2) {
            confirmacion = confirm("Compraste El mal querer de Rosalia, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        if (album == 3) {
            confirmacion = confirm("Compraste Clancy de Twenty One Pilots, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        if (album == 4) {
            confirmacion = confirm("Compraste Vol.3: The Subliminal Verses de Slipknot, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        if (album == 5) {
            confirmacion = confirm("Compraste Love Language de Windwaker, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        if (album == 6) {
            confirmacion = confirm("Compraste Renaissance de Apashe, deseas seguir comprando?")
            disfrutaTuAlbum()
            if (confirmacion == true)
                inicio();
            else if (confirmacion == false)
                alert("¡Gracias por elegirnos!")
            bienvenida();
        }
        else {
            alert("Debes de escribir una opcion valida")
            inicio();
        }



    }

    comprar()

    bienvenida();

}

