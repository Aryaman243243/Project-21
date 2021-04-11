var canvas;
var music;
var ball;
var edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,356,30);
    block1.shapeColor = "cyan";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "purple";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";
    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "green";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,30,30);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
       ball.shapeColor = "cyan";
       ball.velocityX = 0;
       ball.velocityY = 0;
       music.stop();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "purple";
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}
