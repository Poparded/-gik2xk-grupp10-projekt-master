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

    const [alertOpen, setAlertOpen] = useState(false);
    const emptyProduct = {
        id: 0,
        title: "",
        description: "",
        price: 0,
        productImg: "",
        units: 0
    };
    const [product, setProduct] = useState(emptyProduct);

    useEffect(() => {
        getOne(productId).then(setProduct);
    }, [productId]);

    function onSave() {
        const method = product.id === 0 ? create : update;
        method(product).then(() => setAlertOpen(true));
    }

    function onDelete() {
        remove(product).then(() => navigate('/products', { state: { message: "product removed" } }));
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
                name="price"
                label="Price"
                value={product.price}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                name="productImg"
                label="Product Image URL"
                value={product.productImg}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                name="units"
                label="Units"
                value={product.units}
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
