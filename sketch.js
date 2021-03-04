
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd;
var gS ="onsling"

function preload()
{
	boyimg = loadImage("images/boy.png");
	Timage = loadImage("images/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var op ={
		isStatic: true
	}
	boy = Bodies.rectangle(200,620,70,100,op);
	World.add(world,boy);

	grnd = new Ground(400,670);

	tree= createSprite(600,400,200,200);
	tree.scale=0.42
	tree.addImage(Timage)

	//tree = new Tree(600,400);
	m1 = new Mango(690,380,30);
	m2 = new Mango(750,270,20);
	m3 = new Mango(500,370,25);
	m4 = new Mango(650,300,29);
	m5 = new Mango(550,360,37);
	m6 = new Mango(575,280,20);
	m7 = new Mango(550,250,32);
	m8 = new Mango(675,250,25);
	m9 = new Mango(700,320,47);
	m10 = new Mango(750,350,28);
	m11 = new Mango(480,320,47);
	m12 = new Mango(420,320,37);

	s1 = new Stone(165,660,30);
	sling = new SlingShot(s1.body,{x:165,y:590});
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine);
  drawSprites();

  grnd.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  
  s1.display();
  sling.display();

  imageMode(CENTER)
  image(boyimg,boy.position.x,boy.position.y,100,150);


  isT(s1,m1);
  isT(s1,m2);
  isT(s1,m3);
  isT(s1,m4);
  isT(s1,m5);
  isT(s1,m6);
  isT(s1,m7);
  isT(s1,m8);
  isT(s1,m9);
  isT(s1,m10);
  isT(s1,m11);
  isT(s1,m12);

  //console.log(s1.body.circleRadius);
  //isTouching(s1.body.position.x,s1.body.position.y,s1.body.circleRadius,m1.body.position.x,m1.body.position.y,m1.body.circleRadius,m1.body)
  /*if(isTouching(s1.body,m1.body)){
	Matter.Body.setStatic(m1.body, false)

  }*/
 
}

function isT(b1,b2){

	var a1 = b1.body.position;
	var a2 = b2.body.position;
	
	var c1 = b1.r;
	var c2 = b2.r;
	

	if((Math.abs(a1.x - a2.x)<= c1+c2) &&
	(Math.abs(a1.y - a2.y)<= c1+c2)
	){
		Matter.Body.setStatic(b2.body,false);
	}


}




function mouseDragged(){
	if(gS === "onsling" )
	Matter.Body.setPosition(s1.body, {x : mouseX, y: mouseY})
}

function mouseReleased(){
	sling.fly();
	gS="launched"
}
function keyPressed()
{
	if(keyCode===32){
		Matter.Body.setPosition(s1.body, {x:165,y:590})
		sling.attach(s1.body);
		gS="onsling"
	}
}
