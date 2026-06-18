class Persona {
  constructor(nombre, dni, email) {
    this.nombre = nombre;
    this.dni = dni;
    this.email = email;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} (DNI: ${this.dni})`;
  }
}

module.exports = Persona;