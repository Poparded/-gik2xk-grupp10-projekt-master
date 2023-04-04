import { Button, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductLarge from '../components/productLarge';
import { addRating, getOneWithRating } from '../models/ProductModel';

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
                                    <li key={`rating-${rating.id}`}>
                                        <div>{`rating ${rating.title}`}</div>

                                        <div>{`rating ${rating.rating}`}</div>
                                        <div> {`rating${rating.rating}`}</div>
                                    </li>
                                ))}

                        </Box>
                    </Grid>
                </Grid>

            </div>
            <Link to={`/product/${ProductId}/edit`}>
                <Button variant="contained">Ändra</Button>
            </Link>
        </>
    );
}

export default ProductsDetail;
