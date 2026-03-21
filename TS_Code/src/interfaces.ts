//interface define the shop of an object
interface User {
    readonly id: number; //once adsignrd, cannot change
    name: string;
    email: string;
    age: number;
    description?: string;//optional
}

const user1: User = {
    id: 1,
    name: "Atharva",
    email: "atharva@gmail.com",
    age: 23
};
console.log("User 1:", user1);
//user1.id = 5;

interface Admin extends User {
    dept: string[]
}

const al: Admin = {
    id: 2,
    name: "Athex",
    email: "athex@gamil.com",
    age: 22,
    dept: ["HR", "Purchase"]
}

interface Point { x: number, y: number };
type PointType = { x: number, y: number };

interface Point { z: number }; //OK
const p: Point = { x: 45, y: 20, z: 13 };

type EPointType = PointType & { z: number };