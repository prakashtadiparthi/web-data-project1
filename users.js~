var express = require('express');
var app = express();
var fs = require("fs");




app.get('Users', function (req, res) {
   fs.readFile( "listusers.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8083, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})




