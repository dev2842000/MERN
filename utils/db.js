const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb+srv://Dev2842000:Dev2842000@mern.yhgnsyi.mongodb.net/'
MongoClient.connect(url,(err,Client) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(Client);
})