const productServices = require("../services/productService")
const router = require('express').Router();
const db = require('../models');
router.get("/:id", (req, res) => {
    const id = req.params.id;
    productServices.getById(id).then((result) => {
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






module.exports = router;
