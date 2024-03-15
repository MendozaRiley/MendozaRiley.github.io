var sat = 0;
var col = 0;
var col2 = 0;
var col3 = 0;
var col4 = 0;
var size = 0;
var cir = 0;
var explode = 0;
var pulsar = 0;
var pulsar2 = 0;
var offset = 300;
var counter = 10;
var counter2 = 10;
var speed = .25;
var speed2 = .25;
var a = 0.0;
var inc;

function setup() {
  createCanvas(700,700);
  colorMode(HSB, 100);
  background(0);
  noStroke();
  smooth();
  inc = TWO_PI/30.0;
}

function draw()  {
  let h = hour();
  let m = minute();
  let s = second();
  size = map(m, 0, 59, 10, 200);
  cir = map(m, 0, 59, 2, 60);
  explode = map(s, 0, 59, 20, 2000);
  pulsar = map(m, 0, 55, 30, 500);
  pulsar2 = map(m, 0, 55, -20, -260);
  sat = map(m, 0, 20, 0, 60);
  col = map(s, 0, 59, 60, 75);
  col2 = map(m, 21, 59, 75, 85);
  col3 = map(s, 0, 59, 30, 15);
  col4 = map(m, 21, 59, 15, 0);
  let r = random(1, 4);
  let rS = random(20, 100)

if (m < 56 || m == 59) {
  if (s < 59) {
    fill(0);
    noStroke();
    rect(0, 0, width, height);
    fill(100, rS);
    circle(100, 100, r);
    if (s > 1) {
      circle(500, 500, r);
    }
    if (s > 2) {
      circle(300, 450, r);
    }
    if (s > 3) {
      circle(70, 650, r);
    }
    if (s > 4) {
      circle(200, 600, r);
    }
    if (s > 5) {
      circle(650, 100, r);
    }
    if (s > 6) {
      circle(350, 690, r);
    }
    if (s > 7) {
      circle(400, 20, r);
    }
    if (s > 8) {
      circle(170, 450, r);
    }
    if (s > 9) {
      circle(300, 200, r);
    }
    if (s > 10) {
      circle(600, 550, r);
    }
    if (s > 11) {
      circle(690, 690, r);
    }
    if (s > 12) {
      circle(100, 350, r);
    }
    if (s > 13) {
      circle(75, 200, r);
    }
    if (s > 14) {
      circle(575, 300, r);
    }
    if (s > 15) {
      circle(50, 500, r);
    }
    if (s > 16) {
      circle(250, 300, r);
    }
    if (s > 17) {
      circle(360, 600, r);
    }
    if (s > 18) {
      circle(690, 300, r);
    }
    if (s > 19) {
      circle(20, 30, r);
    }
    if (s > 20) {
      circle(680, 180, r);
    }
    if (s > 21) {
      circle(500, 675, r);
    }
    if (s > 22) {
      circle(500, 350, r);
    }
    if (s > 23) {
      circle(380, 130, r);
    }
    if (s > 24) {
      circle(450, 175, r);
    }
    if (s > 25) {
      circle(30, 575, r);
    }
    if (s > 26) {
      circle(690, 475, r);
    }
    if (s > 27) {
      circle(200, 150, r);
    }
    if (s > 28) {
      circle(690, 675, r);
    }
    if (s > 29) {
      circle(10, 250, r);
    }
    if (s > 30) {
      circle(300, 450, r);
    }
    if (s > 31) {
      circle(150, 30, r);
    }
    if (s > 32) {
      circle(175, 690, r);
    }
    if (s > 33) {
      circle(690, 10, r);
    }
    if (s > 34) {
      circle(600, 50, r);
    }
    if (s > 35) {
      circle(10, 690, r);
    }
    if (s > 36) {
      circle(675, 400, r);
    }
    if (s > 37) {
      circle(275, 75, r);
    }
    if (s > 38) {
      circle(580, 375, r);
    }
    if (s > 39) {
      circle(575, 20, r);
    }
    if (s > 40) {
      circle(20, 390, r);
    }
    if (s > 41) {
      circle(250, 540, r);
    }
    if (s > 42) {
      circle(567, 167, r);
    }
    if (s > 43) {
      circle(689, 496, r);
    }
    if (s > 44) {
      circle(412, 587, r);
    }
    if (s > 45) {
      circle(553, 48, r);
    }
    if (s > 46) {
      circle(534, 292, r);
    }
    if (s > 47) {
      circle(386, 402, r);
    }
    if (s > 48) {
      circle(146, 537, r);
    }
    if (s > 49) {
      circle(603, 403, r);
    }
    if (s > 50) {
      circle(342, 5, r);
    }
    if (s > 51) {
      circle(196, 297, r);
    }
    if (s > 52) {
      circle(367, 427, r);
    }
    if (s > 53) {
      circle(621, 695, r);
    }
    if (s > 54) {
      circle(376, 403, r);
    }
    if (s > 55) {
      circle(5, 308, r);
    }
    if (s > 56) {
      circle(407, 149, r);
    }
    if (s > 57) {
      circle(684, 582, r);
    }
    if (s > 58) {
      circle(169, 279, r);
    }
  }
  if (s == 59) {
    fill(0, 100);
    noStroke();
    rect(0, 0, width, height);
  }

  let p2 = map(h, 0, 11, 0, 360);
  let p3 = map(h, 12, 23, 0, 360);
  push();
  angleMode(DEGREES);
  translate(width/2, height/2);
  if (h < 12) {
    rotate(p2);
  }
  if (h > 11) {
    rotate(p3);
  }
  if (h < 12) {
    if (m < 20) {
      r = color(30, sat, 100);
    }
    if (m == 20) {
      r = color(col3, 100, 100);
    }
    if (m > 20) {
      r = color(col4, 100, 100);
    }
  }
  if (h > 11) {
    if (m < 20) {
      r = color(60, sat, 100);
    }
    if (m == 20) {
      r = color(col, 100, 100);
    }
    if (m > 20) {
      r = color(col2, 100, 100);
    }
  }
  scale(1);
  rmPulsar(0, pulsar2, pulsar, r);
  pop();
}

if (m < 20) {
  if (h < 12) {
    k = color(30, sat, 100);
    k2 = color(30, sat, 100, 70);
  }
  if (h > 11) {
    k = color(60, sat, 100);
    k2 = color(60, sat, 100, 70);
  }

    rmStar(width/2, height/2, size, k, k2);

} else if (m == 20) {
  if (h < 12) {
    k = color(col3, 100, 100);
    k2 = color(col3, 100, 100, 70);
  }
  if (h > 11) {
    k = color(col, 100, 100);
    k2 = color(col, 100, 100, 70);
  }

    rmStar(width/2, height/2, size, k, k2);

} else if (m > 20) {
  if (h < 12) {
    k = color(col4, 100, 100);
    k2 = color(col4, 100, 100, 70);
  }
  if (h > 11) {
    k = color(col2, 100, 100);
    k2 = color(col2, 100, 100, 70);
  }

    if (m > 57) {
        rmSupernova3();
    }
    if (m > 55) {
      rmSupernova1();
      rmSupernova2();
    }
    rmStar(width/2, height/2, size, k, k2);

    if (m == 59) {
      fill(0, 100);
      rect(0, 0, width, height);

    }
}

if (m == 0 || m == 35) {
  if (h < 12) {
    j = color(15, 70, 100, 80);
  }
  if (h > 11) {
    j = color(85, 70, 100, 80);
  }
  rmPlanet1(j, counter - 10, counter - 20, 30);

  counter = counter + speed;
}

if (m == 10 || m == 45) {
  if (h < 12) {
    j2 = color(40, 70, 100, 80);
  }
  if (h > 11) {
    j2 = color(60, 70, 100, 80);
  }
  rmPlanet3(j2, -counter + 800, -counter + 800, 50, 50);

  counter = counter + speed;
}

if (m == 20 || m == 55) {
  if (h < 12) {
    j3 = color(30, 70, 100, 80);
  }
  if (h > 11) {
    j3 = color(70, 70, 100, 80);
  }
  rmPlanet2(j3, -counter + 800, -counter + 600, 100);

  counter = counter + speed;
}

if (m == 30 || m == 5) {
  if (h < 12) {
    n3 = color(15, 70, 100, 80);
  }
  if (h > 11) {
    n3 = color(85, 70, 100, 80);
  }
  rmPlanet2(n3, -counter + 800, counter, 100, 100);

  counter = counter + speed;
}

if (m == 40 || m == 15) {
  rmUFO(counter2, -counter2 + 700);
  counter2 = counter2 + speed2;

}

if (m == 50  || m == 25) {
  if (h < 12) {
    n = color(25, 70, 100, 80);
  }
  if (h > 11) {
    n = color(75, 70, 100, 80);
  }
  rmPlanet3(n, -counter + 700, -counter + 700, 100, 100);
  if (h < 12) {
    n2 = color(45, 70, 100, 80);
  }
  if (h > 11) {
    n2 = color(55, 70, 100, 80);
  }
  rmPlanet1(n2, -counter + 800, -counter + 800, 70);

  counter = counter + speed;
}

}

