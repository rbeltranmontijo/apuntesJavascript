// Clases

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  mostrar() {
    super.mostrar();
    console.log(`y la cantidad de ${this.cantidad}`);
  }
  hola() {
    return "hola";
  }
}

//crear objetos
// let tarea1 = new Tarea("Aprender Javascript", "Alta");

// console.log(tarea1.mostrar());
// tarea1.mostrar();

//compras
let compras1 = new ComprasPendientes("Jabon", "Urgente", 3);
compras1.mostrar();
console.log(compras1.hola());
