
type User = {
    id: string,
    name: string,
    age: number,
    logged: boolean,
    password: string
}

type DisplayUser = Pick<User, "name" | "age">;
// Pick is a utility type

const user: DisplayUser = {
    name: "Swayam",
    age: 36
}

console.log(`User name:${user.name}`);
console.log(`User age:${user.age}`);

//The opposite of pick is omit

type PublicUser = Omit<User, "password">;

const pu: PublicUser = {
    name: "Aditya",
    age: 32,
    id: "ABC",
    logged: true
};
console.log(pu);
// type Display User:pick<User,name|age>;
// create a variable for display user
// Add data to it
//print the data