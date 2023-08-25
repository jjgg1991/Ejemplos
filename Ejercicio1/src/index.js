"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicarArreglo = void 0;
function duplicarArreglo(array) {
    return array.map(x => x * 2);
}
exports.duplicarArreglo = duplicarArreglo;
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbersList = duplicarArreglo(numbersList);
console.log(numbersList.join(","));
