let vecLocation; // 位置のベクトル
let vecVelocity; // 速度のベクトル

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  vecLocation = createVector(width/2, height/2); // (x座標, y座標)
  vecVelocity = createVector(random(-10, 10), random(-10, 10));
}

function draw() {
  background(0); // 背景を毎フレーム描画することで増殖を防いでアニメーションにする
  noStroke();
  vecLocation.add(vecVelocity); // 位置のベクトルに速度のベクトルを加算すると次のフレームの位置ベクトルが求められる（座標の更新）
  fill(31, 127, 255);
  circle(vecLocation.x, vecLocation.y, 20);
  if(vecLocation.x < 0 || vecLocation.y > width) {
    vecVelocity.x = vecVelocity.x * -1;     
     }
  if(vecLocation.y < 0 || vecLocation.y > height) {
    vecVelocity.y = vecVelocity.y * -1;     
     } // 端っこに来たら反発
}