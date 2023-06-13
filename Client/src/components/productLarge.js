import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateCart } from "../models/CartModel";




function ProductLarge({ product }, { rating }) {

    const [setAlertOpen] = useState(false);
    const [cart,] = useState({ units: (0), userId: (1), products: ([]), });



    const cartId = 6









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
                            Lägg till på varukorgen
                        </Button>
                    </Box>
                </div>
            </li>
        </ul>
        <Typography variant="h5" component="h3">
            {<Link to={`/productsEdit/${product.id}`}> {"Redigera produkt"} </Link>}
        </Typography>
    </>)
}
export default ProductLarge;
