import UserList from "../components/UserList"
import { Grid, Box, Typography } from "@mui/material"

function User() {
    return (
        <Grid container className="Home_grid-item" item xs={12} md={4}>
            <Box className="Home_grid-item">
                <Typography variant="h4" component="h2">Alla users</Typography>

                <UserList />
            </Box>
        </Grid>
    );
}

export default User;