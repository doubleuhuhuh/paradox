import 'basePage'

import {domReady} from 'lib'
import {Instafeed} from 'instafeed.js'


var breakPoint = 'desktop',
    desktop = 1024,
    tablet = 768,
    mobile = 568;

    // Native JS
    domReady(function(){
        setTimeout(function () {
            window.addEventListener('resize', function () {
                getInstaPosts();
            })

            getInstaPosts();
        }, 500);
    })


var _getBreakpoint = function() {
    var windowWidth = $(window).outerWidth();
    if (windowWidth > desktop && breakPoint != 'largeDesktop') {
        breakPoint = 'largeDesktop';
    } else if (windowWidth >= tablet && windowWidth <= desktop && breakPoint != 'desktop') {
        breakPoint = 'desktop';
    } else if (windowWidth <= tablet && windowWidth > mobile && breakPoint != 'tablet') {
        breakPoint = 'tablet';
    } else if (windowWidth <= mobile && breakPoint != 'mobile') {
        breakPoint = 'mobile';
    }
    return breakPoint;
};

var getInstaPosts = function(){
    var prevWindowSize = 'desktop',
        postLimit;


    if (_getBreakpoint() != prevWindowSize) {
        prevWindowSize = _getBreakpoint()
    }

    if (prevWindowSize == 'desktop' || prevWindowSize == 'tablet' || prevWindowSize == 'largeDesktop'){
        postLimit = 5;
    } if (prevWindowSize == 'mobile') {
        postLimit = 10;
    }



    var userID          = '1395478304',
        accessToken     = '1395478304.1677ed0.53821b03d6984a2680c0828acb76ba9e';
    const Instafeed     = require("instafeed.js");

    $('.instafeed').empty();

    var feed = new Instafeed({
        get: 'user',
        userId: userID,
        accessToken: accessToken,
        limit: postLimit,
        resolution: 'standard_resolution',
        template: '<a class="animation instafeed__item" href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
    });
    feed.run();
}
