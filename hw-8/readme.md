# Eli Watts
# MART 441
# Homework Assignment 8

## Intro

While I was able to use jquery to make things move around on my webpage, I feel like my code is all a bit hacky. In my `jqueryArt.js` doc there are two long chains of jquery commands. Writing these chains felt rather tedious as trying to change or add functions often introduced hard to find syntax errors. On the `CSS` side of things, I had to rely on absolute positioning to make everything appear correctly. Things look okay on my monitor, 1920 by 1080, but I’m assuming the webpage I built will look less okay on larger monitors, and it is also very mobile unfriendly.

## What Worked?

This week I successfully used jquery to select tagged HTML elements and then also manipulate the selected elements. All jquery elements are wrapped in the function `$(document).ready(function(){});`. This prevents jquery commands from running before the page fully loads. After that I used call backs and chaining to create two chains of jquery commands which run in descending order.

After the first chain finishes running, the `.click()` method is used, which allows the end user to advance the story by clicking on the displayed paragraph element.



## What Didn’t Work?

As briefly mentioned in the intro section, a lot of what didn’t work this week were `CSS` problems. I usually avoid absolute positioning as I don’t really know how to maintain responsiveness while using it. However, I felt I needed to use absolute positioning this time as I needed different elements to appear on top of one another. Perhaps one possible fix would be to use `@media queries` and restyle the webpage for different sized monitors, but that sounds rather tedious.

Another problem I ran into was trying to continue a jquery chain after the `.css( { “attribute”: “style” } )` method. There are a couple examples in my code graveyard where jquery commands that follow the `.css()` method are ignored. The console log neither displayed an error, nor did my text editor say that I had a syntax error.

And finally, I wanted to use the `setInterval()` method to make elements fade in or out after a set amount of time. I tried `setInterval( $( “#element” ).fadeOut( “slow” ) , 5000 );`, but it didn’t work. I also tried assigning a jquery command to a variable and then tried passing that variable into the `setInterval()` function, but that didn’t work either. In both cases, I didn’t see any errors in the console.log.
