export function duplicarArreglo(array : number[]): number[] {
    return array.map(x=>x *2);
}

let  numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbersList = duplicarArreglo(numbersList);
console.log(numbersList.join(","))