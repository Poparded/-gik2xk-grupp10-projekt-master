var express = require('express'); // Importera express-paketet
var cookieParser = require('cookie-parser'); // Importera cookie-parser-paketet
var logger = require('morgan'); // Importera morgan-paketet

var app = express(); // Skapa en instans av express
app.use((req, res, next) => { // Middleware för att sätta CORS-headers
    res.header('Access-Control-Allow-Origin', '');
    res.header('Access-Control-Allow-Headers', '');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    next();
});
app.use(logger('dev')); // Använd morgan logger för utvecklingsläge
app.use(express.json()); // Använd express middleware för att hantera JSON-data
app.use(express.urlencoded({ extended: false })); // Använd express middleware för att hantera URL-kodad data
app.use(cookieParser()); // Använd cookie-parser middleware för att hantera cookies
app.use("/products", require("./routes/products_route")); // Använd products_route för hantering av "/products"-rutter
app.use('/users', require('./routes/users_Route')); // Använd users_Route för hantering av "/users"-rutter
app.use('/carts', require('./routes/carts_route')); // Använd carts_route för hantering av "/carts"-rutter

module.exports = app; // Exportera app-instansen för användning i andra moduler