function Airport() {
  this.weather = "sunny"
  this.planes_landed = [];
  this.capacity = 2;
}

Airport.prototype.land = function(plane) {
  if (this.planes_landed.length == this.capacity) {return "sorry, airport is full!"}
  this.planes_landed.push(plane)
}

Airport.prototype.takeOff = function(plane) {
this.planes_landed.splice( this.planes_landed.indexOf(plane), 1);
  console.log(this.planes_landed);
}

Airport.prototype.air_control = function(plane) {
  if (this.weather == "stormy") {return "Plane can't take off"}
  return this.takeOff(plane)
}
