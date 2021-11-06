class Game {
  constructor() {


  this.resetTitle=createElement("h2");
  this.resetButton=createButton("h2");

  this.leaderboard=createElement("h2");
  this.leader1=createElement("h2");
  this.leader2=createElement("h2");

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");


    this.resetTitle.html("Reset Game");
    this.resetTitle.position(width/2+200, 50);
    this.resetTitle.class("resetText");


    

    this.leaderboard.html("Leaderboard");
    this.leaderboard.position(width/2-200, 50);
    this.leaderboard.class("leadersText");

    
    this.resetTitle.position(width/2-200, 80);
    this.resetTitle.class("leadersText");

    
    this.resetTitle.position(width/2+200, 110);
    this.resetTitle.class("leadersText");    this.resetButton.position(width/2+200,100);
    this.resetButton.class("resetButton");

  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {

this.showLeaderboard();
      image(track, 0, -height * 5, width, height * 6);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
    
       ellipse(x, y, 60, 60);

          // Changing camera position in y direction
          camera.position.x = cars[index - 1].position.x;
          camera.position.y = cars[index - 1].position.y;
        }
      }

      this.handlePlayerControls();

      drawSprites();
    }
  }

  handlePlayerControls() {
    // handling keyboard events
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
   
    }
showLeaderboard(){

 }
  
}
