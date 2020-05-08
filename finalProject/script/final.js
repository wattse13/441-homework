/*
Author: Eli Watts
File Name: final.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

//Initializes variable ctx and assigns value of null
var ctx = null;

//Creates new game map array
//Different numbers correspond with different tile types
var gameMap =[
	 [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 9, 8, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0
],
[
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,
	7, 7, 7, 7, 10, 10, 7, 7, 7, 7, 7

	]
];

//Empty arrays for storing JSON data
var gameMapArray = [], objectMapArray = [];
var currentLevel = 0;
//var mapW = [], mapH = [];
//var tileW = [], tileH = [];

//Creates new instance of TileMap object
//Will be used to store and manage loaded map data
var mapTileData = new TileMap();
//var objectTileData = new TileMap();


//Initializes variables containing tile width and height and map width and height
var tileW = 16, tileH = 16;
var mapW = 30, mapH = 30;
//var objMapW = 30 , objMapH = 30;

//Initializes variables related to game timing
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

//Initializes variables related to the tileset used
//Variable tileset will hold tilesheet image once loaded by code
//tilesetLoaded is a boolean value which will allow for check to see if the tilesheet image has loaded correctly
var tileset = null, tilesetURL = "../assets/images/finalSpriteSheet-01.png", tilesetLoaded = false;

//Initializes variables related to which speed the game can be played at
var gameTime = 0;
var gameSpeeds = [
	{name:"Normal", mult:1},
	{name:"Slow", mult:0.3},
	{name:"Fast", mult:3},
	{name:"Paused", mult:0}
];
var currentSpeed = 0;

//Variable which sets up ability to handle two collision types: pass-through-able and non-pass-through-able
var objectCollision = {
	none		: 0,
	solid		: 1
};

//List of object types and map of key/value pairs describing each object
//Collision property refers back to variable objectCollision
//zIndex variable determines what order objects will be drawn in
var objectTypes = {
	1 : {
		name : "Book Shelf",
		sprite : new Sprite([{x:731,y:204,w:16,h:16}]),
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 1
	},
	2 : {
		name : "Broken Box",
		sprite : new Sprite([{x:220,y:135,w:16,h:16}]),
		offset : [0,0],
		collision : objectCollision.none,
		zIndex : 1
	},
	3 : {
		name : "Tree top",
		sprite : new Sprite([{x:238,y:153,w:16,h:16}]),
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	}
};

//FloorTypes object helps organize which tiles character object can walk on, and which cannot be walked on
var floorTypes = {
	solid	: 0,
	path	: 1,
	water	: 2,
	grass	: 3
};

//TileTypes indexes correspond with gameMap array
//Each tileType index is assigned a floorTypes value, and an instance of the Sprite class which determinew which sprite will be used from tileSet.png
//Colour property is remnant from old code before use of tile sheet
var tileTypes = {
	//Green impassable block
	0 : { floor:floorTypes.solid,
		sprite:new Sprite([{x:170,y:442,w:16,h:16}])	},
		//Grass
	1 : { floor:floorTypes.grass,
		sprite:new Sprite([{x:85,y:0,w:16,h:16}])	},
		//Dirt path
	2 : { floor:floorTypes.path,
		sprite:new Sprite([{x:102,y:0,w:16,h:16}])	},
		//Wooden Floor
	3 : { floor:floorTypes.path,
		sprite:new Sprite([{x:85,y:68,w:16,h:16}])	},
		//Roof
	4 : { floor:floorTypes.solid,
		sprite:new Sprite([{x:306,y:392,w:16,h:16}])},
		//Bush
	5 : { floor:floorTypes.solid,
		sprite:new Sprite([{x:238,y:153,w:16,h:16}])	},
		//Transparent
	6 : { floor:floorTypes.path,
		sprite:new Sprite([{x:1160,y:442,w:16,h:16}])},
		//Brown Wall
	7 : { floor:floorTypes.solid,
		sprite:new Sprite([{x:425,y:374,w:16,h:16}])},
		//Door, Right
	8 : { floor:floorTypes.path,
		sprite:new Sprite([{x:493,y:102,w:16,h:16}])},
		//Door, Left
	9 : { floor:floorTypes.path,
		sprite:new Sprite([{x:476,y:102,w:16,h:16}])},
		//Orange Rug
	10 : { floor:floorTypes.path,
		sprite:new Sprite([{x:187,y:238,w:16,h:16}])}
};

//Function which increases value of currentLevel variable, which in theory should change which gameMap array object is loaded
//Also moves players position and reassigns values of variables mapW and mapH to correspond with new map width and map height
//Populates a single Book Shelf object inside the building
//Can be interacted with when the player enters the tile in front of Book Shelf Object while holding down space bar
function enterBuilding() {
	//console.log("Anyone Home?");
	currentLevel += 1;
	mapW = 11;
	mapH = 11;
	mapTileData.buildMapFromData(gameMap[currentLevel], mapW, mapH);
	player.tileTo = [5,9];
	player.tileFrom = [5,9];

	var mo11 = new MapObject(1); mo11.placeAt(5, 4);

	//Tile in front of Book Shelf is trigger for interactWith() function
	//Space Bar must be held down while moving into Tile
	//Very very very buggy
	mapTileData.map[((5*mapW)+5)].eventEnter = function() {
		interactWith();
	};
}

/*function exitBuilding() {
	console.log("Anyone Home?");
	currentLevel -= 1;
	mapW = 30;
	mapH = 30;
	mapTileData.buildMapFromData(gameMap[currentLevel], mapW, mapH);
	player.tileTo = [14,16];
	player.tileFrom = [14,16];
}*/

