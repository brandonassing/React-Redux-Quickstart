//Used to serve index.html file on route refresh
var express = require('express');
var router = express.Router();

router.get('/profile', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname + '/../client/public'
    });
});

module.exports = router;
