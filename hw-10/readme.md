# Eli Watts
# MART 441
# Homework Assignment 9

## Intro

This assignment went rather well. I did encounter a parsing issue which required a lot of help to resolve, but afterwards I was able to complete this assignment without too many issues. While I am happy that everything does work the way I intended, I am a little worried that I may not be following best practices, or that my code is messy.

## What Worked?

The code I wrote first loads the JSON object, then pushes certain items into arrays, and then, finally uses button clicks to change which array items are displayed on the webpage. A separate plug-in uses `if statements` to determine whether the string displayed in the `pokemonTypes` HTML matches string values in the `if statement` conditions to change the font color based on each Pokémon’s elemental type.

First, I initialize three variables, `pokeNames`, `pokeImgs`, and `pokeTypes` and assigned them all empty arrays as a value. In the global variable space I also initialize the variable `partyMember` and assigned it a value of zero.

Next I wrapped all my JQUERY and JavaScript functions into the `$(document).ready(function () {});` command which prevents any scripts from running before the page loads. When the start button is clicked the `$.getJSON()` method is called which loads my `pokedex.json` object and assigns it to the variable result. Next the `$.each();` method iterates through each `pokemon[]` array item and pushes the selected items into corresponding arrays. After that, the start button fades out, the next and previous buttons fade in and the function `iChooseYou();` is called.

Function `iChooseYou();` works by changing the `innerHTML` of a selected HTML element to the value contained within one of the arrays initialized in the global variable space -- `pokeNames`, `pokeImgs` or `pokeTypes`. The value of the variable `partyMember` is used as an index value when accessing values stored within each array.

Functions `upNext();` and `backup();` increase or decrease the value of the variable `partyMember` by one depending on which button is clicked. When the end of the array is reached, the value of `partyMember` is reset to 0.


## What Didn’t Work?

When working with JSON objects, it is my understanding that they need to be parsed before the information stored in them can be accessed in a meaningful way. However, when I tried to parse through the JSON object, I received an error message that a syntax error existed in my JSON object. My code did end up working without parsing my JSON object, but I don’t understand why. If I had to guess, I would say maybe in a new update, JSON objects are automatically parsed when the `$.getJSON()` or `$.each()` method is called.

Originally, I thought that I was going to use a class, like I did in project 7, to create new object instances built from values stored in my three empty arrays. I abandoned this at some point as it felt like I would have had to create a new instance of my class for all 151 – or more – Pokémon array items, which sounded like a lot of work. I considered trying to make a function which would creates new arrays, or JSON objects, but I was unsuccessful.

There is also something kinda funky going on with my `backUp();` function. If the end user clicks the previous button when the first Pokémon loads, undefined values are then displayed on my webpage. If the end user clicks the previous button again, then the last Pokémon in the Pokémon array is shown. I think it has something to do with how the logical operator is set up in the `backUp(); if statement`. 
