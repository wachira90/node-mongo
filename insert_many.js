const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;
    const db = client.db("testdb");
    let collection = db.collection('continents');

    let continents = [
        { _id: new ObjectID(), name: "Africa", price: 9000 }, 
		{ _id: new ObjectID(), name: "America" , price: 29000},
        { _id: new ObjectID(), name: "Europe", price: 35000 }, 
		{ _id: new ObjectID(), name: "Asia", price: 59000 },
        { _id: new ObjectID(), name: "Australia", price: 21000 }, 
		{ _id: new ObjectID(), name: "Antarctica", price: 41000 }
    ];

    collection.insertMany(continents).then(result => {
        console.log("documents inserted into the collection");
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        client.close();
    });
});