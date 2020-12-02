const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14;
var player;
var ground1,
var block15,block16;
var sling;
var player;
var ball;
var img;

function preload (){
  img = loadImage("polygon.png");
}

function setup (){
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);



  bolck10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);


  block13 = new Block(360,195,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(450,195,30,40);
  

  player = new Player(50,200,30,30);
  ball = Bodies.circle(50,200,10);
  World.add(world,ball);
}

function draw (){
  background("green");
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground1.display();
  ground2.display();
  ground3.display();

  image(img,ball.position.x,ball.position.y,40,40);
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased (){
  sling.fly();
}

function keyPressed(){
  if(keyPressed === 32){
    Matter.Body.setPosition(player.body,{x:235,y:420});
    slingshot.attach(player.body);
  }
}
