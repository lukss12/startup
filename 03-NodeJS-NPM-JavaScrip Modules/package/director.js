var Director = function(directorName) {
	this.attributes = {};
  this.attributes["name"] = directorName;
  }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Director.prototype.set = function(attr,value) {
  this.attributes[attr] = value;
  console.log(this.attributes["name"] + ": " + attr + " added");
}

Director.prototype.speak = function(){
	console.log(this.attributes["name"] + " says: " + this.attributes["quotes"][getRandomInt(0,this.attributes["quotes"].length-1)]);
}

module.exports.Director = Director;