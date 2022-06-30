let sizeSlider; //矩形の大きさを設定するスライダー
let speedSlider; //スピードを変更するスライダー

function setup() {
    createCanvas(windowWidth, windowHeight);
    //スライダーを生成 (最小値, 最大値, 初期値)
    sizeSlider = createSlider(0, width, width/2);
    sizeSlider.position(20, 20);
    speedSlider = createSlider(0, 100, 0);
    speedSlider.position(20, 60);
}

function draw() {
    background(255);
    fill(31, 127, 255);
    noStroke();
    rectMode(CENTER);
    let rectSize = sizeSlider.value(); //スライダーで設定されている値を取得
    let rotSpeed = speedSlider.value() / 1000;
    translate(width/2, height/2); // 画面の中心に座標を移動しておく
    rotate(millis() * rotSpeed); //矩形を回転(ミリセカンド)
    rect(0, 0, rectSize, rectSize); //矩形を描画
}
