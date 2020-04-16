/*
Author: Eli Watts
File Name: tutorial.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

var ctx = null;

var gameMap = [
  0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 2, 1, 2, 4, 2, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 2, 1, 0, 4, 0, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 2, 1, 1, 4, 1, 1, 9, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0,
	0, 2, 1, 1, 4, 1, 1, 9, 2, 3, 3, 2, 1, 1, 2, 1, 0, 0, 0, 0,
	0, 2, 2, 2, 4, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0,
	0, 2, 1, 1, 4, 2, 4, 1, 1, 1, 1, 6, 6, 6, 2, 1, 1, 1, 1, 0,
	4, 4, 4, 4, 4, 2, 4, 1, 1, 1, 1, 8, 1, 1, 2, 1, 1, 1, 1, 0,
	0, 2, 5, 1, 5, 2, 4, 4, 4, 4, 4, 8, 1, 1, 2, 2, 2, 2, 1, 0,
	0, 1, 5, 5, 5, 2, 3, 2, 1, 1, 4, 8, 1, 1, 1, 3, 3, 2, 1, 0,
	0, 1, 2, 2, 2, 2, 1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 3, 2, 1, 0,
	0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4,
	0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0,
	0, 3, 2, 3, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0,
	0, 3, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0,
	0, 3, 2, 3, 4, 1, 3, 2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0,
	0, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 3, 0,
	0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 4, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var gameTime = 0;
var gameSpeeds = [
	{name:"Normal", mult:1},
	{name:"Slow", mult:0.3},
	{name:"Fast", mult:3},
	{name:"Paused", mult:0}
];
var currentSpeed = 0;

var tileset = null;
var charset = null;
var tilesetURL = "../assets/images/tileSet.png";
var charSetURL = "../assets/images/charSet.png";
var tilesetLoaded = false;
var charsetLoaded = false;


var floorTypes = {
	solid	: 0,
	path	: 1,
	water	: 2,
	ice		: 3,
	conveyorU	: 4,
	conveyorD	: 5,
	conveyorL	: 6,
	conveyorR	: 7
};

var tileTypes = {
  0 : { floor:floorTypes.solid, sprite:[{x:238,y:221,w:16,h:16}] },
	1 : { floor:floorTypes.path,	sprite:[{x:85,y:0,w:16,h:16}]	   },
	2 : { floor:floorTypes.path,	sprite:[{x:102,y:0,w:16,h:16}]   },
	3 : { floor:floorTypes.solid,	sprite:[{x:238,y:255,w:16,h:16}] },
	4 : { floor:floorTypes.water,	sprite:[{x:0,y:0,w:16,h:16}]     },
  5 : { floor:floorTypes.ice,	sprite:[{x:136,y:0,w:16,h:16}]},
	6 : { floor:floorTypes.conveyorL,	sprite:[{x:187,y:238,w:16,h:16}]},
	7 : { floor:floorTypes.conveyorR,	sprite:[{x:187,y:238,w:16,h:16}]},
	8 : { floor:floorTypes.conveyorD,	sprite:[{x:187,y:238,w:16,h:16}]},
	9 : { floor:floorTypes.conveyorU,	sprite:[{x:187,y:238,w:16,h:16}]}
};

var tileEvents = {
	23 : drawBridge,
	25 : drawBridge,
	121 : function(c) { c.placeAt(1,8); },
	161 : function(c) { c.placeAt(1,6); }
};

var directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};

var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

var tileW = 16;
var tileH = 16;
var mapW = 20;
var mapH = 20;

var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;
var lastFrameTime = 0;

var keysDown = {
  37 : false,
	38 : false,
	39 : false,
	40 : false,
  32 : false
};

function drawBridge() {
	gameMap[toIndex(4,5)] = (gameMap[toIndex(4,5)]==4 ? 2 : 4);
}

var player = new Character();

function Character() {
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [16,16];
	this.position	= [16,16];
	this.delayMove	= 700;
  this.direction	= directions.up;
  this.sprites = {};
	this.sprites[directions.up]		= [{x:0,y:0,w:16,h:16}];
	this.sprites[directions.right]	= [{x:16,y:0,w:16,h:16}];
	this.sprites[directions.down]	= [{x:32,y:0,w:16,h:16}];
	this.sprites[directions.left]	= [{x:48,y:0,w:16,h:16}];

}

Character.prototype.placeAt = function(x, y) {
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
		((tileH*y)+((tileH-this.dimensions[1])/2))];
};

Character.prototype.processMovement = function(t) {
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) {
    return false; }

  if((t-this.timeMoved)>=this.delayMove) {
		this.placeAt(this.tileTo[0], this.tileTo[1]);
    var tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;

    if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined') {
			tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
		}

		if(tileFloor==floorTypes.ice) {
			if(this.canMoveDirection(this.direction)) {
				this.moveDirection(this.direction, t);
			}
		}
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }
	} else {
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

    if(this.tileTo[0] != this.tileFrom[0]) {
			var diff = (tileW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if(this.tileTo[1] != this.tileFrom[1]) {
			var diff = (tileH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

    this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
  }

return true;

};

Character.prototype.canMoveTo = function(x, y) {
	if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
  if(tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.ice &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorU &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorD &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorL &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorR) { return false; }
	return true;
};

Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };

Character.prototype.canMoveDirection = function(d) {
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

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };

Character.prototype.moveDirection = function(d, t) {
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

function toIndex(x, y) {
	return((y * mapW) + x);
}

function getFrame(sprite, duration, time, animated) {
  if(!animated) { return sprite[0]; }
  time = time % duration;
  for(x in sprite) {
		if(sprite[x].end>=time) { return sprite[x]; }
	}
}


window.onload = function() {
  ctx = document.getElementById('myGame').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

  window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }

    if(e.keyCode==83) {
  			currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
  		}
	});
  window.addEventListener("keydown", function(e) {
    if(e.keyCode == 32 ) { keysDown[e.keyCode] = true; }
  });
  window.addEventListener("keyup", function(e) {
    if(e.keyCode == 32 ) { keysDown[e.keyCode] = false; }
  });

  viewport.screen = [document.getElementById('myGame').width,
  		document.getElementById('myGame').height];

  tileset = new Image();

  tileset.onerror = function() {
		ctx = null;
		alert("Failed loading tileset.");
	};

  tileset.onload = function() { tilesetLoaded = true; };

  tileset.src = tilesetURL;

  charset = new Image();

  charset.onerror = function() {
    ctx = null;
    alert("Failed loading charset.");
  };

  charset.onload = function() { charsetLoaded = true; };

  charset.src = charSetURL;

  for(x in tileTypes) {
    tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;
    if(tileTypes[x].animated) {
			var t = 0;
      for(s in tileTypes[x].sprite) {
        tileTypes[x].sprite[s]['start'] = t;
        t+= tileTypes[x].sprite[s].d;
				tileTypes[x].sprite[s]['end'] = t;
      }
      tileTypes[x]['spriteDuration'] = t;
    }
  }
};

function drawGame() {

  if(ctx==null) { return; }

  if(!tilesetLoaded && !charsetLoaded) { requestAnimationFrame(drawGame); return; }

  var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;
  gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

  var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond) {
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

  if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0) {
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }
	}

  viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
			var tile = tileTypes[gameMap[toIndex(x,y)]];
      var sprite = getFrame(tile.sprite, tile.spriteDuration, gameTime, tile.animated);
			ctx.drawImage(tileset, sprite.x, sprite.y, sprite.w, sprite.h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);
		}
	}

	var sprite = player.sprites[player.direction];
  ctx.drawImage(charset, sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1], player.dimensions[0], player.dimensions[1]);


	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
  ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
