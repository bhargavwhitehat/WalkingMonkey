var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,300)
  background("white")
 
  monkey = createSprite(200,200,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.15
  ground = createSprite(280,300,600,1)

}


function draw() {

  
  
  
  
  
  
  
  drawSprites();




}






