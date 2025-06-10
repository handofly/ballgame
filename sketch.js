//Pad
let diam;
let xPos, xDir;
let yPos, yDir;
let speed;

//pad
let PadX;
let Padwidth;

function setup() {
  createCanvas(500,500);
  speed = 5;
  xPos = width /2;
  yPos = height/2;
  xDir = speed;
  yDir = speed;
  Padwidth = 200;
  diam = 50;
}

function draw() {
   
  //ball
  background(200);
  fill(250,250,0);
  ellipse(xPos, yPos , diam, diam);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  
  //PAD
  PadX = mouseX - Padwidth / 2;
  fill(0,0,255);
  rect(PadX, height - 30, Padwidth, 30)
  
  //닿았을때
  if (xPos + diam/2 > width || xPos - diam/2 < 0)
     xDir *= -1
  if (yPos + diam/2 > height || yPos - diam/2 < 0)
     yDir *= -1
}