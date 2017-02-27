'use strict';

var request = require('request');
var arrandom = require('arrandom');

var data = [
    {
        "badge_id": "http://d2ydh70d4b5xgv.cloudfront.net/images/1/6/stranger-things-pins-buttons-badges-will-eleven-justin-demogorgon-f3a12767d2408639f5f207c38e1c21b7.jpg"
    },
    {
        "badge_id": "http://d2ydh70d4b5xgv.cloudfront.net/images/5/4/stranger-things-pins-buttons-badges-will-eleven-justin-demogorgon-35b03d1670a3e78986ff6a0c5c9a74b1.jpg"
    },
    {
        "badge_id": "http://d2ydh70d4b5xgv.cloudfront.net/images/9/2/stranger-things-pins-buttons-badges-will-eleven-justin-demogorgon-89c7312fab4a0680c66ffacfcc725bd0.jpg"
    },
    {
        "badge_id": "http://d2ydh70d4b5xgv.cloudfront.net/images/c/0/stranger-things-pins-buttons-badges-will-eleven-justin-demogorgon-6e40e967c8003426789dfda9d1f21ac9.jpg"
    },
    {
        "badge_id": "/pins/pin1.jpg"
    },
    {
        "badge_id": "/pins/pin2.jpg"
    },
    {
        "badge_id": "/pins/pin3.jpg"
    },
    {
        "badge_id": "/pins/pin4.jpg"
    },
    {
        "badge_id": "/pins/pin5.jpg"
    },
    {
        "badge_id": "/pins/pin6.jpg"
    }
];

var requestObj = {
    json: data,
    method: 'POST',
    url: 'http://localhost:8000'
};

(function _request() {
    requestObj.json = [arrandom(data)[0]];
    request(requestObj, function(err){
        if(err) console.log(err);
        setTimeout(_request, 2000);
    });
})();