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
