/*---------------------------------------- VARIABLES GLOBALES -------------------*/
const tablaCarrito = document.getElementById("tbodyCarrito");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*----------------------------------------- FUNCIONES ------------------------- */
function cargaInicialCarrito() {
  tablaCarrito.innerHTML = "";
  carrito.forEach((producto, index) => {
    const nuevaFila = `
      <tr>
        <th scope="row">${producto.id.slice(0, 5)}</th>
        <td>${producto.nombre.toUpperCase()}</td>
        <td>$${producto.precio}</td>
        <td>
          <div id="contenedorImgCarrito">
            <img
              src="${producto.img}"
              alt="${producto.nombre}"
              class="img-fluid imgTablaTamaño"
            />
          </div>
        </td>
        <td class="text-center">
          <button class="btn btnBorrarDelCarrito btn btn-info mt-3 btnBorrar"" data-index="${index}">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </td>
      </tr>
    `;
    tablaCarrito.innerHTML += nuevaFila;
  });
}

/* ---------------- LÓGICA EXTRA ---------------------- */
tablaCarrito.addEventListener("click", function (borrar) {
  if (borrar.target.classList.contains("btnBorrarDelCarrito")) {
    const index = borrar.target.getAttribute("data-index");
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargaInicialCarrito();
  }
});
cargaInicialCarrito();
