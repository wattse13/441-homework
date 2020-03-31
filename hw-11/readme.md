# Eli Watts
# MART 441
# Homework Assignment 10

## Intro

While I was very excited to learn about collisions and keyboard-controlled objects, I found this week to be rather difficult. That may be because the current global pandemic is making it difficult to focus on anything, or because I keep making, and over-looking, small mistakes like misspelled words. I started the week excited to try and make a game, but things did not work out as planned. The code I am turning in, sort of meets most of the homework requirements, but doesn’t really do anything interesting. Hopefully now that I better understand the concepts from this week, I will be able to make something a bit more polished for the upcoming week.


## What Worked?

I was eventually able to create two class-based objects which can interact with one another through collision detection. After the document loads and the start button is pressed, the `keypress` method looks for any instances of keys being pressed on `this` page. When a key is pressed, its keycode is translated into a string. This string is then used to determine which direction the object will move in.

The two objects, `player1` and `ghost1` are created from the `LonelyPongPlayers` class. Using dot notation, these objects can have their x and y position coordinates manipulated so that they move across the screen. To prevent each object from ‘streaking’ the canvas is cleared each time an object moves.

As both squares are objects, they can be passed into the `hasCollided();` function which checks to see if their perimeters are overlapping with each other every time they move. If they do overlap, the function returns true, which can then trigger other functions, like my `rude();` function.

The `rude();` function changes the canvas background color to black, shrinks the `ghost1` object and causes a window alert to pop up on screen.



## What Didn’t Work?


Aside from misspelling the word ‘constructor’ I think the biggest mistake I made when attempting this week’s assignment was to try and make all the movement and update functions class methods rather than external functions. Trying to use class methods did work for a little bit. For example, I was able to draw my objects and even update them with the `setInterval()` function. However, once I tried moving my objects around, with keypresses or otherwise, I often ran into errors stating that my functions were undefined. I think this is in part because I was calling functions before having defined them. 

Unfortunately, I did not have time to set up a ‘perimeter’ from which my objects could not escape. If I remember correctly from P5.js then I think the process of doing so would be to create an object which encompasses the entire canvas and then use a modified version of the `hasCollided();` function which would have all of its greater than or lesser than logical operators reversed.

I think I understand the necessity and usefulness of using getters and setters, but I don’t really understand how to use them in a practical way. I made sure to include getters and setters for all of my class properties, but I don’t think I actually ended up making use of them.
