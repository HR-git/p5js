let button; //ボタン

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    button = createButton('hello');
    button.position(20, 20); //ボタンの位置
    button.mousePressed(hello); //マウスを押したときに動作を行う
}

function draw() {
}

function hello() {
    print('hello'); //コンソールに出力
}