/* =========================================
   MEXA BURGUER
========================================= */


/* =========================================
   CONFIGURACIÓN
========================================= */

const LATITUD_LOCAL =
    19.173971;

const LONGITUD_LOCAL =
    -98.382621;

const RADIO_ENTREGA_KM =
    1;

const WHATSAPP_NEGOCIO =
    "522271344370";



/* =========================================
   PRODUCTOS
========================================= */

const PRODUCTOS = [

    /* HAMBURGUESAS */

    {

        id:
            "hamburguesa-clasica",

        categoria:
            "hamburguesas",

        nombre:
            "Hamburguesa Clásica",

        descripcion:
            "Carne de res, queso, lechuga, jitomate y cebolla.",

        precio:
            85,

        imagen:
            "imagenes/hamburguesa.jpg",

        icono:
            "🍔",

        disponible:
            true

    },


    {

        id:
            "hamburguesa-bbq",

        categoria:
            "hamburguesas",

        nombre:
            "Hamburguesa BBQ",

        descripcion:
            "Carne de res, queso, cebolla y salsa BBQ.",

        precio:
            95,

        imagen:
            "imagenes/hamburguesa.jpg",

        icono:
            "🍔",

        disponible:
            true

    },


    {

        id:
            "hamburguesa-mexicana",

        categoria:
            "hamburguesas",

        nombre:
            "Hamburguesa Mexicana",

        descripcion:
            "Carne de res, queso, jalapeño, cebolla y aguacate.",

        precio:
            105,

        imagen:
            "imagenes/hamburguesa.jpg",

        icono:
            "🍔",

        disponible:
            true

    },


    {

        id:
            "hamburguesa-4",

        categoria:
            "hamburguesas",

        nombre:
            "Hamburguesa 4",

        descripcion:
            "Producto por definir.",

        precio:
            null,

        imagen:
            "imagenes/hamburguesa.jpg",

        icono:
            "🍔",

        disponible:
            false

    },



    /* HOT DOGS */

    {

        id:
            "hotdog-clasico",

        categoria:
            "hotdogs",

        nombre:
            "Hot Dog Clásico",

        descripcion:
            "Salchicha, jitomate, cebolla, catsup, mostaza y mayonesa.",

        precio:
            60,

        imagen:
            "imagenes/hot dog.png",

        icono:
            "🌭",

        disponible:
            true

    },


    {

        id:
            "hotdog-mexa",

        categoria:
            "hotdogs",

        nombre:
            "Hot Dog Mexa",

        descripcion:
            "Salchicha, queso, jalapeño, cebolla y aderezo de la casa.",

        precio:
            75,

        imagen:
            "imagenes/hot dog.png",

        icono:
            "🌭",

        disponible:
            true

    },


    {

        id:
            "hotdog-3",

        categoria:
            "hotdogs",

        nombre:
            "Hot Dog 3",

        descripcion:
            "Producto por definir.",

        precio:
            null,

        imagen:
            "imagenes/hot dog.png",

        icono:
            "🌭",

        disponible:
            false

    },


    {

        id:
            "hotdog-4",

        categoria:
            "hotdogs",

        nombre:
            "Hot Dog 4",

        descripcion:
            "Producto por definir.",

        precio:
            null,

        imagen:
            "imagenes/hot dog.png",

        icono:
            "🌭",

        disponible:
            false

    },



    /* PAPAS */

    {

        id:
            "papas-1",

        categoria:
            "papas",

        nombre:
            "Papas sabor 1",

        descripcion:
            "Sabor y precio por definir.",

        precio:
            null,

        icono:
            "🍟",

        disponible:
            false

    },


    {

        id:
            "papas-2",

        categoria:
            "papas",

        nombre:
            "Papas sabor 2",

        descripcion:
            "Sabor y precio por definir.",

        precio:
            null,

        icono:
            "🍟",

        disponible:
            false

    },


    {

        id:
            "papas-3",

        categoria:
            "papas",

        nombre:
            "Papas sabor 3",

        descripcion:
            "Sabor y precio por definir.",

        precio:
            null,

        icono:
            "🍟",

        disponible:
            false

    },


    {

        id:
            "papas-4",

        categoria:
            "papas",

        nombre:
            "Papas sabor 4",

        descripcion:
            "Sabor y precio por definir.",

        precio:
            null,

        icono:
            "🍟",

        disponible:
            false

    },

    /* ===========================
   BONELESS
=========================== */

{
    id:
        "boneless1",

    categoria:
        "boneless",

    nombre:
        "Boneless 1",

    descripcion:
        "Sabor por definir.",

    precio:
        null,

    imagenBase:
        "bonelessmexa",

    icono:
        "🍗",

    disponible:
        false
},


{
    id:
        "boneless2",

    categoria:
        "boneless",

    nombre:
        "Boneless 2",

    descripcion:
        "Sabor por definir.",

    precio:
        null,

    imagenBase:
        "bonelessmexa",

    icono:
        "🍗",

    disponible:
        false
},


{
    id:
        "boneless3",

    categoria:
        "boneless",

    nombre:
        "Boneless 3",

    descripcion:
        "Sabor por definir.",

    precio:
        null,

    imagenBase:
        "bonelessmexa",

    icono:
        "🍗",

    disponible:
        false
},


{
    id:
        "boneless4",

    categoria:
        "boneless",

    nombre:
        "Boneless 4",

    descripcion:
        "Sabor por definir.",

    precio:
        null,

    imagenBase:
        "bonelessmexa",

    icono:
        "🍗",

    disponible:
        false
},


    /* BEBIDAS */

    {

        id:
            "refresco",

        categoria:
            "bebidas",

        nombre:
            "Refresco",

        descripcion:
            "Refresco frío.",

        precio:
            30,

        imagen:
            "imagenes/agua maravuya.png",

        icono:
            "🥤",

        disponible:
            true

    },


    {

        id:
            "agua",

        categoria:
            "bebidas",

        nombre:
            "Agua fresca",

        descripcion:
            "Bebida fría.",

        precio:
            20,

        imagen:
            "imagenes/agua maravuya.png",

        icono:
            "🥤",

        disponible:
            true

    },


    {

        id:
            "bebida-3",

        categoria:
            "bebidas",

        nombre:
            "Bebida 3",

        descripcion:
            "Producto por definir.",

        precio:
            null,

        imagen:
            "imagenes/agua maravuya.png",

        icono:
            "🥤",

        disponible:
            false

    },


    {

        id:
            "bebida-4",

        categoria:
            "bebidas",

        nombre:
            "Bebida 4",

        descripcion:
            "Producto por definir.",

        precio:
            null,

        imagen:
            "imagenes/agua maravuya.png",

        icono:
            "🥤",

        disponible:
            false

    }

];



