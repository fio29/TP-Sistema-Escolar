class Curso {
    constructor(nombre, codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.alumnos = [];
        this.profesores = [];
    }

    agregarAlumno(alumno) {
        if (!this.alumnos.includes(alumno)) {
            this.alumnos.push(alumno);
        }
    }

    agregarProfesor(profesor) {
        if (!this.profesores.includes(profesor)) {
            this.profesores.push(profesor);
        }
    }

    cargarNota(alumno, nota) {
        alumno._agregarNota(this, nota);
    }

    cargarFalta(alumno) {
        alumno._agregarAsistencia(this);
    }
}

module.exports = Curso;