let sound = [];
let animation = []; // animationを配列に

function preload() {
	sound[0] = loadSound('./se01.wav');
	sound[1] = loadSound('./se02.wav');
	sound[2] = loadSound('./se03.wav');
	sound[3] = loadSound('./se04.wav');
	sound[4] = loadSound('./se05.wav');
	sound[5] = loadSound('./se06.wav');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	background(0);
		for(let i = 0; i < animation.length; i++) {
			animation[i].draw();
	}
}

function keyTyped() { //キーを押した時に発生するイベント
	if(key == 'a') { //a>hまでのそれぞれのキーを押したときに音が鳴る
		sound[0].play();
		animation.push(new Anim_a()); //配列の末尾にオブジェクトを追加
	} else if(key == 's') {
		sound[1].play();
		animation.push(new Anim_s());
	} else if(key == 'd') {
		sound[2].play();
		animation.push(new Anim_d());
	} else if(key == 'f') {
		sound[3].play();
		animation.push(new Anim_f());
	} else if(key == 'g') {
		sound[4].play();
		animation.push(new Anim_g());
	} else if(key == 'h') {
		sound[5].play();
		animation.push(new Anim_h());
	}
	if(animation.length > 6) {
		animation.splice(1, 1); //６枚以降重なったアニメーションは新しいアニメーションで上書き
	}
}

// animationを変えるときはクラスの中身を変える

class Anim_a {
	constructor() {
		this.diameter = 0;
	}
	draw() {
		fill(0, 100, 100);
		circle(width/2, height/2, this.diameter); // circleの直径を操作
		this.diameter += 9.1; //drawするたびに10を加算
	}
}

class Anim_s {
	constructor() {
		this.xPos = 0;
	}
	draw() {
		fill(60, 100, 100);
		rect(this.xPos, 0, 50, height); //四角形の位置を操作
		this.xPos += 50;
	}
}

class Anim_d {
	constructor() {
		this.size = 1.0;
	}
	draw() {
		fill(120, 100, 100);
		rectMode(CENTER); // 四角形の中心を基準点に四角形を描くようにrectのモードを変更
		rect(width/2, height/2, width * this.size, height * this.size);
		this.size *= 0.9; // 少しずつ小さくなる
		rectMode(CORNER); // rectのモードを元に戻す（Anim_sのrectに影響してしまうため）
	}
}

class Anim_f {
	constructor() {
		this.alpha = 100;
	}
	draw() {
		background(180, 100, 100, this.alpha);
		this.alpha *= 0.95; //alpha値が変化
	}
}

class Anim_g {
	constructor() {
		this.yPos = height;
	}
	draw() {
		fill(200, 100, 100);
		rect(0, this.yPos, width, 50);
		rect(0, height - this.yPos -50, width, 50); //(height - this.yPos)だと最後が隠れてしまうので(-50)する
		this.yPos *= 0.8;
	}
}

class Anim_h {
	constructor() {
		this.size = 1.0;
	}
	draw() {
		stroke(300, 100, 100);
		strokeWeight(10);
		noFill();
		circle(width/2, height/2, this.size);
		this.size *= 1.25;
		strokeWeight(1); // 元に戻す
		noStroke();　// 元に戻す
	}
}