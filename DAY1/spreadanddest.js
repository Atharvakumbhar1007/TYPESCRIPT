const user = { name: "Atharva", age: 24 };
const newUser = { ...user }; //copy
console.log("Copy: ", newUser);

const upadtedUser = { ...user, age: 34, city: "Mumbai" };
console.log("Updated:", upadtedUser);//value upfated, new property added

const { name, age, city: homeCity } = upadtedUser;
//desturctured and mapped to new variable
console.log(name, age, homeCity);