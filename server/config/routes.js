// var model = require('../controllers/controller_template.js');
module.exports = function(app){
  //GET Route that returns the current UNIX timestamp as MIME type text/html
  app.get('/', function(req,res){
    var time = Date.now();
    res.setHeader('content-type', 'text/html')
    res.send(time.toString())
  })
  //GET Route used to test POST /hello route below
  app.get('/hello', function(req, res){
    res.render('test')
  })
  //POST Route that returns the current UNIX timestamp as MIME type text/plain
  app.post('/hello', function(req,res){
    res.setHeader('content-type', 'text/plain');
    res.send('universe')
  })
  //GET Route that returns not found as MIME type text/plain for all unrecognized routes
  app.get('*', function(req, res){
    res.setHeader('content-type', 'text/plain');
    res.send('not found')
  })

}
