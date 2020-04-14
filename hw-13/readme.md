# Eli Watts
# MART 441
# Homework Assignment 12

## Intro
While I was mostly successful in implementing five new changes to the week 13 example code, there is still a lot of syntax that I don’t understand. Thankfully, there are also a lot of elements I do recognize from P5.js and from JavaScript, which is exciting. I would like to learn more about how to use the phaser library, but for some reason, I am finding it difficult to find working tutorials online. The examples provided by phaser.io often don’t load properly.

## What Worked?

This week, I managed to add new collectable items, print the current level to the screen and update it once all stars are collected, add additional hazards, change the jump button from the up arrow key to the spacebar, and change the player character to a cat.

A couple changes were very easy. For example, moving the jump button to the space bar required changing `(cursors.up.isDown && player.body.touching.down)` to `(cursors.space.isDown && player.body.touching.down)`. Changing the player sprite to a cat was also similarly easy. After changing which sprite was preloaded, I then made sure that each `this.animis.create()` cycled through the correct images.

To make the additional hazards and the additional collectables, I more-or-less copied how the star collectables were created. First, I preloaded the images I wanted to use for my hazards and additional collectables. In the `create(){}` section, I then assigned a value of `.physics.add.staticGroup()` to the global variables `ow` and `gems`. While creating the additional hazards and collectables I referred back to the preloaded images using each preloaded image’s key. Finally, I added overlap checks to the various objects and the player. When an overlap is detected, then different functions are triggered.

The `hitGem( player , gem );` function removes the gem from the screen and updates the `score` variable by adding twenty to it. The `hitMine( player , mines );` function turns the player character red, pauses the physics, and triggers the `gameOver();` function.


## What Didn’t Work?

I think a lot of what didn’t work this week is related to how little I know about the phaser library. I am comfortable creating new static groups, adding collider/overlap detectors, and cycling through sprite sheets. But beyond that, I am rather unsure of how to do things.

For example, I wanted to redraw additional collectables once the player had collected all of them – similar to how a new batch of stars appear once all have been collected. However, I don’t entirely understand how the star objects are created, and then re-created.

Originally, I wanted the mine objects to reduce the player’s score rather than trigger the `gameOver();` function. However, when I tried to implement this, I ended creating a bug which continuously reduced the player’s score until they picked up another collectable. I think this is because there was no exit condition for the function to stop subtracting once the function was called. Maybe adding the phaser equivalent of `setInterval();` could prevent this bug from occurring.
