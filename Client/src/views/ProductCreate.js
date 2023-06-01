import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { create } from "../models/ProductModel";

function ProductEdit() {
    const navigate = useNavigate();

    const [setAlertOpen] = useState(false);
    const emptyProduct = {
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        amount: 0,
    };
    const [product, setProduct] = useState(emptyProduct);

    function onSave() {
        create(product).then(() => {
            setAlertOpen(true);
            navigate("/products", { state: { message: "product created" } });
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }

    return (
        <div
            style={{
                backgroundColor: "#333333",
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form
                style={{
                    maxWidth: 500,
                    backgroundColor: "#ffffff",
                    padding: "20px",
                }}
            >
                <Typography variant="h5" gutterBottom style={{ marginBottom: "20px" }}>
                    Product Edit
                </Typography>

                <TextField
                    fullWidth
                    name="title"
                    id="title"
                    label="Title"
                    variant="outlined"
                    margin="normal"
                    value={product.title}
                    onChange={handleChange}
                />

                <TextField
                    name="description"
                    label="Product Description"
                    variant="outlined"
                    margin="normal"
                    value={product.description}
                    multiline
                    rows={5}
                    fullWidth
                    onChange={handleChange}
                />

                <TextField
                    name="Pris"
                    label="Pris"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    value={product.price}
                    fullWidth
                    onChange={handleChange}
                />

                <TextField
                    name="imageUrl"
                    label="Product Image URL"
                    variant="outlined"
                    margin="normal"
                    value={product.imageUrl}
                    fullWidth
                    onChange={handleChange}
                />

                <TextField
                    name="amount"
                    label="Availability"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    value={product.amount}
                    fullWidth
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSave}
                    style={{ marginTop: "20px" }}
                >
                    Save
                </Button>
            </form>
        </div>
    );
}

export default ProductEdit;
