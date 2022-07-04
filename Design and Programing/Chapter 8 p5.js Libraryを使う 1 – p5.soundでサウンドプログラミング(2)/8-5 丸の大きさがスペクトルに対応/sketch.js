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
		let x1 = map(log(i), 0, log(spectrum.length), width/2, width); //右端まで描画(width)
		//左半分 
		let x2 = map(log(i), 0, log(spectrum.length), width/2, 0); //左端まで描画(0)
		//色相
		let h = map(log(i+1), 0, log(spectrum.length), 0, 360);
		//直径
		let diameter = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, height);
		fill(h, 255, 255, 31); //(色相, 彩度, 明度, 透明度)
		circle(x1, height/2, diameter); //円を描画
		circle(x2, height/2, diameter);
	}
	endShape();
}


