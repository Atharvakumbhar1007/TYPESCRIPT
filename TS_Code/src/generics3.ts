//API Handling
interface APIResponse<T> {
    data: T;
    status?: number;
    message?: string;
}
interface User {
    id: number;
    name: string;
}

let userResponse: APIResponse<User>;
async function getData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data: User = await resp.json();
    userResponse = {
        data: data,
        status: resp.status,
        message: "success"
    }
    console.log(userResponse);
}
getData();

async function getData2() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data: User = await resp.json();

    userResponse = {
        data: data, // ✅ correct
        status: resp.status,
        message: "success"
    }

    console.log(userResponse);
}