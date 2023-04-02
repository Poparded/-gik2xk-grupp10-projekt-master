function ProductItemSmall(product) {
    return (

        <>
            <img alt={product.title} height="50" width="50" src={product.imageUrl} />


            <h2> {product.title}</h2>
            <p>{product.description}</p>

            <p> {product.price} </p>
        </>
    );
}

export default ProductItemSmall;