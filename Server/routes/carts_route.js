const productServices = require("../services/productService")
const router = require('express').Router();
const db = require('../models');
router.get("/:id", (req, res) => {
    const id = req.params.id;
    productServices.getCartbyID(id).then((result) => {
        res.status(result.status).json(result.data);
    });
});



router.get("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    productServices.getCartbyuserid(id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/", (req, res) => {
    const cart = req.body;
    console.log(cart);
    productServices.create(cart).then((result) => {
        res.status(result.status).json(result.data);
    });
});


//Skicka vidare cartID  och cart dvs den NYA cart vi har 1! produkt i för att sparas in i en existerande cart...
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const cart = req.body
    console.log(cart);
    productServices.updateCart(id, cart).then((result) => {
        res.json(result.data);
    });


});



//check
/*router.delete("/:id", (req, res) => {
    const id = req.params.id
    db.cart.destroy({ where: { id } }).then((result) => {
        res.json(`cart raderades`);
    });
});*/

router.delete("/:id", (req, res) => {
    const productId = req.params.id;
    db.cart.destroy({ where: { productId } }).then((result) => {
        res.json(`product raderades`);
    });

});



module.exports = router;
