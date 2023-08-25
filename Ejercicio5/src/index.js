"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapear = exports.DatosEmpresa = void 0;
class DatosEmpresa {
    constructor(nombre, apellido) {
        this.email = `${nombre.trim()}${apellido.trim()}@axity,com`;
        this.password = "Ax1ty2023";
    }
}
exports.DatosEmpresa = DatosEmpresa;
function mapear(array, callbak) {
    return array.map((elemento) => {
        return callbak(elemento);
    });
}
exports.mapear = mapear;
const arrayOriginal = [
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
const arrayTransformado = mapear(arrayOriginal, (elemento) => new DatosEmpresa(elemento.nombre, elemento.apellido));
console.log(arrayTransformado);
