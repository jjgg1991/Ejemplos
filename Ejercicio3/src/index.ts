export interface Calificacion {
  nombre: string;
  calificacion: number;
}

export function find(array: Calificacion[]): Calificacion[] {
  const promedio: number =
    array.reduce((suma, alimno) => suma + alimno.calificacion, 0) /
    array.length;
    console.log(`el promedio es romedio:  ${promedio}`)
  return array.filter((x) => x.calificacion >= promedio);
}

let array: Calificacion[] = [
  {
    nombre: "alumno 1",
    calificacion: 7,
  },
  {
    nombre: "alumno 2",
    calificacion: 8,
  },
  {
    nombre: "alumno 3",
    calificacion: 9,
  },
  {
    nombre: "alumno 4",
    calificacion: 4,
  },
  {
    nombre: "alumno 5",
    calificacion: 5,
  },
  {
    nombre: "alumno 6",
    calificacion: 7.3,
  },
  {
    nombre: "alumno 7",
    calificacion: 8,
  },
];

console.log(
  find(array)
    .map((m) => m.nombre)
    .join(",")
);
