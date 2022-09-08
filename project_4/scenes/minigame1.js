function minigame1() {
  var playerx = 80;
  var playery = 130;
  var pspeedx = 0;
  var pspeedx2 = 0;
  var pspeedy = 0;
  var pspeedy2 = 0;
  var pap = 350;
  var papspeed = 2;
  var aim = 450;
  var aspeed = 3;
  var snackx = 0;
  var snacky = 700;
  var sspeedx = 3;
  var sspeedy = 2;

  var counter = 100;
  var speed = .5;

  this.setup = function() {

  }

  this.enter = function() {
    closebtnsprite.position.x = -500;
    closebtnsprite.position.y = 0;
    camsprite.position.x = -500;
    camsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    row1sprite.position.x = 200;
    row1sprite.position.y = 130;
    row2sprite.position.x = 290;
    row2sprite.position.y = 570;
    row3sprite.position.x = 380;
    row3sprite.position.y = 130;
    row4sprite.position.x = 470;
    row4sprite.position.y = 570;
    helpbtnsprite.position.x = 60;
    helpbtnsprite.position.y = 60;

    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      row1sprite.position.x = -500;
      row1sprite.position.y = 0;
      row2sprite.position.x = -500;
      row2sprite.position.y = 0;
      row3sprite.position.x = -500;
      row3sprite.position.y = 0;
      row4sprite.position.x = -500;
      row4sprite.position.y = 0;
      help.play();
      mgr.showScene(helpmini1);
    };

    row2sprite.onMousePressed = function() {
        pspeedx = 1;
        pspeedy = 4;
    };
    row2sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
    };

    row3sprite.onMousePressed = function() {
        pspeedx = 1;
        pspeedy = -4;
    };
    row3sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
    };

    row4sprite.onMousePressed = function() {
        pspeedx = 1;
        pspeedy = 4;
    };
    row4sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
    };
  }

  this.draw = function() {
    rectMode(CENTER);
    image(cfloor, 0, 0);

    rmPaparazzi();
    rmPlayer();

    if (pap > 30 && pap < 670) {
      if (playery > 200 && playery < 450) {
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        keyp.play();
        mgr.showScene(scene2b);
      }
    }

    if (playerx > 300 && playery > 460) {
      helpbtnsprite.position.x = 60;
      helpbtnsprite.position.y = 60;
      camsprite.position.x = width/2;
      camsprite.position.y = height/2;
      row1sprite.position.x = -500;
      row1sprite.position.y = 0;
      row2sprite.position.x = -500;
      row2sprite.position.y = 0;
      row3sprite.position.x = -500;
      row3sprite.position.y = 0;
      row4sprite.position.x = -500;
      row4sprite.position.y = 0;
      helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(2);};
      helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
      helpbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        help.play();
        mgr.showScene(helpminimini);
      };
      camsprite.onMouseOver = function() {
        this.animation.play();
        shutter.play();
      };
      camsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      camsprite.onMousePressed = function() { this.animation.goToFrame(2);};
      camsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);

        if (aim < 301 && aim > 199) {
          helpbtnsprite.position.x = -500;
          helpbtnsprite.position.y = 0;
          keyp.play();
          mgr.showScene(scene2a);
        }

        if (aim > 300 || aim < 200) {
          helpbtnsprite.position.x = -500;
          helpbtnsprite.position.y = 0;
          keyp.play();
          mgr.showScene(scene2b);
        }

      };


      pap = 800;
      papspeed = 0;
      playery = 800;

      image(store2, 0, 0);

      fill(0, 30);
      stroke(90);
      strokeWeight(random(5,10));
      rect(width/2, height/2, width, height);

      fill(100, 90);
      noStroke();
      circle(width/2, height/2, 300);

      fill(0, 0);
      stroke(50, 50, 100);
      strokeWeight(10);
      circle(width/2, height/2, aim);

      aim = aim + aspeed;

      if (aim > 450 || aim < 190) {
        aspeed = -aspeed;
      }


    }

    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function rmPlayer() {
    fill(100);
    stroke(60, 100, 100);
    strokeWeight(5);
    rect(playerx, playery, 60, 60);

    playerx = playerx + pspeedx;
    playery = playery + pspeedy;
  }

  function rmPaparazzi() {
    fill(100);
    noStroke();
    image(papa, 600, pap);
    // rect(600, pap, 60, 60);

    pap = pap + papspeed;
    if (pap > 900 || pap < -300) {
      papspeed = -papspeed;
    }
  }
}
