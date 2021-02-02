
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	ground = new Ground(400,height,800,40);
	paper1 = new paper(200,350,30);
	box1 = new Box(700,660,90,10);
	box2 = new Box(750,635,10,60);
	box3 = new Box(650,635,10,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y:-30})
	}
}



