/*
By Ethan Outangoun
Professor Mork CPE 123-03
Approximate A design by Blexbolex
Objective: Use three variables to represent scale, x and y translation
//xE, yE = position   sE=scale rE=rotation

*/
var xE=204;
var yE=274;
var sE=1;
var rE = 0



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
	fill(101,109,119);
	translate(x,y);
	rect(0,0,width,136);
	quad(0,136,408,136,413,155,0,155);
	

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


function buildings(y)
{
		push();
	noStroke();
	fill(101,109,119);
	translate(0,y);
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
	fill(288,149,141,220);
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
	arc(-2,-57,20,30,3*PI/5,5*PI/4);
	arc(-1,-54,20,30, 8*PI/5,9*PI/4);
	
	

	pop();
}



function rope(x,y)
{
	push();
	noStroke();
	fill(209,30,17,150);
	translate(x,y);
	rect(388,0,3,225);
	quad(388,213,374,276,377,276,389,223);
	quad(389,223,391,213,413,312,410,312);
	quad(410,312,413,312,411,332,408,332);

	pop();
}



function setup() {
	createCanvas(400, 300);
}


function draw() {
	background(250,225,192);
	//Bottom Dock
	noStroke();

fill(0,0,255);

circle(width/2, height/6, width/4);

circle(100,150,100);

circle(300,250,100);

 

strokeWeight(2);

stroke(0,255,0);

line(150, 0, 150, height);

line(250, 0, 250, height);







	

	
	

	


	
	





}