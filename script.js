var data;
var userInput; 
var repColor; // trying to figure out how to make fill color a variable that is set by JSON value

function preload() {
  data = loadJSON("members.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var button = select('#submit');
  button.mousePressed(repLookUp);
  userInput = select('#state');
  background(200);
}

function repLookUp() {
  background(200);
  for (var i = 0; i < data.members.length; i++) {
    ellipse(random(width), random(height), 5, 5);
    fill //possible if else statement to define color based on member political party//);
    ('blue');
  }
  console.log(data.members.length);
}
