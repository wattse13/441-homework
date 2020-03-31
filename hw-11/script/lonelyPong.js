/*
Author: Eli Watts
File Name: amoeba.js
Date: 03/25/2020
Purpose: MART 441 Homework Assignment #10
*/

//Creates new class template from which object instances can be called
//Contstructor takes five arguments which decide each objects x and y position its width height speed and color.
class LonelyPongPlayers {
  constructor ( x , y , height , width , speed , color ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.color = color;
    }
    //Getters and setters encapsulate class properties
    //Class should make changes not outside world
      //In theory I think I understand the utility of getters and setters, but in practice I don't actually know how to use them
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

//Prevents any code from running before page finishes loading
//Not sure if it is necessary to wrap all of my code in this function
//After the start button is clicked the keypress method looks for any keypress events on 'this' page
$(document).ready(function(){
  $( "#startButton" ).click(function () {
    $(this).keypress(function(event){
        getKey(event);
    });

    //First variable is assigned a value of 5. Later used as argument when calling new instance of LonelyPongPlayer object
    var moveSpeed = 5;
    //Creates two new object instances based on LonelyPongPlayer class
    var player1 = new LonelyPongPlayers( 50 , 175 , 50 , 50 , moveSpeed , "purple" );
    var ghost1 = new LonelyPongPlayers( 500 , 175 , 50 , 50 , 0 , "grey" );

    //Calls drawBlock() function
    drawBlock();
    //Calls update function 60 times per second
    setInterval( update , 1000/60 );

    //Creates new function
    //When called it initializes two variables. A 2-D context is assigned to the ctx variable as a value
    //Canvas is wiped clean, which prevents objects from 'streaking'
    //Each object is filled with a specified color and then drawn at a specified location with specified dimensions
    function drawBlock() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect( 0 , 0 , 600 , 400 );
      ctx.fillStyle = player1.color;
      ctx.fillRect( player1.x , player1.y , player1.height , player1.width );
      ctx.fillStyle = ghost1.color;
      ctx.fillRect( ghost1.x , ghost1.y , ghost1.height , ghost1.width );

    }

    //Every time the update function is called, the drawBlock() function is called again
    function update() {
      drawBlock();
    }

    //Taken from week 11 website
    //When a key is pressed, keycode is translated to its string counter part
    //Var ouch is assigned value of function hasCollided()
    function getKey(event) {
      var char = event.which || event.keyCode;
      var actualLetter = String.fromCharCode(char);
      var ouch = hasCollided( player1 , ghost1 );

      //If w is pressed function move up is called. Same process for keys s a and d
      if(actualLetter == "w") {
        moveUp();
      } else if(actualLetter == "s" ) {
        moveDown();
      } else if(actualLetter == "a" ) {
        moveLeft();
      } else if(actualLetter == "d" ) {
        moveRight();
      }
      //If a collision is detected the rude() function is called
      if( ouch ) {
        //console.log("ouch");
        rude();
      }
    }
    //These functions add or subtract from the player1 objects x and y values to move it around the canvas
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

    //Taken from week 11 lesson
    //Checks corners of objects, passed in as arguments, to see if they overlap
      //Returns true if objects overlap
    function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
      );
    }

    //When called, changes background color of myCanvas to black
    //Ghost1.height and .width are reduced by 10
    //If loop prevents alert from continuing to pop up.
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
