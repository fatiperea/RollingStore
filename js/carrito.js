/*---------------------------------------- VARIABLES GLOBALES -------------------*/
const tablaCarrito = document.getElementById("tbodyCarrito");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*----------------------------------------- FUNCIONES ------------------------- */
function cargaInicialCarrito() {
  tablaCarrito.innerHTML = "";
  carrito.forEach((producto) => {
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
        <td>
          <button class="btn btnBorrarDelCarrito btn btn-info mt-3 btnBorrar" onclick="borrarProducto('${
            producto.id
          }')">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </td>
      </tr>
    `;
    tablaCarrito.innerHTML += nuevaFila;
  });
}

const guardaLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const recargarPagina = () => {
    location.reload();
  };
/* ---------------- LÓGICA EXTRA ---------------------- */
window.borrarProducto = (idProducto) => {
  // Ventana de confirmación con SweetAlert
  Swal.fire({
    title: "¿Borrar Casaca?",
    text: "No podrás revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Borrar",
    cancelButtonText: "Conservar Casaca",
  }).then((result) => {
    if (result.isConfirmed) {
      // Lógica para eliminar el producto
      const posicionProducto = carrito.findIndex(
        (itemProducto) => itemProducto.id === idProducto
      );
      carrito.splice(posicionProducto, 1);
      guardaLocalStorage();
      const tablaNacionales = document.querySelector("#tbodyCarrito");
      tablaNacionales.removeChild(tablaNacionales.children[posicionProducto]);
      recargarPagina();
    }
  });
};

cargaInicialCarrito();
