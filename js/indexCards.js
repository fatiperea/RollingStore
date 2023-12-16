/*------------------ VARIABLES GLOBALES ------------- */
const contenedorCardsNacionales = document.getElementById(
  "contenedorCardsNacionales"
);
const contenedorCardsInternacionales = document.getElementById(
  "contenedorCardsInternacionales"
);
const listaNacionales = JSON.parse(localStorage.getItem("listaProduKey"));
const listaInternacionales = JSON.parse(localStorage.getItem("listaProduKey2"));

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
              <a href="./pages/detalleProducto.html" class="btn btn-primary">Ver detalles</a>
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
              <a href="./pages/detalleProducto.html" class="btn btn-primary">Ver detalles</a>
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

/* ------------- LÓGICA EXTRA -------------- */
crearCardsDesdeLista();
crearCardsDesdeListaInternacional();
