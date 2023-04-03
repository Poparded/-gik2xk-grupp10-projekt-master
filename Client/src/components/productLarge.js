import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function productLarge({ product }, { rating }) {

    console.log(rating);
    return (<>
        <ul>
            <li key={`productId_${product.id}`}>
                <div>
                    <img
                        heigh="200"
                        width="500"
                        src={product.imageUrl}
                        alt="bild på product"
                    />
                </div>

                <div>
                    <Typography variant="h5" component="h3">
                        {<Link to={`/productDetail/${product.id}`}>{product.title}</Link>}
                    </Typography>
                    <Typography> {product.description}</Typography>
                    <br />
                    <Typography variant="h5" component="h3">
                        Price: {product.price}kr
                    </Typography>







                    <Box variant="h5" component="h3">
                        <Button>Add to cart</Button>
                    </Box>
                </div>
            </li>
        </ul>
        <Typography variant="h5" component="h3">
            {<Link to={`/productEdit/${product.id}`}> {"Edit product"} </Link>}
        </Typography>
    </>)
}
export default productLarge;
