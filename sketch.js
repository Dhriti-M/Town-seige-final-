const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,base1,base2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;
var polygon,slingshot,polygon_img;
var score = 0;
var backgroundImg;
//var bg = "morning.jpg";

function preload(){
 getBackgroundImg(); 
}
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

 
  

   polygon_img=loadImage("ball.png");

  //createSprite(400, 200, 50, 50);

  ground = new Ground(750,690,1500,20);
  base1 =new Ground(640,530,480,15);

  box1=new Box(448,480,80,80);
  box2=new Box(540,480,80,80);
  box5=new Box (635,480,80,80);
  box3=new Box(726,480,80,80);
  box4=new Box(820,480,80,80);

  box6=new Box(770,400,80,80);
  box7=new Box(680,400,80,80);
  box8=new Box(590,400,80,80);
  box9=new Box(499,400,80,80);

  box10=new Box(730,320,80,80);
  box11=new Box(635,320,80,80);
  box12=new Box(540,320,80,80);

  box13=new Box(680,240,80,80);
  box14=new Box(590,240,80,80);

  box15=new Box(634,160,80,80);

  var options={
    density:1,
    restitution:0.4
  }
  
  polygon=Bodies.circle(50,300,40,options);
  World.add(world,polygon);
 
  slingshot=new Launcher(polygon,{x: 200 , y: 200} );

}

function draw() {
  //background(255,255,255); 
 if (backgroundImg){
  background(backgroundImg);
}
  Engine.update(engine);
  
  

  
ground.display();
 base1.display();

 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();

 box6.score();
 box7.score();
 box8.score();
 box9.score();

 box10.score();
 box11.score();
 box12.score();

 box13.score();
 box14.score();

 box15.score();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 box6.display();
 box7.display();
 box8.display();
 box9.display();

 box10.display();
 box11.display();
 box12.display();

 box13.display();
 box14.display();

 box15.display();

 //polygon.display();
 fill("white")
 text("Score : " + score, 300, 50)
 
 
 push();

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,100,100);
pop();

slingshot.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX,y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(polygon);
  }
}




async function getBackgroundImg(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jsondata= await response.json();
  var datetime=jsondata.datetime;
  
  var hour= datetime.slice(11,13);
  console.log(hour);
 if (hour>=6&&hour<=19){
     bg="morning.jpg";
 }
 else{
     bg="night.jpg";
 }

 backgroundImg=loadImage(bg);
}

