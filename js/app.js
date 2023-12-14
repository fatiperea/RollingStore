import Producto from "./classProducto.js";

//constantes

const modalIngresoProducto = new bootstrap.Modal(
  document.getElementById("administrarProducto")
);
const btnIngresaProducto = document.getElementById("btnIngresaProducto");

console.log("boton ingresa", btnIngresaProducto);

const formProducto = document.querySelector("form");

console.log("form ",formProducto);

const nombre = document.getElementById("nombre"),
  precio = document.getElementById("precio"),
  categoria = document.getElementById("categoria"),
  img = document.getElementById("imagen"),
  descripcion = document.getElementById("descripcion"),
  stock = document.getElementById("stock");

const listaProductos = JSON.parse(localStorage.getItem("listaProduKey")) || [];

console.log("modal ", modalIngresoProducto);

//funciones

const crearProducto = (e) => {

  console.log("dentro de la fc");


  e.preventDefault();
  
  const producto = new Producto(
    undefined,
    nombre.value,
    precio.value,
    categoria.value,
    img.value,
    descripcion.value,
    stock.value
  );
    

  console.log("prod ", producto);

  //listaProductos.push(producto);

  //console.log("lista prod ", listaProductos);

  //formProducto.reset();

  //guardaLocalStorage();

  //llenarFila(producto, listaProducto.length);

  //modalIngresoProducto.hide();
};

function guardaLocalStorage() {
  localStorage.setItem("listaProduKey", JSON.stringify(listaProductos));
}


const mostrarModal = () => {
  modalIngresoProducto.show();
  //formProducto.reset();
};

btnIngresaProducto.addEventListener("click", mostrarModal);

formProducto.addEventListener("submit", crearProducto);