function rmStar(xpos, ypos, circ, c, c2) {
  fill(100);
  noStroke();
  circle(xpos, ypos, circ);
  fill(c2);
  circle(xpos, ypos, circ);
  fill(c);
  circle(xpos, ypos, circ - cir);

}

function rmPulsar(xpos, ypos, p, c) {
  stroke(c);
  strokeWeight(random(3,5));
  line(xpos, ypos + p, xpos, ypos);
}

function rmSupernova1() {
  let s = second();
  let a2 = map(s, 0, 59,0, 360);
  let h = hour();

  push();
  angleMode(DEGREES);
  translate(width/2, height/2);
  rotate(a2-90);
  scale(1);
  rmRays2(0, 0);
  pop();

  var r = random(4);
  var rS = random(100);
  for (var i = 0; i < rS; i+=5) {
    noStroke();
    if (h < 12) {
      fill(random(5, 30), random(30, 60), 100, rS);
    }
    if (h > 11) {
      fill(random(75, 95), random(30, 60), 100, rS);
    }
    circle(random(width), random(height), r);
  }

  push();
  angleMode(DEGREES);
  strokeWeight(2);
  if (h < 12) {
    stroke(20, 60, 100, 20);
  }
  if (h > 11) {
    stroke(70, 60, 100, 20);
  }
  translate(width/2, height/2);
  rotate(a2-90);
  scale(.5);
  rmRays1();
  pop();

}

