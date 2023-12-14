export default class Producto {
  #id;
  nombre;
  precio;
  categoria;
  img;
  descripcion;
  stock;

  constructor(id, nombre, precio, categoria, img, descripcion, stock = 10) {
    this.#id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.img = img;
    this.descripcion = descripcion;
    this.stock = stock;
  }

  get id() {
    return this.#id;
  }

  get nombre() {
    return this.nombre;
  }
  get precio() {
    return this.precio;
  }
  get categoria() {
    return this.categoria;
  }
  get img() {
    return this.img;
  }
  get descripcion() {
    return this.descripcion;
  }
  get stock() {
    return this.stock;
  }

  set id(id) {
    this.#id = id;
  }

  set nombre(nombre) {
    this.nombre = nombre;
  }

  set precio(precio) {
    this.precio = precio;
  }

  set categoria(categoria) {
    this.categoria = categoria;
  }

  set img(img) {
    this.img = img;
  }

  set descripcion(descripcion) {
    this.descripcion = this.descripcion;
  }

  set stock(stock) {
    this.stock = stock;
  }

  toJSON() {
    return {
      id: this.id,
      precio: this.precio,
      categoria: this.categoria,
      img: this.img,
      descripcion: this.descripcion,
      stock: this.stock,
    };
  }
}
