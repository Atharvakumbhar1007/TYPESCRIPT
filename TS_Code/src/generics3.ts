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
    const resp = await fectch("https://jsonplaceholder.typecode.com/users/1");
    const data: User = await resp.json();
    userResponse = {
        data: data,
        status: resp.status,
        message: "success"
    }
    console.log(userResponse);
}
getData();