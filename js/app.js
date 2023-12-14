

/*const modalIngresoProducto = new bootstrap.Modal(
    document.querySelector("modal")
  );*/

const modalIngresoProducto = new bootstrap.Modal(document.getElementById("administrarProducto"));
const btnIngresaProducto=document.getElementById("btnIngresaProducto");
const formProducto=document.querySelector("form");

const nombre=getElementById(),
precio=getElementById(),
categoria=getElementById(),
img=getElementById(),
descripcion=getElementById(),
stock=getElementById();

  console.log("modal ",modalIngresoProducto);

  const mostrarModal = () => {
    modalIngresoProducto.show();
    formProducto.reset();
  };




    
  btnIngresaProducto.addEventListener("click", mostrarModal);
  
  formProducto.addEventListener("submit", crearProducto);
  