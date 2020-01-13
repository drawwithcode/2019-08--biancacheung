// var myMap;
// var canvas;
// const mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYmlhbmNhY2hldW5nIiwiYSI6ImNrNWNsand1NjAzMXkzb3MwZnQwMHI5cW4ifQ.q7sF2cnIvpVCTZLmEVzmfg");
// var antLat = -75.2509766;
// var antLon = -0.071389;
// var myLat;
// var myLon;
// var myLoc;
//
// var options = {
//   lat: antLat,
//   lng: antLon,
//   zoom: 5,
//   style: "mapbox://styles/biancacheung/ck5cqscfn02fo1fsceetmtuoq"
// }
//
// function preload() {
//

// }
//
// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   myMap = mappa.tileMap(options);
//   myMap.overlay(canvas);
//   myLat = myLoc.latitude;
//   myLon = myLoc.longitude;
// ;
// }
//
// function draw() {
//   clear();
//   var point = myMap.latLngToPixel(myLat, myLon);
//    fill(255, 0, 0);
//    noStroke();
//    ellipse(point.x, point.y, 10)
// }
//

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

var antLat = -75.2509766;
var antLon = -0.071389;

// Lets put all our map options in a single object
const options = {
  lat: 0,
  lng: 0,
  zoom: 5.5,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
}
function preload(){
  myLoc = getCurrentPosition();
  penguins = loadImage("./assets/penguin.png");
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myLat = myLoc.latitude;
  myLon = myLoc.longitude;
}

function draw(){

  clear();

  var myLocation = myMap.latLngToPixel(myLat, myLon);
  fill("gray");
  noStroke();
  ellipse(myLocation.x, myLocation.y, 10);

  var ant = myMap.latLngToPixel(antLat, antLon);
  fill("gray");
  noStroke();
  ellipse(ant.x, ant.y, 10);
  imageMode(CENTER);
  image(penguins,ant.x,ant.y, 80,80);

  var distance = dist(antLat, antLon, myLat, myLon);

  push();
 fill("gray");
 noStroke();
 textAlign(CENTER, CENTER);
 textSize(20);
 text("You are "+int(1000*distance)+"m away from the penguins!", myLocation.x, myLocation.y - 20);
 pop();

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
