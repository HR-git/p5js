let sound;
let fft;
let band = 1024;
let rot = []; //角度を保存(角速度)

function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 256, 256, 256);
	fft = new p5.FFT(0.0, band);
	fft.setInput(sound);
	//角度を初期化
	for(let i = 0; i < band; i++){
		rot[i] = random(360);
	}
	background(0);
}

function draw() {
	blendMode(BLEND);
	background(0, 0, 0, 10);
	blendMode(ADD);
	noStroke();	
	//FFT解析
	let spectrum = fft.analyze();
	//push();
	translate(width/2, height/2); //画面の真ん中に原点
	//回転で表現(結果をグラフで描画)
	for (i = 0; i < spectrum.length; i++) {
		let x = map(log(i), 0, log(spectrum.length), 0, height);
		let h = map(log(i), 0, log(spectrum.length), 0, 255);
		let diameter = map(pow(spectrum[i], 2), 0, pow(255, 2), 1, 40);
		let r = map(spectrum[i], 0, 255, 0.01, 1.0);
		//スペクトラムの強さで角度を変化(重要)
		rot[i] += r;
		push();
		rotate(radians(rot[i]));
		fill(h, 190, 127);
		circle(x, 0, diameter);
		pop();
	}
}

function mouseClicked() {
  if (sound.isPlaying() == false) {
    sound.loop();
  } else {
    sound.stop();
  }
}