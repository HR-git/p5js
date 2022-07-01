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
    let speed = map(mouseX, 0, width, 0.1, 2.0); //スケールを変換
//    let volume = map(mouseY, 0, height, 0.1, 2.0);
    sound.rate(speed); //マウスの位置で再生速度を変更(リファレンスを参考に色々な操作が可能)
//    sound.setVolume(volume);
}

function mousePressed() {
    bgColor = color(255, 0, 0);
    if(sound.isPlaying() == false) { //現在再生中か判別（trueなら再生中）
        sound.loop();
    }
}

function mouseReleased() { //ボタンを離した時に呼び出される
    bgColor = color(0, 0, 255);
    sound.stop();
}