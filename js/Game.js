class Game {
  constructor(){
    //this.image=loadImage("Space.png");
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //shimona run the code and check
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    c1= createSprite(100,200);
    c2= createSprite(500,200);
    c3= createSprite(900,200);
    c4= createSprite(1100,200);
   // bs=createSprite(700,100);
    cars=[c1,c2,c3,c4];
    c1.addAnimation("animation",d1);
    c2.addAnimation("animation",d1);
    c3.addAnimation("animation",d1);
    c4.addAnimation("animation",d1);
   // bs.addImage(boost);
    c1.scale=0.05;
    c2.scale=0.05; 
    c3.scale=0.05;
    c4.scale=0.05;
   // bs.scale=0.5;
    //image(this.image,0,displayHeight+200,displayWidth,displayHeight);
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(ground);
  //    var display_position = 130;
  //index of the array[];
  image(bge,0,-displayHeight*3,displayWidth,displayHeight*3);
 //image(boost,0,displayHeight/2,displayWidth/2,displayHeight/2);
var  index=0;
//x and y position of the cars,
var x=175;
var y;
// maam left arrow is going rigght and right is going left space is going left oinstead of up i think i may have mized up the value 
      for(var plr in allPlayers){
        // add 1 to the index for every loop.
        index=index+1;
       //position the cars a litttle away from each other in  x direction.
       x=x+200-allPlayers[plr].distancex;
       // use data from the database to diplay the cars in y direction.
       y=displayHeight-allPlayers[plr].distancey;
       cars[index-1].x=x;
       cars[index-1].y=y;
       if(index===player.index){
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
         // game camera allows us to change how and from where we are viewing the game;
         camera.position.x=displayWidth/2;
         camera.position.y=cars[index-1].y;
       }
    }
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distancey +=15
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distancey -=15
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distancex +=15
      // mssm the space boost icon is not showing.
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distancex -=15
      player.update();
    }
    if(keyIsDown(32) && player.index !== null){
      player.distancey +=30;
      player.update();
    }
    
    if(player.distancey>1109 && player.distancex>344){
      gameState=2;
    }
   console.log(player.distancex);
  // console.log(player.distancey);
    drawSprites();
  }
  
    end(){
      console.log("Game Over... You won");
      //textMode(CENTER);
      //text("Game Won",displayWidth/2,displayHeight/2); 
    }  
}
// shimona no problem lets check this tmrw in class ok dear .//OK MAAM
// goodnight dear we will solve the errors in class ok just a small error it might be so dont worry
// ok maam