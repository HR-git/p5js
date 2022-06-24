function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
}

function draw() {
  let diameter = random(100);
  noStroke();
  fill(random(255), random(255), random(255), 200);
  circle(random(width), random(height), diameter);
}
