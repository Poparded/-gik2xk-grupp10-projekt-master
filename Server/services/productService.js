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

async function getAll() {
    try {
        const AllProducts = await db.product.findAll();
        return createResponseSuccess(AllProducts);
    } catch (error) {
        return createResponseError(error, error.message);
    }
}
async function create(cart) {

    try {
        const newCart = await db.cart.create(cart);
        //post tags är en array av namn
        //lägg till eventuella taggar
        await _addProductToCart(newCart, cart.products);

        return createResponseSuccess(newCart);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function addProduct(product) {
    const invalidData = validate(product, constraints_products);
    if (invalidData) {
        return createResponseError(422, invalidData);
    }
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


/*async function addRating(id, rating) {
    if (!id) {
        return createResponseError(422, "Id is required");
    }
    try {
        const productId = id;
        await db.rating.create(rating);
        console.log(rating);
        const productWithRating = await db.product.findOne({
            where: { id: productId },
            include: [{
                model: db.rating,
                as: 'ratings' // the alias for the relationship in your model definition
            }]
        });
        console.log(productWithRating);
        productWithRating.rating = rating.rating
        // Add the newly created rating to the productWithRating object
        return createResponseSuccess(_formatProduct(productWithRating));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}*/
// id= product id
async function addRating(id, rating) {
    if (!id) {
        return createResponseError(422, "Id is obligatory");
    }
    try {
        rating.productId = id;
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
        amount: product.rating

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

async function _findOrCreateproductId(name) {
    name = name.toLowerCase().trim();
    const foundOrCreatedProduct = await db.product.findOrCreate({ where: { id } });

    return foundOrCreatedProduct[0].id;
}

async function _addProductToCart(cart, products) {



    if (products) {
        products.forEach(async (product) => {
            const productId = await _findOrCreateproductId(product.id);
            await cart.addProduct(productId);
        });
    }
}
module.exports = { destroy, getAll, getAll, update, addRating, addProduct, getProductById, getRatingByProduct };
