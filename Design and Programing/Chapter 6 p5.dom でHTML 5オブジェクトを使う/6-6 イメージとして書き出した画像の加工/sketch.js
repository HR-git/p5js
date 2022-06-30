let capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO); //Webcamをキャプチャー
    capture.size(640, 480);
    capture.hide(); //p5jsと関係なく出る映像を一度隠す
}

function draw() {
    background(0);
    //キャプチャーの幅と高さ
    let w = capture.width;
    let h = capture.height;
    let skip = 20; //切り取る矩形の幅
    //描画する位置を調整（画面の中央にくるように）
    translate(width/2 - w/2, height/2 - h/2);
    //細長く切り取ったカメラ映像をランダムに配置
    for(let i = 0; i < w; i+=skip) {
        let rec
        = capture.get(noise(i*100)*w, 0, skip, h);
        image(rec, i, 0, skip, h);
    }
}