/* =========================================
   PROMOCIONES
========================================= */

const PROMOCIONES = [

    {
        dia:
            "Domingo",

        titulo:
            "Promo del domingo",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Lunes",

        titulo:
            "Promo del lunes",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Martes",

        titulo:
            "Promo del martes",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Miércoles",

        titulo:
            "Promo del miércoles",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Jueves",

        titulo:
            "Promo del jueves",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Viernes",

        titulo:
            "Promo del viernes",

        descripcion:
            "Promoción por confirmar."
    },


    {
        dia:
            "Sábado",

        titulo:
            "Promo del sábado",

        descripcion:
            "Promoción por confirmar."
    }

];



/* =========================================
   CATÁLOGO
========================================= */

const CATALOGO = {};



PRODUCTOS.forEach(

    function(producto) {

        CATALOGO[
            producto.id
        ] = producto;

    }

);



const carrito = {};

/* =========================================
   PROMOCIÓN COMO PRODUCTO
========================================= */

const PROMO_MEXA = {

    id:
        "promo-mexa",

    nombre:
        "Promo Mexa",

    descripcion:
        "Promoción disponible del día.",

    /*
       TODAVÍA NO TENEMOS PRECIO.

       Cuando David confirme el precio,
       por ejemplo $99:

       precio: 99
    */

    precio:
        null,

    esPromo:
        true,

    imagenBase:
        "promomexa"

};


CATALOGO[
    PROMO_MEXA.id
] = PROMO_MEXA;



/* =========================================
   ELEMENTOS
========================================= */

const listaCarrito =
    document.querySelector(
        "#lista-carrito"
    );


const listaResumen =
    document.querySelector(
        "#lista-resumen"
    );


