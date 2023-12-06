// <<<<-------Express---------->>>>


// Calling all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const File = require("./model/fileSchema");
const app = express();
const profilerouter = require('./router/profile')
const multer = require("multer");
const dashbordrouter = require('./router/dashbord')
const fs = require('fs').promises;
const path = require('path')

//Configuration for Multer
app.use(express.static(`${__dirname}/public`));

// Multer storage options
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/files');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

// Configurations for "body-parser"
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


//API Endpoint for uploading file
app.post("/api/uploadFile", upload.single("myFile"), (req, res) => {
  // Handle the file upload and do any necessary processing

  const redirectUrl = "/profile";

  res.redirect(redirectUrl)
});

app.get('/api/getImages', async (req, res) => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'public/files'));
        const imageFiles = files.filter(file => file.toLowerCase());
        res.json(imageFiles);
    } catch (error) {
        console.error("Error reading images:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Routs
app.use(profilerouter)  
app.use(dashbordrouter)


module.exports = app;