function intro() {
  var c1y = 600;
  var c2y = 350;
  var c3y = 500;
  var c4y = 50;
  var c5y = 100;
  var counter1 = .5;
  var counter2 = .5;
  var counter3 = .5;
  var counter4 = .5;
  var counter5 = .5;


  this.setup = function() {

  }

  this.enter = function () {
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    beginbtnsprite.position.x = width/2;
    beginbtnsprite.position.y = 500;
    beginbtnsprite.onMouseOver = function() { this.animation.goToFrame(2);};
    beginbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    beginbtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    beginbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      help.play();
      mgr.showScene(scene1);
    };
  }


  this.draw = function() {
    image(sky, 0, 0);
    image(c2, 300, c2y);
    image(c1, 450, c1y);
    image(c4, 0, c3y);
    image(c4, 550, c4y);
    image(c5, 100, c5y);

    c1y = c1y + counter1;
    if (c1y > height + 50) {
      c1y = -100;
    }

    c2y = c2y + counter2;
    if (c2y > height + 50) {
      c2y = -100;
    }

    c3y = c3y + counter3;
    if (c3y > height + 50) {
      c3y = -100;
    }

    c4y = c4y + counter4;
    if (c4y > height + 50) {
      c4y = -200;
    }

    c5y = c5y + counter5;
    if (c5y > height + 50) {
      c5y = -100;
    }

    rectMode(CENTER);
    fill(100, 70);
    stroke(0);
    strokeWeight(3);
    rect(width/2, height/2 - 100, 600, 100);

    textAlign(CENTER, CENTER);
    strokeWeight(1);
    fill(60, 100, 50);
    textSize(60);
    text("An MC Adventure", width/2, height/2 - 95);



    drawSprites();
  }

}
