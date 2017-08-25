var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('master', { title: 'Elasticsearch Tutorial' });
});

module.exports = router;
