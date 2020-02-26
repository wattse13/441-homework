# Eli Watts
# MART 441
# Homework Assignment 6

## Intro

This week went much better than last week. I again leaned very heavily on the week 6 example files for help, but I was able to make my own variations, especially when parsing and then displaying information stored in a JSON object. Without help from the week 6 example files, I don’t think I would have been able to come up with the `flipImage( number )` or its corresponding `flipBack()` functions, but after working with the video and commenting on each line, I think I do at least understand how it works.

## What Worked?

As this lesson focused mainly on JSON objects I will focus on that section of my code. I began by initializing a new JSON object, `playerInfo{}` in the global variable space. Other than the `playerAttempts:` key, which received an initial value of 0, most keys received empty strings, `””` as their values.

The function `addPlayerInfo()` updates the key values using strings inputted by a player. On the `memoryintro.HTML` page, three separate text fields collect the player’s first name, last name, and age. Clicking the submit button then calls the `addPlayerInfo()` function. First, three variables are initialized and are then assigned the values of the string typed into each text field. Dot notation is then used to update the values of the JSON object using the variables which were assigned the text field values. The function finishes by turning the `playerInfo{}` object into a string and then saving it to local storage under the name `playerInput`.

The `memoryoutro.html` doc then calls the `displayPlayerInfo()` function in order to customize the page with the information inputted by the player on the `memoryintro.html` page. It does this by first initializing a new variable, `congratulations`,  and then assigning it a value of `localStorage.getItem("playerInput");`. The next line then reassigns the value `JSON.parse(congratulations);` to the variable `playerInfo`. This then allows the program to parse through the JSON object to find specific values using dot notation. These values are then used to change text elements on the web page to whatever string values are stored in the JSON object.


## What Didn’t Work?

In the CodeCademy lesson about variables, the lesson warned against overusing the global variable space as it could lead to bugs and confusion. Originally, I tried to declare my JSON object in the `addPlayerInfo()` function to avoid adding another variable to the global variable space. Rather than empty strings, I assigned each key a value of a variable, which I then declared later in the same function. While I did have some success in changing the stored values, I think a scope problem prevented me from then using those variables outside of the function. For example, a variable I used to count the player’s clicks could not be updated outside of the function in which it was initialized. Perhaps, I should worry less about writing ‘perfect’ code and trust that I will learn how to better follow conventions as I become more experienced.

As I wrote in the intro, I don’t think I would have been able to code a working memory game without a whole lot of help from the example files. Again, this might just be a worry of mine, and perhaps I should trust that I’ll get better with practice.
