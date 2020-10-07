/*
Ethan Outangoun and Thomas Lundy



*/
//xE, yE = position   sE=scale rE=rotation
//204,274
var xE=484;
var yE=474;
var sE=1;
var rE = 0
var man = false;

//Constants for the gradient background
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;


var backgroundColor = ('#88c4f2');
var streetColor = ("#808080");
var streetLineColor = ("ffffff")
var streetLineLength = (50);
var streetLineWeight = (3);

//change the height (only) of the houses
var houseHeight = (325);

//change the fence color and height
var fenceColor = ("ffffff")
var fenceHeight = (50);

var cloudPosX = (-800);


var topCarPosX = (700);
var carScaleParameter = (2.25);

var increment = 0;

function drawCloud(posX, posY){
    fill(255);
    circle(posX, posY, 100);
    circle(posX-50, posY, 75);
    circle(posX-100, posY + 5, 50);
    rect(posX - 150, posY, 250, 50, 50);
}

function drawCarTop(posX, posY, valScale){
    translate(posX, posY);
    scale(valScale);
    fill("#d1cf34");
    rect(-50, -20, 100, 20, 5);
    quad(-30, -20, -15, -35, -10, -35, -10, -20);
    quad(10, -20, 10, -35, 15, -35, 35, -20);
    rect(-15, -35, 30, 5);
    fill(0);
    circle(-25, 0, 15);
    circle(25, 0, 15);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}












function windows(x,y,s)
{
	push();
	translate(x,y);
	scale(1,s);
	fill(250,225,192);
	rect(0,0,4,9);
	pop();
}



function dock(x,y)
{
		push();
	noStroke();
	fill(streetColor);
	translate(x,y);
	rect(0,0,width,500);
	
	

		pop();

	}

function pointy(x)
{
	push();
	noStroke();
	fill(101,109,119);
	translate(x,0);
	quad(358,109,358,99,367,91,367,109);


	pop();

}

function drawPointy()
{
	pointy(0);
	pointy(9);
	pointy(18);
	pointy(27);
	pointy(36);
	pointy(45);
	pointy(54);
	pointy(63);
	pointy(72);
}


function buildings(x,y)
{
		push();
	noStroke();
	fill(101,109,119);
	translate(x,y);
	rect(0,109,width,47);
	rect(0,0,132,156);
	quad(132,79,325,79,347,109,132,109);
	triangle(132,79,167,46,209,79);

	rect(135,29,8,50);
	rect(149,40,10,40);
	rect(163,28,7,50);
	rect(347,33,11,76);



	rect(438,102,10,10);
	rect(442,72,7,50);
	quad(449,109,458,101,width,101,width,109);
	rect(490,71,24,30);



	quad(506,71,509,49,514,49,514,71);
	drawPointy();

	windows(233,98);
	windows(278,98);
	windows(323,98);

	windows(360,105);
	windows(372,105);
	windows(384,105,0.5);
	windows(396,105,0.5);
	windows(408,105,0.5);
	windows(420,105,0.5);
	windows(432,105,0.5);





		pop();



}

function waves(x,y)
{
	push();
	translate(x,y);
	fill(130,159,151);
	rect(-38,2,32,1.4);
	pop();
}


function boat(x,y)
{
		push();
	noStroke();
	fill(101,109,119);
	translate(x,y);
	rect(0,0,13,10);
	rect(13,2,65,8);
	quad(77,0,101,0,99,10,74,10);
	waves();
	waves(6,5);
	waves(6,9);
	


		pop();



}


function ladderHole(x,y)
{
	push();
	noStroke();
	translate(x,y);
	fill(101,109,119);
	circle(3,306,4.5);

	pop();

}


function ladderHoles(x,y)
{
	push();
	translate(x,y)
	ladderHole(0,0);
	ladderHole(15,0);
	ladderHole(30,0);
	ladderHole(45,0);
	ladderHole(60,0);
	ladderHole(75,0);
	ladderHole(90,0);
	ladderHole(105,0);
	ladderHole(120,0);
	ladderHole(135,0);
	ladderHole(150,0);
	ladderHole(165,0);
	ladderHole(180,0);
	ladderHole(195,0);
	ladderHole(210,0);
	ladderHole(225,0);
	ladderHole(240,0);
	ladderHole(255,0);
	ladderHole(270,0);
	ladderHole(285,0);
	ladderHole(300,0);
	ladderHole(315,0);
	ladderHole(330,0);
	ladderHole(345,0);
	ladderHole(360,0);
	ladderHole(375,0);
	ladderHole(390,0);
	ladderHole(405,0);
	ladderHole(420,0);
	pop();
	
}

