const express = require('express')
const router = express()
const path = require('path')


router.use('/login',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../views','Login/index.html'))
})
router.use('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../views','Signup/index.html'))
})

module.exports = router