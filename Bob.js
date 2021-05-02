class Bob{
    constructor(x,y){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,20,options);
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    fill("white");
    translate(pos.x,pos.y);
    rotate(angle)
	ellipseMode(RADIUS);
    ellipse(0, 0,40,40);
    pop();
    
}
}
