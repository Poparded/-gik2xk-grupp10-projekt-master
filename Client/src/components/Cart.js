import { Box, Typography, Button } from "@mui/material";
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
        if (cart.products) {
            let totalPrice = 0;
            cart.products.forEach((product) => {
                totalPrice += product.price * product.amount;
            });
            setTotalAmount(totalPrice);
        }
    }, [cart]);


    return (
        <Box border={1} borderColor="grey.300" p={2}>
            <Typography variant="h6">Shopping Cart</Typography>
            {cart.products && cart.products.length > 0 ? (
                <ul>
                    {cart.products.map((product) => (
                        <li key={`productId_${product.id}`}>
                            <Typography variant="subtitle1" gutterBottom>
                                Title: {product.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Mängd: {product.amount}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Pris: {product.price} kr
                            </Typography>

                        </li>
                    ))}
                </ul>
            ) : (
                <Typography variant="subtitle1">Varukorgen är tom</Typography>
            )}
            <Typography variant="subtitle1">Totalt pris: {totalAmount} kr</Typography>
        </Box>
    );
}

export default Cart;
