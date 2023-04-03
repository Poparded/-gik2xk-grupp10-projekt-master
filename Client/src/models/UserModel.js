import api from "../api.js"
export async function getAllUsers(url = "/users") {
    console.log("hey");

    const result = await api.get(url);
    console.log(result.data);
    if (result.status === 200) return result.data
    else {
        console.log(result.status);
        console.log(result.data);
        return [];

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
export async function getRatingByUser(id) {
    const result = await api.get(`/users/rating/${id}`);
    console.log(result.data);
    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}