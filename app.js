var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

//CORDS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(express.json());

//Importar rutas
var publicationRoutes = require('./rutas/publication');
var ownerRoutes = require('./rutas/owner');

mongoose.connection.openUri(`mongodb+srv://cristianmx10:cristianmx10@cluster0-xa82i.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos: online')
});

//rutas
app.use('/publication',publicationRoutes);
app.use('/owner',ownerRoutes);

//Escuchar peticiones
app.listen(3000, () => {
    console.log('express  server puerto 3000: \x1b[32m%s\x1b[0m', 'onLine');
});