function rmSupernova2() {
  let h = hour();
  let s = second();
  let a2 = map(s, 0, 59,0, 360);
  if (h < 12) {
    k = color(col4, 100, 100, 30);
  }
  if (h > 11) {
    k = color(col2, 100, 100, 30);
  }

  push();
  angleMode(DEGREES);
  translate(width/2, height/2);
  rotate(a2-90);
  scale(1);
  rmLight(0, 0, k);
  pop();
}

function rmSupernova3() {
  fill(100, 10);
  circle(width/2, height/2, explode);
}

function rmLight(xpos, ypos, c) {
  fill(c)
  stroke(100, 30);
  strokeWeight(2);
  triangle(xpos, ypos, xpos - 30, ypos + counter2, xpos + 30, ypos + counter2);
  counter2 = counter2 + speed2;
}

function rmRays1() {
  for (var i=0; i < counter; i+=10) {
    line(i, 300, i, offset + sin(a)*80.0);
    a = a + inc;
    counter = counter + speed;
  }
}

function rmRays2(xpos, ypos) {
  let h = hour();
  stroke(100, 50);
  strokeWeight(1);
  if (h < 12) {
    fill(10, 70, 100, 10);
  }
  if (h > 11) {
    fill(75, 40, 100, 10);
  }
  line(xpos, ypos, xpos, ypos + counter);
  line(xpos, ypos, xpos + counter, ypos);
  bezier(xpos, ypos + 50, xpos, ypos + 500, xpos + 100, ypos, xpos + 200, ypos);
  counter2 = counter2 + speed2;
}

function rmPlanet1(c,  xpos,  ypos,  w) {
  stroke(c);
  strokeWeight(2);
  fill(100, 15);
  circle(xpos, ypos, w);
  circle(xpos, ypos, w-random(60,70));

}

function rmPlanet2(c,  xpos,  ypos,  w) {
  stroke(c);
  strokeWeight(2);
  fill(100, 10);
  circle(xpos, ypos, w);
  circle(xpos + random(30,40), ypos - random(10,20), w/8);
  circle(xpos + random(18,28), ypos - random(22,32), w/9);

}

function rmPlanet3( c,  xpos,  ypos,  w,  h) {
  stroke(c);
  strokeWeight(2);
  fill(100, 5);
  ellipse(xpos, ypos, w, h);
  ellipse(xpos, ypos, w + w + random(10), h/3 + random(-5,5));
  ellipse(xpos, ypos, w + w/4 + random(-5,5), h/5 + random(-5,5));

}

function rmUFO(xpos, ypos) {
  rmUTop(xpos, ypos);
  rmUBot(xpos, ypos + 15);
}

function rmUTop(xpos, ypos) {
  let h = hour();
  fill(95);
  if (h < 12) {
    stroke(45, 80, 100);
  }
  if (h > 11) {
    stroke(55, 80, 100);
  }
  strokeWeight(3);
  arc(xpos,ypos,60,70,PI,TWO_PI,CHORD);
  fill(100);
  circle(xpos, ypos - 15, 20);
}

function rmUBot(xpos, ypos){
  let h = hour();
  fill(95);
  if (h < 12) {
    stroke(45, 80, 100);
  }
  if (h > 11) {
    stroke(55, 80, 100);
  }
  strokeWeight(3);
  arc(xpos,ypos,100,40,PI,TWO_PI,CHORD);

}
