let img;

function preload() {
	img = loadImage('./snake-species.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	noTint(); // Tintが残らないように更新
	image(img, 0, height / 4, width / 2, height / 2);
//	let br = map(mouseX, 0, width, 0, 255); // 明るさの変更
	let red = map(mouseX, 0, width, 0, 255); // 色の変更
	let green = map(mouseY, 0, height, 0, 255);
	let blue = 127;
	tint(red, green, blue);
	image(img, width / 2, height / 4, width / 2, height / 2);
}