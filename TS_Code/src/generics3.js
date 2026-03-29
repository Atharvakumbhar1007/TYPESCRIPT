"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userResponse;
async function getData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await resp.json();
    userResponse = {
        data: data,
        status: resp.status,
        message: "success"
    };
    console.log(userResponse);
}
getData();
async function getData2() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await resp.json();
    userResponse = {
        data: {
            id: IdleDeadline.bind,
            name: DataTransfer.name
        },
        status: resp.status,
        message: "success"
    };
    console.log(userResponse);
}
getData2();
//# sourceMappingURL=generics3.js.map