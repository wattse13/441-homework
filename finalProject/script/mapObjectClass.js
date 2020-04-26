/*
Author: Eli Watts
File Name: mapObjectClass.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

//Creates new MapObject class which wil lbe used to track object instances
//ObjectTypes id is passed in as argument and determines which object will be displayed
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
