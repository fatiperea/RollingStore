//----------------------------- IMPORTS ---------------------------------

import Producto from "./classProducto.js";

//----------------------------- VARIABLES GLOBALES ----------------------

const modalIngresoProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);

const modalIngresoIternacionales = new bootstrap.Modal(
  document.getElementById("administrarProductoInternacionales")
);

const btnIngresaProducto = document.getElementById("btnIngresaProducto");
const btnIngresaInternacionales = document.getElementById("btnElijeTabla");

const formProducto = document.getElementById("formProducto");
const formProductoInternacionales = document.getElementById(
  "formProductoInternacionales"
);

const nombre = document.getElementById("nombre");
const nombreInternacional = document.getElementById("nombreInternacionales");
const precio = document.getElementById("precio");
const precioInternacional = document.getElementById("precioInternacionales");
const img = document.getElementById("imagen");
const imagenInternacionales = document.getElementById("imagenInternacionales");
const descripcion = document.getElementById("descripcion");
const descripcionInternacionales = document.getElementById(
  "descripcionInternacionales"
);
const stock = document.getElementById("stock");
const stockInternacionales = document.getElementById("stockInternacionales");

const listaProductos = JSON.parse(localStorage.getItem("listaProduKey")) || [];
const listaProductosInternacionales =
  JSON.parse(localStorage.getItem("listaProduKey2")) || [];

// ---------------------------------- FUNCIONES -------------------------------------

const crearProducto = (e) => {
  e.preventDefault();

  const producto = new Producto(
    undefined,
    nombre.value,
    precio.value,
    img.value,
    descripcion.value,
    stock.value
  );

  listaProductos.push(producto);
  guardaLocalStorage();
  crearFilaNacionales(producto, listaProductos.length - 1);
  modalIngresoProducto.hide();
  recargarPagina();
};

const crearProductoInternacional = (e) => {
  e.preventDefault();

  const productoInternacionales = new Producto(
    undefined,
    nombreInternacional.value,
    precioInternacional.value,
    imagenInternacionales.value,
    descripcionInternacionales.value,
    stockInternacionales.value
  );

  listaProductosInternacionales.push(productoInternacionales);
  guardaLocalStorageInternacionales();
  crearFilaInternacionales(
    productoInternacionales,
    listaProductosInternacionales - 1
  );
  modalIngresoIternacionales.hide();
  recargarPagina();
};

const recargarPagina = () => {
  location.reload();
};

const limpiarFormulario = () => {
  formProducto.reset();
};
const guardaLocalStorage = () => {
  localStorage.setItem("listaProduKey", JSON.stringify(listaProductos));
};

const guardaLocalStorageInternacionales = () => {
  localStorage.setItem(
    "listaProduKey2",
    JSON.stringify(listaProductosInternacionales)
  );
};
const mostrarModalNacionales = () => {
  limpiarFormulario();
  modalIngresoProducto.show();
  //formProducto.reset();
};

const mostrarModalInternacionales = () => {
  formProductoInternacionales.reset();
  modalIngresoIternacionales.show();
  //formProducto.reset();
};

const crearFilaNacionales = (producto, nroFila) => {
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
    <img src="${producto.img}" class="imgTablaTamaño">
    </div>
  </td>
  <td>
    ${producto.descripcion}
  </td>
  <td>${producto.stock}</td>
  <td>
    <button class="btn btn-info mt-1" id="btnEditar">
      <i class="bi bi-pen-fill"></i>
    </button>
    <button class="btn btn-info mt-3" id="btnBorrar">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </td>
</tr>`;
};

const crearFilaInternacionales = (
  productoInternacionales,
  nroFilaInternacionales
) => {
  const tablaNacionales = document.querySelector("#tbody-internacionales");
  tablaNacionales.innerHTML += `<tr>
  <th scope="row">${nroFilaInternacionales}</th>
  <td class="text-uppercase">${productoInternacionales.nombre}</td>
  <td>$${productoInternacionales.precio}</td>
  <td>
    Internacional
  </td>
  <td>
    <div id="contenedorImg">
    <img src="${productoInternacionales.img}" class="imgTablaTamaño">
    </div>
  </td>
  <td>
    ${productoInternacionales.descripcion}
  </td>
  <td>${productoInternacionales.stock}</td>
  <td>
    <button class="btn btn-info mt-1" id="btnEditar">
      <i class="bi bi-pen-fill"></i>
    </button>
    <button class="btn btn-info mt-3" id="btnBorrar">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </td>
</tr>`;
};

const cargaInicial = () => {
  if (listaProductos.length > 0) {
    listaProductos.map((itemProducto, posicionArray) =>
      crearFilaNacionales(itemProducto, posicionArray + 1)
    );
  }
};

const cargaInicialInternacionales = () => {
  if (listaProductosInternacionales.length > 0) {
    listaProductosInternacionales.map(
      (itemProductoInternacionales, posicionArrayInternacionales) =>
        crearFilaInternacionales(
          itemProductoInternacionales,
          posicionArrayInternacionales + 1
        )
    );
  }
};

/* ----------------------------- LÓGICA EXTRA -------------------------------------------- */

btnIngresaProducto.addEventListener("click", mostrarModalNacionales);
btnIngresaInternacionales.addEventListener(
  "click",
  mostrarModalInternacionales
);
formProducto.addEventListener("submit", crearProducto);
formProductoInternacionales.addEventListener(
  "submit",
  crearProductoInternacional
);
cargaInicial();
cargaInicialInternacionales();
