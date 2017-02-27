'use strict';

var host = process.env.BADGES_HOST || 'http://localhost:8000/badges';
var request = require('request');

/**
*   Get badges from the pub/sub server
*   @param {Function} callback
*/
exports.get = function(callback){
    request(host, function(err, response, body){
        callback(err, JSON.parse(body));
    });
};