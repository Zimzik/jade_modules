let express = require('express'),
    app = express(),
    jade = require('jade'),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(express.static('app'));
app.set('views', './app/jade');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});


let server = app.listen(3000, function() {
  console.log("Server listening on port" + server.address().port);
})