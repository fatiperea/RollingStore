import Producto from "./classProducto";

//constantes

const modalIngresoProducto = new bootstrap.Modal(document.getElementById("administrarProducto"));
const btnIngresaProducto=document.getElementById("btnIngresaProducto");
const formProducto=document.querySelector("form");

const nombre=getElementById("nombre"),
precio=getElementById("precio"),
categoria=getElementById("categoria"),
img=getElementById(img),
descripcion=getElementById("descripcion"),
stock=getElementById("stock");

const listaProductos = JSON.parse(localStorage.getItem("listaProduKey")) || [];

  console.log("modal ",modalIngresoProducto);

//funciones

  const crearProducto = (e) => {
    e.preventDefault();
  
      const producto = new Producto(
        undefined,
        nombre.value,
        precio.value,
        categoria.value,
        img.value,
        stock.value
      );
      console.log("prod ", producto);
      
      listaProductos.push(producto);
  
      console.log("lista prod ",listaProductos);
  
      formProducto.reset();
  
      //guardaLocalStorage();
  
      //llenarFila(producto, listaProducto.length);
  
      modalIngresoProducto.hide();
  
  };
  

  const mostrarModal = () => {
    modalIngresoProducto.show();
    formProducto.reset();
  };

    
  btnIngresaProducto.addEventListener("click", mostrarModal);
  
  formProducto.addEventListener("submit", crearProducto);
  