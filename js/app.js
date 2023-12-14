

/*const modalIngresoProducto = new bootstrap.Modal(
    document.querySelector("modal")
  );*/

const modalIngresoProducto = new bootstrap.Modal(document.getElementById("administrarProducto"));
const btnIngresaProducto=document.getElementById("btnIngresaProducto");
  
  console.log("modal ",modalIngresoProducto);

  const mostrarModal = () => {
    modalIngresoProducto.show();
    formProducto.reset();
  };
    
  btnIngresaProducto.addEventListener("click", mostrarModal);
  
  //formContacto.addEventListener("submit", crearContacto);
  