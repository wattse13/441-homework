/*
Author: Eli Watts
File Name: amoeba.js
Date: 03/25/2020
Purpose: MART 441 Homework Assignment #10
*/

$(document).ready(function(){

    class LonelyPongPlayers {
      constuctor ( x , y , height , width , speed , color ) {
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

  //var canvas = document.getElementById("myCanvas");
  //var ctx = canvas.getContext("2d");
  $( "#startButton" ).click(function () {
    var player1 = new LonelyPongPlayers( 50 , 100 , 200 , 20 , 10 , "#0000FF" );

    console.log(this.speed);
  });
});
