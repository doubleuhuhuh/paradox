import extend from 'extend';
import * as trak from 'trak.js'
import {domReady} from 'lib'

var initialized = false;
var defaultEventObj = {
  eventName: 'gaEvent'
};

function init(){
    if(!initialized){
        trak.start();
        trak.options.trackType = 'ga';
        trak.options.clean = false;
        initialized = true;
    }
}

domReady(init);

export function event(obj){
    if(initialized){
        var config = extend(obj, defaultEventObj);
        trak.event(config);
    }
    else{
        console.warn('Google analytics is not ready!', obj);
    }
}
