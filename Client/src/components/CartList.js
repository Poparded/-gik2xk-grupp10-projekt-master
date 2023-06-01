import React from 'react';
import { Grid, Button } from '@material-ui/core'; // Assuming you are using Material-UI

const CartList = ({ cart, products }) => {
    // Create an empty array to store the cart items
    const cartList = [];

    // Loop through the cart items and find the corresponding product
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (cart[i].productId === products[j].id) {
                const cartItem = {
                    ...products[j],
                    cartId: cart[i].id,
                    amount: cart[i].amount,
                };
                cartList.push(cartItem);
                break;
            }
        }
    }

    // Calculate the total sum
    let totalSum = 0;
    for (let i = 0; i < cartList.length; i++) {
        totalSum += cartList[i].amount * cartList[i].price;
        console.log(totalSum);
    }

    return (
        <ul>
            {cartList.map((cartItem) => (
                <li key={`cartRowId_${cartItem.id}`}>
                    <Grid container spacing={2} className="CartItem">
                        <Grid item xs={6} sm={6} md={6}>
                            <img src={cartItem.imgUrl} alt={cartItem.title} width={100} height={100} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <div>{cartItem.title}</div>
                            <div>{cartItem.price}</div>
                            <div>
                                <Button>-</Button>
                                {cartItem.amount}
                                <Button>+</Button>
                                <Button variant="contained" color="primary">
                                    Ta bort
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </li>
            ))}
            <div>{totalSum}</div>
        </ul>
    );
};

export default CartList;
