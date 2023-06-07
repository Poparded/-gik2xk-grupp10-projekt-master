import { Button, Grid, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductLarge from '../components/productLarge';
import DisplayRating from '../components/DisplayRating';
import { getOneWithRating } from '../models/ProductModel';
import RatingForm from '../components/RatingForm';

function ProductsDetail() {
    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState({});
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        getOneWithRating(productId).then((product) => {
            setProduct(product);
            setRatings(product.ratings); // Assuming ratings are returned as an array in product object
        });
    }, [productId]);

    // Calculate average rating
    const averageRating =
        ratings.length > 0
            ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length
            : 0;
    console.log(averageRating);
    return (
        <>
            <ProductLarge product={product} />
            <div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <Box mt={2}>
                            {ratings.map((rating) => (
                                <DisplayRating key={rating.id} rating={rating} />
                            ))}
                        </Box>
                        {averageRating > 0 && (
                            <Box>
                                <Typography>{"Average Rating is :" + averageRating.toFixed(1)}</Typography>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </div>
            <RatingForm productId={productId} />
            <Link to={`/product/${productId}/edit`}>
                <Button variant="contained">Ändra</Button>
            </Link>
        </>
    );
}

export default ProductsDetail;
