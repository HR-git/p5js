function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	background(0);
}

function draw(){
	for(let i = 0; i < 10; i++){
  	let center = createVector(random(width), random(height));
  	let numPetal = int(random(4, 8));
  	let radius = random(2, 10);		
  	flower(center, numPetal, radius);
	}
}

function flower(center, numPetal, radius){
	stroke(0, 0, 50, 20);
	fill(random(360), 20, 100, 90);
	push();
	translate(center.x, center.y);
	rotate(random(PI));
	for(let i = 0; i < numPetal; i++){
		push();
		rotate(2 * PI/numPetal * i);
		circle(radius, 0, radius);
		pop();
	}
	fill(60, 1000, 100);
	circle(0, 0, radius * 1.2);
	pop();
}