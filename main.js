const Alumno = require("./Alumno");
const Profesor = require("./Profesor");
const Curso = require("./Curso");

// Crear objetos
const poo = new Curso("POO", "POO01");

const profe = new Profesor(
  "Juan Perez",
  "12345678",
  "juan@mail.com"
);

const alumno1 = new Alumno(
  "Ana",
  "11111111",
  "ana@mail.com"
);

// Asignar profesor al curso
profe.asignarCurso(poo);

// Inscribir alumno
alumno1.inscribirse(poo);

// Cargar nota y asistencia
profe.registrarNota(poo, alumno1, 10);
alumno1._agregarAsistencia(poo);

// Mostrar reportes
profe.reporte();
alumno1.reporte();