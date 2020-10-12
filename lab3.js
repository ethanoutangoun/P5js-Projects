//less is more





var animate = false;
var x = 600;
var sunColor = ("#ffda21");
var groundColor = ("#ffda21");



function setup() {
    createCanvas(600, 520);
}

function mousePressed() {
    if (mouseX > 550 && mouseY < 50) {
        animate = true;
    }
    else if(mouseX < 50 && mouseY < 50){
        animate = false;
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




function draw() {
    background(46, 130, 229);

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
    rect(0, 220, 40, 350, 50);
    rect(0, 400, 80, 20);
    rect(60, 320, 20, 90, 10);
    triangle(600, 380, 595, 360, 590, 380);
    triangle(590, 380, 585, 340, 580, 380);
    triangle(580, 380, 575, 350, 570, 380);
    triangle(570, 380, 565, 365, 560, 380);

    
}