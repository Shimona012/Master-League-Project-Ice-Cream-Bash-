var canvas, backgroundImage;
var c1,c2,c3,c4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars=[];
var form, player, game;
var d1,d2,d3,d4;
var bg;
var ground;
var boost;
var bs;
var bgr;
var namee;
var bge;
function preload(){
d1=loadAnimation("Runner-1.png","Runner-2.png");
bgr=loadImage("I C REAM.jpg");
bg=loadImage("Store.jpg");
ground=loadImage("bgi.jpg");
boost=loadImage("Space.png");
namee=loadImage("Ice Cream.png");
bge=loadImage("STROE.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  image(bg,0,0,displayWidth,displayHeight);
  image(bgr,300,10,150,150);
  image(namee,400,displayHeight/2,500,80)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  // too down
  //image(boost,400,displayHeight/1.2,500,80);
  // is okay
  image(boost,400,displayHeight/1.2,500,80);
  //bs=createSprite(displayWidth/2,displayHeight/1.5,100,100);
  //bs.addImage(boost);

}

function draw(){
// background("orange");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   // background(bg);
   if(gameState===2){
    game.end();
  }
  textSize(30);
  fill("black");
  text("Move up down left and right with your keys..",displayWidth/2+10,0);
  text("The child who reaches the top of the Ice Cream ",displayWidth/2+10,30);
  text("Cart  first wins the goodies..btw Space bar to boost",displayWidth/2+10,60);
}
} 
/*
  function keyPressed(){
    if(keyCode===32){
      player.distancey +=30;
    }
   
  }


  //drawSprites();
}*/

