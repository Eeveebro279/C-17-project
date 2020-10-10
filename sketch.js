var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var ground, score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 600);
  
  
  monkey = createSprite(80, 555, 20, 20);
 monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite (400, 600, 900, 10);
  console.log(ground.x);
  
 bananaGroup = new Group();
 obstacleGroup = new Group();
}


function draw() {
 
   background("white");
  
  monkey.velocityY = 4;
  monkey.collide(ground);
  
if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }

    spawnObstacle();
    spawnBanana();
  
 drawSprites();
    
}

function spawnBanana(){
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(450,490));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnObstacle(){
  if (frameCount % 100 === 0) { 
    var obstacle = createSprite(600,590,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
  

    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}


