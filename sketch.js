var bgm;

function preload()
{
	bgm = loadSound("https://bleungwpg.github.io/p5jsTutorial4.1/sounds/bensound-creativeminds.mp3");

}

function setup()
{
	createCanvas(800,600);
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",10,40);


}

