var car, wall
var speed, weight


function setup() {
  createCanvas(1200,400);
  car = createSprite(400, 200, 50, 50);

  speed= random(55,90);
  weight=randon(400,1500);

car =createSprite(50,250,50,50);

wall=createSprite(1500,200,50, height/2 );
  car.veloxityX=speed;
  

}

function draw() {
  background(0); 
  if(wall.x-car.x < (car.width + wall.width)/2)

  car.veloxityX=0;
 
  var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
}  

drawSprites();

 

  



