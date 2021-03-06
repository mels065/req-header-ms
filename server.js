var express = require('express');

var app = express();

app.enable('trust proxy');

app.get('/', function(req, res) {
    res.send('Set path to /api/whoami to see request header ' +
             'information.');
    res.end();
});

app.get('/api/whoami', function(req, res) {
    var language = /^[a-z]{2}-[A-Z]{2}/.exec(
        req.headers['accept-language']
    )[0];
    
    var ua = /\((.+?)\)/.exec(
        req.headers['user-agent']
    )[1];
    
    var result = {
        'IPaddress': req.ip,
        'Language': language,
        'Software': ua
    };
    
    res.json(result);
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});