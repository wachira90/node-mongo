#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let query = { name: "Volkswagen" };

    db.collection('cars').deleteOne(query).then((result) => {

        console.log('Car deleted');
        console.log(result);
    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});