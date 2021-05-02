
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bobObject1,bobobject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	
	bobObject1= new Bob(300,400)
	bobObject2= new Bob(380,400)
	bobObject3= new Bob(460,400)
	bobObject4= new Bob(540,400)
	bobObject5= new Bob(620,400)

	roof= new Roof(460,100,400,40)


	 rope1= new Rope(bobObject1.body,roof.body,-160,0)
	 rope2= new Rope(bobObject2.body,roof.body,-80,0)
	 rope3= new Rope(bobObject3.body,roof.body,0,0)
	 rope4= new Rope(bobObject4.body,roof.body,80,0)
	rope5= new Rope(bobObject5.body,roof.body,160,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  textSize(30)
  fill(0)
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}




