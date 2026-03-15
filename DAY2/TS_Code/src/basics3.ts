type ID = number | string;

// Customer datatype
type customer = {
    id: ID,
    name: string,
    age: number
};

// Car datatype
type Car = {
    id: ID,
    model: string,
    reg_no: string,
    owner: customer
};

const c1: Car = {
    id: 85,
    model: "110",
    reg_no: "MH 11 TC 321",
    owner: {
        id: 2,
        name: "Amit",
        age: 25
    }
};

console.log(c1);