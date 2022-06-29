// -------- 増殖する円 -------- 
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);   //書き換え頻度の設定
  background(0);
}

function draw() {
  let diameter = random(100);
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), diameter, diameter);
}

// -------- 移動する円 -------- 
let locationX, locationY; //円の中心位置を格納する変数
let velocityX, velocityY; //円の速度を格納する変数
function setup() {
  createCanvas(windowWidth, windowHeight); //画面を生成
  frameRate(60); //フレームレート
  locationX = 0; //円の初期位置X
  locationY = 0; //円の初期位置Y
  velocityX = 3; //円の初期位置X
  velocityY = 2; //円の初期位置Y
}

function draw() {
  background(0); //背景を描画
  locationX = locationX + velocityX; //円のX座標を更新
  locationY = locationY + velocityY; //円のY座標を更新
  noStroke(); //枠線なし
  fill(0, 127, 255); //塗りの色
  ellipse(locationX, locationY, 20, 20); //指定した位置に円を描画
}

// -------- バウンドさせる -------- 
let locationX, locationY; //円の中心位置を格納する変数
let velocityX, velocityY; //円の速度を格納する変数
function setup() {
  createCanvas(windowWidth, windowHeight); //画面を生成
  frameRate(60); //フレームレート
  locationX = width / 2; //円の初期位置X
  locationY = height / 2; //円の初期位置Y
  velocityX = random(-10, 10); //円の初期速度X
  velocityY = random(-10, 10); //円の初期速度Y
}

function draw() {
  background(0); //背景を描画
  locationX = locationX + velocityX;
  locationY = locationY + velocityY;
  noStroke(); //枠線なし
  fill(0, 127, 255); //塗りの色
  ellipse(locationX, locationY, 20, 20);
  //バウンド
  if (locationX < 0 || locationX > width) {
    velocityX = velocityX * -1;
  }
  if (locationY < 0 || locationY > height) {
    velocityY = velocityY * -1;
  }
}
// -------- バウンド、ベクトル版 --------
let vecLocation; //円の速度ベクトル
let vecVelocity; //円の速度ベクトル
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  vecLocation = createVector(width / 2, height / 2);
  vecVelocity = createVector(random(-10, 10), random(-10, 10));
}

function draw() {
  background(0);
  vecLocation.add(vecVelocity);
  noStroke();
  fill(0, 127, 255);
  ellipse(vecLocation.x, vecLocation.y, 20, 20);
  //バウンド
  if (vecLocation.x < 0 || vecLocation.x > width) {
    vecVelocity.x = vecVelocity.x * -1;
  }
  if (vecLocation.y < 0 || vecLocation.y > height) {
    vecVelocity.y = vecVelocity.y * -1;
  }
}

// -------- 配列で同時に動かす --------
let num = 100; //円の数
let vecLocation = []; //円の中心の位置ベクトル
let vecVelocity = []; //円の速度ベクトル

function setup() {
  createCanvas(windowWidth, windowHeight); //画面を生成
  frameRate(60); //フレームレート
  for (let i = 0; i < num; i++) {
    vecLocation[i] = createVector(width / 2, height / 2);
    vecVelocity[i] = createVector(random(-10, 10), random(-10, 10));
  }
}

function draw() {
  background(0); //背景を描画
  noStroke(); //枠線なし
  fill(0, 127, 255); //塗りの色
  //円の数だけくりかえす
  for (let i = 0; i < num; i++) {
    vecLocation[i].add(vecVelocity[i]);
    ellipse(vecLocation[i].x, vecLocation[i].y, 20, 20);
    
    if (vecLocation[i].x < 0 || vecLocation[i].x > width) {
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }
    if (vecLocation[i].y < 0 || vecLocation[i].y > height) {
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}

// -------- 色と多きさもランダムに ----
let vecLocation = []; //円の中心の位置ベクトル
let vecVelocity = []; //円の速度ベクトル
let diameter = []; //円の直径
let col = []; //円の色
let num = 100;

function setup() {
  createCanvas(windowWidth, windowHeight); //画面を生成
  frameRate(60); //フレームレート
  for (let i = 0; i < num; i++) {
    vecLocation[i] = createVector(width / 2, height / 2);
    vecVelocity[i] = createVector(random(-10, 10), random(-10, 10));
    diameter[i] = random(5, 80);
    col[i] = color(random(255), random(255), random(255), 190);
  }
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < num; i++) {
    fill(col[i]);
    vecLocation[i].add(vecVelocity[i]);
    ellipse(vecLocation[i].x, vecLocation[i].y, diameter[i], diameter[i]);
    if (vecLocation[i].x < 0 || vecLocation[i].x > width) {
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }
    if (vecLocation[i].y < 0 || vecLocation[i].y > height) {
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}


