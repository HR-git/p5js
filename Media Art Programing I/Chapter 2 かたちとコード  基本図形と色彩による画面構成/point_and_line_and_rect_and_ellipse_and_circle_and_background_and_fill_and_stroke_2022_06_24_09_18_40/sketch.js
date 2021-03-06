function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 31, 63); // 背景色(R, G, B)
  fill(255, 127, 63, 127); // 塗りつぶし(R, G, B, A)、次のfillまで適用
  stroke(0, 255, 255, 127); // 線の色(R, G, B, A)
  point(400, 300); // 左から400pixel, 上から300pixel
  line(100, 150, 700, 500); // 左から100, 上から150を開始地点とし、左から700, 上から500を終了地点とする
  rect(200, 200, 500, 200); // (左から200をx座標, 上から200をy座標, 幅が500, 高さが200)
  fill(63, 127, 255, 127); // ellipseに適用
  ellipse(400, 300, 300, 400); // (左から400を中心点のx座標, 上から300を中心点のy座標, 幅が300, 高さが400)
  fill(127, 255, 63, 127) // circleに適用
  circle(400, 400, 350); // (左から400を中心位置のx座標, 上から400を中心位置のy座標, 直径が350)
}