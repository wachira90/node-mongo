#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let filQuery = { name: "Audi" };
    let updateQuery = { $set: { "price": 52000 }};

    db.collection('cars').updateOne(filQuery, updateQuery).then(result => {

        console.log('Car updated');
        console.log(result);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});