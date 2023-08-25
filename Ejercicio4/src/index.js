"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseOrder = void 0;
function ReverseOrder(array) {
    return array.reverse();
}
exports.ReverseOrder = ReverseOrder;
let array = [
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
console.log(JSON.stringify(ReverseOrder(array)));
