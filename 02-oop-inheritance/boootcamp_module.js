//Movie Module
var Movie = function() {
    var attributes = {};
    var observers = new Array();

    return{
      play : function() {
              console.log(attributes["title"] + ": " + "onPlaying event fired");
              var observersCount = observers.length;
              for(var i=0; i < observersCount; i++){
                observers[i].onPlaying(attributes["title"]);
              }
            },
      stop : function() {
              console.log(attributes["title"] + ": " + "onStopped event fired");
              var observersCount = observers.length;
              for(var i=0; i < observersCount; i++){
                observers[i].onStopped(attributes["title"]);
              }
            },
      set : function(attr,value) {
              attributes[attr] = value;
              console.log(attributes["title"] + ": " + attr + " added");
            },
      get : function(attr) {
              return attributes[attr];
            },
      suscribe : function(obj){
                  observers.push(obj)
                 }     
    };
  }

//Downloadable Module
var Downloadable = function(Module) {
  Module.download = function(){
    console.log(Module.get("title") + ": " + " downloading");
  }
  return Module;
}

//Movie Observer
var MovieObserver = function() {}

MovieObserver.prototype.onStopped = function(movie){
  console.log(movie + " stopped");
}

MovieObserver.prototype.onPlaying = function(movie){
  console.log(movie + " playing");
}

var theCall = new Movie();
theCall.set("title","La llamada");
theCall.set("duration","2hs");

//Use Downloadable module to extend a Movie Object
var fast = new Downloadable(new Movie());
fast.set("title","Rapido y Furioso");
fast.set("duration","1.5hs");

var terminator = new Movie();
terminator.set('title', 'Terminator');
terminator.set("duration","2hs");

//Register observer for movies events
var observer = new MovieObserver();
theCall.suscribe(observer);
fast.suscribe(observer);
terminator.suscribe(observer);