import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductLarge from '../components/productLarge';
import { addRating, getOne } from '../models/ProductModel';
function ProductsDetail() {
    const params = useParams();
    const ProductId = params.id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getOne(ProductId).then((product) => setProduct(product));
    }, [ProductId]);


    return (
        <>
            <ProductLarge product={product} />
            <div>
                {product.rating &&
                    product.rating.map((rating) => (
                        <p key={`ProductId${product.id}`}>
                            {rating.title}
                            <br /> {rating.rating}
                        </p>
                    ))}
            </div>
            <Link to={`/posts/${ProductId}/edit`}>
                <Button variant="filled">Ändra</Button>
            </Link>

        </>
    );
}

export default ProductsDetail;