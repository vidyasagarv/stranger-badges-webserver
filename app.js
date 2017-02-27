'use strict';

var express = require('express');
var app = express();
// var app = require('express')();

/**
 *  Allows third party clients to connect to the socket server
 */
app.use(function(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subSocket =require('./lib/socket');
var badges = require('./models/badges');
var port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log('Server is listening on port %d', port);
});

/**
*   Serve static assets out of public
*/
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('./public/index.html');
});

io.sockets.on('connection', function(socket){
    badges.get(function(err, data){
        if (err) return;
        data.forEach(function(badge){
            socket.emit('badge', badge);
        });
    });
});

subSocket.on('message', function(message){
    io.sockets.emit('badge', message);
})

var request = require('request');
var arrandom = require('arrandom');

var data = [
    {
        "badge_id": "/pins/pin1.png"
    },
    {
        "badge_id": "/pins/pin2.png"
    },
    {
        "badge_id": "/pins/pin3.png"
    },
    {
        "badge_id": "/pins/pin4.png"
    },
    {
        "badge_id": "/pins/pin5.png"
    },
    {
        "badge_id": "/pins/pin6.png"
    },
    {
        "badge_id": "/pins/pin7.png"
    },
    {
        "badge_id": "/pins/pin4.png"
    }
];

var requestObj = {
    json: data,
    method: 'POST',
    url: 'https://stranger-badges.herokuapp.com:80'
};

(function _request() {
    requestObj.json = [arrandom(data)[0]];
    request(requestObj, function(err){
        if(err) console.log(err);
        setTimeout(_request, 2000);
    });
})();