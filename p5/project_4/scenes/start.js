
var beginbtnanim, beginbtnsprite;
var helpbtnanim, helpbtnsprite;
var closebtnanim, closebtnsprite;
var camanim, camsprite;
var decanim, decsprite;
var decsprite2;
var rowanim1, rowanim2;
var row1sprite;
var row2sprite;
var row3sprite;
var row4sprite;
var ropeanim, ropesprite;

var shutter;
var choice;
var help;
var keyp;
var wells;

var bkImage;
var pdining;
var pattic;
var roshe;
var roshi;
var cfloor;
var brandi;
var shrek;
var angie;
var hennie;
var hennie2;
var lhand;
var rhand;
var mamara;
var mike;
var papa;
var bigcity;
var biggercity;
var store;
var store2;
var well;
var wellback;
var sky;
var c1;
var c2;
var c3;
var c4;
var c5;


function preload() {
  //images
  bkImage = loadImage('scenes/assets/images/Background.png');
  pdining = loadImage('scenes/assets/images/parents-dining.png');
  pattic = loadImage('scenes/assets/images/attic.png');
  brandi = loadImage('scenes/assets/images/brandi.png');
  roshe = loadImage('scenes/assets/images/rosh-exterior.png');
  roshi = loadImage('scenes/assets/images/rosh-interior.png');
  cfloor = loadImage('scenes/assets/images/floor.png');
  shrek = loadImage('scenes/assets/images/shrek.png');
  angie = loadImage('scenes/assets/images/angelino.png');
  hennie = loadImage('scenes/assets/images/hennie.png');
  hennie2 = loadImage('scenes/assets/images/hennie2.png');
  lhand = loadImage('scenes/assets/images/lhand.png');
  rhand = loadImage('scenes/assets/images/rhand.png');
  mamara = loadImage('scenes/assets/images/mamara.png');
  mike = loadImage('scenes/assets/images/mike.png');
  papa = loadImage('scenes/assets/images/camera.png');
  bigcity = loadImage('scenes/assets/images/bigcity.png');
  biggercity = loadImage('scenes/assets/images/biggercity.png');
  store = loadImage('scenes/assets/images/store.png');
  store2 = loadImage('scenes/assets/images/store2.png');
  well = loadImage('scenes/assets/images/well.png');
  wellback = loadImage('scenes/assets/images/wellback.png');
  sky = loadImage('scenes/assets/images/sky.png');
  c1 = loadImage('scenes/assets/images/cloud1.png');
  c2 = loadImage('scenes/assets/images/cloud2.png');
  c3 = loadImage('scenes/assets/images/cloud3.png');
  c4 = loadImage('scenes/assets/images/cloud4.png');
  c5 = loadImage('scenes/assets/images/cloud5.png');





  //sounds
  shutter = loadSound('scenes/assets/sounds/shutter.mp3');
  choice = loadSound('scenes/assets/sounds/choice.mp3');
  help = loadSound('scenes/assets/sounds/help.mp3');
  keyp = loadSound('scenes/assets/sounds/key.mp3');
  wells = loadSound('scenes/assets/sounds/well.mp3');


  //animations
  ropeanim = loadAnimation('scenes/assets/images/rope.png');
  ropesprite = createSprite(-500, 0);
  ropesprite.addAnimation('normal', ropeanim);
  beginbtnanim = loadAnimation('scenes/assets/animations/beginbtn_1.png', 'scenes/assets/animations/beginbtn_2.png', 'scenes/assets/animations/beginbtn_3.png');
  beginbtnsprite = createSprite(-500, 0);
  beginbtnsprite.addAnimation('normal', beginbtnanim);
  helpbtnanim = loadAnimation('scenes/assets/animations/helpbtn_1.png', 'scenes/assets/animations/helpbtn_2.png', 'scenes/assets/animations/helpbtn_3.png');
  helpbtnsprite = createSprite(-500, 0);
  helpbtnsprite.addAnimation('normal', helpbtnanim);
  closebtnanim = loadAnimation('scenes/assets/animations/closebtn_1.png', 'scenes/assets/animations/closebtn_2.png');
  closebtnsprite = createSprite(-500, 0);
  closebtnsprite.addAnimation('normal', closebtnanim);
  camanim = loadAnimation('scenes/assets/animations/lens_1.png', 'scenes/assets/animations/lens_2.png', 'scenes/assets/animations/lens_3.png', 'scenes/assets/animations/lens_4.png');
  camsprite = createSprite(-500, 0);
  camsprite.addAnimation('normal', camanim);
  decanim = loadAnimation('scenes/assets/animations/decbtn_1.png', 'scenes/assets/animations/decbtn_2.png');
  decsprite = createSprite(-500, 0);
  decsprite.addAnimation('normal', decanim);
  decsprite2 = createSprite(-500, 0);
  decsprite2.addAnimation('normal', decanim);
  rowanim1 = loadAnimation('scenes/assets/animations/grocery-shelves.png');
  rowanim2 = loadAnimation('scenes/assets/animations/grocery-shelves2.png');
  row1sprite = createSprite(-500, 0);
  row1sprite.addAnimation('normal', rowanim1);
  row2sprite = createSprite(-500, 0);
  row2sprite.addAnimation('normal', rowanim2);
  row3sprite = createSprite(-500, 0);
  row3sprite.addAnimation('normal', rowanim1);
  row4sprite = createSprite(-500, 0);
  row4sprite.addAnimation('normal', rowanim2);

  // Super_sheet = loadSpriteSheet('scenes/assets/Supernova-sheet.png', 500, 500, 8);


}

var mgr;

function setup() {

    createCanvas(bkImage.width, bkImage.height);
    colorMode (HSB,100);

    mgr = new SceneManager();

    mgr.addScene (intro);
    mgr.addScene (scene1);
    mgr.addScene (scene2a);
    mgr.addScene (scene2b);
    mgr.addScene (scene3a);
    mgr.addScene (scene3b);
    mgr.addScene (minigame1);
    mgr.addScene (minigame2);
    mgr.addScene (helpmain);
    mgr.addScene (helpmain2a);
    mgr.addScene (helpmain2b);
    mgr.addScene (helpmini1);
    mgr.addScene (helpmini2);
    mgr.addScene (helpminimini);


    mgr.bkImage = bkImage;

    mgr.wire();
    mgr.showScene( intro );

    beginbtnsprite.animation.stop();
    helpbtnsprite.animation.stop();
    closebtnsprite.animation.stop();
    camsprite.animation.stop();
    decsprite.animation.stop();
    decsprite2.animation.stop();
    row1sprite.animation.stop();
    row2sprite.animation.stop();
    row3sprite.animation.stop();
    row4sprite.animation.stop();

    shutter.stop();
    choice.stop();
    help.stop();
    keyp.stop();
    wells.stop();



}
