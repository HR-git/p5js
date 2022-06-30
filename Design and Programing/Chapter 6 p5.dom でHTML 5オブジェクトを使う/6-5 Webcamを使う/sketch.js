let capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO); //Webcamをキャプチャー
    capture.size(640, 480);
    capture.hide(); //p5jsと関係なく出る映像を一度隠す
}

function draw() {
    background(0);
    image(capture, width/2, height/2); //capturteした映像をイメージとして書き出す
 
}
