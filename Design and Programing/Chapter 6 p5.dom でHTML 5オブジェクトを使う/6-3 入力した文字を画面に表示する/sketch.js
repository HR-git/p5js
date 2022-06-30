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
    // print('hello ' + name + '!'); //コンソールに出力
    textAlign(CENTER);
    colorMode(HSB, 360, 100, 100, 100); //色のモードと階調の値を指定 (モード, 色相, 彩度, 明度, 透明度)
    for(let i = 0; i < 100; i++) { //100こ入力した文字を表示
        textSize(random(10, 100)); //文字の大きさ
        fill(random(180, 240), 100, 100, 80); //文字の色(色相, 彩度, 明度, 透明度)
        text(name + 'genius', random(width), random(height)); //入力した文字を表示
        input.value(''); //入力した文字列を消す
    }
}