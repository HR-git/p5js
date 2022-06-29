function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	background(0);
}

function draw() {
	
	let circleLocation = createVector(random(width), random(height)); //⓶　変数を定義
	let numCircles = random(10, 60);
	let radius = random(100, 600);
	let circleColor = color(random(255), random(255), random(255));
	guruguru(circleLocation, numCircles, radius, circleColor);　//　⓷　変数名を引数に指定
}

function guruguru(circleLocation, numCircles, radius, circleColor){ //⓵　引数として定義したい変数名を引数に記述する
	stroke(circleColor);
	noFill();
	for(let i = 0; i < numCircles; i++){
		let currentRadius = map(i, 0, numCircles-1, 10, radius);　//同心円を作成
		circle(circleLocation.x, circleLocation.y, currentRadius);
	}
}