var bg;
var doodlerleftImg, doodlerrightImg, doodler;
var eagleImg, eagle, frogImg, frog, snakeImg, snake;
var helicopterImg, helicopter, potionImg, potion, springImg, spring;
var platformImg, platform;
var springSound, helicopterSound, deathSound;
var ground;

function preload(){
  bg = loadImage("images/bg.png");
  doodlerleftImg = loadImage("images/doodlerleft.png");
  doodlerrightImg = loadImage("images/doodlerright.png");
  eagleImg = loadImage("images/eagle.png");
  frogImg = loadImage("images/frog.png");
  snakeImg = loadImage("images/snake.png");
  helicopterImg = loadImage("images/helicopter cap.png");
  potionImg = loadImage("images/potion.png");
  springImg = loadImage("images/spring.png");
  platformImg = loadImage("images/platform.png");
  springSound = loadSound("Sound/boing3.wav");
  helicopterSound = loadSound("Sound/helicopter.mp3");
  deathSound = loadSound("Sound/death-sound.mp3");
}

function setup() {
  createCanvas(displayWidth*(1/2), displayHeight);
  doodler = createSprite(displayWidth/4, displayHeight-100);
  doodler.addImage(doodlerleftImg);

  ground = createSprite(displayWidth/4, displayHeight-50, displayWidth/2, 10);
  ground.visible = false;
}

function draw() {
  background(bg);
  
  if(keyDown('space')&& doodler.y >= 620){
    doodler.velocityY = -10
  }
  doodler.velocityY = doodler.velocityY + 0.9

  doodler.collide(ground);

  console.log(doodler.y)
  drawSprites();
}

