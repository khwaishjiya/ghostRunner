var tower , towerImage;
var climber , climberImage, climberGroup;
var ghost , ghostImage;
var door, doorImage ;
var invisbleBlock , invisibleBlockGroup;
var gameState = "play";
var spookSound;


function preload() {
  
  towerImage = loadImage("tower.png");
  doorImage = loadImage ("door.png");
  climberImage = loadImage ("climber.png");
  ghostImage = loadImage ("ghost-standing.png");
  spookSound = loadSound("spooky.wav");
    
  
}


function setup(){
  createCanvas (600,600);
  
  tower = createSprite(300,300);
  tower.addImage("towerImg", towerImage);
  tower.velocityY = 1;
  
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200);
  ghost.addImage("ghostImg", ghostImage);
  ghost.scale = 0.4;
  
   
  
    
}


function draw(){
  
 background(0);
  
  if (gameState === "play"){
    
    if(keyDown("left")){
      
      ghost.x= ghost.x-5;
      
    }
    
    if(keyDown("right")){
      
      ghost.x= ghost.x+5;
      
    }
    
   if(keyDown("space")){
      
      ghost.velocityY= -6;
      
    }
    
  ghost.velocityY = ghost.velocityY + 0.8;
    
  if ( tower.y> 500){
    tower.y = 300
  }
    
  if (ghost.isTouching(climberGroup)){
    ghost.velocityY = 0;
  }
    
  if (ghost.isTouching(invisibleBlockGroup)){
    gameState = "end";
  }
   
    
  spawnDoors() ;
   drawSprites();
  }
 
  else if(gameState === "end"){
    
   fill("blue");
   textSize(30);
   text("Game over", 200,250);
   
    
    
    
    
    
  }
  
  
  
  
}
  
  
  
  
  
  

  
  function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    door.x = Math.round(random(120, 400));
    door.addImage(doorImage);
    door.velocityY = 1;
    door.lifetime = 800;
    
    var climber = createSprite(200, 10);
    climber.x = door.x;
    climber.addImage(climberImage);
    climber.velocityY = 1;
    climber.lifetime = 800;
    climberGroup.add(climber);


    var invisibleBlock = createSprite(200, 15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 800;
    invisibleBlock.debug = true;
    invisibleBlock.visible = false;
    //invisibleBlock.shapeColor="red";
    invisibleBlockGroup.add(invisibleBlock);

    ghost.depth = door.depth;
    ghost.depth += 1;




  }
}
  
  
  
  
  
  
  

