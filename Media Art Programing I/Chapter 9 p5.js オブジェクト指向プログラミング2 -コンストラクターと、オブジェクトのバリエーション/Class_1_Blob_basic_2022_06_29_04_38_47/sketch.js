let diameter; //直径
let position; //位置
let velocity; //速度

function setup() {
	//初期設定
	createCanvas(windowWidth, windowHeight);
	diameter = 100.0;
	position = createVector(width / 2, height / 2);
	velocity = createVector(random(-2, 2), random(2, 2));
}

function draw() {
	background(0);
	move();
	bounce();
	display();
}

function move() {
	position.add(velocity); //位置を更新
}

function bounce() {
	//壁でバウンド
	if (position.x < diameter / 2 || position.x > width - diameter / 2) {
		velocity.x *= -1;
	}
	if (position.y < diameter / 2 || position.y > height - diameter / 2) {
		velocity.y *= -1;
	}
}

function display() {
	//色の設定
	noStroke();
	fill(255, 127);
	//プヨプヨする動きを計算
	currentDiameter = sin(frameCount * 0.1) * (diameter / 4) + diameter;
	//周囲の円を描画
	circle(position.x, position.y, currentDiameter);
	//核となる円を描画
	fill(255);
	circle(position.x, position.y, diameter / 6.0);
}