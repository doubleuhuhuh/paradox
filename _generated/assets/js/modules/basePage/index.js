
// import header from 'header'

// import 'footer'
// import * as track from 'track'
import {domReady} from 'lib'


domReady(function(){
    initMobileNav();
})

var initMobileNav = function(){
    $('.nav__close, .nav__toggle').on('click',function(e){
        console.log('clicked');
        e.preventDefault();
        $('.nav').toggleClass('open');
    })
}