const totalCarrito =
    document.querySelector(
        "#total-carrito"
    );


const totalResumen =
    document.querySelector(
        "#total-resumen"
    );


const contadorCarrito =
    document.querySelector(
        "#contador-carrito"
    );


const irResumen =
    document.querySelector(
        "#ir-resumen-pedido"
    );


const finalizarPedido =
    document.querySelector(
        "#finalizar-pedido"
    );


const abrirPedido =
    document.querySelector(
        "#abrir-pedido"
    );


const cerrarPedido =
    document.querySelector(
        "#cerrar-pedido"
    );


const panelPedido =
    document.querySelector(
        "#panel-pedido"
    );


const abrirPromo =
    document.querySelector(
        "#abrir-promo"
    );


const cerrarPromo =
    document.querySelector(
        "#cerrar-promo"
    );


const panelPromo =
    document.querySelector(
        "#panel-promo"
    );


const fondoPanel =
    document.querySelector(
        "#fondo-panel"
    );


const avisoCarrito =
    document.querySelector(
        "#aviso-carrito"
    );


const tipoEntrega =
    document.querySelector(
        "#tipo-entrega"
    );


const campoDireccion =
    document.querySelector(
        "#campo-direccion"
    );


const direccionCliente =
    document.querySelector(
        "#direccion-cliente"
    );


const usarUbicacion =
    document.querySelector(
        "#usar-ubicacion"
    );


const estadoUbicacion =
    document.querySelector(
        "#estado-ubicacion"
    );


const metodoPago =
    document.querySelector(
        "#metodo-pago"
    );


const campoEfectivo =
    document.querySelector(
        "#campo-efectivo"
    );


const campoTransferencia =
    document.querySelector(
        "#campo-transferencia"
    );


const pagoEfectivo =
    document.querySelector(
        "#pago-efectivo"
    );


const nombreCliente =
    document.querySelector(
        "#nombre-cliente"
    );


const observaciones =
    document.querySelector(
        "#observaciones"
    );



let mapa = null;

let marcador = null;

let ubicacionCliente = null;

let ubicacionAceptada = false;

let temporizadorAviso;



/* =========================================
   DINERO
========================================= */

function dinero(valor) {

    return (
        "$"
        +
        Number(valor)
            .toFixed(2)
    );

}



/* =========================================
   PRODUCTO ACTIVO
========================================= */

function productoActivo(
    producto
) {

    return (

        producto.disponible

        &&

        typeof producto.precio
        ===
        "number"

        &&

        producto.precio > 0

    );

}



/* =========================================
   TARJETA
========================================= */

function crearTarjeta(
    producto
) {


    const activo =
        productoActivo(
            producto
        );


    let imagen;


    if (
        producto.imagen
    ) {


        imagen = `

            <img

                class="producto-imagen"

                src="${producto.imagen}"

                alt="${producto.nombre}"

                data-icono="${producto.icono}"

            >

        `;


    } else {


        imagen = `

            <div
                class="producto-visual"
            >

                ${producto.icono}

            </div>

        `;

    }



    return `

        <article
            class="
                producto
                ${activo ? "" : "no-disponible"}
            "
        >


            ${imagen}


            <h4>

                ${producto.nombre}

            </h4>


            <p class="producto-descripcion">

                ${producto.descripcion}

            </p>


            <p class="precio">

                ${
                    activo

                    ?

                    dinero(
                        producto.precio
                    )

                    :

                    "Precio por definir"
                }

            </p>


            <div class="control-cantidad">


                <button

                    class="
                        cantidad-btn
                        restar
                    "

                    data-id="${producto.id}"

                    type="button"

                    ${activo ? "" : "disabled"}

                >

                    −

                </button>


                <span
                    data-cantidad-id="${producto.id}"
                >

                    0

                </span>


                <button

                    class="
                        cantidad-btn
                        sumar
                    "

                    data-id="${producto.id}"

                    type="button"

                    ${activo ? "" : "disabled"}

                >

                    +

                </button>


            </div>


        </article>

    `;

}



/* =========================================
   RENDER PRODUCTOS
========================================= */

