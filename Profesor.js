const Persona = require("./Persona");

class Profesor extends Persona {
  constructor(nombre, dni, email) {
    super(nombre, dni, email);

    this.cursos = [];
  }

  asignarCurso(curso) {
    if (!this.cursos.includes(curso)) {
      this.cursos.push(curso);
    }

    curso.agregarProfesor(this);
  }

  registrarNota(curso, alumno, nota) {
    curso.cargarNota(alumno, nota);
  }

  registrarFalta(curso, alumno) {
    curso.cargarFalta(alumno);
  }

  reporte() {
    console.log(`Reporte del profesor ${this.nombre}`);

    this.cursos.forEach((curso) => {
      console.log(`Dicta: ${curso.nombre} (codigo: ${curso.codigo})`);
    });
  }
}

module.exports = Profesor;