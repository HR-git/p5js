const num = 300;
let vecLocation = []; // 位置のベクトルの配列
let vecVelocity = []; // 速度のベクトルの配列
let diameter = [];
let col = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for(let i = 0; i < num; i++) {
    vecLocation[i] = createVector(width/2, height/2);
    vecVelocity[i] = createVector(random(-10, 10), random(-10, 10));
    diameter[i] = random(5, 40);
    col[i] = color(random(255), random(255), random(255), 200)
  } // それぞれnum分の配列を作成
}

function draw() {
  background(0); // 背景を毎フレーム描画することで増殖を防いでアニメーションにする
  noStroke();
  for(let i = 0; i < num; i++) {
    fill(col[i]);
    vecLocation[i].add(vecVelocity[i]);
    circle(vecLocation[i].x, vecLocation[i].y, diameter[i]);
    if(vecLocation[i].x < 0 || vecLocation[i].y > width) {
      vecVelocity[i].x = vecVelocity[i].x * -1;     
    }
    if(vecLocation[i].y < 0 || vecLocation[i].y > height) {
      vecVelocity[i].y = vecVelocity[i].y * -1;     
    } // 端っこに来たら反発
  }
}