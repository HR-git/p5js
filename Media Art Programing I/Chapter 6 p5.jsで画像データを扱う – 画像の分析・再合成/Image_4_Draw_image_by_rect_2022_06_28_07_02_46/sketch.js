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
		push();
		let length = map(saturation(col), 0, 255, 0, 120);
		let angle = map(hue(col), 0, 255, 0, 180);
		translate(x, y); // (描画される)座標の原点をx, yに変更
		rotate(radians(angle)); // 座標全体の角度を原点を中心に回転
		rect(0, 0, 2, length); // 色相によって角度が変化
		pop();
	}
}