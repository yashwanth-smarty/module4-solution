//Speak bye
(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak2=function(name2){
    console.log("Bye " + name2);
  }
  window.byeSpeaker=byeSpeaker;
})(window);
