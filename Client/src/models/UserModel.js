import api from "../api.js"
export async function getAll(url = "/users") {
    const result = await api.get(url);
    if (result.status === 200) return result.data
    else {
        console.log(result.status);
        console.log(result.data);
    }
}


export async function addUser() {
    const result = await api.post('/users');

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}
export async function updateUser() {
    const result = await api.put('/users');

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}
export async function getRatingByUser() {
    const result = await api.put('/users');

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}