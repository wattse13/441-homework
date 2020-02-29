# Eli Watts
# MART 441
# Homework Assignment 7

## Intro

This week went well! I am happy with what I was able to achieve, though part of me thinks that there were some things I could have done to make my code even better. For example, part of me wonders if I should have made the two external methods that my `gallery.js` doc uses into class methods. An additional challenge that I maybe should have taken on would be to add a sort of counter which would prevent duplicates from appearing until every image had been displayed at least once.

## What Worked?

I began this week by creating different arrays to hold different kinds of information – one for titles, one for image paths, one for image descriptions, one for image years, and one that I kept empty. Using this method relies on how each array is ordered as all the information associated with one image, like its title and image file path, are located in the same index location across all the different arrays. If my gallery contained more items, then this method could become rather tedious as changing the position of one array item could potentially bump other items out of position.

Next, I created a new class definition. The constructor method requires five parameters when creating new instances of an object. `this.` notation is then used to associate the arguments passed in to the constructor methods with each new instance of an object created from the class definition. (I’m still not entirely sure I understand `this.` notation, but it did work out for me in this assignment which is nice.) To further insulate my class and its associated properties, I used `get` methods. Rather than accessing the class properties directly, the `get` method, and the variable initialized within it, is used to change values.

Finally, I used two external functions, `fillEmUp(){}` and `spitEmOut(){}` to display a random image when a button is clicked. The `fillEmUp(){}` function is called when the `gallery.html` page loads and it creates five new objects based on the `ImageDisplayer` class. These newly created objects take array items for each of their five required parameters. The exception to this is the `imgAuthor` parameter as it does not change for all five images and is therefore not stored in an array. Once the five objects are created, they are pushed into the `actualImages[]` array. The `spitEmOut(){}` function is called when a button is clicked on the `gallery.html` page and first creates a random number between 0 and 4. This random number is then used to access the corresponding `actualImages[]` array item, which is then passed to an HTML element with a corresponding id tag using the `document.getElementById(“”)` method.


## What Didn’t Work?

As stated in the what worked section, using multiple arrays to keep different pieces of information, which is associated with one object could be tedious, especially if one array item somehow moves. Originally, I wanted to use a `JSON` element rather than array so that each object – an image and its associated information – would be stored in one place. However, doing so made things much more complicated than I could handle, so I abandoned the approach and used the more straight forward one.

While I did, I think, use the `get(){}` method successfully in my code, I’m still not entirely sure I know how it works. I Think I understand the broad strokes, using the `get(){}` method allows changes to class properties without accessing the class directly as direct access could lead to unwanted changes, but I’m still not sure how to do it correctly. Same goes for the `set(){}` method.

I am also wondering if it would be possible, or worthwhile, to make the two external functions in my code into class methods. I tried doing that in my original code as well, but it did not work. I will have to do more research into guidelines about when it is better to use a class method or just a normal function.
