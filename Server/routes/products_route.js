const productService = require("../services/productService"); // Importera produktjänsten
const router = require("express").Router(); // Skapa en router-instans med Express
const db = require("../models"); // Importera databasmodeller
const validate = require("validate.js"); // Importera validate.js

router.get("/", (req, res) => { // GET-förfrågan för att hämta alla produkter
  console.log("Hämtar produkter");
  productService.getAll().then((result) => {
    console.log(result);
    res.status(result.status).json(result.data); // Skicka svar med status och data
  }).catch((error) => {
    res.status(500).json(error); // Skicka felmeddelande med status 500
  });
});

router.get("/:id", (req, res) => { // GET-förfrågan för en specifik produkt med ID
  id = req.params.id;

  productService.getProductById(id).then((result) => {
    res.status(result.status).json(result.data); // Skicka svar med status och data
  }).catch((error) => {
    res.status(500).json(error); // Skicka felmeddelande med status 500
  });
});

router.post('/new', (req, res) => { // POST-förfrågan för att skapa en ny produkt
  const product = req.body; // Hämta produktdata från förfrågningens kropp
  productService.createProduct(product).then((result) => { // Anropa createProduct-metoden i produktjänsten med produkten som parameter
    res.status(result.status).json(result.data); // Skicka svar med status och data från produktjänsten
  });
});

router.post('/:id/addRating', (req, res) => { // POST-förfrågan för att lägga till betyg på en produkt
  const rating = req.body; // Hämta betygsdata från förfrågningens kropp
  const id = req.params.id;

  productService.addRating(id, rating).then((result) => { // Anropa addRating-metoden i produktjänsten med ID och betyg som parameter
    res.status(result.status).json(result.data); // Skicka svar med status och data från produktjänsten
  });
});

router.delete('/', (req, res) => { // DELETE-förfrågan för att ta bort en produkt
  const id = req.body.id;
  console.log("Tar bort produkt");
  console.log(req);
  productService.destroy(id).then((result) => { // Anropa destroy-metoden i produktjänsten med ID som parameter
    res.status(result.status).json(result.data); // Skicka svar med status och data från produktjänsten
  });
});

router.get("/rating/:id", (req, res) => { // GET-förfrågan för att hämta betyg för en produkt
  const id = req.params.id; // Hämta ID-parametern från URL:en
  console.log("Hämtar betyg");

  productService.getRatingByProduct(id).then((result) => { // Anropa getRatingByProduct-metoden i produktjänsten med ID som parameter
    console.log(result);
    res.status(result.status).json(result.data); // Skicka svar med status och data från produktjänsten
  });
});

router.delete("/:id", (req, res) => { // DELETE-förfrågan för att ta bort en produkt med ett specifikt ID
  const productId = req.params.id;

  // Implementera koden för att ta bort produkten med det angivna productId från korgen
  // och returnera lämplig respons till klienten
});

router.put("/", (req, res) => { // PUT-förfrågan för att uppdatera en produkt
  const id = req.body.id;
  const produkt = req.body;
  productService.update(produkt, id).then((result) => { // Anropa update-metoden i produktjänsten med produkt och ID som parameter
    res.status(result.status).json(result.data); // Skicka svar med status och data från produktjänsten
  });
});

module.exports = router; // Exportera routern för användning i andra filer