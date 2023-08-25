"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
function find(array) {
    return array.filter((x) => x.isActive).map(m => m.id);
}
exports.find = find;
let array = [
    {
        id: 12345,
        name: "usuario 1",
        email: "usuario dos",
        isActive: true,
    },
    {
        id: 4563,
        name: "usuario 2",
        email: "usuario dos",
        isActive: true,
    },
    {
        id: 45634,
        name: "usuario 2",
        email: "usuario tres",
        isActive: false,
    },
];
console.log(find(array).join(","));
