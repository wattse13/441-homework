# Eli Watts
# MART 441
# Homework Assignment 3

## Intro

It took me awhile to get started this week. Working through the 10 Codecademy lessons took longer than I expected and I had some initial trouble with understanding how to use JavaScript with HTML elements. Once I better understood how to use the `document.getElementById` method, things went well. . I decided to spice up an old story I wrote some years ago, with interactive elements. While not everything worked as planned, I’m happy with what I was able to learn this week.

## What Worked?

I was able to successfully add interactive elements to my story. Before this week’s assignment, I had no idea how to integrate JavaScript into HTML on an element by element basis, but now I do! I made heavy use of the `document.getElementById()` method to reference certain HTML elements, using their Id tags, which then allowed me to manipulate how they displayed on my webpage.

Using the `onClick()`, the `document.appendChild(), and the `.style.display` methods combined with `if` statements, I was able to add different blocks of text to the story displayed on my webpage based on what decisions the end user made.


## What Didn’t Work?

I wanted to create a feature that would replace a name in my story – the protagonists love interest – with a name the user typed into `prompt()` method. While my function, called `nameReplace()` does replace the first instance of name in my story, it does not replace any other instances after the first. I think this is because after replacing the first name, the `if` statement evaluates to true and does not check again for new instances. Perhaps using a `for loop` would solve this problem.

Originally, I did not want to use another button to call my `nameReplace()` function. Instead, I wanted the prompt to appear when the user clicked on the navbar link ‘interactive story?’. While I was able to get the `prompt()’ function to appear, I was unable to access the string it created. I tried troubleshooting with the `console.log()` function, but I was unable to get it to log anything to the console. Using the same code, but using a button, instead of a hyperlink, worked.

Unfortunately, I also did not have time to add pictures to my story. I am assuming that if I had added pictures, I would have used the `document.getElementById()` method like I used it for other HTML elements.
