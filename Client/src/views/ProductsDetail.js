import { Button, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductLarge from '../components/productLarge';
import DisplayRating from '../components/DisplayRating';
import ratingForm from "../components/RatingForm"
import { addRating, getOneWithRating } from '../models/ProductModel';
import RatingForm from '../components/RatingForm';

function ProductsDetail() {
    const params = useParams();
    const ProductId = params.id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getOneWithRating(ProductId).then((product) => setProduct(product));
    }, [ProductId]);
    console.log(product);
    return (
        <>
            <ProductLarge product={product} />
            <div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <Box mt={2}>
                            {product.ratings &&
                                product.ratings.map((rating) => (
                                    <DisplayRating rating={rating} />

                                ))}

                        </Box>
                    </Grid>
                </Grid>

            </div>
            <RatingForm product={product} />
            <Link to={`/product/${ProductId}/edit`}>
                <Button variant="contained">Ändra</Button>
            </Link>
        </>
    );
}

export default ProductsDetail;
