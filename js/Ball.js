class Ball{
constructor(x,y){
 var options = {
  isStatic : false }

 this.image = loadImage("stone.png")

 this.body = Bodies.circle(x,y,20,options);
    World.add(world, this.body)
}

display(){
    imageMode(CENTER)
   image(this.image,this.body.position.x,this.body.position.y,40,40);
}

}