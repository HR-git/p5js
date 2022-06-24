function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(0);
  fill(31, 127, 255, 127);
  let x = 0;
  let y = 0;
  let w = width;
  let h = height;
  for(let i = 0; i < 10; i++){
    rect(x, y, w, h);
    rect(x + w, y + h, w, h)
    w = w / 2.0;
    h = h / 2.0;
  }
}