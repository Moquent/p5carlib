var pcar, pv, car1, car2, car3, c1, c2, c3;
var game = "start";
var pimg, nimg, track, trackp;
var count = 5;

function preload() {
  pimg = loadImage("sprites/player.png");
  nimg = loadImage("sprites/npc.png");
  trackp = loadImage("sprites/track.jpg");
}

function setup() {
  createCanvas(500, 500);


  track = createSprite(250, -3400, 10, 10);
  track.addImage(trackp);
  
  pcar = createSprite(310, 400, 10, 10);
  pcar.addImage(pimg);
  pcar.scale = 0.3;
  car1 = createSprite(80, 400, 10, 10);
  car1.addImage(nimg);
  car1.scale = 0.3;
  car2 = createSprite(190, 400, 10, 10);
  car2.addImage(nimg);
  car2.scale = 0.3;
  car3 = createSprite(430, 400, 10, 10);
  car3.addImage(nimg);
  car3.scale = 0.3;
  
  pv = random(-17, -20);
  c1 = random(-15, -17);
  c2 = random(-15, -17);
  c3 = random(-15, -17);

  frameRate(20);
}

function draw() {
  background("black");

  if (frameCount % 20 == 0) {
    count -= 1;
  }
  if (game != "race") {
    textSize(50);
    fill("RED");
    text(count, 230, 200);
  }
  if (frameCount % 100 == 0) {
    game = "race";
  }

  if (keyDown("UP_ARROW") && game == "race") {
    pcar.velocityY = pv;
  }
  if (keyWentUp("UP_ARROW") && game == "race") {
    pcar.velocityY = 0;
  }

  if (game == "race") {
    car1.velocityY = c1;
    car2.velocityY = c2;
    car3.velocityY = c3;
  }

  if (pcar.y < -7000) {
    text("YOU WIN!!", 200, 100);
    game = "end";
  }
  
  if(game == "end"){
    pcar.velocityY = 0;
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    textSize(20);
    fill("RED");
    text("GAME OVER!!", 100, 300);
  }

  camera.x = width / 2;
  camera.y = pcar.y - 150;

  drawSprites();
}