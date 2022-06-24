// let circleX =; // ⓵ 変数の宣言
// let circleX = 100.0; // ⓶ 宣言と同時に初期化
// let circleY = 100.0;
// let diameter = 40.0;
// let r = 31;
// let g = 127;
// let b = 255;

let ball = { // オブジェクトして変数を作成
  x: 100.0,
  y: 100.0,
  diameter: 40.0,
  r: 31, g: 127, b: 255
};

function setup() {
  createCanvas(windowWidth, windowHeight);
// circleX = 100.0; // ⓵ 変数の初期化
}

function draw() { // 毎フレーム更新
  background(31);
  noStroke();
  fill(ball.r, ball.g, ball.b);
  circle(ball.x, ball.y, ball.diameter); // 変数の参照
  ball.x = ball.x + 1.0; // 毎フレーム1pixel右に移動
  ball.y = ball.y + 0.5;
  ball.diameter = ball.diameter + 0.1;
}