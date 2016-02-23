var express = require('express');

var app = express();

app.get('/', function(req, res) {
    var result = {
        'IPaddress': req.ip
    };
    
    res.json(result);
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});