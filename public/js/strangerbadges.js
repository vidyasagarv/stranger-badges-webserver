'use strict';

$(function(){
    var socket = io.connect();
    socket.on('badge', function(badge){
        var img = $('<img src="'+badge.badge_id+'" alt="Stranger things badge">');
        $('.badge-wrapper').prepend(img);
        setTimeout(function(){
          img.addClass('on');
        }, 0);
        // $('body').prepend($img);
    });
});