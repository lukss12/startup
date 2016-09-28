//Social Mixin
var Social = function() {
  this.share = function(friendName) {
    console.log("Sharing " + this.get("title") + " with " + friendName);
  }
  this.like = function() {
    console.log("Sharing " + this.get("title") + " with " + friendName);
  }
  return this;
} 

//Actor 
var Actor = function(actorName){
    this.name = actorName;
  }

//Actored Mixin
var Actored = function() {
  this.actors = [];

  this.addActor = function(newActor) {
    this.actors.push(newActor);
  }
  return this;
} 

//Movie
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

//Apply Social Mixin to movie prototype (all movie instances)
Social.call(Movie.prototype);

//MovieObserver
var MovieObserver = function() {}

MovieObserver.prototype.onStopped = function(movie){
  console.log(movie + " stopped");
}

MovieObserver.prototype.onPlaying = function(movie){
  console.log(movie + " playing");
}

//DownloadableMovie
var DownloadableMovie = function(){
  Movie.call(this);
}

DownloadableMovie.prototype = Object.create(Movie.prototype);

DownloadableMovie.prototype.download = function(){
  console.log(this.attributes["title"] + ": " + " downloading");
}

var theCall = new Movie();
theCall.set("title","La llamada");
theCall.set("duration","2hs");

var fast = new DownloadableMovie();
fast.set("title","Rapido y Furioso");
fast.set("duration","1.5hs");

//Aplly Actored Mixin only for this movie
Actored.call(fast);
var vinDiesel = new Actor("Vin Diesel");
var paulWalker = new Actor("Paul Walker");
fast.addActor(vinDiesel);
fast.addActor(paulWalker);

var terminator = new Movie();
terminator.set('title', 'Terminator');
terminator.set("duration","2hs");

var ironman2 = new Movie();
ironman2.set('title', 'Iron Man 2');
ironman2.set("duration","2hs");

//Register observer for movies events
var observer = new MovieObserver();
theCall.suscribe(observer);
fast.suscribe(observer);
terminator.suscribe(observer);
ironman2.suscribe(observer);

