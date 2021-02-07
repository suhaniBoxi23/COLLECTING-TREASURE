var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOver;
var gameOver,gameOverS
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);

  
  

//creating boy running
boy = createSprite(70,330,20,20);
    boy.addAnimation("SahilRunning",boyImg);
    boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  if (gameState===END){
    text("PRESS SPACE TO RESTART THE GAME",10,250);
    }
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  console.log(gameState);
    
  if (gameState===PLAY){
    
    
    boy.scale=0.08;
    path.velocityY = 4;
    boy.x = World.mouseX;
    endImg.visible=false;
    if(path.y > 400 ){
    path.y = height/2;
  }
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+200;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        
        
        gameState=END;
        boy.addAnimation("SahilRunning",endImg);
       
        
    }
      
  }
  
  }
   if(gameState===END){
      
 
    path.velocityY=0;
       
     
    endImg.visible=true;
     
     
    boy.x=200;
    boy.y=200;
    boy.scale=0.8
     
  cashG.setVelocityYEach=(0);
diamondsG.setVelocityYEach=(0);
jwelleryG.setVelocityYEach=(0);
swordGroup.setVelocityYEach=(0);
    
    cashG.setLifetimeEach=(-1);
diamondsG.setLifetimeEach=(-1);
jwelleryG.setLifetimeEach=(-1);
swordGroup.setLifetimeEach=(-1);
     
     
     if(keyDown("space")){
      reset();
     }
     
 
  }
  
    
    
  
 
  
  
  
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function reset(){
  
  boy.addAnimation("SahilRunning",boyImg);
  endImg.visible=false;
  boy.y=330;
  gameState=PLAY;
  treasureCollection=0;
  
}



