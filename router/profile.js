const express = require('express')
const router = express()
const path = require('path')

// Serve static files from the 'public' directory
router.use('/public', express.static(path.join(__dirname, '../public/files')));

router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'Profile', 'index.html'));
});

module.exports = router