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
    drawBlock() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = this.color;
      //ctx.clearRect( 0 , 0 , 600 , 400 );
      ctx.fillRect( this.x , this.y , this.height , this.width );
      setInterval( this.update , 1000 );
    }
    update() {
      this.y +=10;
      this.drawBlock();
    }
}

$(document).ready(function(){
  $( "#startButton" ).click(function () {

    var moveSpeed = 10;
    var player1 = new LonelyPongPlayers( 50 , 100 , 200 , 20 , moveSpeed , "#0000FF" );
    //var ghost1 = new LonelyPongPlayers( 400 , 50 , 50 , 50 , 0 , "black" );

    player1.update();
    //player1.drawBlock();


    //player1.getKey(event);
    //ghost1.drawBlock();


  });
});
