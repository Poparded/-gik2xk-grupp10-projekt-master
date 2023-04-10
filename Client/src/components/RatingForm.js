import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addRating } from "../models/ProductModel";

function RatingForm({ product }) {
    const navigate = useNavigate();
    console.log(product);

    const [alertOpen, setAlertOpen] = useState(false);
    const [newRating, setNewRating] = useState({
        title: "",
        rating: 0,
        user_id: product.rating.user_id,
        product_id: product.rating.user_id


    });

    useEffect(() => {
        setNewRating(product);
    }, [product]);

    function onSave() {
        addRating(newRating).then(() => {
            setAlertOpen(true);
            navigate("/products", { state: { message: "rating added" } });
        });
    }

    function handleRatingChange(event) {
        const { name, value } = event.target;
        setNewRating((prevRating) => ({ ...prevRating, [name]: value }));
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
                value={newRating.title}
                onChange={handleRatingChange}
            />

            <TextField
                name="rating"
                label="Rating"
                value={newRating.rating}
                fullWidth
                onChange={handleRatingChange}
            />


            <Button variant="contained" color="primary" onClick={onSave}>
                Save
            </Button>
        </form>
    );
}

export default RatingForm; 