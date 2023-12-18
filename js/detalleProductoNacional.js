const parametroURL = new URLSearchParams(window.location.search);
const idProducto = parametroURL.get("id");
const productoNuevo = JSON.parse(localStorage.getItem("listaProduKey"));
const productoBuscado = productoNuevo.find(
  (itemProducto) => itemProducto.id === idProducto
);
const mainDetalleProducto = document.querySelector("#detallesNacionales");
mainDetalleProducto.innerHTML += ` 
<article class="container pt-4">
  <h2
    class="my-4 text-start fst-italic tituloPagDetalles tx-Gris tx-titulo"
  >
    Nacionales
  </h2>
  <hr class="hrDetalles" />
  <!-- Carrousel -->

  <div class="mt-3 row">
    <div class="col-md-6 mt-md-5">
      <img
        src="${productoBuscado.img}"
        class="img-fluid"
        alt="${productoBuscado.nombre}"
      />
    </div>

    <div class="col-md-5 textoDetallesProd">
      <h5 class="tituloDetallesProd tx-Gris">${productoBuscado.nombre.toUpperCase()}</h5>

      <p class="textoPagDetalles tx-parrafo tx-Gris">Código: ${
        productoBuscado.id.slice(0, 5)
      }</p>
      <p class="precioDetalles fw-bold tx-parrafo">Precio: $${
        productoBuscado.precio
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
        productoBuscado.stock
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
          >INDUMENTARIA OFICIAL DE JUEGO DE ${productoBuscado.nombre.toUpperCase()}.
        </span>
      </li>
      <li>
        ${productoBuscado.descripcion}
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

// Obtener el botón "Agregar al carrito"
const btnAgregarCarrito = document.querySelector(".btnAgregarCarrito");


// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Obtener el carrito actual del localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.id === producto.id);

  if (productoExistente) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    productoExistente.cantidad += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Opcional: Puedes redirigir al usuario a la página del carrito
  window.location.href = "../pages/carritoDeCompras.html";
}


// Asignar un manejador de eventos al botón
btnAgregarCarrito.addEventListener("click", function () {
  // Llamar a la función agregarAlCarrito con el producto buscado
  agregarAlCarrito(productoBuscado);
});
