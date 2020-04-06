# Eli Watts
# MART 441
# Homework Assignment 11

## Intro

This week went mostly well. I was able to adapt the week 12 example code into something that meets all the homework 11 requirements. Originally, I had hoped to reuse my code from week 11, but after spending a lot of time trouble shooting, I decided to use the week 12 example code so that I could focus more on other aspects of the homework. It would have been nice to add some other elements to this project, like moving collectables or antagonistic squares that follow the player square and damage it, but I am happy that I was able to get everything working as it currently does. Hopefully, I will be able to use what I learned here in my final project.

## What Worked?

In broader strokes, the program works by using information stored in JSON objects to create class-based object instances which are then stored in arrays. By passing these objects into different functions they can have their positions updated, they can be checked for collisions, and they can be spliced from their array.

Once the document has finished loading and the start button has been pressed the functions `setup();` and `getKey(event);` are called. Function `setup();` creates three new object instances based of the Square and Wall class, loads two JSON objects and assigns them to the variables data and info. For loops then create new object instances from the `Square` and `Wall` classes until all objects stored in the JSON files have been iterated through. Finally, the `drawSquare();` function is called.

The `getKey(event);` function is a large function which does a couple different things. The ‘event’ argument which fills its input parameter means the function is called every time a key press event occurs on this webpage. First anytime a key is pressed, that key’s keycode is translated into its corresponding key value. Then, if-statements are used to call different functions depending on which key is pressed. For example, if the ‘w’ key is pressed the function `moveUp();` is called and the variable `direction` is assigned the value “up”.

Next the `getKey(event);` function initializes three variables. The test variables are then assigned either a Boolean value of false, or the value of what the function `hasCollided();` returns. For loops are again used to test the position of square1 against the positions of all the objects in the `squareArray[]` and in the `wallArray[]`. If square1 collides with a `Square` object instance, that square is spliced from the array and the value of the `lives` variable is increased by one. If square1 collides with a `Wall` object instance the `moveDirection()` function opposite of the current value of the `direction` variable is called. Finally, the `someBoundaries(square1);` function and the `drawSquare()` function are called. 

The `drawSquare();` function first clears the canvas which prevents moving shapes from streaking across the canvas. Next, square1 is drawn onto the canvas at its current x and y position, with its current width and height values, and with its `.mainColor` value. A for loop iterates through all objects within the `squaresArray[]` and draws them to the canvas. The same process is then repeated for all the objects within the `wallsArray[]`.

The `hasCollided( object1 , object2 );` function requires two input parameters. Using objects as arguments for these input parameters then allows the function to check the perimeters of object1 against the perimeter of object2 to see if the two objects overlap. By using a for loop and by passing an array into the `hasCollided();` function as an argument, object1 can be tested for overlap against all objects stored within an array.

And finally, the `someBoundaries(object1);` function checks to see if whatever object is passed in as an argument either exceeds or is less than the canvas boundaries. If any of the if statements within the function evaluate to true, then the object’s x or y coordinates are updated to back within the canvas boundaries.

## What Didn’t Work?

As stated in the intro, I was hoping to reuse my own code from the previous week. When I tried doing so however, I was unable to get my JSON objects to load properly. In hindsight, I think it was because I did not reference my JSON objects correctly. Thankfully, last weeks code worked similarly to the week 12 example code, so I did not have to change much about my original approach.

I wanted to try and add more game elements to my project. For example, it would have been nice to add a function that would prevent the player-controlled square from collecting something if the collectable were bigger than the player square. When I tried implementing this in the `omNom();` function, I was unable to get the results I wanted.
