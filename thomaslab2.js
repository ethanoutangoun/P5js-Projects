



//All colors are done using hexadecimal color codes

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

var cloudPosX = (20);


var topCarPosX = (100);
var carScaleParameter = (1.25);



function setup(){
    createCanvas(650, 750);
}

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

function drawCarBottom(posX, posY, valScale){
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


function draw(){
    background(backgroundColor);

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
        line(50, 500, 50 , 500-fenceHeight ); 
        line(150, 500, 150, 500-fenceHeight);
        line(250, 500, 250, 500-fenceHeight);
        line(350, 500, 350, 500-fenceHeight);
        line(450, 500, 450, 500-fenceHeight);
        line(550, 500, 550, 500-fenceHeight);
    pop();

    //draw the street
    noStroke();
    fill(streetColor);
    rect(0, 500, width, 500);

    //scales the street lines based on the var streetLineColor
    push();
        stroke(streetLineColor);
        translate(streetLineLength, 625);
        strokeWeight(streetLineWeight);
        line(0, 0, 0 + streetLineLength, 0);
        line(2 * streetLineLength, 0, 3 * streetLineLength, 0);
        line(4*streetLineLength, 0, 5*streetLineLength, 0);
        line(6*streetLineLength, 0, 7*streetLineLength, 0);
        line(8*streetLineLength, 0, 9*streetLineLength, 0);
        line(10*streetLineLength, 0, 11*streetLineLength, 0);
    pop();
    
    drawCarTop(topCarPosX, 600, carScaleParameter);
    //below only displays car when y parameter is gone??
    //& carScaleParameter is somehow applying to the speed of the car?/
    //drawCarTop(topCarPosX + 100, carScaleParameter);

    push();
    topCarPosX --;
    if (topCarPosX < - 100){
        topCarPosX = width + 100;
    }
    pop();
    
}


