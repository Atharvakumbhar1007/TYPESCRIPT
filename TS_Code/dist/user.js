"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Pick is a utility type
const user = {
    name: "Swayam",
    age: 36
};
console.log(`User name:${user.name}`);
console.log(`User age:${user.age}`);
const pu = {
    name: "Aditya",
    age: 32,
    id: "ABC",
    logged: true
};
console.log(pu);
//let's say you want to update a data partially
//partial - convert all fields to optional
//basically update is now {name?,age?,logged?}
function updatePu(update) {
    pu.age = update.age ? update.age : pu.age;
    pu.name = update.name ? update.name : pu.name;
    pu.logged = update.logged ? update.logged : pu.logged;
    //if logged is false, age is 0 -> it will evaluate to false
}
function updatePuModern(update) {
    Object.assign(pu, update); //only chnage values if provude  <- recommended
}
updatePu({ logged: false });
console.log(pu);
updatePu({ name: "Arvind", age: 45 });
console.log(pu);
updatePuModern({ name: "krunal", age: 18 });
console.log(pu);
//# sourceMappingURL=user.js.map