var bullet, wall;
var speed, weight;
var thickness, bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 70, 20);
  wall = createSprite (1200,200,thickness,200);
  wall.shapeColor = color (80,80,80);
  bullet.shapeColor = color ("white");
  speed = random(223,321)
  weight = random (30,42);
  thickness = random (22,83);
  bullet.velocityX = 90;
}

function draw() {
  background("black");  
  drawSprites();
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage>10){
      wall.shapeColor = color (255,0,0);
    }
    if (damage<10){
      wall.shapeColor = color (0,255,0);
    }
  }
}

function hasCollided(bullet, wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
}