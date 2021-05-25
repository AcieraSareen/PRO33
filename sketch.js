const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;






var backgroundImg;
var sound;
var snow = [];



function preload(){
  backgroundImg = loadImage("snow3.jpg");
	sound = loadSound("JoyMusic.mp3");
}


function setup() {
sound.play();

  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);

  engine =Engine.create();
  world=engine.world

}

function draw() {
  background(backgroundImg);
Engine.update(engine);
  
  if(frameCount%10===0){ 
    snow.push(new Snow(random(30,1000),10)); 
    }


    //display the snow
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }

  drawSprites();
}