#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.collection('continents').find({}).count().then((n) => {

        console.log(`There are ${n} documents`);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});