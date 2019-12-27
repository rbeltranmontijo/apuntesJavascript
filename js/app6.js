// Metodos o funciones en un objeto
const persona = {
  nombre: "Juan",
  trabajo: "Desarrollador Web",
  edad: 500,
  musica: true,
  mostrarInformacion: function() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
};
persona.mostrarInformacion();
