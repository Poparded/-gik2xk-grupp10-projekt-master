import ProductList from "../components/ProductList"

import { Grid, Typography } from "@mui/material"
function Products() {
    return (

        <Grid className="Home_grid-item" item xs={12} md={8}>
            <Typography variant="h4" component="h2">Alla products</Typography>
            <ProductList />
        </Grid>
    );
}

export default Products;