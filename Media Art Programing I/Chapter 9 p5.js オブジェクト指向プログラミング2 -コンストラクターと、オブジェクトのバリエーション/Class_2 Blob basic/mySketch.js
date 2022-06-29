let blob;

function setup() {
	//初期設定
	createCanvas(windowWidth, windowHeight);
	blob = new Blob(); //インスタンス化
	blob.diameter = 300; //オブジェクト名.変数名としてあとから値を代入できる
	blob.velocity = createVector(random(-10, 10), random(-10, 10));
}

function draw() {
	background(0);
	blob.move();
	blob.bounce();
	blob.display();
}

class Blob { //Classの中でのみ使われる変数はthis.*にする
	constructor() { //初期化
		this.diameter = 100.0;
		this.position = createVector(width / 2, height / 2);
		this.velocity = createVector(random(-2, 2), random(-2, 2));
	}
	move() {
		this.position.add(this.velocity); //位置を更新
	}
	bounce() {
		//壁でバウンド
		if (this.position.x < this.diameter / 2 || this.position.x > width - this.diameter / 2) {
			this.velocity.x *= -1;
		}
		if (this.position.y < this.diameter / 2 || this.position.y > height - this.diameter / 2) {
			this.velocity.y *= -1;
		}
	}
	display() {
		//色の設定
		noStroke();
		fill(255, 127);
		//プヨプヨする動きを計算
		let currentDiameter = sin(frameCount * 0.1) * (this.diameter / 4) + this.diameter;
		//周囲の円を描画
		circle(this.position.x, this.position.y, currentDiameter);
		//核となる円を描画
		fill(255);
		circle(this.position.x, this.position.y, this.diameter / 6.0);
	}
}