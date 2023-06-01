import UserList from "../components/UserList";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

const StyledGridItem = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const StyledBox = styled(Box)({
    padding: '1rem',
});

function User() {
    return (
        <StyledGridItem item xs={12} md={4}>
            <StyledBox>
                <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
                    All Users
                </Typography>
                <UserList />
            </StyledBox>
        </StyledGridItem>
    );
}

export default User;
