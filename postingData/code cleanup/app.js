var express = require('express');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookapi');
var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')();

app.use('/api', bookRouter);

app.get('/', function(req,res){

    res.send('Welcome to my API!');

});

//have Express start listening to port
app.listen(port, function(){
    console.log('Gulp is running my app on PORT:' + port);
});
