const Persona = require("./Persona");

class Alumno extends Persona {
  constructor(nombre, dni, email) {
    super(nombre, dni, email);
    this.materias = [];
    this.registros = {};
  }

  inscribirse(curso) {
    if (!this.materias.includes(curso)) {
      this.materias.push(curso);
      this.registros[curso.codigo] = {
        notas: [],
        asistencias: 0,
        faltas: 0,
      };
    }
    curso.agregarAlumno(this);
  }

  _agregarNota(curso, nota) {
    this.registros[curso.codigo].notas.push(nota);
  }

  _agregarFalta(curso) {
    this.registros[curso.codigo].faltas++;
  }

  _agregarAsistencia(curso) {
    this.registros[curso.codigo].asistencias++;
  }

  promedio(curso) {
    const reg = this.registros[curso.codigo];
    if (!reg || reg.notas.length === 0) return 0;
    const suma = reg.notas.reduce((acc, n) => acc + n, 0);
    return suma / reg.notas.length;
  }

  consultarCondicion(curso) {
    const reg = this.registros[curso.codigo];
    if (!reg) return "No inscrito en esta materia";

    const prom = this.promedio(curso);
    const totalClases = reg.asistencias + reg.faltas;
    const porcentajeAsistencia =
      totalClases === 0 ? 100 : (reg.asistencias / totalClases) * 100;

    if (prom >= 8 && porcentajeAsistencia >= 75) return "PROMOCIONADO";
    if (prom >= 4 && porcentajeAsistencia >= 60) return "REGULAR";
    return "LIBRE";
  }

  reporte() {
    console.log(" Reporte del alumno ${this.nombre}");
    this.materias.forEach((curso) => {
      const prom = this.promedio(curso).toFixed(2);
      const condicion = this.consultarCondicion(curso);
    console.log(`${curso.nombre}: promedio ${prom} -> ${condicion}`);
    });
  }
}

module.exports = Alumno;