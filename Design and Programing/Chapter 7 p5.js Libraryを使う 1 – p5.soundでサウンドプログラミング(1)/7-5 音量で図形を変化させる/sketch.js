let sound;
let bgColor;
let analyzer;

function preload() {
    sound = loadSound('./beat.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgColor = color(0, 0, 255);
    analyzer = new p5.Amplitude(); //音量を計測する
    analyzer.setInput(sound);
}

function draw() {
    background(0);
    let rms = analyzer.getLevel();
//    print(rms); //RMS: 二乗平均平方根(耳で聴いた音量に近づく)
    fill(31, 127, 255);
    noStroke();
    circle(width/2, height/2, rms*width);
}

function mousePressed() {
    bgColor = color(255, 0, 0);
    if(sound.isPlaying() == false) { //現在再生中か判別（trueなら再生中）
        sound.loop();
    }
    else if (sound.isPlaying() == true) {
        sound.stop();
    }
}

function mouseReleased() { //ボタンを離した時に呼び出される
    bgColor = color(0, 0, 255);
//    sound.stop(); //pause
}