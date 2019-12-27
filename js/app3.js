// OBJETOS

// Objet Literal
const persona = {
  nombre: "Juan",
  profesion: "Desarrollador Web",
  edad: 500
};
// console.log(persona);

// Objet Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

// Agregar prototype
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
};

//crear una nueva tarea
const tarea1 = new Tarea("Aprender Javascript", "Urgente");
console.log(tarea1.mostrarInformacionTarea());
