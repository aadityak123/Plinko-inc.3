const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine;
var world;
var ground1;
var particle = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,795,480,10);
  

  Engine.run(engine)
}



function draw() {
  background(0);  
  Engine.update(engine);

  for(var k = 0; k <=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  ground1.display()


}