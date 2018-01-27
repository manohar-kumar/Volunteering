
var express = require('express'),

    volunteer = require('./volunteer');



var app = express();



app.configure(function () {

    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */

    app.use(express.bodyParser());

});



app.get('/volunteers', volunteer.findAll);

app.get('/volunteers/:id', volunteer.findById);

app.post('/volunteers', volunteer.addVolunteer);




app.listen(3000);

console.log('Listening on port 3000...');