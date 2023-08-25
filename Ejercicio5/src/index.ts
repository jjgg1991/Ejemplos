export interface Datos {
  nombre: string;
  apellido: string;
}
export class DatosEmpresa {
  email: string;
  password: string;
  constructor(nombre: string, apellido: string) {
    this.email = `${nombre.trim()}${apellido.trim()}@axity,com`;
    this.password = "Ax1ty2023";
  }
}
export function mapear<T, U>(array: T[], callbak: (elemento: T) => U): U[] {
  return array.map((elemento) => {
    return callbak(elemento);
  });
}
const arrayOriginal: Datos[] = [
  {
    nombre: "Daniel",
    apellido: "Vargas ",
  },
  {
    nombre: "César",
    apellido: "Candia",
  },
  {
    nombre: "Jose",
    apellido: "Garcia",
  },
];
const arrayTransformado = mapear(
  arrayOriginal,
  (elemento) => new DatosEmpresa(elemento.nombre, elemento.apellido)
);
console.log(arrayTransformado);
