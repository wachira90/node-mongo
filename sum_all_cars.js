#!node
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  }, (err, client) => {

	if (err) throw err;
	const db = client.db("testdb");
	let myagr = [{ $group: { _id: 1, all: { $sum: "$price" } } }];
	db.collection('cars').aggregate(myagr).toArray().then((sum) => {
		console.log(sum);
	}).catch((err) => {
		console.log(err);
	}).finally(() => {
		client.close();
	});
});