const express = require('express')
const router = express()
const path = require('path')

router.use('/dashbord',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../views','/Dashbord/index.html'))
})

module.exports = router