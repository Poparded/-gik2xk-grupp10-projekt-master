import api from "../api.js"
export async function getAll(url = "/users") {
    const result = await api.get(url);
    if (result.status === 200) return result.data
    else {
        console.log(result.status);
        console.log(result.data);
    }
}