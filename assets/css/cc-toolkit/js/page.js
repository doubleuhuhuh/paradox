define([], function(){
//empty page for now if we need stuff thats not in jquery

  var onBeforeReady = function(cb){
    cb();
  }

  var onLoad = function(cb){
    window.onload = cb();
  }

  return {
    onBeforeReady: onBeforeReady,
    onLoad: onLoad
  };
});
