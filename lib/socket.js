'use strict';

var redis = require('./redis');

/**
*   Subscribe to the 'badge' channel
*/
redis.subscribe('badge');

/**
*   Expose the client
*/
module.exports = redis;
