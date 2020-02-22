# Eli Watts
# MART 441
# Homework Assignment 5

## Intro

The homework 5 assignment did not go well for me. As evident by the extensive code graveyard section in my `memory.js` document, I tried quite a few different ways to complete this assignment and none of them seemed to work. Thankfully, with a lot of help from Professor Cassens, I was able to get this homework assignment completed.

**However,** the files I am submitting are, more-or-less, only slightly modified versions of the example documents found at the end of the week 5 lesson module. I am fairly confident I know how the code works, but to say I wrote it would not be truthful. While I did have to change the example code a little bit, the modifications I did entailed only changing a few values, adding a few array items, and arranging a few `HTML` elements differently.

It would have been nice to figure out what I did wrong in my initial attempts, but this assignment is almost a week overdue and I need it to complete the week 6 assignment. Hopefully, in the future, I will not have to lean as heavily on the example documents as I did in this assignment.

## What Worked?

This week, it feels like only the example code worked for me. The Week 5 Example JavaScript begins by initializing a new global variable, `imageTags` which it then assigns a value of an array which contains a list of strings. These strings correspond with image ID tags in the HTML document. A second global variable, `blankImagePath` is initialized and assigned a value of `images./spiderWeb` which is the directory path to an image used for the top side of a memory card. Finally, a third global variable, `actualImages` is initialized and assigned the value of a new empty.

Next, the example code creates the function `printBlanks()`. This function works by first calling another function `createRandomImageArray()`. This function fills the `actualImages[]` array with a random ordering of 5 images and one duplicate of each of those images. After the `createRandomImageArray()` function is called a `for loop` is called. This `for loop` iterates until every `imageTag` variable has been given a source value of the variable `blankImagePath`.

The `createRandomImageArray()` function works by first creating an array variable which contains the directory paths of the five images used in the memory game. After the first array, a second array, `count` is initialized which contains a list of five zeros. This second array is used to make sure each image is only added to the `actualImage[]` array twice. Next, a `while loop` is initialized which runs as long as the length of the `actualImage[]` array is less than ten. While the `while loop` runs, a new variable, `randomNumber` is initialized and assigned a value of a random number between 0 and the length of the `actualImagePath[]` array. Finally, the `if` statement checks that the randomly selected Count Array Item is less than two. If the statement evaluates to true, the item with the same index number in the `actualImagePath[]` array is pushed into the `actualImage[]` array and the value of the `count` array item is increased by one. This process is repeated until the `actualImages[]` array contains ten items.

Finally, the `flipImage(number)` function flips images from the blank top side to the bottom image hidden underneath. I think it does this by reassigning the source value of a clicked on element from the number given as an argument to whatever happens to be held in the `actualImages[]` array at the same index value.


## What Didn’t Work?

A lot did not work for me this week. Rather than go through all of it step by step, like I did above, I think it would be better to make some more general statements.

Initially, I wanted to create a program that followed these steps:
1. Create a random number between 0 and 9.
2. Use that random number to access the item stored in an array at that index value.
3. Check if the accessed element already existed in a second display.
4. If the item did not exist in second array it would be added to second array.
5. If the item did exist in the second array, it would not be added to second array.

One problem, of many, I think I had was that I tried using a nested `for loop` to create new random numbers when the first when did not pass the `if` statement evaluation. However, rather than creating many new random numbers, as soon as the `if` statement evaluated to `true` once, my program stopped creating new random numbers and instead tried the same random number ten times.

Further complicating issues was my use of a function I took from the internet that I did not fully understand. This function `checkSpiders( collected , displayed )` took two parameters and made use of the `.some` method. My confusion with this function may be indicative of my general lack of understanding when it comes to writing, or using, functions that need arguments to fill their parameters.
