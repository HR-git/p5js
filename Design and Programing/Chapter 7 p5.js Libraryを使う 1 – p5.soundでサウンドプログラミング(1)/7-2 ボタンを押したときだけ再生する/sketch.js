let sound;
let bgColor;

function preload() {
    sound = loadSound('./beat.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgColor = color(0, 0, 255);
}

function draw() {
    background(bgColor);
}

function mousePressed() {
    bgColor = color(255, 0, 0);
    if(sound.isPlaying() == false) { //現在再生中か判別（trueなら再生中）
        sound.rate(1); //再生速度を変更
        sound.loop();
    }
}

function mouseReleased() { //ボタンを離した時に呼び出される
    bgColor = color(0, 0, 255);
    sound.stop();
}