function renderProductos() {


    [
        "hamburguesas",
        "hotdogs",
        "papas",
        "bebidas"
    ]

    .forEach(

        function(categoria) {


            const contenedor =
                document.querySelector(
                    "#productos-"
                    +
                    categoria
                );


            const productos =
                PRODUCTOS.filter(

                    function(producto) {

                        return (
                            producto.categoria
                            ===
                            categoria
                        );

                    }

                );


            contenedor.innerHTML =

                productos

                    .map(
                        crearTarjeta
                    )

                    .join("");

        }

    );



    /* FALLBACK IMAGEN */

    document

        .querySelectorAll(
            ".producto-imagen"
        )

        .forEach(

            function(imagen) {


                imagen.addEventListener(

                    "error",

                    function() {


                        const visual =
                            document.createElement(
                                "div"
                            );


                        visual.className =
                            "producto-visual";


                        visual.textContent =
                            imagen.dataset.icono
                            ||
                            "🍔";


                        imagen.replaceWith(
                            visual
                        );

                    }

                );

            }

        );

}



/* =========================================
   PESTAÑAS
========================================= */

function mostrarCategoria(
    categoria
) {


    document

        .querySelectorAll(
            ".pestana"
        )

        .forEach(

            function(pestana) {


                pestana.classList.toggle(

                    "activa",

                    pestana.dataset.categoria
                    ===
                    categoria

                );

            }

        );



    document

        .querySelectorAll(
            ".categoria"
        )

        .forEach(

            function(panel) {


                const activo =

                    panel.dataset.panel
                    ===
                    categoria;


                panel.hidden =
                    !activo;


                panel.classList.toggle(
                    "activa",
                    activo
                );

            }

        );

}



document

    .querySelectorAll(
        ".pestana"
    )

    .forEach(

        function(pestana) {


            pestana.addEventListener(

                "click",

                function() {


                    mostrarCategoria(

                        pestana
                            .dataset
                            .categoria

                    );

                }

            );

        }

    );



/* =========================================
   TOTAL
========================================= */

function obtenerTotal() {


    let total = 0;


    Object.keys(
        carrito
    )

    .forEach(

        function(id) {


            total +=

                CATALOGO[id]
                    .precio

                *

                carrito[id];

        }

    );


    return total;

}



/* =========================================
   CANTIDAD TOTAL
========================================= */

function cantidadTotal() {


    let cantidad = 0;


    Object.values(
        carrito
    )

    .forEach(

        function(valor) {

            cantidad +=
                valor;

        }

    );


    return cantidad;

}



/* =========================================
   AVISO
========================================= */

function mostrarAviso(
    texto
) {


    avisoCarrito.textContent =
        texto;


    avisoCarrito
        .classList
        .add(
            "visible"
        );


    clearTimeout(
        temporizadorAviso
    );


    temporizadorAviso =
        setTimeout(

            function() {

                avisoCarrito
                    .classList
                    .remove(
                        "visible"
                    );

            },

            1300

        );

}



/* =========================================
   CAMBIAR CANTIDAD
========================================= */

function cambiarCantidad(
    id,
    cambio
) {


    const producto =
        CATALOGO[id];


    if (
        !productoActivo(
            producto
        )
    ) {

        return;

    }



    let nuevaCantidad =

        (
            carrito[id]
            ||
            0
        )

        +

        cambio;



    if (
        nuevaCantidad <= 0
    ) {


        delete carrito[id];


    } else {


        carrito[id] =
            nuevaCantidad;

    }



    actualizarCarrito();



    if (
        cambio > 0
    ) {


        mostrarAviso(

            producto.nombre
            +
            " agregado"

        );

    }

}



/* =========================================
   ITEM CARRITO
========================================= */

function itemCarrito(
    id
) {


    const producto =
        CATALOGO[id];


    const cantidad =
        carrito[id];


    return `

        <div class="item-carrito">


            <div>


                <strong>

                    ${producto.nombre}

                </strong>


                <small>

                    ${cantidad}

                    ×

                    ${dinero(producto.precio)}

                </small>


                <small>

                    Subtotal:

                    ${
                        dinero(
                            producto.precio
                            *
                            cantidad
                        )
                    }

                </small>


            </div>


            <div class="control-cantidad">


                <button

                    class="
                        cantidad-btn
                        restar
                    "

                    data-id="${id}"

                    type="button"

                >

                    −

                </button>


                <span>

                    ${cantidad}

                </span>


                <button

                    class="
                        cantidad-btn
                        sumar
                    "

                    data-id="${id}"

                    type="button"

                >

                    +

                </button>


            </div>


        </div>

    `;

}



