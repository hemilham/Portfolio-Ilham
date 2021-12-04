var cols = 32;
var rows = 32;
let phase = 0;
let zoff = 0;



function setup() {
  createCanvas(windowWidth, 640, WEBGL);

  click = isLooping("loop()", true);
}

function windowResized() {
  resizeCanvas(windowWidth, 640);
}



function preload() {
  // Load model with normalise parameter set to true
  //lemonz = loadModel('assets-a/LEMONCAMERA 3.obj', true);
}

function draw() {
  for (let h = 0; h < 1; h++) {
    if (mouseIsPressed) {
      strokeWeight(2);
      ambientLight(0, 255, 0);
      ambientMaterial(0, 255, 18);
      directionalLight(10, 255, 10, -255, 255, 100);

      //rotateY(millis() / -100);

      for (let a = 0; a < TWO_PI; a += radians(5)) {
        stroke(255, 255, 10);
        let xoff = map(cos(a + phase), -1, 2, -16, 15);
        let yoff = map(sin(a + phase), -1, 1, 0, 18);
        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
      }
      endShape(CLOSE);
      phase += 0.003;
      zoff += 0.01;
    } else {
    }

    //lemonz//
    push();
    scale(2.3);
    rotateX(0.2);
    rotateY(millis() / -1000);
    rotateZ(4.4);
    noStroke();
    ambientLight(230, 128, 80);
    ambientMaterial(255, 255, 120);
    directionalLight(230, 255, 10, -128, 100, 32);
    box(100);

    pop();
    if (mouseIsPressed) {
      //rotateY(millis() / -100);
    } else {
      //rotateY(0);
    }
  }

  beginShape();
  for (var i = 0; i < cols; i++) {
    if (mouseIsPressed) {
      //fill(10, 128, 10);

      //rotateY(millis - 100);

      let step = frameCount % 150;
      let angle = map(step / 5, 0, 20, 0, TWO_PI);
      let cos_a = cos((angle * step) / 2);
      let sin_a = sin(angle);
      let shear_factor = 2 / tan(PI / 2 - angle * sin_a);
      // Equivalent to rotate(angle);
      applyMatrix(cos_a, sin_a, -sin_a / 2, cos_a, 0, 0);
      applyMatrix(1.2, 0.2, shear_factor * cos_a, 1, 0, 0.2);
      ambientLight(255, 250, 200);
      ambientMaterial(0, 0, 120);
      loop();
    } else {
    }

    for (var j = 0; j < rows; j++) {
      var x = i * 32;
      var y = j * 32;

      stroke(255);
      strokeWeight(2);
      fill(47, 9, 255);
      rect(x, y, 720, 720);
      rectMode(CENTER);

      if (mouseIsPressed) {
        //rotateY(0);
      } else {
      }
    }
  }
  endShape(CLOSE);

  beginShape();
  stroke(5);
  strokeWeight(4);
  fill(255, 255, 255);
  rect(218, -268, 240, 128);

  //
}

function mousePressed() {
  noLoop();
  //rotateY(0);
}

function mouseReleased() {
  loop();
}

