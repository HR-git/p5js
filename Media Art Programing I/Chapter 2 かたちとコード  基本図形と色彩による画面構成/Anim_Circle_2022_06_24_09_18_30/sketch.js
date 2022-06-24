function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(31);
  fill(255, 127, 0);
  let r = sin(frameCount / 40.0);
  circle(width/2, height/2, 500 * r)
}