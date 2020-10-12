
/*
   TODO:
   Change the code to make it so:
   1. If you click on the green square, the background color changes color (to any color you want).
   2. If you click on the yellow circle, the dragonfly flies to the right
      (Note: you don't need to do the math to figure out if you actually clicked on the circle exactly.
              Put an imaginary box around it and just check if you click in that (this is called a 
               bounding box))
   3. When the dragonfly crosses the halfway mark, make it fly up and to the right instead of just right
      until it flies of the screen. (Use another if statement for this).
*/

var charX = 20;
var charY = 230;
var alphaDF = 255;

var backgroundChange = false;
var flyRight = false;
var faceClick = true;
var fRot = 0;
var fScale = 0.4;

// TODO: make booleans for your two tasks


function setup() 
{
   createCanvas(460, 345);
  
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


function base()
{

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




function draw() 
{


   
   if(backgroundChange == false)
   {
      background(219,222,198);
   }
   



   if(backgroundChange == true)
   {
      background(0,0,0);
   }
   


   base();
   



}  




function mouseClicked()
{
   //TODO: fill in mouse clicked with two if statements
  
      
      if (mouseX>=120 && mouseX<=321 && mouseY<=266 && mouseY>=14)
      {
      faceClick = !faceClick;
      backgroundChange = !backgroundChange;
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
