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
	fft = new p5.FFT(0.5, 1024);//(解析結果のスムーズさ, FFTのサイズ(2の累乗))
	fft.setInput(sound);
}

function draw() {
	background(0);
	let spectrum = fft.analyze(); //FFT解析を配列に
	noFill();
	stroke(255);
	beginShape(); //endShapeまでの間でvertex(x,y)で座標を指定した間を線で結ぶ
	for(let i = 0; i < spectrum.length; i++) {
//		print(spectrum[i]); //0 > 255の間で正規化された値が出力される
		let x = map(log(i), 0, log(spectrum.length), 0, width); //i>spectrum.lengthまで対数で変化する(オクターブは比率で変化するため対数にする)
		let y = map(pow(spectrum[i], 2), 0, pow(255, 2), height, 0); //y軸は対数ではなく二乗
		vertex(x, y);
	}
	endShape();
}


