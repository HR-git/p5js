let img;

function preload() {
	img = loadImage('./snake-species.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(width, height);
}

function draw() {
	background(0);
	image(img, 0, 0);
	let col = img.get(mouseX, mouseY); // 画像のピクセルの色が取り出される
	fill(col);
	stroke(255);
	circle(100, 100, 80);
}