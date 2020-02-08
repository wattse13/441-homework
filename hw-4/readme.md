# Eli Watts
# MART 441
# Homework Assignment 4

## Intro

Most things worked the way I wanted them to this week. Changing functions to accept user-inputted-string-values rather than Boolean values wasn’t too difficult and my story works about the same way as it did last week. Some major differences to last assignment include `choice2(email)` which now appends, and formats, a user-entered string into the story on screen, a replay button at the end of the story, and a semi-functioning function, `addName()`, which replaces a reoccurring name in the story with a user-entered string.

## What Worked?

As stated in the intro, reworking my previous functions to return string values, rather than Boolean values, worked well. Functions `choice1()` and `choice3()` are almost identical to last week. The only difference is that instead of checking for values of true and false, the if statement checks if the user-inputted-string is equivalent to the strings `yeah?` or `nah?`.

The function `choice2(email)` works differently from last week. This function returns the value of whatever the user types into a text area field, adds it to a paragraph element in the HTML element, and adds the string, “Mr. Kubi wrote,”. I’m happy this function works as well as it does, as I’ve noticed that I still struggle with writing/using functions that use parameters.

The `playAgain()` function was also fairly straight forward to create. Before discovering the `location.reload()` function, I tried creating a function which set the style of all appended HTML elements to none. This did not work well and ended up creating a lot of bugs. The remains of this function can still be seen near the end of my `script.js` doc. Thankfully I found the `location.reload()` function which refreshes the page and restarts my story without introducing bugs.


## What Didn’t Work?

Like last week I am still struggling with the function `addName()`. I modified the function to use `document.getElementsByClassName` and to use a `for loop`, but it still doesn’t work as expected. It does change all span tagged elements that are visible in the first section of the story. However, any elements marked with the `nameReplace span tag` that are also in HTML elements with an initial CSS display style of `none` are not changed to the user-inputted string. This may be because I am not using the `for loop` correctly. Currently, it loops as long as the value of `i` is less than the length of the name array. However, I have not created any arrays in my `script.js` doc. Line 95 of my `script.js` doc looks like:

` document.getElementsByClassName("nameReplace")[i].innerHTML = `${name}`;`

Without the `[i]` bit, the function does not work at all, but I am a bit confused as to how it works, as it suggests the existence of an array, when, as written above, none exist.

Finally, I tried using `\n` to create a line break in one of my strings. It did not work and I am not entirely sure why not.
