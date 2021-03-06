/*
Author: Eli Watts
File Name: tileAndTileMapClass.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

//Class which stores and manages information about each loaded map tile
//Each object instance is created with three arguments: `tx` and `ty`, x and y coordinates of tile, and `tt` which is the tile type
//roof references the roof object and roofType is the ID which corresponds to roof sprite in tileTypes array
//eventEnter can be a pointer to another executable function when tile is entered
function Tile(tx, ty, tt)
{
	this.x			= tx;
	this.y			= ty;
	this.type		= tt;
	//this.roof		= null;
	//this.roofType	= 0;
	this.eventEnter	= null;
	this.object		= null;
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
	/*this.objMap = [];
	this.ow = 0;
	this.oh = 0;*/
	this.levels	= 4;
}
//TileMap method takes three arguments: `d` = gameMap array containing the tileType id to use for each map tile, `w` and `h` are the map width and height values
//Method begins by setting `w` and `h` to correspond with the passed in dimensions
TileMap.prototype.buildMapFromData = function(d, w, h /*, od, ow, oh*/ )
{
	//this.d = [];
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
	/*this.ow		= ow;
	this.oh		= oh;

	//If length of `d` is does not equal value of `w` *`h`, the function returns false and the map property is cleared of any current data
	if(od.length!=(ow*oh)) { return false; }
	this.objMap.length	= 0;
	//For loops loop through `d` array by row, and then by column
	//Add new Tile object to this.map[] with from corresponding `x` and `y` postions and corresponding entry from `d` as the tileType ID
	for(var i = 0; i < h; i++)
	{
		for(var j = 0; j < w; j++)
		{
			this.objMap.push( new Tile(x, y, od[((y*ow)+x)]) );
		}
	}*/
	//Once loops have been iterated through, function returns true and exits the loop
	return true;
};