/* =========================================
   RESUMEN
========================================= */

function lineaResumen(
    id
) {


    const producto =
        CATALOGO[id];


    const cantidad =
        carrito[id];


    return `

        <div class="linea-resumen">

            <span>

                ${cantidad}

                ×

                ${producto.nombre}

            </span>


            <span>

                ${
                    dinero(
                        producto.precio
                        *
                        cantidad
                    )
                }

            </span>

        </div>

    `;

}



/* =========================================
   ACTUALIZAR
========================================= */

function actualizarCarrito() {


    const ids =
        Object.keys(
            carrito
        );


    const vacio =
        ids.length === 0;


    const total =
        obtenerTotal();



    document

        .querySelectorAll(
            "[data-cantidad-id]"
        )

        .forEach(

            function(elemento) {


                elemento.textContent =

                    carrito[
                        elemento.dataset.cantidadId
                    ]

                    ||

                    0;

            }

        );



    listaCarrito.innerHTML =

        vacio

        ?

        `

        <p class="carrito-vacio">

            Tu pedido está vacío.

        </p>

        `

        :

        ids

            .map(
                itemCarrito
            )

            .join("");



    listaResumen.innerHTML =

        vacio

        ?

        `

        <p class="carrito-vacio">

            Todavía no has agregado productos.

        </p>

        `

        :

        ids

            .map(
                lineaResumen
            )

            .join("");



    totalCarrito.textContent =
        dinero(total);


    totalResumen.textContent =
        dinero(total);


    contadorCarrito.textContent =
        cantidadTotal();


    irResumen.disabled =
        vacio;


    finalizarPedido.disabled =
        vacio;

}



/* =========================================
   EVENTOS + -
========================================= */

document.addEventListener(

    "click",

    function(evento) {


        const boton =
            evento.target.closest(
                ".cantidad-btn"
            );


        if (
            !boton
            ||
            boton.disabled
        ) {

            return;

        }



        if (

            boton.classList.contains(
                "sumar"
            )

        ) {


            cambiarCantidad(
                boton.dataset.id,
                1
            );

        }



        if (

            boton.classList.contains(
                "restar"
            )

        ) {


            cambiarCantidad(
                boton.dataset.id,
                -1
            );

        }

    }

);



/* =========================================
   PANELES
========================================= */

function cerrarPaneles() {


    panelPedido
        .classList
        .remove(
            "abierto"
        );


    panelPromo
        .classList
        .remove(
            "abierto"
        );


    fondoPanel.hidden =
        true;

}



abrirPedido.addEventListener(

    "click",

    function() {


        cerrarPaneles();


        panelPedido
            .classList
            .add(
                "abierto"
            );


        fondoPanel.hidden =
            false;

    }

);



abrirPromo.addEventListener(

    "click",

    function() {


        cerrarPaneles();


        panelPromo
            .classList
            .add(
                "abierto"
            );


        fondoPanel.hidden =
            false;

    }

);



cerrarPedido.addEventListener(
    "click",
    cerrarPaneles
);


cerrarPromo.addEventListener(
    "click",
    cerrarPaneles
);


fondoPanel.addEventListener(
    "click",
    cerrarPaneles
);



/* =========================================
   IR AL RESUMEN
========================================= */

irResumen.addEventListener(

    "click",

    function() {


        if (
            Object.keys(
                carrito
            ).length === 0
        ) {

            return;

        }


        cerrarPaneles();


        document

            .querySelector(
                "#resumen-pedido"
            )

            .scrollIntoView({

                behavior:
                    "smooth"

            });

    }

);



/* =========================================
   PROMOCIÓN
========================================= */

function mostrarPromo() {


    const promo =

        PROMOCIONES[
            new Date()
                .getDay()
        ];


    document
        .querySelector(
            "#dia-promo"
        )
        .textContent =
        promo.dia;


    document
        .querySelector(
            "#titulo-promo"
        )
        .textContent =
        promo.titulo;


    document
        .querySelector(
            "#descripcion-promo"
        )
        .textContent =
        promo.descripcion;

}



