class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 35;

    this.gravity = 0.9;
    this.vel = 0;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  fall() {
    this.vel += this.gravity;
    this.y += this.vel;
  }

  bouncing() {
    if (this.y >= height - this.r / 2) {
      this.vel *= -1;
      this.y = height - this.r / 2;
      //console.log(this.vel);
    }

    /*if (this.vel <= -0.24) {
      this.vel = 0;
      this.y = height - this.r / 2;
    }*/
  }

  /*edge() {
    if (this.y >= height) {
      this.y = height - this.r;
      this.vel = 0;
    }
  }*/
}
