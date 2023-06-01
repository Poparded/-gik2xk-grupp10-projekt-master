const db = require("../models");
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage,
} = require("../helpers/responseHelper");
const product = require("../models/product");
const { validate, async } = require("validate.js");
const constraints_products = {
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
};


const constraints_Cart = {
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
    user_id: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
};


async
async function getAll() {
    try {
        const AllProducts = await db.product.findAll();
        return createResponseSuccess(AllProducts);
    } catch (error) {
        return createResponseError(error, error.message);
    }
}


async function create(product) {
    //const invalidData = validate(product, constraints_products);
    /* if (invalidData) {
         return createResponseError(422, invalidData);
     }*/
    try {
        const newPost = await db.product.create(product);

        return createResponseSuccess(newPost);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function getProductById(id) {
    if (!id) {
        return createResponseError(422, "Id is required");
    }
    try {
        const productId = id;
        const productWithRating = await db.product.findOne({
            where: { id: productId }
        });
        console.log(productWithRating);

        // Add the newly created rating to the productWithRating object
        return createResponseSuccess(productWithRating);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getRatingByProduct(id) {
    try {
        const productWithRatings = await db.product.findOne({
            where: { id },

            include: {
                model: db.rating
            }
        });
        console.log(productWithRatings);
        //_formatUser(rating)
        /* return createResponseSuccess(cart); */
        return createResponseSuccess(productWithRatings);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}






async function addRating(id, rating) {
    console.log(id);
    console.log(rating);
    if (!id) {
        return createResponseError(422, "Id is obligatory");
    }
    try {

        await db.rating.create(rating);

        const newRating = await db.product.findOne({
            where: { id },
            include: {
                model: db.user
            },
            include: {
                model: db.rating,
            }
        });
        return createResponseSuccess(newRating);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}



async function destroy(id) {
    if (!id) return createResponseError(422, "Id is required");

    try {
        await db.rating.destroy({
            where: {
                product_id: id
            }
        })
        await db.product.destroy({ where: { id } });

        return createResponseMessage(200, "Product deleted");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function update(product, id) {
    const invalidData = validate(product, constraints_products)
    if (!id) {

        return createResponseError(422, "Id is required")
    }
    if (invalidData) {
        return createResponseError(422, invalidData)
    }
    try {
        console.log(product);
        const existingProduct = await db.product.findOne({ where: { id } })
        if (!existingProduct) {
            return createResponseError(404, "No product found to update")
        }
        await db.product.update(product, { where: { id } })
        return createResponseMessage(200, "Product updated")
    }
    catch (error) {
        return createResponseError(error.status, error.message)
    }
}
async function getCartbyID(id) {
    if (!id) {
        return createResponseError(422, "Id is required");
    }
    try {
        const cart = await db.cart.findOne({
            where: { id },
            include: [db.user, db.product],
        });

        // Add the newly created rating to the productWithRating object
        return createResponseSuccess(cart);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function create(cart) {
    const invalidData = validate(cart, constraints_products)
    if (invalidData) {
        return createResponseError(422, invalidData);

    }

    try {

        console.log(cart);
        const newCart = await db.cart.create(cart);



        return createResponseSuccess(newCart);
    }
    catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function updateCart(id, cart) {
    try {
        const existingCart = await db.cart.findOne({ where: { id } });
        if (!existingCart) {
            return createResponseError(404, "Found no cart to update.");
        }
        console.log(cart);

        await _addProductToCart(existingCart, cart.products);
        await db.cart.update(cart, { where: { id } });

        return createResponseMessage(200, "Cart has been updated.");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getCartbyuserid(id) {
    try {
        console.log(id);
        const cart = await db.cart.findOne({
            where: {
                user_id: id
            },
            include: [db.user, db.product],
        });
        return createResponseSuccess(cart);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function destroyCart(id) {
    if (!id) return createResponseError(422, "Id is required");

    try {
        await db.cart.destroy({
            where: {
                id: id
            }
        })
        await db.product.destroy({ where: { id } });

        return createResponseMessage(200, "Product deleted");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
function _formatProduct(product) {
    const cleanProduct = {
        id: product.id,
        title: product.title,
        body: product.body,
        description: product.description,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        price: product.price,
        imageUrl: product.imageUrl,
        rating: product.rating,
        user_id: product.rating,
        amount: product.rating,
        imageUrl: product.imageUrl,
        amount: product.rating,
    };

    if (product.ratings) {
        cleanProduct.ratings = [];

        product.ratings.map((rating) => {
            return (cleanProduct.ratings = [
                {
                    id: rating.id,
                    title: rating.title,
                    rating: rating.rating,
                },
                ...cleanProduct.ratings,
            ]);
        });
    }

    return cleanProduct;
}

async function _findOrCreateProductId(id) {
    const foundOrCreatedProduct = await db.product.findOrCreate({ where: { id } });
    console.log(foundOrCreatedProduct);
    return foundOrCreatedProduct[0].id;
}

async function _addProductToCart(cart, products) {
    if (products) {
        for (const product of products) {
            const productId = await _findOrCreateProductId(product.id);
            await cart.addProduct(productId);
        }
    }
}
module.exports = { destroy, getAll, getAll, update, addRating, getProductById, getRatingByProduct, create, updateCart, destroyCart, getCartbyuserid, getCartbyID };
