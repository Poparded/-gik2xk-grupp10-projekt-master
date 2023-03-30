const productServices = require("../services/productService")
const router = require('express').Router();
const db = require('../models');

router.post('/', (req, res) => {
    const cart = req.body;
    productServices.create(cart).then((result) => {
        res.status(result.status).json(result.data);
    });
});





module.exports = router;
