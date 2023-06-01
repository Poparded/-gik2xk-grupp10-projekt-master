import { Grid, Typography } from "@mui/material";
import ProductList from "../components/ProductList";

function Products() {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
                    All Products
                </Typography>
                <ProductList />
            </Grid>
        </Grid>
    );
}

export default Products;
