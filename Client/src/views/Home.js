import ProductList from "../components/ProductList"
import UserList from "../components/UserList"

import "./Home.css"
import { Grid, Box, Typography } from "@mui/material"

function Home() {
    return (
        <Grid container columnSpacing={2} className="Home">
            <Grid className="Home_grid-item" item xs={12} md={8}>
                <Typography variant="h4" component="h2">Alla products</Typography>
                <ProductList />
            </Grid>
            <Grid className="Home_grid-item" item xs={12} md={4}>
                <Box className="Home_grid-item">
                    <Typography variant="h4" component="h2">Alla products</Typography>

                    <UserList />
                </Box>
            </Grid>
        </Grid>
      
}

export default Home;