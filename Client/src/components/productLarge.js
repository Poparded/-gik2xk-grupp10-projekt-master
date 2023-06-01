import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateCart } from "../models/CartModel";

import TextField from "@mui/material/TextField";


function ProductLarge({ product }, { rating }) {

    const [alertOpen, setAlertOpen] = useState(false);
    const [cart, setCart] = useState({ units: (0), userId: (1), products: ([]), });

    const [products, setProduct] = useState({ units: (0) });

    const cartId = 8



    let prodUnits = 0;





    function onUpdate() {

        cart.products.push(product);
        updateCart(cart, cartId).then(() => { console.log(cart); setAlertOpen(true) });
    }

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
                        Pris: {product.price}kr
                    </Typography>

                    <Typography variant="h5" component="h3">
                        Antal: {product.amount}
                    </Typography>






                    <Box variant="h5" component="h3">
                        <Button
                            size="large"
                            onClick={() => onUpdate({ ...cart })}
                            variant="contained"
                            color="primary"


                        >
                            Add to cart
                        </Button>
                    </Box>
                </div>
            </li>
        </ul>
        <Typography variant="h5" component="h3">
            {<Link to={`/productsEdit/${product.id}`}> {"Edit product"} </Link>}
        </Typography>
    </>)
}
export default ProductLarge;
