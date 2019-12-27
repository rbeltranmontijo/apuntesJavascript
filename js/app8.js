// Spread operator

let lenguajes = ["Javascript", "PHP", "Python"];
let freameworks = ["ReactJS", "Laravel", "Django"];

//unir los arreglos

// let combinacion = lenguajes.concat(freameworks);
// let combinacion = [...lenguajes, ...freameworks];

//aqui voltea el arreglo, pero si no se usa el spread operator tambien modifica
//el arreglo original
// let [ultimo] = [...lenguajes].reverse();

function suma(a, b, c) {
  console.log(a + b + c);
}
const numeros = [1, 2, 3];
suma(...numeros);

//MEtodos en arreglos
const persona = [
  { nombre: "Juan", edad: 23, aprendiendo: "Javascript" },
  { nombre: "Pablo", edad: 18, aprendiendo: "PHP" },
  { nombre: "Alejandra", edad: 21, aprendiendo: "AdobeXD" },
  { nombre: "Karen", edad: 30, aprendiendo: "Javascript" },
  { nombre: "Miguel", edad: 35, aprendiendo: "ReactJS" }
];

// console.log(persona);

//Mayores de 28 años
const mayores = persona.filter(persona => {
  return persona.edad > 28;
});
console.log(mayores);

// Que aprende Alejandra
const alejandra = persona.find(persona => {
  return persona.nombre === "Alejandra";
});
console.log(alejandra.aprendiendo);

//reduce
let total = persona.reduce((edadTotal, person) => {
  return edadTotal + person.edad;
}, 0);
console.log(total / persona.length);
