/*
Author: Eli Watts
File Name: amoeba.js
Date: 03/25/2020
Purpose: MART 441 Homework Assignment #10
*/

    class LonelyPongPlayers {
      constuctor ( x , y , height , width , speed , color ) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
      }
      get nabX() {
        return this.x;
      }
      get nabY() {
        return this.y;
      }
      get nabHeight() {
        return this.height;
      }
      get nabWidth() {
        return this.width;
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
    }

$(document).ready(function(){

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var player1 = new LonelyPongPlayers( 50 , 100 , 200 , 20 , 10 , "#0000FF" );

  console.log(player1.color);

});

  /*drawSquare();
  setInterval(update, 1000/60 );

  function update() {
    drawSquare();
  }

  function drawSquare() {
    ctx.clearRect( 0 , 0 , 600 , 400 );
    //ctx.fillRect( x , y , 20 , 200 );
  }

  function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if(actualLetter == "w") {
      moveUp();
    } else if(actualLetter == "s" ) {
      moveDown();
    }
  }

  function moveUp() {
    y -= speed;
  }

  function moveDown() {
    y += speed;
  }*/

/*--------------------------------------------------------------------------------------------------------------------------*/
// Code Grave Yard
/*--------------------------------------------------------------------------------------------------------------------------*/

/*var x = 50;
var y = 100;
var speed = 10;
ctx.fillStyle = "#0000FF";*/

/*var petriDish = document.getElementById("myCanvas");
var ctx = petriDish.getContext("2d");
var upper = 100;
var downer = 300;

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if(actualLetter == "w") {
      moveUp();
    } else if(actualLetter == "s") {
      moveDown();
    }
    drawSquare();
}

function moveUp() {
  upper -=10;
}

function moveDown() {
  downer +=10;
}

function drawSquare() {
  ctx.fillRect( 50 , 50 , 20 , 20 );
}*/