function ladder(x,y)
{
	push();
	fill(288,149,141);
	noStroke();
	translate(x,y);
	quad(0,277,418,277,443,312,0,312);
	quad(0,315,443,315,439,332,0,332);
	ladderHoles();
	ladderHoles(9,-23);

	pop();
}

function body(x,y,r)
{
	push();
	fill(255,255,255)
	translate(x,y);
	rotate(r);
	rectMode(CENTER);
	rect(0,-30,83,69,40,40,20,20);
	pop();
}


function boots(x,y,r)
{
	push();
	fill(101,56,63);
	translate(x,y)
	rotate(r);
	rect(0,0,20,30,10,10,15,15);
	pop();
}


function book(x,y)
{
	push();
	translate(x,y);
	stroke(101,109,119);
	strokeWeight(2);
	fill(255,255,255);
	quad(-20,20,-23,40,0,50,0,25);
	quad(20,20,23,40,0,50,0,25);
	pop();
}



function person(x,y,z,s)
{
	
	push();
	translate(x,y);
	scale(s);
	rotate(z);

	
	noStroke();
	//Body
	body(5,0,-PI/29);


	//Boots
	rectMode(CENTER);
	boots(-29,90,-PI/10);
	boots(29,90,PI/10);
	


	//Overalls
	
	fill(94,147,152);
	quad(-30,-53,-24,-58,-10,-16,-17,-16);
	quad(30,-58,24,-62,10,-16,16,-16);
	rect(0,0,33,40);


	quad(-17,-5,-4,20,-23,46,-55,46);
	quad(-4,20,18,45,51,45,16,-13);

	quad(-23,46,-55,46,-40,90,-20,80);
	quad(18,45,51,45,41,90,19,80);





	//Book
	book(-10,10);

	fill(255,255,255);
	rect(-10,50,3,16);


	//Head
	//(202,217)
	noStroke();
	fill(245,200,110);
	ellipse(-2,-57,32,37);
	quad(-14,-45,12,-47,10,-34,-7,-32)

	//Arms
	fill(250,225,192);
	quad(-36,-5,-17,-6,0,45,-15,45);
	quad(36,-5,17,-10,-20,35,-10,45);

	
	//Helmet Strokes
	stroke(94,147,152);
	strokeWeight(1.8);
	line(0,-45,-3,-67);
	line(-5,-38,7,-39.5)

	noFill();
	//ellipse(-2,-55,20,30);
	arc(-2,-57,20,30,3*PI/5,5*PI/4);
	arc(-1,-54,20,30, 8*PI/5,9*PI/4);
	
	//204,274

	pop();
}



function rope(x,y)
{

	fill(209,30,17,150);
	rect(388+170,0,3,463);
	push();
	noStroke();
	fill(209,30,17,150);
	translate(x,y);
	
	quad(388,213,374,276,377,276,389,223);
	quad(389,223,391,213,413,312,410,312);
	quad(410,312,413,312,411,332,408,332);

	pop();
}



function setup() {
	createCanvas(1264, 750);
	
	//define the gradient colors
	push();
	c1 = color(250,225,192);
	c2 = color(6, 87, 201);
	noLoop();
	pop();
}


