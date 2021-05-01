#!node
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

async function findCar() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("testdb");

        let collection = db.collection('continents');

        let query = { name: 'Europe' }

        let res = await collection.findOne(query);

        console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

findCar();