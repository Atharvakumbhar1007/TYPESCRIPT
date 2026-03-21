//interface define the shop of an object
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

const user1: User = {
    id: 1,
    name: "Atharva",
    email: "atharva@gmail.com",
    age: 23
};
console.log("User 1:", user1);