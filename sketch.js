const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,score;
var box3,box4,box5,log3,log4;
var box6,box7,box8,box9,log10;
var ball,slingshot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    score = 0;
    box1 = new Box(750,240,50,50);
    box2 = new Box(600,240,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(650,240,50,50);
    box5 = new Box(800,240,50,50);
    log = new Ground(700,300,300,20)
    box6 = new Box(750,240,50,50);
    box7 = new Box(700,240,50,50);
    box8 = new Box(650,240,50,50);
    ball = new Ball(100,100);
    box9 = new Box(700,240,50,50);
    slingshot = new SlingShot(ball.body,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    textColor = "white";
    text("Hold and drag the hexagon in the opposite direction you want it to go, release it to shoot (¬‿¬)",600,100)
    text("Score : " + score , 40 , 100);
    console.log(score)
    box1.display();
    box2.display();
    log.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball.display();

    ScoreS(box1);
    ScoreS(box2);
    ScoreS(box3);
    ScoreS(box4);
    ScoreS(box5);
    ScoreS(box6);
    ScoreS(box7);
    ScoreS(box8);
    ScoreS(box9);
    ball.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}

function ScoreS(box){
    console.log("Yes the score is executed")
    if(box.Visiblity>-105){
      score++;
      
    }
}