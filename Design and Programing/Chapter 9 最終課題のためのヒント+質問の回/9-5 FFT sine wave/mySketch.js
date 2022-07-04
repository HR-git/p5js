let sound;
let fft;
let band = 256;

//サウンドファイルをプリロード
function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 256, 256, 256);
	//ループ再生
	sound.loop();
	//FFTを初期化
	fft = new p5.FFT(0.6, band);
	//サウンドファイルをFFTの入力に
	fft.setInput(sound);
}

function draw() {
	blendMode(BLEND);
	background(0);
	blendMode(ADD);
	noFill();	
	//FFT解析
	let spectrum = fft.analyze();
	//結果をグラフで描画
	for (i = 1; i < spectrum.length; i++) {
		let h = map(log(i), 0, log(spectrum.length), 0, 255);
		let val = map(pow(spectrum[i], 2), 0, pow(255, 2), 0, 255);
		stroke(h, 190, 255, val * 1.5);
    strokeWeight(2);
    let div = 100;
    beginShape();
		//周波数成分の強さを振幅にsin波を描く
    for(let j = 0; j < div; j++){
      let x = map(j, 0, div, 0, width);
      let y = sin(j * i / div + frameCount * i / 6.0) * val + height/2; //y軸にサイン波を描画
      vertex(x, y);
    }
    endShape();
	}
}


function log10(x) {
	return (log(x) / log(10));
}