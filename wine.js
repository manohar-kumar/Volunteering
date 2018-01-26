var mongodb = require('mongodb');


var uri = 'mongodb://manohar:helloworld@ds213688.mlab.com:13688/volunteer';
var wines;
mongodb.MongoClient.connect(uri, function(err, db) {

  

  if(err) throw err;

  

  /*

   * First we'll add a few songs. Nothing is required to create the 

   * songs collection; it is created automatically when we insert.

   */

   var dbname = db.db('volunteer');

  wines = dbname.collection('wines');

    var winesList = [

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
wines.insert(winesList, function (err, result) {
        if(err) throw err;
});
*/

});


exports.findAll = function(req, res) {

    wines.find().toArray(function(err, items) {

            res.send(items);

        });
};

exports.findById = function(req, res){
	    var id = req.params.id;
	wines.find({country : {$eq : id}}).toArray(function(err, items) {

            res.send(items);

        });
};




exports.addWine = function(req, res) {

    var wineInput = req.body;

    console.log('Adding wine: ' + JSON.stringify(wineInput));

    wines.insert(wineInput);
    res.send("Done");
   };

