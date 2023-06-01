import Cart from "../components/Cart";
import { Container, Typography, Box } from '@mui/material';

function CartMain() {
    return (
        <Container maxWidth="md">
            <Box mt={4} mb={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Shopping Cart
                </Typography>
            </Box>
            <Cart />
        </Container>
    );
}

export default CartMain;
