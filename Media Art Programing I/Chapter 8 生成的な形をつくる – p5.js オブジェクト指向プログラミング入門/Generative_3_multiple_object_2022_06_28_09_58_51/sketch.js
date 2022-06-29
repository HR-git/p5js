const num = 100; //定数で作成するオブジェクトの数を定義する
let walker = []; //walker配列を宣言

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for(let i = 0; i < num; i++){
    walker[i] = new Walker(); //100個のwalkerを生成
    walker[i].position = createVector(random(width), random(height)); //walkerの位置をランダムに
  }
}

function draw() {
  fill(0, 1); //薄い黒
  rect(0, 0, width, height); //薄い黒で塗りつぶしてフェイドアウト効果
  for(let i = 0; i < num; i++){
    walker[i].draw();
  }
}
class Walker {
  constructor(){ //初期化される際に実行される
    this.position = createVector(width/2, height/2); //this.*とすることでconstructorの中でのみ使用可能な変数になる
  }
  
  draw(){ 
    for(let i = 0; i < 10; i++){
      this.velocity = createVector(random(-1.05, 1.0), random(-1.0, 1.05)); //ほんの少しパラメーターを変えることで確率が変わって少しずつ左下に向かう
      this.position.add(this.velocity);
      noStroke();
      fill(255, 31);
      circle(this.position.x, this.position.y, 2);
    }
  }
}