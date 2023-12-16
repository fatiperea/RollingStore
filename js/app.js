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
let editar = true;
let idProductoGlobal = null;
// ---------------------------------- FUNCIONES -------------------------------------
const mostrarModalNacionales = () => {
  const modalTitulo = document.querySelector(".modal-header");
  modalTitulo.innerHTML = `<h2 class="modal-title fs-5" id="administrarProductoLabel">Ingrese Producto</h2>`;
  formProducto.querySelector('button[type="submit"]').textContent = "Agregar";
  limpiarFormulario();
  editar = true;
  modalIngresoProducto.show();
};
const guardarProducto = (e) => {
  e.preventDefault();

  if (editar) {
    crearProducto();
  } else {
    actualizarDatos();
  }
};
const crearProducto = () => {
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
  crearFilaNacionales(producto, listaProductos.length);
  modalIngresoProducto.hide();
  // ventana del sweet alert
  Swal.fire({
    title: "Buen trabajo!",
    text: `Agregaste una nueva camiseta de ${producto.nombre.toUpperCase()}`,
    icon: "success",
  });
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
    listaProductosInternacionales.length
  );
  modalIngresoIternacionales.hide();
  //ventana de swwt alert
  Swal.fire({
    title: "Buen trabajo!",
    text: `Agregaste una nueva camiseta de ${productoInternacionales.nombre.toUpperCase()}`,
    icon: "success",
  });
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
/*const mostrarModalNacionales = () => {
  limpiarFormulario();
  modalIngresoProducto.show();
  //formProducto.reset();
};*/

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
    <button class="btn btn-info mt-1 btnEditar" onclick="mostrarModalEditar('${producto.id}')">
      <i class="bi bi-pen-fill"></i>
    </button>
    <button class="btn btn-info mt-3 btnBorrar" onclick="borrarProducto('${producto.id}')">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </td>
</tr>`;
};

window.borrarProducto = (idProducto) => {
  //ventana alert
  Swal.fire({
    title: " ¿Borrar Casaca?",
    text: "No podrás revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Borrar!",
    cancelButtonText: "Conservar Casaca",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica
      const posicionProducto = listaProductos.findIndex(
        (itemProducto) => itemProducto.id === idProducto
      );
      listaProductos.splice(posicionProducto, 1);
      guardaLocalStorage();
      const tablaNacionales = document.querySelector("#tbody-naciolaes");
      tablaNacionales.removeChild(tablaNacionales.children[posicionProducto]);
      recargarPagina();
    }
  });
};
//editar
window.mostrarModalEditar = (idProducto) => {
  idProductoGlobal = idProducto;
  editar = false;

  const posicionProductoBuscado = listaProductos.findIndex(
    (itemProducto) => itemProducto.id === idProducto
  );

  const modalTitulo = document.querySelector(".modal-header");

  modalTitulo.innerHTML = `<h2 class="modal-title fs-5" id="administrarProductoLabel">Modificar Producto</h2>`;
  const btnEditar = document.querySelector(".btnAgregar");
  btnEditar.innerHTML = "Actualizar";

  console.log(posicionProductoBuscado);
  nombre.value = listaProductos[posicionProductoBuscado].nombre;
  precio.value = listaProductos[posicionProductoBuscado].precio;

  img.value = listaProductos[posicionProductoBuscado].img;
  descripcion.value = listaProductos[posicionProductoBuscado].descripcion;
  stock.value = listaProductos[posicionProductoBuscado].stock;

  modalIngresoProducto.show();

  console.log(editar);
};
const actualizarDatos = () => {
  const posicionProductoBuscado = listaProductos.findIndex(
    (itemProducto) => itemProducto.id === idProductoGlobal
  );
  console.log(posicionProductoBuscado);
  listaProductos[posicionProductoBuscado].nombre = nombre.value;
  listaProductos[posicionProductoBuscado].precio = precio.value;
  
  listaProductos[posicionProductoBuscado].img = img.value;
  listaProductos[posicionProductoBuscado].descripcion = descripcion.value;
  listaProductos[posicionProductoBuscado].stock = stock.value;
  guardaLocalStorage();
  //borrar fila
  const tablaProductos = document.querySelector("tbody");

  tablaProductos.removeChild(tablaProductos.children[posicionProductoBuscado]);
  //crear fila;
  crearFilaNacionales(
    listaProductos[posicionProductoBuscado],
    posicionProductoBuscado + 1
  );

  modalIngresoProducto.hide();

  recargarPagina();
};
const crearFilaInternacionales = (
  productoInternacionales,
  nroFilaInternacionales
) => {
  const tablaInternacionales = document.querySelector("#tbody-internacionales");
  tablaInternacionales.innerHTML += `<tr>
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
    <button class="btn btn-info mt-1 btnEditar">
      <i class="bi bi-pen-fill"></i>
    </button>
    <button class="btn btn-info mt-3 btnBorrar" onclick="borrarProductoInternacionales('${productoInternacionales.id}')">
      <i class="bi bi-trash3-fill"></i>
    </button>
  </td>
</tr>`;
};

window.borrarProductoInternacionales = (idProductoInternacionales) => {
  //ventana alert
  Swal.fire({
    title: " ¿Borrar Casaca?",
    text: "No podrás revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Borrar!",
    cancelButtonText: "Conservar Casaca",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica del borrado
      const posicionProducto = listaProductosInternacionales.findIndex(
        (itemProductoInternacionales) =>
          itemProductoInternacionales.id === idProductoInternacionales
      );
      listaProductosInternacionales.splice(posicionProducto, 1);
      guardaLocalStorageInternacionales();
      const tablaInternacionales = document.querySelector(
        "#tbody-internacionales"
      );
      tablaInternacionales.removeChild(
        tablaInternacionales.children[posicionProducto]
      );
      recargarPagina();
    }
  });
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
formProducto.addEventListener("submit", guardarProducto);
formProductoInternacionales.addEventListener(
  "submit",
  crearProductoInternacional
);
cargaInicial();
cargaInicialInternacionales();
