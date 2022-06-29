//Walkerクラスのオブジェクトwalker
const num = 100;
let walker = [];

function setup() {
  //初期設定
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  //Walkerクラスをインスタンス化
  for (let i = 0; i < num; i++) {
    walker[i] = new Walker();
  }
  background(0);
}

function draw() {
  //画面をフェード
	blendMode(BLEND);
  fill(0, 5);
  rect(0, 0, width, height);
  //Walkerクラスのdraw()を実行
	blendMode(ADD);
  for (let i = 0; i < num; i++) {
    walker[i].draw();
  }
}

//Walkerクラス
class Walker {
  constructor() {
    //初期位置を画面の中心に
    this.position = createVector(width / 2, height / 2);
  }

  draw() {
    //10倍速で
    for (let i = 0; i < 10; i++) {
      //上下左右にランダムな速度
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      //位置を更新
      this.position.add(this.velocity);
      //円を描画
      noStroke();
      fill(0, 127, 255, 31);
      ellipse(this.position.x, this.position.y, 2, 2);
    }
  }
}