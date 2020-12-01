 var bullet,thickness,wall
 var weight,speed


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(100,200,200,20)
  bullet.shapecolor = 'white'
  bullet.velocityX = speed

  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,canvas/2)
  wall.shapecolor = color(80,80,80)

  
}

function draw() {
  background(80,80,80);
 
    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

      if(damage>10){
        bullet.shapeColor = color(255,0,0)
      }

      if(damage<10){
        bullet.shapeColor = color(0,255,0)
      }
    }
  
  drawSprites();
}

function hasCollided(o1,o2){
    o1RightEdge=o1.x + o1.width;
    o2LeftEdge=o2.x
    if(o1RightEdge>=o2LeftEdge){
      return true;
    }
    return false;
}