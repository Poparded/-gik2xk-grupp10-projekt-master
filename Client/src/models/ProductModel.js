import api from "../api.js"
export async function getAllProducts(url = '/products') {

    const result = await api.get(url);
    console.log(result);

    if (result.status === 200) return result.data;

    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}

export async function getOne(id) {
    const result = await api.get(`/products/${id}`);

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}

export async function getOneWithRating(id) {
    const result = await api.get(`/products/rating/${id}`);
    console.log(result.data);
    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}
export async function update(product) {
    const result = await api.put('/products/', product);

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}

export async function create(product) {
    console.log(product);
    const result = await api.post('/products/new', product);

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }

}

export async function remove(id) {
    console.log(id);
    const result = await api.delete('/products', { data: { id } });

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}


export async function addRating(id, rating) {
    console.log(id);
    console.log(rating);
    const productId = id.ProductId;
    const result = await api.post(`/products/${productId}/addRating`, rating);

    if (result.status === 200) {
        return result.data;
    } else {
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}




