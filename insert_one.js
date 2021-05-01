#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let doc = {_id: new ObjectID(), name: "Toyota", price: 37600 };

    db.collection('cars').insertOne(doc).then((doc) => {

        console.log('Car inserted')
        console.log(doc);
    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});