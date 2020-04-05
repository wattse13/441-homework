/*
Author: Eli Watts
File Name: game.js
Date: 03/31/2020
Purpose: MART 441 Homework Assignment #11
*/

var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 0;
var wallArray = [];

$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(50,200,20,20,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    wall1 = new Wall( 200 , 200 , 20 , 20 , "red" );
    //console.log("hi");
    $.getJSON("../script/amoebas.json", function(data) {
        for(var i = 0; i < data.squares.length; i++) {
            squareArray.push(new Square(data.squares[i].x , data.squares[i].y , data.squares[i].h , data.squares[i].w , data.squares[i].color));
        }

    $.getJSON("../script/walls.json" , function( info ) {
      for( var k = 0; k < info.walls.length; k++ ) {
        wallArray.push( new Wall( info.walls[k].x , info.walls[k].y , info.walls[k].h , info.walls[k].w , info.walls[k].color ));
      }

        drawSquare();
        //console.log(data.squares[0]);
      });
    });
}

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w") {
        moveUp();
        direction = "up";
    } if(actualLetter == "s") {
        moveDown();
        direction = "down";
    } if(actualLetter == "a") {
        moveLeft();
        direction = "left";
    } if(actualLetter == "d") {
        moveRight();
        direction = "right";
    }


    var test = hasCollided( square1 , square2 );
    var test2 = false;
    var test3 = hasCollided( square1 , wall1 );
    var test4 = false;

    for(var i = 0; i < squareArray.length; i++) {
        test2 = hasCollided( square1 , squareArray[i] );
        if(test2 == true) {
            break;
        }
        //console.log(test2);
    } if(test || test2 ) {
        lives ++;
        squareArray.splice( i , 1 );
    }
    for( var l = 0; l < wallArray.length; l++ ) {
      test3 = hasCollided( square1 , wallArray[l] );
      if( test3 == true ) {
        break;
      }
    } if( test3 || test4 ) {
      //console.log("ow");
      if(direction == "left") {
          moveRight();
      } else if(direction == "right") {
          moveLeft();
      } else if(direction == "up") {
          moveDown();
      } else if(direction == "down") {
          moveUp();
      }
    }
    someBoundaries(square1);
    drawSquare();
}

function moveUp() {
    square1.y-=10;
}
function moveDown() {
    square1.y+=10;
}
function moveRight() {
    square1.x+=10;
}
function moveLeft() {
    square1.x-=10;
}

function drawSquare() {
    //console.log("here");
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.fillStyle = wall1.mainColor;
    ctx.fillRect(wall1.x, wall1.y, wall1.width, wall1.height);
    for(var j = 0; j < wallArray.length; j++) {
        ctx.fillStyle = wallArray[j].mainColor;
        ctx.fillRect(wallArray[j].x, wallArray[j].y, wallArray[j].width, wallArray[j].height);
    }

    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Points: " + lives, 10, 50);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function someBoundaries( object ) {
  if( object.y <= 0 ) {
    moveDown();
  }
  if( object.y >= 400 ) {
    moveUp();
  }
  if( object.x <= 0 ) {
    moveRight();
  }
  if( object.x >= 600 ) {
    moveLeft();
  }
}

/*function omNom( object1 , object2 ) {
  if( object1.h > object2.h ) {
    object1.h += 10;
    object1.w += 10;
  }
}*/
