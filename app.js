// const {obj,func} = require('./utils.js');

// console.log("obj --->>>>> ",obj);
// console.log("func --->>>>> ",func);
// console.log('__dirname --->>>>> ',__dirname);
// console.log('__filename --->>>>> ',__filename);


// // <<<<-------File System---------->>>>

// const fs = require('fs')

// fs.writeFileSync('app.txt',"Hey just creating file using file system, It does not have any use or Impact")
// console.log(fs.readFileSync('app.txt').toString());
// fs.appendFileSync('app.txt',' Dev-1')



// <<<<-------Express---------->>>>

const express = require('express')
require('./utils/db')
const app = express()
const authrouter = require('./router/login')
const dashbordrouter = require('./router/dashbord')


app.use(express.urlencoded({extended:true}))
app.use(authrouter)  
app.use(dashbordrouter)

app.listen(3000)
