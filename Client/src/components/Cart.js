import { Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { getCartByUserId } from '../models/CartModel';

function Cart() {
    const [cart, setCart] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const cartData = await getCartByUserId(1);
            setCart(cartData);
        };

        fetchCart();
    }, []);

    useEffect(() => {
        let amount = 0;
        if (cart.products) {
            amount = cart.products.reduce((total, product) => {
                return total + product.price * product.units;
            }, 0);
        }
        setTotalAmount(amount);
    }, [cart.products]);

    return (
        <Box border={1} borderColor="grey.300" p={2}>
            <Typography variant="h6">Shopping Cart</Typography>
            <ul>
                {cart.products && cart.products.map((product) => (
                    <li key={`productId_${product.id}`}>

                        <Typography variant="subtitle1" gutterBottom>
                            Title: {product.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Units: {product.units}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Price: {product.price} kr
                        </Typography>
                    </li>
                ))}
            </ul>
            <Typography variant="subtitle1">Total Price: {totalAmount} kr</Typography>
        </Box>
    );
}

export default Cart;
