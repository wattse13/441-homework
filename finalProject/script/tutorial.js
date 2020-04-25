 /*
Author: Eli Watts
File Name: tutorial.js
Date: 04/13/2020
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

//Sprite class handles animations
//Argument 'data' will be array of frames which compose sprite
function Sprite(data)
{
	this.animated	= data.length > 1;
	this.frameCount	= data.length;
	this.duration	= 0;
	this.loop		= true;

	//If sprite array is longer than 1, sprite cycles through other sprites stored in data array
	if(data.length > 1)
	{
		//Loops through all enumerable properties within Sprite class, i.e. duration
		for(var i in data)
		{
			//If sprite has no defined duration attribute, d, it is set to 100 milliseconds
			//Frame duration is then added to Sprite duration property
			if(typeof data[i].d=='undefined')
			{
				data[i].d = 100;
			}
			this.duration+= data[i].d;

			//If Sprite loop attribute is not undefined, it is set to true or false depending on sprite attribute
			if(typeof data[i].loop!='undefined')
			{
				this.loop = data[i].loop ? true : false;
			}
		}
	}
	//Finally Sprite.frames attribute is passed in as function argument
	this.frames		= data;
}

//.protoype is an object which includes all functions and properties of original class object
//Sprite draw function requires three arguments:
	//`t`, currently elapsed gameTime and `x` and `y` which are the sprites calcualated x and y coordinate position
Sprite.prototype.draw = function(t, x, y)
{
	//Function begins by assuming sprite frame at index 0 should be drawn first
	var frameIdx = 0;

	//If Sprite object does not loop and if the sprite is animated and if value of `t` is greather than value of the Sprite-Frame's duration then last frame in Sprite array is displayed
	if(!this.loop && this.animated && t>=this.duration)
	{
		frameIdx = (this.frames.length - 1);
	}
	//Otherwise Sprite is animated and does loop
	//% operator prevetns value of `t` from becoming larger than value of frame duration
	//var totalD is set to 0 and will be used to store at what time each frame ends
	else if(this.animated)
	{
		t = t % this.duration;
		var totalD = 0;

		//Begins looping through frames index
		//Frame duration is added to value of var totalD
		//frameIdx value is set to current frame index
		//If value of `t` is less than or equal to value of totalD the correct frame has been calculated, and the loop can be exited
		for(var i in this.frames)
		{
			totalD+= this.frames[i].d;
			frameIdx = i;

			if(t<=totalD)
			{
				break;
			}
		}
	}

	//If frames offset value is undefined, it is set to 0 , 0. Otherwise value of frames offset property is used
	var offset = (typeof this.frames[frameIdx].offset=='undefined' ?
		[0,0] : this.frames[frameIdx].offset);

	//Finally, sprite can be drawn to canvas
	//Sprites x, y, width, and height are taken from current frame data, modified by any offset values and then drawn
	ctx.drawImage(tileset,
		this.frames[frameIdx].x, this.frames[frameIdx].y,
		this.frames[frameIdx].w, this.frames[frameIdx].h,
		x + offset[0], y + offset[1],
		this.frames[frameIdx].w, this.frames[frameIdx].h);
};

//Used for pick-up-able items
/*var itemTypes = {
	1 : {
		name : "Star",
		maxStack : 2,
		sprite : new Sprite([{x:887,y:510,w:16,h:16}]),
		offset : [2,2]
	}
};*/

/*function Stack(id, qty)
{
	this.type = id;
	this.qty = qty;
}
function Inventory(s)
{
	this.spaces		= s;
	this.stacks		= [];
}
Inventory.prototype.addItems = function(id, qty)
{
	for(var i = 0; i < this.spaces; i++)
	{
		if(this.stacks.length<=i)
		{
			var maxHere = (qty > itemTypes[id].maxStack ?
				itemTypes[id].maxStack : qty);
			this.stacks.push(new Stack(id, maxHere));

			qty-= maxHere;
		}
		else if(this.stacks[i].type == id &&
			this.stacks[i].qty < itemTypes[id].maxStack)
		{
			var maxHere = (itemTypes[id].maxStack - this.stacks[i].qty);
			if(maxHere > qty) { maxHere = qty; }

			this.stacks[i].qty+= maxHere;
			qty-= maxHere;
		}

		if(qty==0) { return 0; }
	}

	return qty;
};

function PlacedItemStack(id, qty)
{
	this.type = id;
	this.qty = qty;
	this.x = 0;
	this.y = 0;
}
PlacedItemStack.prototype.placeAt = function(nx, ny)
{
	if(mapTileData.map[toIndex(this.x, this.y)].itemStack==this)
	{
		mapTileData.map[toIndex(this.x, this.y)].itemStack = null;
	}

	this.x = nx;
	this.y = ny;

	mapTileData.map[toIndex(nx, ny)].itemStack = this;
};*/

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

