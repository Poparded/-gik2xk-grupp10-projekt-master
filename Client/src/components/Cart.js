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


    console.log(cart);
    useEffect(() => {
        if (cart.products) {
            let totalPrice = 0;
            cart.products.forEach((product) => {
                totalPrice += product.price * product.amount;
            });
            setTotalAmount(totalPrice);
        }
    }, [cart]);

    const removeProduct = (productId) => {
        const updatedCart = { ...cart };
        const productIndex = updatedCart.products.findIndex(
            (product) => product.id === productId
        );

        if (productIndex !== -1) {
            updatedCart.products.splice(productIndex, 1);
            setCart(updatedCart);
        }
    };

    return (
        <Box border={1} borderColor="grey.300" p={2}>
            <Typography variant="h6">Shopping Cart</Typography>
            <ul>
                {cart.products &&
                    cart.products.map((product) => (
                        <li key={`productId_${product.id}`}>
                            <Typography variant="subtitle1" gutterBottom>
                                Title: {product.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Units: {product.amount}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Price: {product.price} kr
                            </Typography>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => removeProduct(product.id)}
                            >
                                Remove
                            </Button>
                        </li>
                    ))}
            </ul>
            <Typography variant="subtitle1">Total Price: {totalAmount} kr</Typography>
        </Box>
    );
}

export default Cart;
