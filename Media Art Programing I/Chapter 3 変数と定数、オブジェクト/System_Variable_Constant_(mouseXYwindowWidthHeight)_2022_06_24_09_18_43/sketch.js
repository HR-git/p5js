function setup() {
  createCanvas(windowWidth, windowHeight); // フルスクリーン
  background(31);
}

function draw() {
  noStroke();
  fill(31, 127, 255, 50);
  circle(mouseX, mouseY, 10);
  fill(255, 127, 31, 50);
  circle(width - mouseX, mouseY, 10);
  fill(127, 255, 31, 50);
  circle(mouseX, height - mouseY, 10);
  fill(31, 255, 127, 50);
  circle(width - mouseX, height - mouseY, 10);
}