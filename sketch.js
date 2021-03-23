var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(55,90);
weight=random(400,1500);

  car=createSprite(70,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(1300,200,80,200);
  wall.shapeColor=color(80,80,80)

}

function draw() {
  background("blue"); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor="red"//color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="green"//color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor="yellow"//color(0,255,0);
    }
  }

  drawSprites();
}
