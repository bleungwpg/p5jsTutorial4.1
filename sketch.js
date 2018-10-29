var bgm;

function preload()
{
	bgm = loadSound("slkdjf");

}

function setup()
{
	createCanvas(800,600);

}

function draw()
{
	textSize(16);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com");

	bgm.play();

}

