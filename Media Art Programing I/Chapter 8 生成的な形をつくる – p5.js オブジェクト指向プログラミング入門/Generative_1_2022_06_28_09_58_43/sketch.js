let position; //位置
let velocity; //速度

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(width/2, height/2);
  background(0);
}

function draw() { //10倍速で描く
  for(let i = 0; i < 10; i++){
    velocity = createVector(random(-1.0, 1.0), random(-1.0, 1.0)); // 毎フレーム-1~1の範囲で速度が生成される
  position.add(velocity); // 位置ベクトルに速度ベクトルを加算 = 次のフレームでの位置ベクトルが求められる
  noStroke();
  fill(255, 31);
  circle(position.x, position.y, 2);
  }
}
