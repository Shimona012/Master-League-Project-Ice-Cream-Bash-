class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
this.reset=createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Ice Cream Bash");
    title.position(displayWidth/2-50,0);
/*//var t2= createElement('h3');
t2.html("ROOAAAAARRRRR!!!!! Welcome to the Dino Race!!!!")
t2.position(300,30);
t2.color("red");
var t3= createElement('h3');
t3.html("Race with others.. be the fastest now what are you waiting for race!!")
t3.position(300,60);
t3.color("red");*/

    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
          });
  }
}
