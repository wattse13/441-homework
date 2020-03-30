/*
Author: Eli Watts
File Name: amoeba.js
Date: 03/25/2020
Purpose: MART 441 Homework Assignment #10
*/

class LonelyPongPlayers {
  constructor ( x , y , height , width , speed , color ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.color = color;
    }
    get nabX() {
      return this.x;
    }
    set nabX(x) {
      this.x = x;
    }
    get nabY() {
      return this.y;
    }
    set nabY(y) {
      this.y = y;
    }
    get nabHeight() {
      return this.height;
    }
    set nabHeight(height) {
      this.height = height;
    }
    get nabWidth() {
      return this.width;
    }
    set nabWidth(width) {
      this.width = width;
    }
    get nabSpeed() {
      return this.speed;
    }
    set nabSpeed(speed) {
      this.speed = speed;
    }
    get nabColor() {
      return this.color;
    }
    set nabColor(color) {
      this.color = color;
    }

}

$(document).ready(function(){
  $( "#startButton" ).click(function () {
    $(this).keypress(function(event){
        getKey(event);
    });

    var moveSpeed = 5;
    var player1 = new LonelyPongPlayers( 50 , 175 , 50 , 50 , moveSpeed , "purple" );
    var ghost1 = new LonelyPongPlayers( 500 , 175 , 50 , 50 , 0 , "grey" );

    drawBlock();
    setInterval( update , 1000/60 );


    function drawBlock() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect( 0 , 0 , 600 , 400 );
      ctx.fillStyle = player1.color;
      ctx.fillRect( player1.x , player1.y , player1.height , player1.width );
      ctx.fillStyle = ghost1.color;
      ctx.fillRect( ghost1.x , ghost1.y , ghost1.height , ghost1.width );

    }

    function update() {
      //player1.y +=10;
      drawBlock();
    }

    function getKey(event) {
      var char = event.which || event.keyCode;
      var actualLetter = String.fromCharCode(char);
      var ouch = hasCollided( player1 , ghost1 );

      if(actualLetter == "w") {
        moveUp();
      } else if(actualLetter == "s" ) {
        moveDown();
      } else if(actualLetter == "a" ) {
        moveLeft();
      } else if(actualLetter == "d" ) {
        moveRight();
      }
      if( ouch ) {
        console.log("ouch");
        rude();
      }
    }
    function moveUp() {
      player1.y -= moveSpeed;
    }

    function moveDown() {
      player1.y += moveSpeed;
    }
    function moveLeft() {
      player1.x -= moveSpeed;
    }
    function moveRight() {
      player1.x += moveSpeed;
    }

    function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
      );
    }

    function rude() {
      document.getElementById( "myCanvas" ).style.backgroundColor = "black";
      ghost1.height -= 10;
      ghost1.width -= 10;
      if( ghost1.height == 40 ) {
        window.alert("Ouch! Watch Where You're Going!");
      }
    }

  });
});
