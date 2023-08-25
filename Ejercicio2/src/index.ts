export interface User{ 
id: number, 
name: string,
email:string,
isActive:boolean
}

export function find(array: User[]): number[] {
  return array.filter((x) => x.isActive).map(m=> m.id);
}

let array : User[]= [
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

