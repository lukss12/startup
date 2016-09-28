var reqDirector = require("./director.js");
var Director = reqDirector.Director;

var Movie = function() {
    this.attributes = {};
    this.observers = new Array();
  }

Movie.prototype.play = function() {
  var observersCount = this.observers.length;
  for(var i=0; i < observersCount; i++){
    this.observers[i].onPlaying(this.attributes["title"]);
  }
}

Movie.prototype.stop = function() {
  var observersCount = this.observers.length;
  for(var i=0; i < observersCount; i++){
    this.observers[i].onStopped(this.attributes["title"]);
  }
}

Movie.prototype.set = function(attr,value) {
  this.attributes[attr] = value;
  console.log(this.attributes["title"] + ": " + attr + " added");
}

Movie.prototype.get = function(attr) {
  return this.attributes[attr];
}

Movie.prototype.suscribe = function(obj){
  this.observers.push(obj)
}

module.exports.Movie = Movie;
module.exports.Director = Director;