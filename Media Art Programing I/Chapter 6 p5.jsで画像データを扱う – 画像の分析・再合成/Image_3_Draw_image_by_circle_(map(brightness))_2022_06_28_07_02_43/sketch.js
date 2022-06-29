let img;

function preload() {
	img = loadImage('./snake-species.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(width, height);
	background(0);
}

function draw() {
//	background(0); // コメントアウトするとcircleの増殖になる
	for(let i = 0; i < 50; i++) { // 50倍速でcircleを描画
		let x = int(random(width));
		let y = int(random(height));
		let col = img.get(x, y);
		noStroke();
		fill(red(col), green(col), blue(col), 190);
		let diameter = map(brightness(col), 0, 255, 5, 80); // 明度でcircleの大きさを決定する(saturation:彩度, hue:色相)
		circle(x, y, diameter);
	}
}