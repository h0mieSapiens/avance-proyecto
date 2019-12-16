var http = require("http");
var express = require('express');
var app = express();
const morgan=require('morgan');
const mongoose=require('mongoose');








//enable cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//base de datos
mongoose.connect('mongodb://localhost/proyecto')
.then(db=> console.log('db con'))
.catch(err=>console.log(err));




//importar rutas
const indexRoutes = require('./routes/index');



//settings
app.use(express.static(__dirname + '/views'));
var ejs = require('ejs');
app.set('views',__dirname + '/views');
app.engine('html',ejs.renderFile);
app.set('view engine',ejs);



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));



//routes



//start
app.listen(8080, () => {
    console.log("el server ya sirve");
});
///pa prender el server usa npm start