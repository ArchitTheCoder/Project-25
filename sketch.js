
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var daleft,daright,dabtm;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(600,690,1200,20);

	paper = new Paper(100,300,70);

	daleft = new Dustbin(912,580,15,200);
	daright = new Dustbin(1038,580,15,200);
	dabtm = new Dustbin(975,670,130,20);

	dust = new Dustbin2(975,580,150,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  
  
  ground.display();
  daleft.display();
  daright.display();
  dabtm.display();
  dust.display();
  paper.display();


  drawSprites();
 
}



function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position, {x:1005, y:-1055});

	}

}