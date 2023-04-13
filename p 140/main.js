music1="";
music2="";

function preload()
{
    song=loadsound("music.mp3");
    song=loadsound("music2.mp3");
}

function setup()
{
    canvas=createCanvas(400,350);
    canvas.position(450,180);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,400,350);
}