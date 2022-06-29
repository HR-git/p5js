// -------- 画像の表示 -------- 
let img;

function preload() {
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

// -------- 画像の明度  -------- 
let img;

function preload() {
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, width, height);
}

function draw() {
  background(0);
  noTint();
  image(img, 0, height / 4, width / 2, height / 2);
  tint(mouseY / float(height) * 255);
  image(img, width / 2, height / 4, width / 2, height / 2);
}

// -------- 画像の色を変化 -------- 
let img;

function preload() {
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noTint(); //色の補正をリセット
  //元の画像を描画
  image(img, 0, height/4, width/2, height/2);
  //マウスの位置でRed, Green Blueを設定
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, width, 255, 0);
  let b = 255;
  tint(r, g, b); //設定した色を適用
  //色を変化させた画像を描画
  image(img, width/2, height/4, width/2, height/2);
}

// -------- ピクセレイト -------- 
let img; //画像データ

function preload() {
  //画像をロード
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //画像を画面の大きさにリサイズ
  img.resize(width, height);
  //背景を黒に
  background(0);
}

function draw() {
  //色を取得する位置をランダムに決定
  let x = int(random(width));
  let y = int(random(height));
  //指定した場所の色を取得
  let col = img.get(x, y);
  //指定した色に透明度を付加
  fill(red(col), green(col), blue(col), 190);
  noStroke();
  let diameter = 20;
  //円を描画
  ellipse(x, y, diameter);
}

// -------- 明るさで大きさを変化 -------- 
let img; //画像データ

function preload() {
  //画像をロード
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //画像を画面の大きさにリサイズ
  img.resize(width, height);
  //背景を黒に
  background(0);
}

function draw() {
  //色を取得する位置をランダムに決定
  let x = int(random(width));
  let y = int(random(height));
  //指定した場所の色を取得
  let col = img.get(x, y);
  //指定した色に透明度を付加
  fill(red(col), green(col), blue(col), 190);
  noStroke();
  //明度を直径に反映させる
  let diameter = map(brightness(col), 0, 255, 5, 40);
  //円を描画
  ellipse(x, y, diameter);
}

// -------- 彩度で変化+スピードアップ -------- 
let img; //画像データ

function preload() {
  //画像をロード
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //画像を画面の大きさにリサイズ
  img.resize(width, height);
  //背景を黒に
  background(0);
}

function draw() {
  //50倍速
  for(let i = 0; i < 50; i++){
    //色を取得する位置をランダムに決定
    let x = int(random(width));
    let y = int(random(height));
    //指定した場所の色を取得
    let col = img.get(x, y);
    //指定した色に透明度を付加
    fill(red(col), green(col), blue(col), 190);
    noStroke();
    //彩度を直径に反映させる
    let diameter = map(saturation(col), 0, 255, 5, 40);
    //円を描画
    ellipse(x, y, diameter);
  }
}

// -------- 四角形の長さと角度 -------- 
let img; //画像データ

function preload() {
  //画像をロード
  img = loadImage('./photo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //画像を画面の大きさにリサイズ
  img.resize(width, height);
  //背景を黒に
  background(0);
}

function draw() {
  for (let i = 0; i < 100; i++) { //100倍速
    //色を取得する位置をランダムに決定
    let x = int(random(width));
    let y = int(random(height));
    //指定した場所の色を取得
    let col = img.get(x, y);
    noStroke();
    //色の彩度を円の直径に反映させる
    let rotation = map(saturation(col), 0, 255, 0, 360);
    //大きさは明度に反映させる
    let length = map(brightness(col), 0, 255, 0, 100);
    //色に透明度を加える
    fill(red(col), green(col), blue(col), 128);
    push();
    translate(x, y);
    rotate(radians(rotation));
    //四角形を描画
    rect(0, 0, 2, length);
    pop();
  }
}
