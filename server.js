const app = require("./app");
require('dotenv').config();
const mongoose = require("mongoose");


async function connectToDatabase() {
    const uri = process.env.DB;

    const client = await mongoose.createConnection(uri).
    asPromise();
    client.readyState;
}

connectToDatabase();

const port = 3000;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});