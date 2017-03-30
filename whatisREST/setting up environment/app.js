var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.use('/', function(req,res){
// '/' mean the root of your site
// second parameter going to be a callback function
//anytime anything hit that root slash this function will be executed and Express is going to pass two variables req, res
//req is sending request
//res is sending response

    res.send('Welcome to my API!');

});

//have Express start listening to port
app.listen(port, function(){
console.log('Running on PORT:' + port);
});
