var reqMovie = require("./movie.js");
var Movie = reqMovie.Movie;
var Director = reqMovie.Director;
var $ = require('jquery-browserify')

console.log(reqMovie);
var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();


$('body').append(document.createTextNode("Frases de " + ridleyScott.attributes["name"] + ":"));
$('body').append(document.createElement("br"));

for (var i = ridleyScott.attributes["quotes"].length - 1; i >= 0; i--) {
	$('body').append(document.createTextNode(ridleyScott.attributes["quotes"][i]));
	$('body').append(document.createElement("br"));
}