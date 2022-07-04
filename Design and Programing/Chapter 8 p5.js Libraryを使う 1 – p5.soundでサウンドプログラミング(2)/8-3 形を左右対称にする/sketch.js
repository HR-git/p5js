let sound;
let fft;

//サウンドファイルをプリロード
function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 256, 256, 256); //色の階調を設定(モード, 色相, 明度, 彩度, 透明度)
	//ループ再生
	sound.loop();
	//FFT初期化
	fft = new p5.FFT(0.5, 1024);//FFTのサイズが解析結果に影響する(スムーズさ, FFTサイズ(2の累乗))
	fft.setInput(sound);
}

function draw() {
	background(0);
	noStroke(); //好みで境界線
	let spectrum = fft.analyze(); //FFT解析
	for(let i = 0; i < spectrum.length; i++) {
		//右半分
		let x1 = map(log(i), 0, log(spectrum.length), width/2, width); 
		let w1 = map(log(i+1), 0, log(spectrum.length), width/2, width) - x1 + 1;
		//左半分
		let x2 = map(log(i), 0, log(spectrum.length), width/2, 0); 
		let w2 = map(log(i+1), 0, log(spectrum.length), width/2, 0) - x2 - 1;
		let p = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, 255);
		fill(p);
		rect(x1, 0, w1, height); //右半分
		rect(x2, 0, w2, height); //左半分
	}
	endShape();
}


