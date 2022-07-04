let sound;
let fft;
let position = [];
let velocity = [];
let band = 2048;
let friction = 0.998; //摩擦(1に近い程摩擦がなくなる)
let mass = 70.0; //質量
let stiffness = 0.15; // バネの硬さ

//サウンドファイルをプリロード
function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 255, 255, 255);
	//ループ再生
	sound.loop();
	//FFTを初期化
	fft = new p5.FFT(0.0, band);
	//サウンドファイルをFFTの入力に
	fft.setInput(sound);
	for(let i = 0; i < band; i++){
		velocity[i] = createVector(0, 0);
		position[i] = createVector(0, 0);
	}
}

function draw() {
	blendMode(BLEND);
	background(0, 0, 0, 30);
	noStroke();
	noFill();
	//FFT解析
	let spectrum = fft.analyze();
	//結果をグラフで描画
	translate(width/2, height/2);
	for (i = 0; i < spectrum.length; i++) {
		//スペクトルの強さを抽出
		let val = map(spectrum[i], 0, 255, 0, 1);
		//スペクトルの強さから加える力を算出
		let addForce = val * width * i / float(band) * 1.0 + 10;
		//角度をランダムに決定
		let direction = radians(random(0, 360));
		//角度からX方向とY方向の力を算出
		let addX = cos(direction) * addForce; 
		let addY = sin(direction) * addForce;
		// ばねにかかる力を算出 ※ここだけFFT particleと違う
    let forceX = (stiffness * -position[i].x + addX); //中心からの距離にバネ定数をかけている(中心から離れれば離れるほど力がかかる)
    let forceY = (stiffness * -position[i].y + addY);
		//加速度のベクトルを算出
		let accel = createVector(forceX/mass, forceY/mass);
		//加速度から次のフレームの速度を算出
		velocity[i].add(accel);
		//摩擦力の影響を受けた速度に
		velocity[i].mult(friction);
		//速度から次のフレームの位置を検出
		position[i].add(velocity[i]);
		// パーティクルを描画
    //色
    let h = map(log10(i), 0, log10(band), 0, 255);
    //サイズ
    let r = map(val, 0, 1, 3, 50);
    fill(h, 210, 255, 100);
		blendMode(ADD);
    circle(position[i].x, position[i].y, r);
	}
}


function log10(x) {
	return (log(x) / log(10));
}