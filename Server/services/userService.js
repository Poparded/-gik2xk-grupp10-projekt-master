const db = require("../models");
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage,
} = require("../helpers/responseHelper");
const product = require("../models/product");
const { validate, async } = require("validate.js");
const constraints_user = {
    users_id: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
    email: {
        length: {
            minimum: 3,
            maximum: 50,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
    password: {
        length: {
            minimum: 8,
            maximum: 50,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
        },
    },
};

async function getAllusers() {
    const allUsers = await db.user.findAll();
    return createResponseSuccess(allUsers);
}

async function addUsers(user) {
    try {
        console.log(user);
        const NewUser = await db.user.create(user);
        console.log(NewUser);
        return createResponseSuccess(NewUser);
    } catch (error) {
        return createResponseError(error, error.message);
    }
}
async function destroy(users_id) {
    if (!users_id) return createResponseError(422, "Id is required");

    try {
        await db.user.destroy({ where: { users_id } });
        return createResponseMessage(200, "User deleted");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function update(user, users_id) {
    const invalidData = validate(user, constraints_user);
    if (!users_id) {
        return createResponseError(422, "Id is required");
    }
    if (invalidData) {
        return createResponseError(422, invalidData);
    }
    try {
        const existingUser = await db.user.findOne({ where: { users_id } });
        if (!existingUser) {
            return createResponseError(404, "No user found to update");
        }
        await db.user.update(user, { where: { users_id } });
        return createResponseMessage(200, "user updated");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function getRatingByUser(id) {
    try {
        const rating = await db.rating.findAll({
            where: { id },
            include: [db.user, db.product],
        });
        console.log(rating);
        //_formatUser(rating)
        /* return createResponseSuccess(cart); */
        return createResponseSuccess(rating);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}





function _formatUser(rating) {
    const cleanUser = {
        id: rating.id,
        email: rating.email,
        password: rating.password,
        username: rating.username,
        first_name: user.first_name,
        last_name: user.last_name,
    };


    if (rating.ratings) {
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

    return cleanUser;
}

module.exports = { getAllusers, addUsers, destroy, update, getRatingByUser };
