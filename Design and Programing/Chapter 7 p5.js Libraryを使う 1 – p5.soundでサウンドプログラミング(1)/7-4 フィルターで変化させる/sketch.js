let sound;
let bgColor;
let filter;

function preload() {
    sound = loadSound('./beat.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgColor = color(0, 0, 255);
    filter = new p5.LowPass(); //インスタンス化(HighPassや他のフィルターも選択できる)
    sound.disconnect(); //filterをかけてない音が接続されているので先に切る
    sound.connect(filter); //filterをかけた音だけを接続
}

function draw() {
    background(bgColor);
    let frep = map(mouseX, 0, width, 10, 20000);
//    let res = map(mouseY, 0, height, 40, 1);
    filter.set(frep, 1); //(freq, res)のセットも使える
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