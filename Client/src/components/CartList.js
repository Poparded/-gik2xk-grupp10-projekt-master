//Skapa och bygga upp kundvagn

/*var cartList = [];

for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < products.length; j++) {
        if (cart[i].productId == products[j].id) {
            cartList.push(products[j]);
            Object.assign(cartList[i], {
                cartId: `${cart[i].id}`,
                amount: `${cart[i].amount}`,
            });
            break;
        }
    }
}

var totalSum = 0;
for (var i = 0; i < cartList.length; i++) {
    totalSum = totalSum + cartList[i].amount * cartList[i].price;
    console.log(totalSum);
}

return (
    <ul>
        {cartList &&
            cartList.map((cartItem) => (
                <li key={`cartRowId_${cartItem.id}`}>
                    <Grid
                        container
                        columnSpacing={2}
                        //columns={{ xs: 6, sm: 4, md: 4 }}
                        className="CartItem"
                    >
                        <Grid item xs={6} sm={6} md={6}>
                            <img src={cartItem.imgUrl} width={100} height={100}></img>
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
            ))}{" "}
        {totalSum}
    </ul>
);
}

export default CartList;*/