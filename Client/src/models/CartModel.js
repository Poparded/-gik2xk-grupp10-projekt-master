import api from "../api.js"
export async function getCartByUserId(id) {
    console.log("getting cart");
    const result = await api.get(`carts/user/${id}`);
    console.log(result);

    if (result.status === 200) return result.data;

    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}
export async function updateCart(cart, id) {
    console.log(id);
    const result = await api.put(`/carts/${id}`, cart);

    if (result.status === 200) return result.data;

    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}

export async function create(cart) {
    const result = await api.post('/carts/', cart);

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}  