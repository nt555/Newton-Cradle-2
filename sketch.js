
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	holder = new Box(400,200,300,20);
	bobObject1 = new Circle(278,470,32);
	bobObject2 = new Circle(341,470,32);
	bobObject3 = new Circle(403,470,32);
	bobObject4 = new Circle(465,470,32);
	bobObject5 = new Circle(528,470,32);
	string1 = new Chain(bobObject1.body,holder.body,-119,0);
	string2 = new Chain(bobObject2.body,holder.body,-60,0);
	string3 = new Chain(bobObject3.body,holder.body,-1,0); 
	string4 = new Chain(bobObject4.body,holder.body,55,0);
	string5 = new Chain(bobObject5.body,holder.body,119,0);
	Swinging = new Swinging(bobObject1.body,{x:278, y:470});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  //Displaying Bodies here.
  holder.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}

//function keyPressed(){ 
//if (keyCode === UP_ARROW) { 
	//Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
	//Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:45}); 
//} 
 // }

  function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body,{x: mouseX , y: mouseY});
    console.log("dragged");
}

function mouseReleased(){
    throwing.fly();
    console.log("released");
}
  


