let sound;
let fft;
let band = 2048; //FFTサイズ
let position = []; //位置のベクトル
let velocity = []; //速度のベクトル
let friction = 0.95; //摩擦
let mass = 20.0; //質量

function preload() {
	sound = loadSound('./sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 255, 255, 255);
	fft = new p5.FFT(0.1, band);
	fft.setInput(sound);
	//ベクトルを生成(ベクトルを使うとx座標とy座標を同時に扱える)
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
	let spectrum = fft.analyze();
	translate(width/2, height/2);
	for (i = 0; i < spectrum.length; i++) {
		//スペクトルの強さを抽出
		let val = map(spectrum[i], 0, 255, 0, 1);
		//スペクトルの強さから加える力を算出
		let addForce = val * width * i / float(band) * 1.0 + 10; //*iによって高い周波数ほど力が強くなるように補正
		//角度をランダムに決定
		let direction = radians(random(0, 360));
		//角度からX方向とY方向の力を算出
		let addX = cos(direction) * addForce; 
		let addY = sin(direction) * addForce;
		//加速度のベクトルを算出(ニュートンの運動法則: 力 = 質量 x 加速度)
		// F = ma
		// a = F/m
		let accel = createVector(addX/mass, addY/mass); 
		//加速度から次のフレームの速度を算出
		velocity[i].add(accel);
		//摩擦力の影響を受けた速度に
		velocity[i].mult(friction);
		//速度から次のフレームの位置を検出
		position[i].add(velocity[i]);
		//画面からはみ出した際の処理
		if(position[i].x < -width/2 || position[i].x > width/2){
      position[i].x = 0;
    }
    if(position[i].y < -height/2 || position[i].y > height/2){
      position[i].y = 0;
    }
		// パーティクルを描画
    //色
    let h = map(log10(i), 0, log10(band), 0, 255);
    //サイズ
    let r = map(val, 0, 1, 1, 40);
    fill(h, 210, 255, 255);
		blendMode(ADD);
    circle(position[i].x, position[i].y, r);
	}
}

function log10(x) {
	return (log(x) / log(10));
}

function mouseClicked() {
  if (sound.isPlaying() == false) {
    sound.loop();
  } else {
    sound.stop();
  }
}