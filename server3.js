var express = require('express');
var app = express();
var fs = require("fs");



app.use(express.static('public'));
app.get('https://webdataproject1.herokuapp.com/index2.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index2.htm" );
})

app.get('https://webdataproject1.herokuapp.com/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end(data);
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
	//var host = "https://webdataproject1.herokuapp.com"
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
  