//Creates new MapObject class which wil lbe used to track object instances
//Object id is passed in as argument
function MapObject(nt)
{
	this.x		= 0;
	this.y		= 0;
	this.type	= nt;
}
//MapObject method which places objects on map
//If object already exists on map, its current x and y coordinate values are set to null
//After original x and y values are nullified, arguments `nx` and `ny` can be passed into the objects x and y coordinate values
//Tile.object property or corresponding global mapTileData is then set to refrence this object
MapObject.prototype.placeAt = function(nx, ny)
{
	if(mapTileData.map[toIndex(this.x, this.y)].object==this)
	{
		mapTileData.map[toIndex(this.x, this.y)].object = null;
	}

	this.x = nx;
	this.y = ny;

	mapTileData.map[toIndex(nx, ny)].object = this;
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

//Class which stores and manages information about each loaded map tile
//Each object instance is created with three arguments: `tx` and `ty`, x and y coordinates of tile, and `tt` which is the tile type
//roof references the roof object and roofType is the ID which corresponds to roof sprite in tileTypes array
//eventEnter can be a pointer to another executable function when tile is entered
function Tile(tx, ty, tt)
{
	this.x			= tx;
	this.y			= ty;
	this.type		= tt;
	this.roof		= null;
	this.roofType	= 0;
	this.eventEnter	= null;
	//this.object		= null;
	//this.itemStack	= null;
}

//Class which stores and manages loaded map data
//`w` and `h` variables refer to map width and height and `map` variables contains all Tile objects which make up map
//levels variable is used for drawing objects layered on top of each other
function TileMap()
{
	this.map	= [];
	this.w		= 0;
	this.h		= 0;
	this.levels	= 4;
}
//TileMap method takes three arguments: `d` = array containing the tileType id to use for each map tile, `w` and `h` are the map width and height values
//Method begins by setting `w` and `h` to correspond with the passed in dimensions
TileMap.prototype.buildMapFromData = function(d, w, h)
{
	this.w		= w;
	this.h		= h;

	//If length of `d` is does not equal value of `w` *`h`, the function returns false and the map property is cleared of any current data
	if(d.length!=(w*h)) { return false; }
	this.map.length	= 0;

	//For loops loop through `d` array by row, and then by column
	//Add new Tile object to this.map[] with from corresponding `x` and `y` postions and corresponding entry from `d` as the tileType ID
	for(var y = 0; y < h; y++)
	{
		for(var x = 0; x < w; x++)
		{
			this.map.push( new Tile(x, y, d[((y*w)+x)]) );
		}
	}
	//Once loops have been iterated through, function returns true and exits the loop
	return true;
};
//Similar function to previous function, but for roofs
//Takes array of roof objects as argument
//Loops through each entry in roofs array
//Variable `r` references current roof object
TileMap.prototype.addRoofs = function(roofs)
{
	for(var i in roofs)
	{
		var r = roofs[i];

		//If roof objects extend beyond map confines, or if roof array length is not equal to the roof width * roof height, roof is skipped
		if(r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h ||
			(r.x+r.w)>this.w || (r.y+r.h)>this.h ||
			r.data.length!=(r.w*r.h))
		{
			continue;
		}

		//Iterates through roof rows and then through roof columns
		//Calculates tileIdx by adding x and y offset values to x and y roof coordinate positions currently being examined
		for(var y = 0; y < r.h; y++)
		{
			for(var x = 0; x < r.w; x++)
			{
				var tileIdx = (((r.y+y)*this.w)+r.x+x);

				//Updates Tile object in map array by setting its roof property to a reference to the current roof object being added to the map
				//Updates roofType in Tile to the value in the data array from this roof
				this.map[tileIdx].roof = r;
				this.map[tileIdx].roofType = r.data[((y*r.w)+x)];
			}
		}
	}
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

//New class definition
//Contains data related to tiles the character is moving from and to, the time at which the character began to move the dimensions of character in pixels, and characters x/y coordinate postion on canvas
function Character()
{
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [16,16];
	this.position	= [16,16];

	//Contains list of times it will take character to move across different floor types
	this.delayMove	= {};
	this.delayMove[floorTypes.path]			= 400;
	this.delayMove[floorTypes.grass]		= 800;
	this.delayMove[floorTypes.ice]			= 300;
	this.delayMove[floorTypes.conveyorU]	= 200;
	this.delayMove[floorTypes.conveyorD]	= 200;
	this.delayMove[floorTypes.conveyorL]	= 200;
	this.delayMove[floorTypes.conveyorR]	= 200;

	//Character objects can now have directionality property
	//Changing direction can now change which sprites are retrieved from the sprite sheet
	this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]		= new Sprite([{x:0,y:120,w:16,h:16}]);
	this.sprites[directions.right]	= new Sprite([{x:0,y:150,w:16,h:16}]);
	this.sprites[directions.down]	= new Sprite([{x:0,y:180,w:16,h:16}]);
	this.sprites[directions.left]	= new Sprite([{x:0,y:210,w:16,h:16}]);

	/*this.inventory = new Inventory(3*/
}
//Character class method helps place initial character object instance
//Takes two arguments, x and y coordinates of destination tile
//Updates tileFrom and tileTo properties to new tile coordinates
//Centers character sprite by adding half the difference between character sprite width or height and the tile width or height
Character.prototype.placeAt = function(x, y)
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
		((tileH*y)+((tileH-this.dimensions[1])/2))];
};
//Character class method helps calculate character object's true position each frame
Character.prototype.processMovement = function(t)
{
	//If value of tileFrom is equal to value of tileTo, character is not moving and function can be exited
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	//Movespeed is determined by value of delayMove of tile across which character object is moving
	var moveSpeed = this.delayMove[tileTypes[mapTileData.map[toIndex(this.tileFrom[0],this.tileFrom[1])].type].floor];

	//Checks if time character object has been moving is longer than or equal to time it takes character object to move one tile
	//If true, character object is placed on destination tile with placeAt() method
	if((t-this.timeMoved)>=moveSpeed)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);

		if(mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter!=null)
		{
			mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
		}


		/*var tileFloor = tileTypes[mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor;

		if(tileFloor==floorTypes.ice)
		{
			if(this.canMoveDirection(this.direction))
			{
				this.moveDirection(this.direction, t);
			}
		}
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }*/
	}
	//If character object is still moving, then character object position must be calcualated
	//First, the position of the tile that the character object is moving from, tileFrom(), is calculated
	else
	{
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		//X-axis is checked for movement. Width of tile is divided by time it takes character to move across tile, result of which is multiplied by amount of time character object has been moving
		//Variable diff is assigned value of distance, in pixels, moved by character object
		//If tileTo is positioned to the left or right of character object then determines whether value of `diff` is added or subtracted from character object `x` coordinate position
		if(this.tileTo[0] != this.tileFrom[0])
		{
			var diff = (tileW / moveSpeed) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		//Follows similiar process as above if statement, but for `y` coordinate position
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var diff = (tileH / moveSpeed) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}
		//Helps smooth character movement by rounding to nearest whole number
		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}
	//Function returns true which tells other function that called this function that the character object is moving
	return true;
};
//Character class method which helps determine if character object can move to tile
//Arguments `x` and `y` will be filled by tile coordinate positions that the player-object is trying to move to
Character.prototype.canMoveTo = function(x, y)
{
	//First checks if player is trying to move to tile that exists outside of map width and map height
	if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
	//Checks for tile delayMove value. If tileType does not have a delayMove value, it as undefined and therefore not possible for character-object to move to it
	if(typeof this.delayMove[tileTypes[mapTileData.map[toIndex(x,y)].type].floor]=='undefined') { return false; }
	if(mapTileData.map[toIndex(x,y)].object!=null)
	{
		var o = mapTileData.map[toIndex(x,y)].object;
		if(objectTypes[o.type].collision==objectCollision.solid)
		{
			return false;
		}
	}
	return true;
};
//4 shorthand methods to see if character object can move up, down, left, or right
//These methods call the canMoveTo() method and pass in character-object's current position, tileFrom(), with the `x` and `y` values modified by direction character object is trying to move in. Result is then returned
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function(d) {
	//Switch statement takes direction property as argument and returns corresponding canMoveDirection() function
	switch(d)
	{
		case directions.up:
			return this.canMoveUp();
		case directions.down:
			return this.canMoveDown();
		case directions.left:
			return this.canMoveLeft();
		default:
			return this.canMoveRight();
	}
};
//Methods modify tileTo() `x` and `y` properties
//Take current game time `t` as an argument
//TimeMoved value for character object is also updated to reflect the passed game time
//Updates player-object's direction property
Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
Character.prototype.moveDirection = function(d, t) {
	//Similiar to above switch statement. Also takes direction property as argument and retruns corresponding moveDirection() function
	//Corresponding moveDirection() function takes gameTime as its argument which helps calculate where character object is and whether or not character-object is moving
	switch(d)
	{
		case directions.up:
			return this.moveUp(t);
		case directions.down:
			return this.moveDown(t);
		case directions.left:
			return this.moveLeft(t);
		default:
			return this.moveRight(t);
	}
};
/*Character.prototype.pickUp = function()
{
	if(this.tileTo[0]!=this.tileFrom[0] ||
		this.tileTo[1]!=this.tileFrom[1])
	{
		return false;
	}

	var is = mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack;

	if(is!=null)
	{
		var remains = this.inventory.addItems(is.type, is.qty);

		if(remains) { is.qty = remains; }
		else
		{
			mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack = null;
		}
	}

	return true;
};*/

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

	/*for(var i = 0; i < player.inventory.spaces; i++)
	{
		ctx.fillStyle = "#ddccaa";
		ctx.fillRect(10 + (i * 50), 350,
			32, 32);

		if(typeof player.inventory.stacks[i]!='undefined')
		{
			var it = itemTypes[player.inventory.stacks[i].type];

			it.sprite.draw(gameTime,
				10 + (i * 50) + it.offset[0],
				350 + it.offset[1]);

			if(player.inventory.stacks[i].qty>1)
			{
				ctx.fillStyle = "#000000";
				ctx.fillText("" + player.inventory.stacks[i].qty,
					10 + (i*50) + 38,
					350 + 38);
			}
		}
	}*/
	ctx.textAlign = "left";

	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
	ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
