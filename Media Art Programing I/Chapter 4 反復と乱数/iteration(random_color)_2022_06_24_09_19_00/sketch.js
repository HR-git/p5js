function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
    background(0);
  noStroke();
  for(let i = 0; i < 100; i++){
    fill(random(0, 120), random(0, 100), 70, 50); // randomはdrawの中で実行すると毎フレームrandomが実行されてしまうので値が飛び飛びになってしまう
    circle(random(width), random(height), random(50, 100));
  }
}
