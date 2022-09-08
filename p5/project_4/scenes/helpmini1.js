function helpmini1() {
  var value = 100;
  var value2 = 100;
  var count = 15;
  let posX = [count];
  let posX2 = [count];
  let posY = [count];
  let posY2 = [count];
  let speedX = [count];
  let speedX2 = [count];
  let speedY = [count];
  let speedY2 = [count];
  let sizeA = [count];
  let color = [count];

  this.setup = function() {
    image(mgr.bkImage, 0, 0);

    for (var i=0; i < posX.length; i++) {
      posX[i] = width/2;
      posY[i] = height/2;
      posX2[i] = sizeA[i] + 10;
      posY2[i] = sizeA[i] + 10;
      speedX[i] = random(-7, 7);
      speedX2[i] = random(-10, 10);
      speedY[i] = random(-7, 7);
      speedY2[i] = random(-10, 10);
      sizeA[i] = random(.2, 10);
      color[i] = random(50, 85);
    }
  }

  this.enter = function() {
    image(mgr.bkImage, 0, 0);

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    closebtnsprite.position.x = 60;
    closebtnsprite.position.y = 60;
    camsprite.position.x = -500;
    camsprite.position.y = 0;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      help.play();
      mgr.showScene(minigame1);
    };
  }

  this.draw = function() {
    let r = random(3);
    let rS = random(0, 40);
    for (var k = 0; k < r; k+=1) {
      noStroke();
      fill(random(40, 100), random(50, 100), random(85, 100), rS);
      circle(random(width), random(height), random(60));
    }

    for (var i = 0; i < posX.length; i++) {
      posX2[i] += speedX2[i];
      posY2[i] += speedY2[i];

      if (frameCount % 100 == 0) {
        if (value == 100) {
          value = 85;
          value2 = 100;
        } else {
          value = 100;
          value2 = 50;
        }

      }
      stroke(random(40, 100), value2, value, 20);
      strokeWeight(2);
      line(0, 0, posX2[i], posY2[i]);
      line(width, height, posX2[i], posY2[i]);

      if (posX2[i] < sizeA[i] || posX2[i] > width-sizeA[i] ) {
        speedX2[i] = -speedX2[i];
      }
      if (posY2[i] < sizeA[i] || posY2[i] > height-sizeA[i]) {
        speedY2[i] = -speedY2[i];
      }
    }

    fill(100);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 400, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Help", width/2, height/2 - 115);
    text("Use your mouse to click on", width/2, height/2 - 70);
    text("the store shelves and hide", width/2, height/2 - 35);
    text("behind them. If you're not", width/2, height/2);
    text("hidden behind a shelf when", width/2, height/2 + 35);
    text("the camera is in the frame,", width/2, height/2 + 70);
    text("you'll lose.", width/2, height/2 + 105);



    drawSprites();
  }
}
