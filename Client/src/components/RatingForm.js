import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addRating } from "../models/ProductModel";

function RatingForm(product_id) {
    console.log(product_id);
    const navigate = useNavigate();

    const [alertOpen, setAlertOpen] = useState(false);
    const [newRating, setNewRating] = useState({
        title: "",
        rating: 0,
        product_id: product_id,
        user_id: 0


    });

    useEffect(() => {
        setNewRating(product_id);
    }, [product_id]);
    console.log(newRating);
    function onSave() {
        addRating(product_id, newRating).then(() => {
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
            <TextField
                fullWidth
                name="user_id "
                id="user_id"
                label="user_id "
                variant="standard"
                margin="normal"
                value={newRating.user_id}
                onChange={handleRatingChange}
            />


            <Button variant="contained" color="primary" onClick={onSave}>
                Save
            </Button>
        </form>
    );
}

export default RatingForm; 