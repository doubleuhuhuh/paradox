define(['./page', 'jquery'], function(page, $){
  /*
  Extend page with some jquery events
  */

  page.onReady = function(cb){
    $(document).ready(function(){
      cb();
    });
  }

  return page;
});
