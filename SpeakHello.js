//SpeakHello
(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak1=function(name1){
    console.log("Hello " + name1);
  }
  window.helloSpeaker=helloSpeaker;
})(window);
