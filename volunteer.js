var mongodb = require('mongodb');


var uri = 'mongodb://kmanorma:tfi123456@ds213338.mlab.com:13338/mylocaldb';
var volunteers;
mongodb.MongoClient.connect(uri, function(err, db) {

  

  if(err) throw err;

  

  /*

   * First we'll add a few songs. Nothing is required to create the 

   * songs collection; it is created automatically when we insert.

   */

   var dbname = db.db('mylocaldb');

  volunteers = dbname.collection('Volunteer');

    var volunteersList = [

    {

        name: "CHATEAU DE SAINT COSME",

        year: "2009",

        grapes: "Grenache / Syrah",

        country: "France",

        region: "Southern Rhone",

        description: "The aromas of fruit and spice...",

        picture: "saint_cosme.jpg"

    },

    {

        name: "LAN RIOJA CRIANZA",

        year: "2006",

        grapes: "Tempranillo",

        country: "Spain",

        region: "Rioja",

        description: "A resurgence of interest in boutique vineyards...",

        picture: "lan_rioja.jpg"

    }];

/*
volunteers.insert(volunteersList, function (err, result) {
        if(err) throw err;
});
*/

});


exports.findAll = function(req, res) {

    volunteers.find().toArray(function(err, items) {

            res.send(items);

        });
};

exports.findById = function(req, res){
	    var id = req.params.id;
	volunteers.find({country : {$eq : id}}).toArray(function(err, items) {

            res.send(items);

        });
};




exports.addVolunteer = function(req, res) {

    var volunteerInput = req.body;

    console.log('Adding volunteer: ' + JSON.stringify(volunteerInput));

    volunteers.insert(volunteerInput);
    res.send("Done");
   };

