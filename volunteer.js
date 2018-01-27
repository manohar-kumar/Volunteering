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
});
   
/*
volunteers.insert(volunteersList, function (err, result) {
        if(err) throw err;
});
*/


exports.findAll = function(req, res) {

    volunteers.find().toArray(function(err, items) {

            res.send(items);

        });
};

exports.findById = function(req, res){
	    var id = req.params.id;
	volunteers.find({name : {$eq : id}}).toArray(function(err, items) {

            res.send(items);

        });
};




exports.addVolunteer = function(req, res) {

    var volunteerInput = req.body;

    console.log('Adding volunteer: ' + JSON.stringify(volunteerInput));

    volunteers.insert(volunteerInput);
    res.send("Done");
   };

