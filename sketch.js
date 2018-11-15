var ball = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let b = new Ball(mouseX, mouseY);
  ball.push(b);
}


function draw() {
  background(250, 70, 150);

  for (var i = 0; i < ball.length; i++) {
    ball[i].show();
    ball[i].fall();
    ball[i].bouncing();
    //ball[i].edge();
  }
}
