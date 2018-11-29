var Counter = 0;
var Sign = 1;
var Diameter = 500;
var Radius = Diameter/2;
lightningX = 1100;
lightningY = 70;
Flag = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	lightningButton = createButton ('Click Me!');
	lightningButton.position (1300, 50);
	lightningButton.mousePressed (changeFlag); //not showing up over background??
	
	var Cx = windowWidth/2;
	var Cy = windowHeight/2;
}

function draw() {
	var X= 600;
	var Y=300;
	var Cx = windowWidth/2;
	var Cy = windowHeight/2;

	angleMode(DEGREES);
	var Xpos = Cx + Radius*cos(frameCount%360);
	var Ypos = Cy + Radius*sin(frameCount%360);
	var inverseX = Cx + Radius*(-1 * cos(frameCount%360));
	var inverseY = Cy + Radius*(-1 * sin(frameCount%360));
	
	for (color=255; color>0; color = color-1) {
		background ((inverseY*color)/Xpos, (inverseY/color)/(Xpos/2), inverseY*color);
	}
	
	

	sun(Xpos, Ypos, 20, 20);
	moon (inverseX, inverseY, 20, 20);
	
	if (Flag) 
		{lightning ()
	}
	
}

function sun(X,Y, Count){
	fill (255,252,70);
	noStroke();
	ellipse(X, Y+Count, 100, 100);
	triangle (X+35, (Y-30)+Count, X-35, (Y-30)+Count, X, (Y-70)+Count);
	triangle (X, (Y-45)+Count, X-45, (Y+5)+Count, X-52, (Y-45)+Count);
	triangle (X-35, (Y+30)+Count, X-35, (Y-30)+Count, X-70, Y+Count);
	triangle (X-45, (Y-5)+Count, X, (Y+45)+Count, X-52, (Y+45)+Count);
	triangle (X-35, (Y+30)+Count, X+35, (Y+30)+Count, X, (Y+70)+Count);
	triangle (X, (Y+45)+Count, X+45, (Y-5)+Count, X+52, (Y+45)+Count);
	triangle (X+35, (Y-30)+Count, X+35, (Y+30)+Count, X+70, Y+Count);
	triangle (X+45, (Y+5)+Count, X, (Y-45)+Count, X+52, (Y-45)+Count);
	fill(0,0,0);
	ellipse (X-15, (Y-15)+Count, 10, 10);
	ellipse (X+15, (Y-15)+Count, 10, 10);
	stroke (0,0,0);
}

function moon (X,Y,Count) {
	noStroke();
	fill(174, 181, 193);
	ellipse (X, Y-Count, 80,80);
	fill(0);
	ellipse (X-13,(Y-10)-Count, 7, 7);
	ellipse (X+13,(Y-10)-Count, 7, 7);
	arc(X,(Y+3)-Count,20,35,0,PI);	
}

function lightning () {
	fill (244, 215, 66);
	noStroke();
	quad (lightningX, lightningY, lightningX+40, lightningY, lightningX, lightningY+70, lightningX-40, lightningY+70)
	quad (lightningX, lightningY+40, lightningX+40, lightningY+40, lightningX, lightningY+110, lightningX-40, lightningY+110);
	triangle (lightningX, lightningY+80, lightningX+40, lightningY+80, lightningX-40, lightningY+170);
}

function changeFlag () {
	if (Flag == 1) {
		Flag = 0;
	} else Flag = 1}
