import { Button, TextField } from "@mui/material"; // Importing Button and TextField components from the Material-UI library
import { useNavigate, useParams } from "react-router-dom"; // Importing the useNavigate and useParams hooks from the react-router-dom library
import { useEffect, useState } from "react"; // Importing the useEffect and useState hooks from the React library
import { create } from "../models/ProductModel"; // Importing the create function from the ProductModel module

function ProductCreate() { // Defining a React functional component named ProductEdit
    const navigate = useNavigate(); // Using the useNavigate hook to get access to the navigation object

    const [alertOpen, setAlertOpen] = useState(false); // Initializing a state variable named alertOpen and setting it to false
    const emptyProduct = { // Initializing a constant named emptyProduct
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        amount: 0,
    };
    const [product, setProduct] = useState(emptyProduct); // Initializing a state variable named product and setting it to emptyProduct

    function onSave() { // Defining a function named onSave
        create(product).then(() => { // Calling the create function with the current value of the product state variable and setting up a promise chain
            setAlertOpen(true); // Setting the alertOpen state variable to true
            navigate("/products", { state: { message: "product created" } }); // Navigating to the products page and passing a message in the state object
        });
    }

    function handleChange(event) { // Defining a function named handleChange
        const { name, value } = event.target; // Extracting the name and value properties from the event target object
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value })); // Updating the product state variable with the new value
    }

    return (
        <form>
            <TextField // Creating a TextField element for the title
                fullWidth // Setting the fullWidth prop to true
                name="title" // Setting the name prop to "title"
                id="title" // Setting the id prop to "title"
                label="Titel" // Setting the label prop to "Titel" for Swedish
                variant="standard" // Setting the variant prop to "standard"
                margin="normal" // Setting the margin prop to "normal"
                value={product.title} // Setting the value prop to the current value of the title property in the product state variable
                onChange={handleChange} // Setting the onChange prop to the handleChange function
            />
            <TextField // Creating a TextField element for the description
                name="description" // Setting the name prop to "description"
                label="Produktbeskrivning" // Setting the label prop to "Produktbeskrivning" for Swedish
                value={product.description} // Setting the value prop to the current value of the description property in the product state variable
                fullWidth // Setting the fullWidth prop to true
                multiline // Setting the multiline prop to true
                minRows={7} // Setting the minRows prop to 7
                onChange={handleChange} // Setting the onChange prop to the handleChange function
            />
            <TextField // Creating a TextField element for the price
                name="price" // Setting the name prop to "price"
                label="Pris" // Setting the label prop to "Pris" for Swedish
                value={product.price} // Setting the value prop to the current value of the price property in the product state variable
                fullWidth // Setting the fullWidth prop to true
                onChange={handleChange} // Setting the onChange prop to the handleChange function
            />
            <TextField
                name="imageUrl"
                label="Product Image URL"
                value={product.imageUrl}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                name="amount"
                label="Utbud"
                value={product.amount}
                fullWidth
                onChange={handleChange}
            />

            <Button variant="contained" color="primary" onClick={onSave}>
                Save
            </Button>
        </form>
    );
}

export default ProductCreate;
