function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
}

function draw() {
	background(0);
	guruguru();
}

function guruguru(){ //引数を設定したい場合は変数名を引数に記述するがまだ設定していない
	let circleLocation = createVector(width/2, height/2);
	let numCircles = 20;
	let radius = 400;
	let circleColor = color(255, 127, 31);
	stroke(circleColor);
	noFill();
	for(let i = 0; i < numCircles; i++){
		let currentRadius = map(i, 0, numCircles-1, 10, radius);
		circle(circleLocation.x, circleLocation.y, currentRadius);
	}
}