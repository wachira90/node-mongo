#!node
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let query = { price: { $gt: 30000 } };

    db.collection('cars').find(query).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});