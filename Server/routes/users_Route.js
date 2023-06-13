// Importera Express-biblioteket och skapa en instans av en router
const router = require('express').Router();

// Importera en databasmodell
const db = require('../models');

// Importera biblioteket validate.js för validering av inmatning
const validate = require('validate.js');

// Importera en användartjänstmodul
const userService = require("../services/userService");

// Importera objektet JSON från biblioteket sequelize
const { JSON } = require('sequelize');

// Definiera en routefunktion för GET-förfrågningar till rotvägen
router.get('/', (req, res) => {
  // Anropa en metod för att hämta alla användare från användartjänsten
  console.log("Hämtar användare");
  userService.getAllusers().then((result) => {
    // Skicka svar med status och data från användartjänsten
    res.status(result.status).json(result.data);
  }).catch((error) => {
    // Skicka ett felmeddelande med felmeddelandet och statuskoden
    res.status(error.status).json({ error: error.message });
  });
});

// Definiera en routefunktion för POST-förfrågningar till rotvägen
router.post('/', (req, res) => {
  // Hämta användarobjektet från förfrågningens kropp
  const user = req.body;

  // Anropa en metod för att lägga till användaren i användartjänsten
  userService.addUsers(user).then((result) => {
    // Skicka svar med status och data från användartjänsten
    res.status(result.status).json(result.data);
  });
});

// Definiera en routefunktion för DELETE-förfrågningar till rotvägen
router.delete('/', (req, res) => {
  // Hämta användar-ID från förfrågningens kropp
  const id = req.body.id;

  // Anropa en metod för att ta bort användaren från användartjänsten
  userService.destroy(id).then((result) => {
    // Skicka svar med status och data från användartjänsten
    res.status(result.status).json(result.data);
  });
});

// Definiera en routefunktion för PUT-förfrågningar till rotvägen
router.put("/", (req, res) => {
  // Hämta användar-ID och användarobjektet från förfrågningens kropp
  const id = req.body.id;
  const user = req.body;

  // Anropa en metod för att uppdatera användaren i användartjänsten
  userService.update(user, id).then((result) => {
    // Skicka svar med status och data från användartjänsten
    res.status(result.status).json(result.data);
  });
});

// Definiera en routefunktion för GET-förfrågningar till vägen med betyg med ett ID-parametrar
router.get("/rating/:id", (req, res) => {
  // Hämta ID-parametern från förfrågningens URL
  const id = req.params.id;
  console.log(id);
  console.log("Hämtar betyg från användare");
  // Anropa en metod för att hämta betyget med ID från en användartjänst
  userService.getRatingByUser(id).then((result) => {
    console.log(result.data);
    // Skicka svar med status och data från användartjänsten
    res.status(result.status).json(result.data);
  });
});

// Exportera routern för att göra den tillgänglig för andra moduler
module.exports = router;