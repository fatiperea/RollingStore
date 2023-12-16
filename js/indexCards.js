/*------------------ VARIABLES GLOBALES ------------- */
const contenedorCardsNacionales = document.getElementById(
  "contenedorCardsNacionales"
);
const listaNacionales = JSON.parse(localStorage.getItem("listaProduKey"));

/* -----------------FUNCIONES --------------------- */

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
    document.createElement(
      "<h2>Aun no se cargaron productos en esta categoria, Vuelve mas tarde"
    );
  }
};
/* ------------- LÓGICA EXTRA -------------- */
crearCardsDesdeLista();
