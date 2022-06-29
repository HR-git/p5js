let walker; //walkerオブジェクトを宣言

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  walker = new Walker(); //Walkerクラスを初期化してwalkerオブジェクトを生成＝インスタンス化（constructorを実行）
}

function draw() { 
  walker.draw(); //Walkerクラスの中で定義されたdraw関数を呼び出し
}
class Walker {
  constructor(){ //初期化される際に実行される
    this.position = createVector(width/2, height/2); //this.*とすることでconstructorの中でのみ使用可能な変数になる
  }
  
  draw(){ 
    for(let i = 0; i < 10; i++){
      this.velocity = createVector(random(-1.0, 1.0), random(-1.0, 1.0)); //全てthis.*とする
      this.position.add(this.velocity);
      noStroke();
      fill(255, 31);
      circle(this.position.x, this.position.y, 2);
    }
  }
}