//Object allows for other objects, like sprites, to contain directionality
var directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};

//By setting keycode values to false, eventListener begins by assuming arrow keys are not being pressed
var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false,
	32 : false
};

//Viewport object keeps track of following information:
	//Screen: canvas width and height. startTile: coordinates of top left tile. endTile: coordinates of bottom right tile. Offset: amount in pixels that map tiles or objects should be drawn relative to normal position
	//Update method takes two arguments, `px` and `py` which determine position of desired viewport center
	//Offsets are calculated by halving canvas width and height, stored in screen, minus the offsets passed to the method, `px` and `py`, which specify viewport center. Values rounded down to prevent tearing
var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		//Finds coordinates of center tile by dividing `px` by tile width and by dividing `py` by tile height
		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		//Left-most visible tile, or startTile, is calculated by finding maximum number of tiles that can fit half the screen, and then taking that number away from center tile
		//Additional minus one allows for tiles that are only pairtially on screen
		//Process repeated for top-most tiles
		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		//Checks that startTile value is greater than 0, which means it is within the visible section of map
		//If startTile is less than zero, its value is set to 0
		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		//EndTile, or right-most visible tile is calculated same way as startTile, but values are added, rather than subtracted
		//Process is repeated for bottom-most tiles
		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		//Checks that endTile values are not greater than map width or map height
		//If they are greater than map width or height, they are given a value of map width -1 and map height - 1
		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

//Creates new variable player, and assigns it a value of a new object instance of Character class
var player = new Character();


//Helps with code readability by converting `x` and `y` coordinate positions into an index value which corresponds with a location in map object
function toIndex(x, y)
{
	return((y * mapW) + x);
}

function interactWith() {
	//console.log("hi");
	if ( keysDown[32] == true ){
		window.alert("There is no escape from this room... Sorry?");
	}
}

//Following functions are called once window is finished loading
window.onload = function()
{

	//var arrayString;
	//$(document).ready(function () {
		//$.getJSON( "../script/levels.json" , function( result ) {
								//window.alert( result.levels[0].gameMap );
				//$.each( result.levels , function(i)
				//{

					//arrayString = JSON.stringify(result.levels[i].gameMap);
				//	gameMapArray.push(result.levels[i].gameMap);

									//objectMapArray.push(result.levels[i].objectMap);
									//console.log("hi"+ gameMap[0]);
									//mapW.push(result.levels[i].mapW);
									//mapH.push(result.levels[i].mapH);
									//tileW.push(result.levels[i].tileW);
									//tileH.push(result.levels[i].tileH);
			//});

		// read through all the array values in the JSON object
		//var myArray = arrayString.split(",");
	//	for(var i = 0; i < myArray.length; i++)
	//	{
		//	if(i == myArray.length-1)
		//	{
				// get rid of the ending "]"
			//	gameMap.push(myArray[i].substring(0,1));
		//	}
		//	else if(i == 0)
		//	{
		//		gameMap.push(myArray[i].substring(1));
		//	}
		//	else
		//	{
			//	gameMap.push(myArray[i]);
			//}

	//	}

		// set the mapTileData here because of its association to the JSON object now
		//mapTileData.buildMapFromData(gameMap, mapW, mapH /*, objectMap, objMapW, objMapH*/);

	//});




	//$(document).ready(function () {
		$.getJSON( "../script/levels.json" , function( result ) {
                //window.alert( result.levels[0].gameMap );
                $.each( result.levels , function(i) {
                  gameMapArray.push(result.levels[i].gameMap);
                  //objectMapArray.push(result.levels[i].objectMap);
									//console.log(gameMapArray[0]);
                  //mapW.push(result.levels[i].mapW);
									//mapH.push(result.levels[i].mapH);
									//tileW.push(result.levels[i].tileW);
									//tileH.push(result.levels[i].tileH);
		//	});
		});
	});

	//variable ctx is assigned a value of `2d`
	//requestAnimationFrame function is called with function drawGame passed in as argument
	ctx = document.getElementById('myGame').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	//If an arrow key is pressed, the corresponding boolean value stored in keysDown array is changed to true
	//If an arrow key is not pressed, the corresponding boolean value stored in keysDown  array is changed back to false
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
		if(e.keyCode==32) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
		if(e.keyCode==83)
		{
			currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
		}
		if(e.keyCode==32) { keysDown[e.keyCode] = false; }
	});

	//Assigns canvas width and canvas height as values to the viewport-object's screen property
	viewport.screen = [document.getElementById('myGame').width,
		document.getElementById('myGame').height];

	//Creates new object instance of Image class
	tileset = new Image();
	//If tilesheet image fails to load, the canvas context value is updated to null and an alert is shown on screen
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	//If tilesheet image loads correctly, tileset.src property takes the value of the tilesetURL global variable
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;

  //Calls the buildMapFromData method and passes in gameMap object, mapW and mapH as arguments
	mapTileData.buildMapFromData(gameMap[currentLevel], mapW, mapH /*, objectMap, objMapW, objMapH*/);
  //mapTileData.buildMapFromData( objectMap , objMapW , objMapH );

	//If player-object enters tiles at specified location, function enterBuilding() is called
	//Will probably later lead to problems, as it specifies not a specific tileType, but a location which could appear on any map
	mapTileData.map[((15*mapW)+14)].eventEnter = function() {
		enterBuilding();
	};
	mapTileData.map[((15*mapW)+13)].eventEnter = function() {
		enterBuilding();
	};

	/*if (currentLevel.val == 1) {
		 mapTileData.map[((11*mapW)+4)].eventEnter = function() {
			 exitBuilding();
		 };
		 mapTileData.map[((11*mapW)+5)].eventEnter = function() {
			exitBuilding();
		};
	}*/
  //objectTileData.buildMapsFromData(objectMap , objMapW , objMapH );
};

