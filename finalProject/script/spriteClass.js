/*
Author: Eli Watts
File Name: spriteClass.js
Date: 04/10/2020
Purpose: MART 441 Final Project
*/

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
