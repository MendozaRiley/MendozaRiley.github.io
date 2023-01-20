var a = 0.0;
var inc;
var value = 0;
var offset = 300;
var counter = 0;
var counter2 = 100;
var counter3 = 0;
var speed = 5;
var speed2 = -5;
var speed3 = 2;
var xcow = 800;
var speed4 = 0.25;
var currentkey = '1';


function setup() {
  createCanvas(700,700);
  colorMode(HSB, 100);
  background(75, 100, 30);
  inc = TWO_PI/30.0;

}

function draw()  {

  if (mouseIsPressed) {
    drawChoice();
  }

}

function drawChoice() {
  var currentkey = key;

  switch(currentkey) {
    case 'q':
      rmQuills();
      break;
    case 's':
      rmStars();
      break;
    case 'a':
      rmAlien1();
      break;
    case 'e':
      rmAlien2();
      break;
    case '1':
      rmUFO1();
      break;
    case '2':
      rmUFO2();
      break;
    case '3':
      rmUFO3();
      break;
    default:
        fill(100);
        noStroke();
        circle(width/2, height/2, 100);
      break;

  }
}

function rmAlien2() {
  push();
  translate(-100, 0);
  stroke(100);
  strokeWeight(1);
  fill(random(70,80), 70, 100, 75);
  shearX(PI / 6.0);
  rect(mouseX, mouseY, random(40,50), random(10,20));
  pop();

}

function rmQuills() {
  for (var i=mouseX; i<1000; i+=100) {
    stroke(0);
    strokeWeight(1);
    noFill();
    line(i, i + mouseY, i + mouseX, mouseY + sin(a)*50.0);
    stroke(80);
    line(i + mouseX, i, mouseX + sin(a)*50.0, i + mouseY);
    a = a + inc;
    stroke(0);
    bezier(i, i + mouseY, i + mouseX, mouseY + sin(a)*50.0, i + mouseX, i, mouseX + sin(a)*50.0, i + mouseY);
  }
}

function rmStars() {
  var r = random(5);
  var rS = random(100);
  for (var i = 0; i < r; i+=1) {
    noStroke();
    fill(100, rS);
    circle(random(width), random(height), r);
  }
}

function rmAlien1 () {
  stroke(100);
  strokeWeight(random(5));
  var k = color(81, 10, 100, 50);
  rmTopBot(mouseX, mouseY, k);
  var k2 = color(50, 10, 100, 50);
  rmLeftRight(mouseX, mouseY, k2);

}

function rmTopBot (xpos, ypos, c) {
  fill(c);
  ellipse(xpos, ypos + counter, counter3 + 5, counter3);
  ellipse(xpos, ypos + counter2, counter3 + 5, counter3);

  counter = counter + speed;
  if (counter > 100) {
    speed = -speed;
  }
  if (counter < -100) {
    speed = -speed;
  }

  counter2 = counter2 + speed2;
  if (counter2 > 100) {
    speed2 = -speed2;
  }
  if (counter2 < -100) {
    speed2 = -speed2;
  }

  counter3 = counter3 + speed3;
  if (counter3 > 60) {
    speed3 = -speed3;
  }
  if (counter3 < 0) {
    speed3 = -speed3;
  }
}

function rmLeftRight(xpos, ypos, c) {
  fill(c);
  ellipse(xpos + counter, ypos, counter3, counter3 + 5);
  ellipse(xpos + counter2, ypos, counter3, counter3 + 5);


  counter = counter + speed;
  if (counter > 100) {
    speed = -speed;
  }
  if (counter < -100) {
    speed = -speed;
  }

  counter2 = counter2 + speed2;
  if (counter2 > 100) {
    speed2 = -speed2;
  }
  if (counter2 < -100) {
    speed2 = -speed2;
  }

  counter3 = counter3 + speed3;
  if (counter3 > 60) {
    speed3 = -speed3;
  }
  if (counter3 < 0) {
    speed3 = -speed3;
  }
}

function rmUFO1() {
  k = color(0, 0, 95);
  k2 = color(81,30,100);
  stroke(81, 30, 100);
  strokeWeight(3);
  rmUTop(mouseX, mouseY, 1, k);
  stroke(81, 30, 100);
  rmUBot(mouseX, mouseY + 15, 0, 0, k, k2);
}

