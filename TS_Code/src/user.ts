
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

//let's say you want to update a data partially
//partial - convert all fields to optional
//basically update is now {name?,age?,logged?}
function updatePu(update: Partial<PublicUser>) {
    pu.age = update.age ? update.age : pu.age;
    pu.name = update.name ? update.name : pu.name;
    pu.logged = update.logged ? update.logged : pu.logged;
    //if logged is false, age is 0 -> it will evaluate to false
}
function updatePuModern(update: Partial<PublicUser>) {
    Object.assign(pu, update); //only chnage values if provude  <- recommended
}

updatePu({ logged: false });
console.log(pu);
updatePu({ name: "Arvind", age: 45 });
console.log(pu);

//falsy and truthy values
//null and undefine evaluate to false -> falsy value
//anything withh value evaluates to true
//# sourceMappingURL=user.js.map

function update<T extends Object>(original: T, updates: Partial<T>): T {
    return Object.assign(original, updates);
}
//earlier the error was that , t Could be a string , number (primitive) and not an object like User.
//By using T extant oject - we cann ensure that only objects are provided
//test the above with product type and paritally update it - this is production grade
//modern

function update_2<T extends Object>(original: T, upadtes: Partial<T>): T {
    return { ...original, ...upadtes };
}
//immutable - reruired in react , redux , anguler

const pu2 = update_2(pu, { name: "vihang" });
console.log(pu2);