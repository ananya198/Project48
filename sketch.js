var canvas;
var bg;
var rockimg;
var girl,girlimg;
var gameOverImg,restartImg;
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  rockimg=loadImage("rockcode.jpg");
  girlimg=loadImage("runnergirl.PNG");
  restartImg = loadImage("restart.jpg")
  gameOverImg = loadImage("gameOver.jpg")
  groundImage = loadImage("ground2.png");

}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  girl=createSprite(100,150);
  girl.addImage(girlimg);
  girl.scale=0.07;

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  gameOver = createSprite(200,150);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;  
  
  restart = createSprite(300,240);
  restart.addImage(restartImg);
  restart.visible=fasle;
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  obstaclesGroup = createGroup();

  
}

function draw(){
  text("Distance: "+ distance, 500,50);
  
  if(gameState === PLAY){
    gameOver.visible = false;
    restart.visible = false;
    ground.velocityX = -(4 + 3* score/100)
    score = score + Math.round(frameCount/60);

    if(keyDown("space")) {
      girl.velocityY = -12;
      
  }
  girl.velocityY = girl.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  girl.collide(invisibleGround);
  spawnObstacles();
  if(obstaclesGroup.isTouching(girl)){
  gameState = END;
}
}
else if (gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
 
  ground.velocityX = 0;
  girl.velocityY = 
 
obstaclesGroup.setLifetimeEach(-1);
 
 obstaclesGroup.setVelocityXEach(0);
}


girl.collide(invisibleGround);



drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(rockimg);
               break;
       case 2: obstacle.addImage(rockimg);
               break;
       case 3: obstacle.addImage(rockimg);
               break;
       case 4: obstacle.addImage(rockimg);
               break;
       case 5: obstacle.addImage(rockimg);
               break;
       case 6: obstacle.addImage(rockimg);
               break;
       default: break;
     }
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
  }
 }
 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
