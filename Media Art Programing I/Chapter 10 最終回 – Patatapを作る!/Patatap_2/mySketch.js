let sound = [];
let animation;

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
}

function draw() {
	background(0);
	if(animation){ //animationオブジェクトに何か実体が入っていたら
		animation.draw();
	}
}

function keyTyped() { //キーを押した時に発生するイベント
	if(key == 'a') { //a>hまでのそれぞれのキーを押したときに音が鳴る
		sound[0].play();
		animation = new Anim_a(); //キーを押したときにインスタンス化することでアニメーションオブジェクトを上書き
	} else if(key == 's') {
		sound[1].play();
		animation = new Anim_s();
	} else if(key == 'd') {
		sound[2].play();
		animation = new Anim_d();
	} else if(key == 'f') {
		sound[3].play();
		animation = new Anim_f();
	} else if(key == 'g') {
		sound[4].play();
		animation = new Anim_g();
	} else if(key == 'h') {
		sound[5].play();
		animation = new Anim_h();
	}
}

// animationを変えるときはクラスの中身を変える

class Anim_a {
	constructor() {
		this.bgColor = color(0, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}

class Anim_s {
	constructor() {
		this.bgColor = color(60, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}

class Anim_d {
	constructor() {
		this.bgColor = color(120, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}

class Anim_f {
	constructor() {
		this.bgColor = color(180, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}

class Anim_g {
	constructor() {
		this.bgColor = color(240, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}

class Anim_h {
	constructor() {
		this.bgColor = color(300, 100, 100);
	}
	draw() {
		background(this.bgColor);
	}
}