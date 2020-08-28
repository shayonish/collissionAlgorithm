var mObject , fObject;

function setup() 
{
  createCanvas(800,400);
 mObject = createSprite(400, 200, 80, 50);
 mObject.shapeColor = "green";
 fObject = createSprite(300, 200, 50, 80);
 fObject.shapeColor = "green";

 
}

function draw() {
  background(255,255,255);  
  mObject.x = World.mouseX;
 mObject.y = World.mouseY;
 console.log(fObject.width/2+mObject.width/2); 
 console.log(mObject.x-fObject.x) 
 console.log(fObject.x);
 console.log(mObject.x);
 if(mObject.x-fObject.x < fObject.width/2+mObject.width/2 && fObject.x-mObject.x < fObject.width/2+mObject.width/2
  && mObject.y-fObject.y < fObject.width/2+mObject.width/2 && fObject.y-mObject.y < fObject.width/2+mObject.width/2)
  {
     mObject.shapeColor="red";
      fObject.shapeColor="red"; 
    } else
     { 
       mObject.shapeColor="green";
        fObject.shapeColor="green"; }
  drawSprites();
}