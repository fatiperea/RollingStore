/*------------------ VARIABLES GLOBALES ------------- */

const contenedorCardsNacionales = document.getElementById(
  "contenedorCardsNacionales"
);

const contenedorCardsInternacionales = document.getElementById(
  "contenedorCardsInternacionales"
);

const formBuscarProducto = document.querySelector("form");

const listaNacionales = JSON.parse(localStorage.getItem("listaProduKey"));
const listaInternacionales = JSON.parse(localStorage.getItem("listaProduKey2"));

const listaTotal = listaNacionales.concat(listaInternacionales);

/* -----------------FUNCIONES --------------------- */
/* para las nacionales */

const crearCardNacional = (producto) => {
  contenedorCardsNacionales.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3 text-center h-100">
          <div class="card justify-content-center bg-transparent border-1">
            <div class="card-body brilloImagenesSeccionPrincipal">
              <img
                class="img-fluid tamañoResponsiveImagenesDeSecciones"
                src="${producto.img}"
                alt="Producto: ${producto.nombre}"
              />
              <h4 class="tx-Gris tx-intermedio fs-6 fw-bold pt-3">
                $ ${producto.precio}
              </h4>
              <h4 class="tx-Gris tx-Intermedio fs-5 fw-lighter">
              ${producto.nombre.toUpperCase()}
              </h4>
              <button class="btn btn-info mt-1" onclick="verDetalleProductoNacional('${
                producto.id
              }')">Ver Detalle</button>
            </div>
          </div>
        </div>
      `;
};

const crearCardsDesdeLista = () => {
  if (listaNacionales && listaNacionales.length > 0) {
    listaNacionales.forEach((producto) => {
      crearCardNacional(producto);
    });
  } else {
    const contenedorCardsNacionales = document.getElementById(
      "contenedorCardsNacionales"
    );

    const mensajeSinProducto = document.createElement("div");
    mensajeSinProducto.className = "text-center tx-Intermedio tx-Gris";

    mensajeSinProducto.innerHTML = `
      <img
        src="./img/fondos/sinproductos.jpg"
        alt="No hay productos cargados"
        class="img-fluid imgSinProductos brilloImagenesSeccionPrincipal"
      />
      <h3 class="textoSinProductos">
        Aún no se cargaron productos en esta categoría, vuelve más tarde
      </h3>
    `;

    contenedorCardsNacionales.appendChild(mensajeSinProducto);
  }
};

/* para las internacionales */
const crearCardsInternacionales = (productoInt) => {
  contenedorCardsInternacionales.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3 text-center h-100">
          <div class="card justify-content-center bg-transparent border-1">
            <div class="card-body brilloImagenesSeccionPrincipal">
              <img
                class="img-fluid tamañoResponsiveImagenesDeSecciones"
                src="${productoInt.img}"
                alt="Producto: ${productoInt.nombre}"
              />
              <h4 class="tx-Gris tx-intermedio fs-6 fw-bold pt-3">
                $ ${productoInt.precio}
              </h4>
              <h4 class="tx-Gris tx-Intermedio fs-5 fw-lighter">
              ${productoInt.nombre.toUpperCase()}
              </h4>
              <button class="btn btn-info mt-1" onclick="verDetalleProductoInternacional('${
                productoInt.id
              }')">Ver Detalle</button>
            </div>
          </div>
        </div>
      `;
};

const crearCardsDesdeListaInternacional = () => {
  if (listaInternacionales && listaInternacionales.length > 0) {
    listaInternacionales.forEach((productoInt) => {
      crearCardsInternacionales(productoInt);
    });
  } else {
    const contenedorCardsInternacionales = document.getElementById(
      "contenedorCardsInternacionales"
    );

    const mensajeSinProducto = document.createElement("div");
    mensajeSinProducto.className = "text-center tx-Intermedio tx-Gris";

    mensajeSinProducto.innerHTML = `
      <img
        src="./img/fondos/sinproductos.jpg"
        alt="No hay productos cargados"
        class="img-fluid imgSinProductos brilloImagenesSeccionPrincipal"
      />
      <h3 class="textoSinProductos">
        Aún no se cargaron productos en esta categoría, vuelve más tarde
      </h3>
    `;

    contenedorCardsInternacionales.appendChild(mensajeSinProducto);
  }
};

//detalle producto nacional
window.verDetalleProductoNacional = (idProducto) => {
  window.location.href =
    window.location.origin + "/pages/detalleProducto.html?id=" + idProducto;
};

//detalle producto internacional
window.verDetalleProductoInternacional = (idProdInter) => {
  window.location.href =
    window.location.origin + "/pages/detalleProducto.html?id=" + idProdInter;
};

window.verDetalleProducto = (idProd) => {
  console.log(idProd);
  console.log(listaTotal.id);
  
   window.location.href =
    window.location.origin + "/pages/detalleProducto.html?id=" + idProd;
};

//filtrar

const buscarProducto = (e) => {
  e.preventDefault();
  const buscado = document.getElementById("inputBuscar").value.toUpperCase();
  console.log(buscado);

  if (listaTotal.length > 0) {
    for (let i = 0; i < listaTotal.length; i++) {
      if (listaTotal[i].nombre.toUpperCase()===buscado) {
        const modalMostrarProducto = new bootstrap.Modal(
          document.getElementById("productoBuscado")
        );
        const contenedorBuscado = document.getElementById("contenedorBuscado");

        contenedorBuscado.innerHTML += `<div class="modal-header">
              <h3 class="modal-title fs-5" id="buscarProductoLabel">
                Buscaste: ${listaTotal[i].nombre.toUpperCase()}
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src="${listaTotal[i].img}" alt="${listaTotal[i].nombre}" />
              <p>Precio: <b>$${listaTotal[i].precio}</b></p>
              <div class="modal-footer">

              <button class="btn btn-primary" onclick="verDetalleProducto('${
                listaTotal[i].id
              }')">
                Ver Detalle
              </button>
              </div>
            </div>`;

        modalMostrarProducto.show();
        //formBuscarProducto.reset();
      } else if (listaTotal[i].nombre.toUpperCase()!==buscado) 
      {
        Swal.fire({
          icon: "error",
          title: "Ups!",
          text: "Lo sentimos, por el momento no contamos con ese producto!",
        });
      }
    }
  } else if (listaTotal.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Ups!",
      text: "Lo sentimos, por ahora no contamos con ese producto",
    });
  }formBuscarProducto.reset();
};

/* ------------- LÓGICA EXTRA -------------- */

crearCardsDesdeLista();
crearCardsDesdeListaInternacional();

formBuscarProducto.addEventListener("submit", buscarProducto);
