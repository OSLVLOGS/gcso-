var Divider1, Divider2, Divider3;
var car1, car2, car3, car4;
var Parking1, Parking2, Parking3;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

Divider1 = createSprite(0, 50, 1500, 800);
Divider1.shapeColor = "black";




Parking3 = createSprite(600, 50, 80, 250);



car3 = createSprite(50, 50, 20, 20);
car3.velocityX = speed;
car3.shapeColor = "white";

}

function draw() {
  background(255);
  
 if(Parking3.x-car3.x<(car3.width+Parking3.width)/2){

car3.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if (deformation>180){

car3.shapeColor = "red";

}

if (deformation<180 && deformation>100){

car3.shapeColor = "yellow";

}

if (deformation>100){

car3.shapeColor = "green";

}


}

  drawSprites();
}