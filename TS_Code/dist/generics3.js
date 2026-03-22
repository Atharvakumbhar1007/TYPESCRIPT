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
//# sourceMappingURL=generics3.js.map