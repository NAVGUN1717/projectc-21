

var obj1

var moving1 , deformtion , weight , speed

 
 
function setup() {
  createCanvas(1200,800);                
  
 
  weight = random(1,100);
  speed = random(1,100);
  deformation = 0.5*weight*speed*speed/2250;
  
  obj1=createSprite(200,100,10,50);
  
 obj1.shapeColor ="red"
 
moving1=createSprite(100,100,50,10);
moving1.velocityX=3

 
}
                
function draw() 
{
 
  if(isTouching(moving1,obj1))
  {
    moving1.shapeColor = "blue";
    obj1.shapeColor = "blue";
    moving1.velocityX= 0
  }
  else 
  {
    moving1.shapeColor = "pink";
    obj1.shapeColor = "pink";
    
  }

  drawSprites();
}