/* =========================================
   ENTREGA
========================================= */

function sincronizarEntrega() {


    const domicilio =

        tipoEntrega.value
        ===
        "Entrega a domicilio";


    campoDireccion.hidden =
        !domicilio;



    if (domicilio) {


        iniciarMapa();


        setTimeout(

            function() {

                if (
                    mapa
                ) {

                    mapa.invalidateSize();

                }

            },

            200

        );

    }

}



tipoEntrega.addEventListener(

    "change",

    sincronizarEntrega

);



/* =========================================
   PAGO
========================================= */

function sincronizarPago() {


    const efectivo =

        metodoPago.value
        ===
        "Efectivo";


    campoEfectivo.hidden =
        !efectivo;


    campoTransferencia.hidden =
        efectivo;

}



metodoPago.addEventListener(

    "change",

    sincronizarPago

);



/* =========================================
   MAPA
========================================= */

function iniciarMapa() {


    if (
        mapa
    ) {

        return;

    }



    mapa = L.map(
        "mapa-entrega"
    )

    .setView(

        [
            LATITUD_LOCAL,
            LONGITUD_LOCAL
        ],

        15

    );



    L.tileLayer(

        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

            maxZoom:
                19,

            attribution:
                "&copy; OpenStreetMap"

        }

    )

    .addTo(
        mapa
    );



    mapa.on(

        "click",

        function(evento) {


            establecerUbicacion(

                evento.latlng.lat,

                evento.latlng.lng

            );

        }

    );

}



/* =========================================
   UBICACIÓN
========================================= */

function establecerUbicacion(
    latitud,
    longitud
) {


    ubicacionCliente = {

        lat:
            latitud,

        lng:
            longitud

    };



    if (
        !marcador
    ) {


        marcador =
            L.marker(

                [
                    latitud,
                    longitud
                ],

                {
                    draggable:
                        true
                }

            )

            .addTo(
                mapa
            );



        marcador.on(

            "dragend",

            function() {


                const posicion =
                    marcador.getLatLng();


                establecerUbicacion(

                    posicion.lat,

                    posicion.lng

                );

            }

        );


    } else {


        marcador.setLatLng(

            [
                latitud,
                longitud
            ]

        );

    }



    mapa.setView(

        [
            latitud,
            longitud
        ],

        17

    );


    validarZona(
        latitud,
        longitud
    );

}



/* =========================================
   DISTANCIA
========================================= */

function distanciaKm(
    lat1,
    lon1,
    lat2,
    lon2
) {


    const radio =
        6371;


    function rad(
        valor
    ) {

        return (
            valor
            *
            Math.PI
            /
            180
        );

    }



    const dLat =
        rad(
            lat2 - lat1
        );


    const dLon =
        rad(
            lon2 - lon1
        );



    const a =

        Math.sin(
            dLat / 2
        ) ** 2

        +

        Math.cos(
            rad(lat1)
        )

        *

        Math.cos(
            rad(lat2)
        )

        *

        Math.sin(
            dLon / 2
        ) ** 2;



    return (

        radio

        *

        2

        *

        Math.atan2(

            Math.sqrt(a),

            Math.sqrt(
                1 - a
            )

        )

    );

}



/* =========================================
   VALIDAR
========================================= */

function validarZona(
    latitud,
    longitud
) {


    const distancia =

        distanciaKm(

            LATITUD_LOCAL,
            LONGITUD_LOCAL,

            latitud,
            longitud

        );



    ubicacionAceptada =

        distancia
        <=
        RADIO_ENTREGA_KM;



    estadoUbicacion.textContent =

        ubicacionAceptada

        ?

        "Ubicación aceptada ✅"

        :

        "Fuera de zona de entrega ❌";


    estadoUbicacion.style.color =

        ubicacionAceptada

        ?

        "#4bd77d"

        :

        "#ff6f6f";

}



/* =========================================
   GEOLOCALIZACIÓN
========================================= */

