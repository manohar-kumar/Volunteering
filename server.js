
var express = require('express'),

    wine = require('./wine');



var app = express();



app.configure(function () {

    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */

    app.use(express.bodyParser());

});



app.get('/wines', wine.findAll);

app.get('/wines/:id', wine.findById);

app.post('/wines', wine.addWine);




app.listen(3000);

console.log('Listening on port 3000...');