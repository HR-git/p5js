let locationX, locationY;
let velocityX, velocityY; // 1フレーム当たりのピクセル数

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  locationX = width / 2.0;
  locationY = height / 2.0;
  velocityX = random(-10, 10);
  velocityY = random(-10, 10);
}

function draw() {
  background(0); // 背景を毎フレーム描画することで増殖を防いでアニメーションにする
  noStroke();
  locationX = locationX + velocityX; // 毎フレーム速度を加算
  locationY = locationY + velocityY;
  fill(31, 127, 255);
  circle(locationX, locationY, 20);
  if(locationX < 0 || locationX > width) {
    velocityX = velocityX * -1.0;     
     }
  if(locationY < 0 || locationY > height) {
    velocityY = velocityY * -1.0;     
     } // 端っこに来たら反発
}