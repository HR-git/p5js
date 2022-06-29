let ball = {
	x: 0,
	y: 0,
	radius: 5,
	speed: 1
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	init();
}

function draw() {
	//くりかえす(スピードアップ)
	for (let i = 0; i < ball.speed; i++) {
		move();
		throughWall();
		display();
	}
}

//関数を作成

function init(){
	//初期設定
	ball.x = random(width);
	ball.y = random(height);
	ball.radius = 4;
	ball.speed = 1000;
	background(0);
}

function move(){
	//移動
	ball.x += random(-1, 1);
	ball.y += random(-1, 1);
}

function throughWall(){
	//画面の端にきたら反対側へ
	if (ball.x > width) {
		ball.x = 0;
	}
	if (ball.x < 0) {
		ball.x = width;
	}
	if (ball.y > height) {
		ball.y = 0;
	}
	if (ball.y < 0) {
		ball.y = height;
	}
}

function display(){
	//円を描く
	noStroke();
	fill(255, 3);
	circle(ball.x, ball.y, ball.radius);
}
	







