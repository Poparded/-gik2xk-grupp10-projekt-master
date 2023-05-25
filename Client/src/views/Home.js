import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import "./Home.css";

function Home() {
    return (
        <Grid container spacing={2} className="home-container">
            <Grid item xs={12}>
                <Box mt={3}>
                    <Typography variant="h4" component="h1" align="center">
                        För dig som älskar att vandra!
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mt={3}>
                    <img src="/stockImages/tent.png" alt="Tent" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mt={3}>
                    <Typography variant="body1" component="p" align="center">
                        här kan vi länka till produkter.

                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home;
