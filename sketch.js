
var pointer = "black";
var eraser = "blue";

function setup() 
{
  let canvas = createCanvas(windowWidth, windowHeight);
  
  background(255);
}

function draw() 
{ 
  if(mouseIsPressed) 
  {
    stroke(pointer);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  noStroke();

  fill("yellow");
  rect(0, 0, 40, 40);

  fill("orange");
  rect(40, 0, 40, 40);

  fill("red");
  rect(80, 0, 40, 40);

  fill("skyblue");
  rect(120, 0, 40, 40);

  fill("cyan");
  rect(160, 0, 40, 40);

  fill("royalblue");
  rect(200, 0, 40, 40);

  fill("dodgerblue");
  rect(240, 0, 40, 40);

  fill("blue");
  rect(280, 0, 40, 40);
  
  fill("lightgreen");
  rect(320, 0, 40, 40);

  fill("lime");
  rect(360, 0, 40, 40);

  fill("seagreen");
  rect(400, 0, 40, 40);

  fill("green");
  rect(440, 0, 40, 40);

  fill("darkgreen");
  rect(480, 0, 40, 40);
  
  fill("grey");
  rect(520, 0, 40, 40);
  
  fill("black");
  rect(560, 0, 40, 40);
  
  fill("pink");
  rect(600, 0, 40, 40);
  strokeWeight(10);
}



function mousePressed() 
{
  if(mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) 
  {
    pointer = "yellow";
  }

  if(mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) 
  {
    pointer = "orange";
  }

  if(mouseX > 80 && mouseX < 120 && mouseY > 0 && mouseY < 40)
  {
    pointer = "red";
  }

  if(mouseX > 120 && mouseX < 160 && mouseY > 0 && mouseY <40)
  {
    pointer = "skyblue";
  }
  
  if(mouseX > 160 && mouseX < 200 && mouseY > 0 && mouseY < 40)
  {
    pointer = "cyan";
  }
  
  if(mouseX > 200 && mouseX < 240 && mouseY > 0 && mouseY < 40)
  {
    pointer = "royalblue";
  }
  
  if(mouseX > 240 && mouseX < 280 && mouseY > 0 && mouseY < 40)
  {
    pointer = "dodgerblue";
  }
  
 if(mouseX > 280 && mouseX < 320 && mouseY > 0 && mouseY < 40)
  {
    pointer = "blue";
  }
  
if(mouseX > 320 && mouseX < 360 && mouseY > 0 && mouseY < 40)
  {
    pointer = "lightgreen";
  }

if(mouseX > 360 && mouseX < 400 && mouseY > 0 && mouseY < 40)
  {
    pointer = "lime";
  }
  
if(mouseX > 400 && mouseX < 440 && mouseY > 0 && mouseY < 40)
  {
    pointer = "seagreen";
  }
  
if(mouseX > 440 && mouseX < 480 && mouseY > 0 && mouseY < 40)
  {
    pointer = "green";
  }
  
if(mouseX > 480 && mouseX < 520 && mouseY > 0 && mouseY < 40)
  {
    pointer = "darkgreen";
  }
  
if(mouseX > 520 && mouseX < 560 && mouseY > 0 && mouseY < 40)
  {
    pointer = "grey";
  }  
  
if(mouseX > 560 && mouseX < 600 && mouseY > 0 && mouseY < 40)
  {
    pointer = "black";
  }
  
if(mouseX > 600 && mouseX < 640 && mouseY > 0 && mouseY < 40)
  {
    pointer = "white";
  }
}