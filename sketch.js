const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var balls = [];

function preload(){
  backgroundimage = loadImage('background.png');
  zimage = loadImage("zombie.png");
  logs = loadImage("wood.png");
  sad = loadImage("sad.png")
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  for(var i = 0; i <= 8; i++){
    var x = random(250,450);
    var y = random(-10,100);
    b1 = new Ball(x,y);
    balls.push(b1);
    
  }
  
 jointpoint = new Base(1000,160,40,20)
  
 zombie = createSprite(150,460,40,40)
 zombie.addImage("devil",zimage)
 zombie.scale = 0.07;
 zombie.addImage("cry", sad);



  ground = new Base(400,510,800,80)
 bridge = new Bridge(17, {x: 50, y: 200})
 Composite.add(bridge,jointpoint)

  jointLink = new Link (bridge, jointpoint.body)
 
  button = createImg("axe.png")
  button.position(680,200);
  button.size(50,50)
  button.mouseClicked(handlebuttonpress)
}

function draw() {
  background(backgroundimage);
fill("black")
 Engine.update(engine);

  if(zombie.x === 700){
    zombie.velocityX = -5;
  }

 

  if(zombie.x === 150){
    zombie.velocityX = 5;
  }
  bridge.show()

  fill ("brown");
 
  
 


  for(var i = 0; i < balls.length; i++){
    balls[i].display(); 
    var pos =  balls[i].body.position;
    var d = dist(zombie.position.x,zombie.position.y,pos.x, pos.y )
    if(d<=50){
      zombie.velocityX = 0;
      zombie.changeAnimation("cry",sad);
      zombie.scale= 0.4;
      Matter.Body.setVelocity(balls[i].body , {x:10,y:-10})
    }
  
  }



/* if(collide(balls[balls.length-1].body, zombie)){
    zombie.changeAnimation("cry",sad);
    zombie.scale= 0.4;
    zombie.velocityX= 0;
    balls.splice(balls[balls.length-1],8)
  }*/

  fill("lightblue")
 // ground.display();
 fill("black")

 drawSprites();
  
}

function handlebuttonpress(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 800);
}

/*function collide(body,sprite){
if(body != null){
  var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
  if(d<= 50){
    World.remove(world, body);
   
    return true;
  }else{
    return false  }}}*/














