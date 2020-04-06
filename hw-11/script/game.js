/*
Author: Eli Watts
File Name: game.js
Date: 03/31/2020
Purpose: MART 441 Homework Assignment #11
*/

//Initializes global variables and assigns them values
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

//Once document has finished loading, start button can be clicked to call function setup() and getKey()
$(document).ready(function(){
  $( "#startButton" ).click(function() {
    setup();
    //This looks for all keypress events on web page and then passes pressed key into getKey() function
    $(this).keypress(function(event){
        getKey(event);
        });
    });
});


//Creates new function called setup();
//Copied from lesson 12 example code
function setup() {
    //Assigns global variable canvas the myCanvas html element as a value
    canvas = document.getElementById("myCanvas");
    //Assigns global variable ctx a 2d context as value
    ctx = canvas.getContext("2d");

    //Creates three objects instances from class definitions
    //Feel like square2 is unnecessary as it dos not show up on myCanvas
      //However, trying to remove all mentions of square2 prevents code from running
    square1 = new Square(50,200,20,20,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    wall1 = new Wall( 200 , 200 , 20 , 20 , "red" );

    //Loads JSON object and assigns it to variable data
    //For loop creates a new object instance from the Square class and then pushes object into squareArray
    $.getJSON("../script/amoebas.json", function(data) {
        for(var i = 0; i < data.squares.length; i++) {
            squareArray.push(new Square(data.squares[i].x , data.squares[i].y , data.squares[i].h , data.squares[i].w , data.squares[i].color));
        }
    //Loads JSON object and assigns it to variable info
    //For loop creates a new object instance from Wall class and then pushes object into wallArray
    $.getJSON("../script/walls.json" , function( info ) {
      for( var k = 0; k < info.walls.length; k++ ) {
        wallArray.push( new Wall( info.walls[k].x , info.walls[k].y , info.walls[k].h , info.walls[k].w , info.walls[k].color ));
      }
        //After JSON objects have been loaded, and arrays have been filled, the drawSquare() function is called
        drawSquare();
        //console.log(data.squares[0]);
      });
    });
}

//Creates new function getKey() which takes a single input parameter
//Copied from lesson 12 example code
function getKey(event) {
    //Initializes and assigns variable char the pressed key or pressed key keycode as a value
    var char = event.which || event.keyCode;
    //Initializes and assigns acutalLetter the string value of whatever key is pressed
    var actualLetter = String.fromCharCode(char);
    //If 'w' is pressed function moveUp() is called and variable direction is assigned the value "up"
      //Following three if statements work in the same way
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

    //Creates four variables for use in testing for collisions
    //Also copied from week 12 example code
    var test;
    var test2 = false;
    var test3;
    var test4 = false;

    //For loop continues as long as value of i is less than length of the squareArray
    for(var i = 0; i < squareArray.length; i++) {
        //Test2 is assigned what the hasCollided function returns as a value
        //square1 is tested against all squares in the squareArray
        test2 = hasCollided( square1 , squareArray[i] );
        //If hasCollided returns true, indicating a collision, the for loop stops
        if(test2 == true) {
            break;
        }
    //If test or test2 return true the value of variable lives increases by one and the square[i] square1 collided with is spliced from the squareArray
    } if( test || test2 ) {
        lives ++;
        squareArray.splice( i , 1 );
    }
    //Works the same way previous for loop works
    //Instead of checking for collisions between squares, it looks for collisions between square1 and wall objects
    for( var l = 0; l < wallArray.length; l++ ) {
      test3 = hasCollided( square1 , wallArray[l] );
      if( test3 == true ) {
        break;
      }
    //If test3 or test4 return true square1 is pushed back away from the wall it was colliding with
    } if( test3 || test4 ) {
      //console.log("ow");
      //Following if statements use value of direction variable and then move square1 in opposite direction
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
    //Function someBoundaries() is called
    //Square1 position is updated with the drawSquare() function
    someBoundaries(square1);
    drawSquare();
}
//Following functions allow square1 to move by adding or subtracting to/from x and y values
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

//Creates new function drawSquare()
//Copied from lesson 12 example code
function drawSquare() {
    //Clears canvas to prevent moving shapes from 'streaking'
    ctx.clearRect(0,0,800,600);
    //Fills square1 with Square 'getter' mainColor
    ctx.fillStyle = square1.mainColor;
    //Fills square1 at its current x and y position and size determined by its width and height
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    //Repeates proccess for square2
    //Tried removing, as square 2 doesn't appear on myCanvas, but doing so prevented code from running
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    //For loop runs as long as value of i is less than squareArray.length
    //Fills object instances of Square class which are stored in squareArray
    for(var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    //Does same thing as above code, but draws the Wall object instances which are stored in the wallArray
    ctx.fillStyle = wall1.mainColor;
    ctx.fillRect(wall1.x, wall1.y, wall1.width, wall1.height);
    for(var j = 0; j < wallArray.length; j++) {
        ctx.fillStyle = wallArray[j].mainColor;
        ctx.fillRect(wallArray[j].x, wallArray[j].y, wallArray[j].width, wallArray[j].height);
    }
    //Copied from week 12 example code
    //Writes score onto myCanvas
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Points: " + lives, 10, 50);

}

//Creates new function hasCollided()
//Copied from week 12 example code
//Requires to input parameters
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

//Creates new variable someBoundaries
//Requires single input parameter
//By passing in square1 object function can check if its x or y values exceed or is less than the canvas x and y values
//A little buggy as square1 can partially pass through some boundaries
  //Would require a little math to fix
  //For example adding or subtracting some portion of square1's height or width value to the myCanvas x or y values 
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