function rmUFO2() {
  k = color(0, 0, 80);
  k2 = color(50, 30, 100);
  stroke(50, 30, 100);
  strokeWeight(3);
  rmUTop(mouseX, mouseY, 0, k);
  stroke(50, 30, 100);
  rmUBot(mouseX, mouseY + 15, 1, 0, k, k2);
}

function rmUFO3() {
  k = color(0, 0, 40);
  k2 = color(81,30,100);
  stroke(81, 30, 100);
  strokeWeight(3);
  rmUTop(mouseX, mouseY, 1, k);
  rmUBot(mouseX, mouseY + 15, 0, 1, k, k2);
}

function rmUTop(xpos, ypos, window1, c) {
  fill(c);
  arc(xpos,ypos,60,70,PI,TWO_PI,CHORD);

  if (window1 === 1) {
    fill(50, 30, 100);
    stroke(50, 0, 100);
    circle(xpos, ypos - 15, 20);
  }

  if (window1 === 0) {
    fill(81, 30, 100);
    stroke(50, 0, 100);
    circle(xpos, ypos - 15, 20);
  }
}

function rmUBot(xpos, ypos, light, ray, c, c2){
  if (light === 1) {
    stroke(0,0,100,20);
    strokeWeight(8);
    fill(100);
    triangle(xpos, ypos, xpos - 20, ypos + 300, xpos + 20, ypos + 300);

    push();
    translate(mouseX + 100, xcow);
    rotate(radians(180));
    scale(.25);
    rmCow(xpos, ypos);
    pop();

    xcow= xcow + speed4;
    if ((xcow < mouseY) || (xcow > 800)) {
      speed4 = -speed4;
    }
  }

  if (ray === 1) {
    push();
    stroke(50, 30, 100);
    strokeWeight(2);
    translate(mouseX + 220, mouseY - 20);
    rotate(radians(90));
    scale(.75);
    rmRays();
    pop();
  }

  fill(c);
  stroke(c2);
  strokeWeight(3);
  arc(xpos,ypos,100,40,PI,TWO_PI,CHORD);

}

function rmRays() {
  for (var i=50; i<750; i+=10) {
    line(i, 300, i, offset + sin(a)*60.0);
    a = a + inc;
  }
}

function rmCow(xpos, ypos) {
  rmCHead(xpos, ypos);
  rmCBody(xpos, ypos);
}

function rmCHead(xpos, ypos) {
  fill(100);
  stroke(0);
  strokeWeight(2);
  ellipse(xpos - 60, ypos, 30, 50);
  noStroke();
  fill(0);
  ellipse(xpos - 80, ypos - 10, 20, 7);
  ellipse(xpos - 40, ypos - 10, 20, 7);
  ellipse(xpos - 50, ypos, 10, 30);
  ellipse(xpos - 70, ypos, 10, 30);
}

function rmCBody(xpos, ypos) {
  fill(100);
  stroke(0);
  strokeWeight(2);
  rect(xpos - 50, ypos, 100, 50);
  rect(xpos - 50, ypos + 50, 15, 30);
  rect(xpos + 35, ypos + 50, 15, 30);
  noStroke();
  fill(0);
  ellipse(xpos, ypos + 23, 30, 50);
  ellipse(xpos + 20, ypos + 40, 60, 30);
  ellipse(xpos + 20, ypos + 25, 30, 20);
  ellipse(xpos + 20, ypos + 25, 30, 20);
  ellipse(xpos + 45, ypos + 50, 15, 40);
  ellipse(xpos - 43, ypos + 55, 15, 30);
  ellipse(xpos - 35, ypos + 40, 30, 20);
}

function keyPressed() {
  if ( key === 'b' || key === 'B' ) {
    if (value === 0) {
      value = 30;
    } else {
      value = 0;
    }
   fill(80, 25, 80, value);
   noStroke();
   rect(0, 0, width, height);
  }

  if ( key === 'p' || key === 'P' ) {
    if (value === 0) {
      value = 30;
    } else {
      value = 0;
    }
   fill(75, 100, 30, value);
   noStroke();
   rect(0, 0, width, height);
  }

}
