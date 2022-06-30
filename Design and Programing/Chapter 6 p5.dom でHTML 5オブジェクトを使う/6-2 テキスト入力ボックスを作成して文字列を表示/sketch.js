let button; //ボタン
let input; //テキスト入力欄

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    button = createButton('hello');
    button.position(20, 60); //ボタンの位置
    button.mousePressed(hello); //マウスを押したときに動作を行う
    input = createInput();
    input.position(20,20);
}

function draw() {
}

function hello() {
    let name = input.value(); //inputに入力した文字列を取り出す
    print('hello ' + name + '!'); //コンソールに出力
}