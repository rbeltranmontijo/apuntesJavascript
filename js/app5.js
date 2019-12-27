// Objet literal enchacement
const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master Of Puppets", "Seek and Destroy", "Enter Sadman"];

//forma anterior
// const metallica = {
//   banda: banda,
//   genero: genero,
//   canciones: cancions
// };

// forma nueva
const metallica = { banda, genero, canciones };

console.log(metallica);
