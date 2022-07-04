let sound;
let fft;

//サウンドファイルをプリロード
function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//ループ再生
	sound.loop();
	//FFT初期化
	fft = new p5.FFT(0.7, 1024);//FFTのサイズが解析結果に影響する(スムーズさ, FFTサイズ(2の累乗))
	fft.setInput(sound);
}

function draw() {
	background(0);
	noStroke(); //好みで境界線
	let spectrum = fft.analyze(); //FFT解析
	for(let i = 0; i < spectrum.length; i++) {
		let x = map(log(i), 0, log(spectrum.length), 0, width); 
		let w = map(log(i+1), 0, log(spectrum.length), 0, width) - x + 1; //次のx座標から今のx座標を引いた値が幅になる(ちょっと余白ができるので+1)
		let p = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, 255);
		fill(p);
		rect(x, 0, w, height); //幅に変数wを代入 
	}
	endShape();
}


