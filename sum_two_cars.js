#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let myagr = [
        { $match: { $or: [{ name: "Africa" }, { name: "Asia" }] } },
        { $group: { _id: 1, sum2cars: { $sum: "$price" } } }
    ];

    db.collection('continents').aggregate(myagr).toArray().then((sum) => {

        console.log(sum);
    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});