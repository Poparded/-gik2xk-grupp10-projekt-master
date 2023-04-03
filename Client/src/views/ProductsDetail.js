import { Button } from '@mui/material';
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
                {product.ratings &&
                    product.ratings.map((rating) => (
                        <li key={`rating-${rating.id}`}>
                            <div>{`rating ${rating.title}`}</div>

                            <div>{`rating ${rating.rating}`}</div>
                            <div> {`rating${rating.rating}`}</div>
                        </li>
                    ))}
            </div>
            <Link to={`/product/${ProductId}/edit`}>
                <Button variant="contained">Ändra</Button>
            </Link>
        </>
    );
}

export default ProductsDetail;
