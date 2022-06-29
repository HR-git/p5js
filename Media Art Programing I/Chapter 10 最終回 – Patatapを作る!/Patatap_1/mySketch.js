let sound = [];
let bgColor; 

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
	bgColor = color(0, 0, 0);
}

function draw() {
	background(bgColor);
}

function keyTyped() { //キーを押した時に発生するイベント
	if(key == 'a') { //a>hまでのそれぞれのキーを押したときに音が鳴る
	sound[0].play();
	bgColor = color(0, 100, 100); //ボタンを押したときにbgColorの色を変更
} else if(key == 's') {
	sound[1].play();
	bgColor = color(60, 100, 100);
} else if(key == 'd') {
	sound[2].play();
	bgColor = color(120, 100, 100);
} else if(key == 'f') {
	sound[3].play();
	bgColor = color(180, 100, 100);
} else if(key == 'g') {
	sound[4].play();
	bgColor = color(240, 100, 100);
} else if(key == 'h') {
	sound[5].play();
	bgColor = color(300, 100, 100);
}
	
}