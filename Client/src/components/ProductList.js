import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";

import { getAllProducts } from "../models/ProductModel"
import ProductItemSmall from "./ProductSmall"
function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((products) => setProducts(products));
    }, []);
    console.log(products);
    return (
        <Grid container spacing={10}>


            {products &&
                products.map((product) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductItemSmall style={{ marginBottom: '1rem' }} product={product} />

                        </Grid>
                    );
                })}
        </Grid>

    );
}

export default ProductList;