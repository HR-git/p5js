function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//  background(220);
//  rect(100, 100, 200, 200);
//  rect(100, 100, 100, 100);
//  rect(100, 100, 50, 50);
//  rect(100, 100, 25, 25);
//  rect(100, 100, 12.5, 12.5); ⓵
  
//  rect(100, 100, 200, 200);
//  rect(100, 100, 200/2.0, 200/2.0);
//  rect(100, 100, 200/2.0/2.0, 200/2.0/2.0);
//  rect(100, 100, 200/2.0/2.0/2.0, 200/2.0/2.0/2.0); // ⓶
  
//  let rectSize = 200.0;
//  rect(100, 100, rectSize, rectSize);
//  rectSize = rectSize / 2.0;
//  rect(100, 100, rectSize, rectSize);
//  rectSize = rectSize / 2.0;
//  rect(100, 100, rectSize, rectSize);
//  rectSize = rectSize / 2.0;
//  rect(100, 100, rectSize, rectSize);
//  rectSize = rectSize / 2.0;
//  rect(100, 100, rectSize, rectSize);
//  rectSize = rectSize / 2.0; //⓷
  
  // for文
  
  background(0);
  noStroke();
  fill(31, 127, 255, 31);
  let diameter = width; // 直径を変数にする
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
//  circle(width / 2.0, height / 2.0, diameter);
//  diameter = diameter / 1.4;
  
  for(let i = 0; i < 100; i++){ 
    circle(width / 2.0, height / 2.0, diameter);
    diameter = diameter / 1.05;
  }
}