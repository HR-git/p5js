let sound;

function preload() {
    sound = loadSound('./beat.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
//    sound.play(); //ワンショット
    sound.loop(); //ループ再生
}

function draw() {
}