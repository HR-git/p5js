function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
}

function draw() {
	background(0);
	guruguru(createVector(width/2, height/2), 40, 600, color(63, 127, 255));　//⓶　関数guruguruの引数に定義した変数のパラメーターを引数に記述する
}

function guruguru(circleLocation, numCircles, radius, circleColor){ //⓵　引数として定義したい変数名を引数に記述する
	stroke(circleColor);
	noFill();
	for(let i = 0; i < numCircles; i++){
		let currentRadius = map(i, 0, numCircles-1, 10, radius);
		circle(circleLocation.x, circleLocation.y, currentRadius);
	}
}