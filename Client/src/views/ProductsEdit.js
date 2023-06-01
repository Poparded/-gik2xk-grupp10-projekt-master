import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    create,
    getOne,
    remove,
    update,
} from "../models/ProductModel";


function ProductEdit() {
    const { id: productId } = useParams();
    const navigate = useNavigate();

    const [setAlertOpen] = useState(false);
    const emptyProduct = {
        id: 0,
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        amount: 0
    };
    const [product, setProduct] = useState(emptyProduct);

    useEffect(() => {
        getOne(productId).then(setProduct);
    }, [productId]);
    console.log(product);
    function onDelete() {
        console.log(product.id);
        remove(product.id).then(() => navigate('/products', { state: { message: "product removed" } }));
    }

    function onSave() {
        const method = product.id === 0 ? create : update;
        method(product).then(() => setAlertOpen(true),);
    }


    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    }

    return (
        <form>
            <TextField
                fullWidth
                name="title"
                id="title"
                label="Title"
                variant="standard"
                margin="normal"
                value={product.title}
                onChange={handleChange}
            />
            <TextField
                name="description"
                label="Description"
                value={product.description}
                fullWidth
                multiline
                minRows={7}
                onChange={handleChange}
            />
            <TextField
                name="pris"
                label="Pris"
                value={product.price}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                name="imageUrl"
                label="Produkt Image URL"
                value={product.imageUrl}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                name="amount"
                label="amount"
                value={product.amount}
                fullWidth
                onChange={handleChange}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={onSave}
            >
                Save
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={onDelete}
            >
                Delete
            </Button>

        </form>
    );
}

export default ProductEdit;