var express = require('express');
var app = express();

app.use( express.static('public'));

app.get('/', function(req, res){
    res.sendfile('./public/index.html');
});

app.listen(3000, function(){
  console.log("server running on port 3000")
});
