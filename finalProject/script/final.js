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
var gameMap = [
	0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 2, 2, 2, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 2, 1, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 2, 1, 0, 2, 2, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 2, 1, 0, 2, 2, 0, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 2, 2, 2, 2, 2, 0, 4, 4, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 1, 1, 2, 1, 0, 2, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 1, 1, 2, 1, 0, 2, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 1, 1, 2, 1, 0, 0, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 2, 0, 0,
	0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

//Creates new instance of TileMap object
//Will be used to store and manage loaded map data
var mapTileData = new TileMap();

//Arrays which hold information about roofs
//`x` and `y` correspond to roof position on map and `w` and `h` correspond to roof width and height
//data varaible contains array with a width and height corresponding to the `w` and `h` values and numerical value which corresponds to the tileType array entry
var roofList = [
	{ x:5, y:3, w:4, h:7, data: [
		10, 10, 11, 11,
		10, 10, 11, 11,
		10, 10, 11, 11,
		10, 10, 11, 11,
		10, 10, 11, 11,
		10, 10, 11, 11,
		10, 10, 11, 11
	]},
	{ x:15, y:5, w:5, h:4, data: [
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11
	]},
	{ x:14, y:9, w:6, h:7, data: [
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11
	]}
];

//Initializes variables containing tile width and height and map width and height
var tileW = 16, tileH = 16;
var mapW = 20, mapH = 20;

//Initializes variables related to game timing
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

//Initializes variables related to the tileset used
//Variable tileset will hold tilesheet image once loaded by code
//tilesetLoaded is a boolean value which will allow for check to see if the tilesheet image has loaded correctly
var tileset = null, tilesetURL = "../assets/images/tileSet.png", tilesetLoaded = false;

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
		name : "Box",
		sprite : new Sprite([{x:271,y:0,w:16,h:16}]),
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 1
	},
	2 : {
		name : "Broken Box",
		sprite : new Sprite([{x:220,y:135,w:40,h:40}]),
		offset : [0,0],
		collision : objectCollision.none,
		zIndex : 1
	},
	3 : {
		name : "Tree top",
		sprite : new Sprite([{x:220,y:152,w:40,h:40}]),
		offset : [-20,-20],
		collision : objectCollision.solid,
		zIndex : 3
	}
};

//FloorTypes object helps organize which tiles character object can walk on, and which cannot be walked on
var floorTypes = {
	solid	: 0,
	path	: 1,
	water	: 2,
	ice		: 3,
	conveyorU	: 4,
	conveyorD	: 5,
	conveyorL	: 6,
	conveyorR	: 7,
	grass		: 8
};

//TileTypes indexes correspond with gameMap array
//Each tileType index is assigned a floorTypes value, and an instance of the Sprite class which determinew which sprite will be used from tileSet.png
//Colour property is remnant from old code before use of tile sheet
var tileTypes = {
	0 : { colour:"#685b48", floor:floorTypes.solid,
		sprite:new Sprite([{x:238,y:221,w:16,h:16}])	},
	1 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite([{x:85,y:0,w:16,h:16}])	},
	2 : { colour:"#e8bd7a", floor:floorTypes.path,
		sprite:new Sprite([{x:102,y:0,w:16,h:16}])	},
	3 : { colour:"#286625", floor:floorTypes.solid,
		sprite:new Sprite([{x:238,y:255,w:16,h:16}])	},
	4 : { colour:"#678fd9", floor:floorTypes.water,
		sprite:new Sprite([{x:0,y:0,w:16,h:16}])},
	5 : { colour:"#eeeeff", floor:floorTypes.ice,
		sprite:new Sprite([{x:136,y:0,w:16,h:16}])	},
	6 : { colour:"#cccccc", floor:floorTypes.conveyorL,
		sprite:new Sprite([{x:187,y:238,w:16,h:16}])},
	7 : { colour:"#cccccc", floor:floorTypes.conveyorR,
		sprite:new Sprite([{x:187,y:238,w:16,h:16}])},
	8 : { colour:"#cccccc", floor:floorTypes.conveyorD,
		sprite:new Sprite([{x:187,y:238,w:16,h:16}])},
	9 : { colour:"#cccccc", floor:floorTypes.conveyorU,
		sprite:new Sprite([{x:187,y:238,w:16,h:16}])},

	10 : { colour:"#ccaa00", floor:floorTypes.solid,
		sprite:new Sprite([{x:17,y:442,w:16,h:16}])},
	11 : { colour:"#ccaa00", floor:floorTypes.solid,
		sprite:new Sprite([{x:17,y:442,w:16,h:16}])}
};

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
	80 : false
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

//Following functions are called once window is finished loading
window.onload = function()
{
	//variable ctx is assigned a value of `2d`
	//requestAnimationFrame function is called with function drawGame passed in as argument
	ctx = document.getElementById('myGame').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	//If an arrow key is pressed, the corresponding boolean value stored in keysDown array is changed to true
	//If an arrow key is not pressed, the corresponding boolean value stored in keysDown  array is changed back to false
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
		if(e.keyCode==80) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
		if(e.keyCode==83)
		{
			currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
		}
		if(e.keyCode==80) { keysDown[e.keyCode] = false; }
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

	mapTileData.buildMapFromData(gameMap, mapW, mapH);
	mapTileData.addRoofs(roofList);
	mapTileData.map[((2*mapW)+2)].eventEnter = function()
		{ console.log("Entered tile 2,2"); };

	/*var mo1 = new MapObject(1); mo1.placeAt(2, 4);
	var mo2 = new MapObject(2); mo2.placeAt(2, 3);

	var mo11 = new MapObject(1); mo11.placeAt(6, 4);
	var mo12 = new MapObject(2); mo12.placeAt(7, 4);

	var mo4 = new MapObject(3); mo4.placeAt(4, 5);
	var mo5 = new MapObject(3); mo5.placeAt(4, 8);
	var mo6 = new MapObject(3); mo6.placeAt(4, 11);

	var mo7 = new MapObject(3); mo7.placeAt(2, 6);
	var mo8 = new MapObject(3); mo8.placeAt(2, 9);
	var mo9 = new MapObject(3); mo9.placeAt(2, 12);

	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(i, 1);
	}
	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(3, i);
	}*/
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
		//else if(keysDown[80]) { player.pickUp(); }
	}

	//Reassigns values in viewport-object's update function to value of player-object's position + half of player-object's dimensions
	//Causes viewport object to follow player movement
	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	var playerRoof1 = mapTileData.map[toIndex(
		player.tileFrom[0], player.tileFrom[1])].roof;
	var playerRoof2 = mapTileData.map[toIndex(
		player.tileTo[0], player.tileTo[1])].roof;

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
			else if(z==1)
			{
				var is = mapTileData.map[toIndex(x,y)].itemStack;
				if(is!=null)
				{
					itemTypes[is.type].sprite.draw(
						gameTime,
						viewport.offset[0] + (x*tileW) + itemTypes[is.type].offset[0],
						viewport.offset[1] + (y*tileH) + itemTypes[is.type].offset[1]);
				}
			}

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

			//If current layer being drawn is 2 and if roofType is not 0 and if player is not standing under roof, then roof sprites are drawn
			if(z==2 &&
				mapTileData.map[toIndex(x,y)].roofType!=0 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof1 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof2)
			{
				tileTypes[mapTileData.map[toIndex(x,y)].roofType].sprite.draw(
					gameTime,
					viewport.offset[0] + (x*tileW),
					viewport.offset[1] + (y*tileH));
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
