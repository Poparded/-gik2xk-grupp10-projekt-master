import api from "../api.js";

function TagList() {
    return (<h2>TagList</h2>);
}

export default TagList;


export async function getAll() {
    const result = await api.get("/ratings");

    if (result.status === 200) return result.data;
    else {
        console.log(result.status);
        console.log(result.data);
        console.log("Tom array");
        return [];
    }
}
