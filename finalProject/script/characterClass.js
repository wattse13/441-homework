/*
Author: Eli Watts
File Name: characterClass.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

//New class definition
//Contains data related to tiles the character is moving from and to, the time at which the character began to move the dimensions of character in pixels, and characters x/y coordinate postion on canvas
function Character()
{
	this.tileFrom	= [28,28];
	this.tileTo		= [28,28];
	this.timeMoved	= 0;
	this.dimensions	= [16,16];
	this.position	= [448,448];

	//Contains list of times it will take character to move across different floor types
	this.delayMove	= {};
	this.delayMove[floorTypes.path]			= 300;
	this.delayMove[floorTypes.grass]		= 300;
	/*this.delayMove[floorTypes.ice]			= 300;
	this.delayMove[floorTypes.conveyorU]	= 200;
	this.delayMove[floorTypes.conveyorD]	= 200;
	this.delayMove[floorTypes.conveyorL]	= 200;
	this.delayMove[floorTypes.conveyorR]	= 200;*/

	//Character objects can now have directionality property
	//Changing direction can now change which sprites are retrieved from the sprite sheet
	this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]		= new Sprite([{x:1160,y:32,w:16,h:16,d:200},
                                              {x:1176,y:32,w:16,h:16,d:200},
                                              {x:1192,y:32,w:16,h:16,d:200}]);
	this.sprites[directions.right]	= new Sprite([{x:1160,y:48,w:16,h:16,d:200},
                                                {x:1176,y:48,w:16,h:16,d:200},
                                                {x:1192,y:48,w:16,h:16,d:200}]);
	this.sprites[directions.down]	= new Sprite([{x:1160,y:0,w:16,h:16,d:200},
                                              {x:1176,y:0,w:16,h:16,d:200},
                                              {x:1192,y:0,w:16,h:16,d:200}]);
	this.sprites[directions.left]	= new Sprite([{x:1160,y:16,w:16,h:16,d:200},
                                              {x:1176,y:16,w:16,h:16,d:200},
                                              {x:1192,y:16,w:16,h:16,d:200}]);

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
			var xDiff = (tileW / moveSpeed) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - xDiff : xDiff);
		}
		//Follows similiar process as above if statement, but for `y` coordinate position
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var yDiff = (tileH / moveSpeed) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - yDiff : yDiff);
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
