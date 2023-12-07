require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const url = process.env.DB
MongoClient.connect(url,(err,Client) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(Client);
})