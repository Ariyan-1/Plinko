const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(500,800);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(300,800,300,50);

  for (var j = 0; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j,75));
    }

  for (var j = 15; j <=width-10; j=j+90)
    {
      plinkos.push(new Plinko(j,175));
    }

  for (var k = 0; k <=width; k = k + 80) 
    {
      divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
    }

    if(frameCount%60===0) {
      particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    }
  
  }

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight=300;

 function draw() {
  background(0);  
  Engine.update(engine);
  
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }

  for (var l = 0; j < particles.length; j++) {

    particles[l].display();
  }
   
  for (var s = 0; j < particles.length; j++) {

    particles[s].display();
  }

   
  for (var z = 0; j < particles.length; j++) {

    particles[z].display();
  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  ground.display();
  
}