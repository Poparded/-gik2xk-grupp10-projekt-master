const productServices = require("../services/productService"); // Importera produkttjänster
const router = require('express').Router(); // Skapa en router-instans med Express
const db = require('../models'); // Importera databasmodeller

router.get("/:id", (req, res) => { // GET-förfrågan för en specifik ID
    const id = req.params.id;
    productServices.getCartbyID(id).then((result) => {
        res.status(result.status).json(result.data); // Skicka svar med status och data
    });
});

router.get("/user/:id", (req, res) => { // GET-förfrågan för en användares ID
    const id = req.params.id;
    console.log(id);
    productServices.getCartbyuserid(id).then((result) => {
        res.status(result.status).json(result.data); // Skicka svar med status och data
    });
});

router.post("/", (req, res) => { // POST-förfrågan för att skapa en ny kundvagn
    const cart = req.body;
    console.log(cart);
    productServices.create(cart).then((result) => {
        res.status(result.status).json(result.data); // Skicka svar med status och data
    });
});

// Skicka vidare cartID och cart, det vill säga den NYA kundvagnen med 1 produkt för att sparas in i en befintlig kundvagn
router.put("/:id", (req, res) => { // PUT-förfrågan för att uppdatera en kundvagn
    const id = req.params.id;
    const cart = req.body
    console.log(cart);
    productServices.updateCart(id, cart).then((result) => {
        res.json(result.data); // Skicka svar med data
    });
});

router.delete("/:id", (req, res) => { // DELETE-förfrågan för att ta bort en kundvagn
    const id = req.params.id
    db.cart.destroy({ where: { id } }).then((result) => {
        res.json("produkt raderades"); // Skicka svar med meddelande
    });
});


module.exports = router; // Exportera routern för användning i andra filer