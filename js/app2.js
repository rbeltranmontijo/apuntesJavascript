// Creando funciones

//function declaretion
//se puede llamar antes que declararla
function saludar(nombre) {
  console.log("Bienvenido ", nombre);
}
saludar("Juan");

//function expression
//En esta forma de declarar siempre hay que llamar la funcion despues de declararla
const cliente = function(nombreCliente) {
  console.log("Mostrando datos del cliente: ", nombreCliente);
};
cliente("Juan");

// Parametros por default en las funciones
// Los parametros seteados en la funcion se usan si no llegan los parametros al momento de
//llamar a la funcio
function actividad(nombre = "Walter White", actividad = "Quimica") {
  console.log(
    `La persona ${nombre}, esta realizando la actividad ${actividad}`
  );
}
actividad("Juan");

// Arrow functions
let viajando = (destino, duracion) => {
  console.log(`Viajando a la ciudad de: ${destino} por ${duracion}`);
};
let viaje = viajando("Paris", "9 dias");
