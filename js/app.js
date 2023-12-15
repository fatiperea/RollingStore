//----------------------------- IMPORTS ---------------------------------

import Producto from "./classProducto.js";

//----------------------------- VARIABLES GLOBALES ----------------------

const modalIngresoProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);

//console.log("modal ", modalIngresoProducto);

const btnIngresaProducto = document.getElementById("btnIngresaProducto");

//console.log("boton ingresa", btnIngresaProducto);

const formProducto = document.getElementById("formProducto");

//console.log("form ",formProducto);

const nombre = document.getElementById("nombre"),
  precio = document.getElementById("precio"),
  /* categoria = document.getElementById("categoria"), */
  img = document.getElementById("imagen"),
  descripcion = document.getElementById("descripcion"),
  stock = document.getElementById("stock");

const listaProductos = JSON.parse(localStorage.getItem("listaProduKey")) || [];

// ---------------------------------- FUNCIONES -------------------------------------

const crearProducto = (e) => {
  console.log("dentro de la fc");
  e.preventDefault();

  const producto = new Producto(
    undefined,
    nombre.value,
    precio.value,
   /*  categoria.value, */
    img.value,
    descripcion.value,
    stock.value
  );

  console.log("prod ", producto);
  listaProductos.push(producto);
  console.log("lista prod ", listaProductos);
  formProducto.reset();
  guardaLocalStorage();
  //llenarFila(producto, listaProducto.length);

  //modalIngresoProducto.hide();
};

function guardaLocalStorage() {
  localStorage.setItem("listaProduKey", JSON.stringify(listaProductos));
}

const mostrarModalNacionales = () => {
  modalIngresoProducto.show();
  //formProducto.reset();
};

const crearFila = (producto, nroFila) => {
  const tablaNacionales = document.querySelector("#tbody-naciolaes");
  tablaNacionales.innerHTML += `<tr>
  <th scope="row">${nroFila}</th>
  <td class="text-uppercase">${producto.nombre}</td>
  <td>$${producto.precio}</td>
  <td>
    Nacional
  </td>
  <td>
    <div id="contenedorImg">
      ${producto.img}
    </div>
  </td>
  <td>
    ${producto.descripcion}
  </td>
  <td>${producto.stock}</td>
  <td>
    <button class="btn btn-info" id="btnEditar">
      <i class="bi bi-pen-fill"></i>
    </button>
    <button class="btn btn-info" id="btnBorrar">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </td>
</tr>`;
};

const cargaInicial = () => {
  if (listaProductos.length > 0) {
    listaProductos.map((itemProducto, posicionArray) => crearFila(itemProducto, posicionArray +1));
  }
};

/* ----------------------------- LÓGICA EXTRA -------------------------------------------- */

btnIngresaProducto.addEventListener("click", mostrarModalNacionales);
formProducto.addEventListener("submit", crearProducto);
cargaInicial();
