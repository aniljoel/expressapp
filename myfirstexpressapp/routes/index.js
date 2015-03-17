var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
    res.send('this is a post');
});
router.delete('/', function (req, res,next) {
    res.send('Got a DELETE request at /user');
})
router.put('/', function (req, res,next) {
    res.send('Got a PUT request at /user');
});

module.exports = router;
