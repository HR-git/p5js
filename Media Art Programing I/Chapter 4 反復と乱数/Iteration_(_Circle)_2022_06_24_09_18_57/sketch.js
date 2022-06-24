function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(0);
  fill(31, 127, 255, 127);
  let x = width / 4.0;
  let y = height / 2.0;
  let diameter = width / 2.0;
  for(let i = 0; i < 10; i++){
    circle(x, y, diameter);
    circle(x + diameter, y, diameter)
    x = x / 2.0;
    diameter = diameter / 2.0; // 直径の半分だけ移動
  }
}