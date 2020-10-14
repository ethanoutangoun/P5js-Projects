//less is more


let snowflakes = [];
var snowPressed = false;
var sCactus = 1;
var animate = false;
var x = 600;
var sunColor = ("#ffda21");
var groundColor = ("#ffda21");
var charX = 20;
var charY = 230;
var alphaDF = 255;

var backgroundChange = false;
var flyRight = false;
var faceClick = true;
var fRot = 0;
var fScale = 0.4;
var cactusGrow = false;

function setup() {
    createCanvas(600, 520);
    fill(255);
}

function mouseClicked() {
    if (mouseX > 550 && mouseY < 50) {
        animate = true;
        

    }
    else if(mouseX < 50 && mouseY < 50){
        animate = false;

    }

    if (mouseX<40  && mouseX>0 && mouseY>210 && mouseY<height)
    {
      snowPressed = !snowPressed;
    }

    if (mouseX>=400 && mouseX<=601 && mouseY<=560 && mouseY>=249)
      {
      faceClick = !faceClick;
      if (fScale >= -0.4)
      {
         fScale = fScale - 0.05;
      }
      else
      {
         fScale = 0.4;
      }
}
      }

    


function drawElephant(){
    fill("grey");
    ellipse(280, 160, 100, 160);
    noStroke();
    rect(280, 100, 80, 100, 100);
    quad(280, 200, 330, 300, 350, 300, 360, 150);
    stroke(1);
    line(320, 160, 330, 160);
}

function drawHorn(){
    push();
    fill(46, 130, 229, 0);
    strokeWeight(5);
    stroke("#ffda21");
    rect(290, 120, 40, 100, 50);
    fill("#ffda21");
    triangle(335, 140, 315, 300, 350, 300);
    rect(332, 115, 3, 100);
    pop();
}

function eyes(x,y)
{
   push();
   fill(255,255,255);
   translate(x,y);
   circle(0,0,20);
   pop();
}


function glasses(x,y)
{
   push();
   translate(x,y);
   rectMode(CENTER);
   stroke('silver')
   fill(50,50,50);
   rect(30,-14,60,10);
   
   rect(0,0,40,40,0,0,30,30);
   rect(60,0,40,40,0,0,30,30);
   
   pop();
}


function base(x,y)
{
  push();
  translate(x,y);
   //Hair
   fill(88,88,88);
   stroke(11,13,12);
   strokeWeight(3);
   beginShape();
   curveVertex(159,161);
   curveVertex(149,143);
   curveVertex(120,86);
   curveVertex(163,61);
   curveVertex(223,12);
   curveVertex(312,75);
   curveVertex(307,134);
   curveVertex(293,154);
   endShape();


   //Shirt
   fill(171,217,231);
   arc(225,327,184,152,7*PI/6,11*PI/6);
   ellipse(228,268,70,76);
   fill(212,157,126);
   ellipse(228,268,50,60);






   
   //Face

   fill(232,196,168);
   beginShape();
   curveVertex(162,79);
   curveVertex(163,78);
   curveVertex(225,84);
   curveVertex(290,82);
   curveVertex(298,187);
   curveVertex(253,256);
   curveVertex(210,260);
   curveVertex(153,190);
   curveVertex(160,80);
   curveVertex(160,80);
   endShape();

   flower(220,219,fScale,fRot);
   fRot = fRot+0.02;
   eyes(192,147);
   eyes(250,147);
   point(192,147);
   point(250,147);
  
   

   //Draw Nose
   
   line(221,154,205,187);
   line(205,187,221,187);

   if(faceClick)
   {
   glasses(192,147);
   fill('white');
   stroke('black')
   beginShape();

   curveVertex(290,82);
   curveVertex(305,167);
   curveVertex(263,256);
   curveVertex(196,260);
   curveVertex(143,167);
   curveVertex(305,167);
   curveVertex(160,80);
   line()
   endShape();


   }

   pop();
}


function flower(x,y,z,r)
{

   push();
   translate(x,y);
   scale(z);
   rotate(r);
   fill(255,46,182);
   for (let i = 0; i < 10; i ++) 
   {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
   }

   pop();
}

function cactus(s)
{
  push();
  scale(s);
    rect(0, 220, 40, 350, 50);
    rect(0, 400, 80, 20);
    rect(60, 320, 20, 90, 10);
    pop();
}



function draw() {
    background(46, 130, 229);
    fill(255);
    noStroke();
    







    noStroke();
    fill(groundColor);
    rect(0, 288, width, height - 288);

    //draw the mountains
    fill(250);
    triangle(240, 288, 480, 200, 575, 288);
    triangle(0, 288, 150, 250, 240, 288);
    triangle(480, 288, 570, 240, 620, 288);
    fill(230);
    triangle(260, 288, 480, 200, 545, 288);
    triangle(480, 288, 570, 240, 600, 288);
    fill(210);
    triangle(300, 288, 480, 200, 525, 288);
    triangle(480, 288, 570, 240, 580, 288);

    //pool
    fill(46, 130, 229);
    ellipse(600, 400, 600, 40);

    //draw the elephant's body
    fill("grey");
    stroke(1);
    quad(140, 260, 170, 260, 160, 380, 145, 380);
    quad(260, 260, 300, 240, 280, 380, 300, 380);
    rect(80, 120, 250, 160, 80);
    quad(82, 218, 120, 240, 110, 380, 100, 380);
    quad(208, 228, 260, 228, 242, 380, 268, 380);



    fill(255);
    //draw the sun/moon 
    fill(sunColor);
    circle(x, 0, 100);
    if (animate) {
        x = 0;
        sunColor = ("#fcfcfc");
        groundColor = ("black")
        drawHorn();

    }
    else{
        x = 600;
        sunColor = ("#ffda21");
        groundColor = ("#ffda21");
        drawElephant();
    }

    //foliage
    fill("#266128");
    noStroke();

    cactus(sCactus);
 
        

   

    let fRotate=0;

    base(280,235);
    stroke(0);
    
    if(snowPressed)
    {
    fill(255);
    noStroke();
    let t = frameCount / 60
    for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
    }

  // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
   }
  }


    
}
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}