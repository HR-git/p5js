const num = 400;
let blob  = [];

function setup() {
	//初期設定
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < num; i++){
		let diameter = random(10, 80);
		let position = createVector(width/2, height/2);
		let velocity = createVector(random(-2, 2), random(-2, 2));
		blob.push(new Blob(diameter, position, velocity)); //空の配列に要素を追加 = push
	}
}

function draw() {
	background(0);
	for(let i = 0; i < num; i++){
		blob[i].move();
		blob[i].bounce();
		blob[i].display();
	}
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