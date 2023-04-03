import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function ProductItemSmall({ product }) {
    console.log(product);
    return (
        <>
            <img alt={product.title} height="400" width="400" src={product.imageUrl} />
            <Typography sx={{ fontFamily: "sans-serif" }}>  <Link to={`/products/rating/${product.id}`}>{product.title}</Link>
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "sans-serif" }}>{product.description}</Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: "sans-serif" }}>{`Pris: ${product.price}`}</Typography>
        </>
    );
}

export default ProductItemSmall;
