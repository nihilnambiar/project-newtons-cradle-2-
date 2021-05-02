class Rope{
  constructor(body1,body2,point1,point2){
    this.offsetX=point1
    this.offsetY=point2
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY},
        length: 300,
        stiffness: 0.3
    }
    this.rope= Constraint.create(options)
    World.add(world,this.rope)
}
display(){ 
if(this.rope.bodyA!==null){
var point1= this.rope.bodyA.position
  var point2= this.rope.bodyB.position
push();
strokeWeight(4)
line(point1.x, point1.y,point2.x+this.offsetX,point2.y+this.offsetY)
pop();
}
}
fly(){
  Matter.Body.applyForce(this.Rope.bodyA, this.Rope.bodyA.position,{x:this.Rope.pointB.x, y:this.Rope.pointB.y} )
  this.Rope.bodyA=null
}
}
  
