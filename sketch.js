var bullet1,wall;
var thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  

  invi = createSprite(1465, 200,10, height/2)
  invi.visible=false
 
  bullet1 = createSprite(50, 200, 10, 5)
  
  thickness = Math.round(random(22,83))


  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor=(80,80,80)
  
  weight = Math.round(random(30,52))
  speed = Math.round(random(223,321))
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bullet1.x=speed
 bullet1.collide(wall)
  if(invi.x-bullet.x<(invi.width+bullet.width)/2){
    
    
    
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage<=10){
      wall.shapeColor=(0,255,0)
    }
    if(damage>10){
      wall.shapeColor=(255,0,0)
    }
    
  }
}