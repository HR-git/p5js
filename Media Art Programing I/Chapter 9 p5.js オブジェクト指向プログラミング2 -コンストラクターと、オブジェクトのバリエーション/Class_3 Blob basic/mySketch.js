let blob;

function setup() {
	//初期設定
	createCanvas(windowWidth, windowHeight);
	blob = new Blob( //⓶　constructorの引数で指定した変数を定義
									100, //diameter
									createVector(width/2, height/2), //position
									createVector(random(-10, 10), random(-10, 10)) //velocity
									); //インスタンス化
}

function draw() {
	background(0);
	blob.move();
	blob.bounce();
	blob.display();
}

class Blob { 
	constructor(diameter, position, velocity) { //⓵　引数を指定
		this.diameter = diameter;
		this.position = position;
		this.velocity = velocity;
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