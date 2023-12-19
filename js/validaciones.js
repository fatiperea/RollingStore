export const validarInputNombre = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
};

export const validarInputDescripcion = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
};

export const validarStock = (stock, min, max) => {
  if (stock >= min && stock <= max) {
    return true;
  } else {
    return false
  }
};

export const validarPrecio = (precio, min, max) => {
    if (precio >= min && precio <= max) {
        return true;
      } else {
        return false
      }
} 