usarUbicacion.addEventListener(

    "click",

    function() {


        if (
            !navigator.geolocation
        ) {


            estadoUbicacion.textContent =
                "Tu navegador no permite obtener ubicación.";


            return;

        }



        usarUbicacion.disabled =
            true;


        usarUbicacion.textContent =
            "Buscando ubicación...";



        navigator.geolocation
            .getCurrentPosition(


                function(posicion) {


                    iniciarMapa();


                    establecerUbicacion(

                        posicion.coords.latitude,

                        posicion.coords.longitude

                    );


                    usarUbicacion.disabled =
                        false;


                    usarUbicacion.textContent =
                        "Usar mi ubicación 📍";

                },



                function() {


                    estadoUbicacion.textContent =
                        "No se pudo obtener tu ubicación. Puedes tocar el mapa.";


                    usarUbicacion.disabled =
                        false;


                    usarUbicacion.textContent =
                        "Usar mi ubicación 📍";

                },



                {

                    enableHighAccuracy:
                        true,

                    timeout:
                        12000

                }

            );

    }

);



/* =========================================
   FINALIZAR PEDIDO
========================================= */

finalizarPedido.addEventListener(

    "click",

    function() {


        const ids =
            Object.keys(
                carrito
            );


        if (
            ids.length === 0
        ) {


            alert(
                "Agrega productos al pedido."
            );


            return;

        }



        const nombre =

            nombreCliente
                .value
                .trim();



        if (
            !nombre
        ) {


            alert(
                "Escribe tu nombre."
            );


            nombreCliente.focus();


            return;

        }



        const entrega =
            tipoEntrega.value;



        if (

            entrega
            ===
            "Entrega a domicilio"

            &&

            (
                !ubicacionCliente

                ||

                !ubicacionAceptada
            )

        ) {


            alert(
                "Selecciona una ubicación válida."
            );


            return;

        }



        const total =
            obtenerTotal();


        const pago =
            metodoPago.value;


        let pagoTexto =
            "Método de pago: "
            +
            pago;



        if (
            pago === "Efectivo"
        ) {


            const efectivo =
                Number(
                    pagoEfectivo.value
                );


            if (

                !efectivo

                ||

                efectivo < total

            ) {


                alert(

                    "Indica con cuánto pagarás."

                );


                return;

            }



            pagoTexto +=

                "\nPaga con: "
                +
                dinero(
                    efectivo
                )

                +

                "\nCambio: "
                +
                dinero(
                    efectivo
                    -
                    total
                );

        }



        const productosTexto =

            ids

                .map(

                    function(id) {


                        const producto =
                            CATALOGO[id];


                        const cantidad =
                            carrito[id];


                        return (

                            "• "

                            +

                            cantidad

                            +

                            " x "

                            +

                            producto.nombre

                            +

                            " — "

                            +

                            dinero(

                                producto.precio
                                *
                                cantidad

                            )

                        );

                    }

                )

                .join(
                    "\n"
                );



        let entregaTexto =

            "Entrega: "
            +
            entrega;



        if (

            entrega
            ===
            "Entrega a domicilio"

        ) {


            if (

                direccionCliente
                    .value
                    .trim()

            ) {


                entregaTexto +=

                    "\nReferencia: "

                    +

                    direccionCliente
                        .value
                        .trim();

            }



            entregaTexto +=

                "\nUbicación: https://maps.google.com/?q="

                +

                ubicacionCliente.lat

                +

                ","

                +

                ubicacionCliente.lng;

        }



        let notas =
            "";


        if (

            observaciones
                .value
                .trim()

        ) {


            notas =

                "\nObservaciones: "

                +

                observaciones
                    .value
                    .trim();

        }



        const mensaje =

            "🍔 *NUEVO PEDIDO - MEXA BURGUER*"

            +

            "\n\nCliente: "

            +

            nombre

            +

            "\n\n*Pedido:*"

            +

            "\n"

            +

            productosTexto

            +

            "\n\n*Total: "

            +

            dinero(total)

            +

            "*"

            +

            "\n\n"

            +

            entregaTexto

            +

            "\n\n"

            +

            pagoTexto

            +

            notas;



        const url =

            "https://wa.me/"

            +

            WHATSAPP_NEGOCIO

            +

            "?text="

            +

            encodeURIComponent(
                mensaje
            );



        window.open(
            url,
            "_blank"
        );

    }

);



/* =========================================
   INICIAR
========================================= */

renderProductos();

mostrarCategoria(
    "hamburguesas"
);

mostrarPromo();

sincronizarEntrega();

sincronizarPago();

actualizarCarrito();