const parametroURLInter = new URLSearchParams(window.location.search);
const idProductoInternacional = parametroURL.get("id");
const productoNuevoInter = JSON.parse(localStorage.getItem("listaProduKey2"));
const productoBuscadoInter = productoNuevoInter.find(
  (itemProductoInter) => itemProductoInter.id === idProducto
);
const mainDetalleProductoInter = document.querySelector(
  "#detallesInternacionales"
);
mainDetalleProductoInter.innerHTML += ` <section>
<article class="container pt-4">
  <h2
    class="my-4 text-start fst-italic tituloPagDetalles tx-Gris tx-titulo"
  >
    Internacionales
  </h2>
  <hr class="hrDetalles" />
  <!-- Carrousel -->

  <div class="mt-3 row">
    <div class="col-md-6 mt-md-5">
      <img
        src="${productoBuscadoInter.img}"
        class="img-fluid"
        alt="fotografía de camiseta deportiva"
      />
    </div>

    <div class="col-md-5 textoDetallesProd">
      <h5 class="tituloDetallesProd tx-Gris">${productoBuscadoInter.nombre.toUpperCase()}</h5>

      <p class="textoPagDetalles tx-parrafo tx-Gris">Código: ${
        productoBuscadoInter.id.slice(0 ,5)
      }</p>
      <p class="precioDetalles fw-bold tx-parrafo">Precio: $${
        productoBuscadoInter.precio
      }</p>

      <!-- Agregar producto al carrito -->

      <div
        class="text-center col-12 my-3 my-md-5 tx-parrafo btn btnAgregarCarrito"
      >
        <a href="../pages/carritoDeCompras.html" class="linkAgregarCarrito"
          ><i class="bi bi-cart-fill"> </i>Agregar al carrito</a
        >
      </div>

      <p class="textoPagDetalles tx-parrafo tx-Gris">Stock: ${
        productoBuscadoInter.stock
      }</p>
      <div class="mt-5">
        <p class="textoPagDetalles tx-parrafo tx-Gris">
          Medios de Pago
        </p>
        <img
          src="../img/VISA-Logo.png"
          class="img-fluid logoTarjeta"
          alt="logo de tarjeta visa"
        />
        <img
          src="../img/Mastercard_2019_logo.svg.png"
          class="img-fluid logoTarjeta mx-2"
          alt="logo de tarjeta mastercard"
        />
      </div>
    </div>
  </div>
</article>
</section>
<article>
<div class="container mt-5">
  <div class="row justify-content-around">
    <h6
      class="descripcionDetallesProd fst-italic tx-Intermedio fw-bold"
    >
      Descripcion
    </h6>
    <ul class="listaDescripcion tx-parrafo">
      <li>
        <span class="fw-bold tx-Gris"
          >INDUMENTARIA OFICIAL DE JUEGO DE ${productoBuscadoInter.nombre.toUpperCase()}.
        </span>
      </li>
      <li>
        ${productoBuscadoInter.descripcion}
      </li>
      <li><span class="fw-bold tx-Gris">Material: </span>Poliéster.</li>
      <li><span class="fw-bold tx-Gris">Manga:</span> Corta</li>
      <li>
        <span class="fw-bold tx-Gris">Adecuado para:</span> Todo el día.
      </li>
      <li>
        <span class="fw-bold tx-Gris">País del fabricante: </span>
        Argentina
      </li>
    </ul>
  </div>
</div>
</article>`;