function draw() {
	background(250,225,192);
	
	//Call the gradient function
	setGradient(0, 0, width, height, c1, c2, Y_AXIS);
  	setGradient(0, 0, width, height, c2, c1, X_AXIS);
	//Bottom Dock
	noStroke();

	



	

	//+208
	noStroke();
	dock(0,450);
	buildings(0,300);
	buildings(713,300)
	
	boat(34+increment,185);
	
	fill('white');
	rect(0,450,800,50);
	ladder(170,238);
	ladder(-10,238);
	rope(170,238);

	
	person(xE,yE,rE,sE);

	increment = increment+2;


	if(topCarPosX < -30)
	{
		man = true
	}

	if(man==true)
	{
		xE = xE-10
		rE = rE+0.1;
		yE = yE-4;
		sE = sE-0.01
	}





	//Thomas Drawing
push();
translate(650,0);

	  drawCloud(cloudPosX, 50);
    cloudPosX ++;
    if (cloudPosX >= width + 100){
        cloudPosX = -100;
    }
    //draw the houses
    push();
       //default is reddish #f5495d
        fill("#f5495d");
        rect(125, 500 - houseHeight, 180, houseHeight);
        rect(145, 500 - houseHeight - 150, 140, 100);
        //default is dirty yellow #d1cf34
        fill("#d1cf34");
        rect(315, 550 - houseHeight, 180, houseHeight);
        circle(50, 575 - houseHeight, 100),
        //default is salmon #f28589
        fill("#f28589");
        rect(510, 600 - houseHeight, 145, houseHeight);
        // default is sea blue #638eeb
        fill("#638eeb");
        rect(0, 575 - houseHeight, 100, houseHeight);
        quad(115, 500 - houseHeight, 125, 500 - houseHeight - 50, 305, 500 - houseHeight - 50, 315, 500 - houseHeight);
        // default is swamp green #44b023
        fill("#44b023");
        triangle(315, 550 - houseHeight, 405, 425 - houseHeight, 495, 550 - houseHeight);
        
        
        // windows, this is hardcoded to be black
        //first are the windows for the red building
        fill(0);
        //top lvl
        rect(145, 525 - houseHeight, 20, 40);
        rect(175, 525 - houseHeight, 20, 40);
        rect(205, 525 - houseHeight, 20, 40);
        rect(235, 525 - houseHeight, 20, 40);
        rect(265, 525 - houseHeight, 20, 40);
        //2nd lvl
        rect(145, 585 - houseHeight, 20, 40);
        rect(175, 585 - houseHeight, 20, 40);
        rect(205, 585 - houseHeight, 20, 40);
        rect(235, 585 - houseHeight, 20, 40);
        rect(265, 585 - houseHeight, 20, 40);
        //3rd lvl
        rect(145, 645 - houseHeight, 20, 40);
        rect(175, 645 - houseHeight, 20, 40);
        rect(205, 645 - houseHeight, 20, 40);
        rect(235, 645 - houseHeight, 20, 40);
        rect(265, 645 - houseHeight, 20, 40);
        //4th lvl
        rect(145, 705 - houseHeight, 20, 40);
        rect(175, 705 - houseHeight, 20, 40);
        rect(205, 705 - houseHeight, 20, 40);
        rect(235, 705 - houseHeight, 20, 40);
        rect(265, 705 - houseHeight, 20, 40);

        //chimney on salmon building
        fill("#999999");
        rect(510, 575-houseHeight, 10, 25);
        
        

    pop();

 

    //draw the fence
    push();
        fill(fenceColor);
        rect(0, 500-fenceHeight, width, 500-fenceHeight);
        stroke("blue");
       
    pop();

    //draw the street
    noStroke();
    fill(streetColor);
    rect(0, 500, width, 500);

    //scales the street lines based on the var streetLineColor
    push();
        stroke(streetLineColor);
        translate(-640, 625);
        strokeWeight(streetLineWeight);
        line(0, 0, 0 + streetLineLength, 0);
        line(2 * streetLineLength, 0, 3 * streetLineLength, 0);
        line(4*streetLineLength, 0, 5*streetLineLength, 0);
        line(6*streetLineLength, 0, 7*streetLineLength, 0);
        line(8*streetLineLength, 0, 9*streetLineLength, 0);
        line(10*streetLineLength, 0, 11*streetLineLength, 0);
        line(12 * streetLineLength, 0, 13 * streetLineLength, 0);
        line(14*streetLineLength, 0, 15*streetLineLength, 0);
        line(16*streetLineLength, 0, 17*streetLineLength, 0);
        line(18*streetLineLength, 0, 19*streetLineLength, 0);
        line(20*streetLineLength, 0, 21*streetLineLength, 0);
        line(22*streetLineLength, 0, 23*streetLineLength, 0);
        line(24*streetLineLength, 0, 25*streetLineLength, 0);
    pop();
    
    drawCarTop(topCarPosX, 600, carScaleParameter);
    //below only displays car when y parameter is gone??
    //& carScaleParameter is somehow applying to the speed of the car?/
    //drawCarTop(topCarPosX + 100, carScaleParameter);

    push();
    topCarPosX=topCarPosX-10 ;
    if (topCarPosX < - 1264){
        topCarPosX = width + 100;
    }
    pop();

pop();





	

	
	

	


	
	





}