//Main function counts frame rate, draws map, and requests function be called again once browser is ready
function drawGame()
{
	//If variable ctx has a value of null, function stops running
	//If tilesetLoaded still has a value of false, function stops running
	if(ctx==null) { return; }
	if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	//Variable currentFrameTime is assigned value of current time in milliseconds
	//Variable timeElapsed is assigned value of time passed since last frame was processed
	//value of gameTime variable is increased by value of timeElapsed multiplied by gameSpeeds mult factor
	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;
	gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	//If player object is not moving and gameSpeeds[currentSpeed].mult does not equal 0, checks for new movement commands
	if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
	{
		//Four if statments correspond to four possible arrow key inputs
		//Else if statments restrict player to vertical and horizontal movement; no diagonal
		//Uses Character class method canMoveTo to first determine if player object is able to move to desired tile
		//If target tile is move-on-able Character class method canMoveTo, then moves player-object in desired direction and updates gameTime variable value
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }
	}

	//Reassigns values in viewport-object's update function to value of player-object's position + half of player-object's dimensions
	//Causes viewport object to follow player movement
	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	//Before new frame is drawn, last frame is erased with black rectangle
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	//Iterates through all mapTileData.levels
	for(var z = 0; z < mapTileData.levels; z++)
	{
	//When drawing tiles to canvas, only draws tiles which exist between viewport.startTile and viewport.endTile
	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			//Prevents floor tiles from being drawn on layers above first layer
			if(z==0)
			{
				//Viewport.offset values are also added to coordinates of tiles
				tileTypes[mapTileData.map[toIndex(x,y)].type].sprite.draw(
					gameTime,
					viewport.offset[0] + (x*tileW),
					viewport.offset[1] + (y*tileH));
			}
      /*if(z==2) {
        tileTypes[mapTileData.objMap[toIndex(x,y)].type].sprite.draw(
          gameTime,
					viewport.offset[0] + (x*tileW),
					viewport.offset[1] + (y*tileH));
      }*/
			else if (z == 1){
				var o = mapTileData.map[toIndex(x,y)].object;
				//Checks if an object exists on tile being drawn and if objectType's zIndex is equal to layer currently being drawn
				//If true, object's sprite is drawn
				if(o!=null && objectTypes[o.type].zIndex==z)
				{
					var ot = objectTypes[o.type];

					ot.sprite.draw(gameTime,
						viewport.offset[0] + (x*tileW) + ot.offset[0],
						viewport.offset[1] + (y*tileH) + ot.offset[1]);
				}
			}
		}
	}

		//Finally, if layer 1 is being drawn, the character sprite is drawn
		if(z==1)
		{
			player.sprites[player.direction].draw(
				gameTime,
				viewport.offset[0] + player.position[0],
				viewport.offset[1] + player.position[1]);
		}

	}

	ctx.textAlign = "right";
  ctx.textAlign = "left";

	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
	ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
