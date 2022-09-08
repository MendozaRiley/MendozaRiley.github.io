function minigame2() {
  var counter = 100;
  var speed = .5;
  var cw = 40;
  var ch = 23;
  var cy = 330;
  var cysuccess;
  var lhy = 600;
  var rhy = 540;
  var hy = 570;
  var hychange = 30;
  var s = 1;
  var snum;
  var strength = 640;
  var sspeed = 5;
  var goal = 300;

  this.setup = function() {
    cysuccess = 74;
  }

  this.enter = function() {
    closebtnsprite.position.x = -500;
    closebtnsprite.position.y = 0;
    helpbtnsprite.position.x = 60;
    helpbtnsprite.position.y = 60;
    ropesprite.position.x = width/2 - 20;
    ropesprite.position.y = height - 25;

    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      ropesprite.position.x = -500;
      ropesprite.position.y = 0;
      help.play();
      mgr.showScene(helpmini2);
    };

    ropesprite.onMousePressed = function() { this.animation.goToFrame(0);};
    ropesprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = s + 1;

      if (strength > 35 && strength < 45 + goal/s) {
        wells.play();
        cy = cy + 74;
        cw = cw * 2;
        ch = ch * 2;
      }

    };

  }

  this.draw = function() {
    image(wellback, 0, 0);
    snum = map(s, 1, 8, 8, 1);

    fill(100, 80);
    stroke(0);
    strokeWeight(2);
    rect(610, 40, 50, 620);

    fill(40, 100, 100);
    rect(610, 40, 50, goal/s);

    fill(0);
    rect(610, strength, 50, 20);
    strength = strength + sspeed;

    if (strength > 640 || strength < 40) {
      sspeed = - sspeed;
    }

    drawSprites();

    rmHands();

    rmMamara();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(0, 0, width, height);

    if (s == 9) {
      ropesprite.position.x = -500;
      ropesprite.position.y = 0;
      if (cy > height) {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3a);
      } else {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3b);
      }
    }

    if (cy > 660) {
      keyp.play();
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      mgr.showScene(scene3a);
    }

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Chances left:", 115, 590);
    textSize(30);
    if (s < 9) {
        text(snum, 115, 625);
    }
  }

  this.mousePressed = function() {
    if (lhy === 600) {
      lhy = 540;
    } else {
      lhy = 600;
    }

    if (rhy === 540) {
      rhy = 600;
    } else {
      rhy = 540;
    }
  }

  function rmMamara() {
    image(mamara, width/2 - 20, cy, cw, ch);
  }

  function rmHands() {
    image(lhand, width/2 - 60, lhy);
    image(rhand, width/2 - 20, rhy);


  }

}
