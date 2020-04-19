# Eli Watts
# MART 441
# Homework Assignment 13

## Intro
This week’s assignment was surprisingly difficult. Even trying to get some of this week’s example code to work took a lot of trial and error. Part of the reason for that may be that I have never worked with the three.js library and there is a lot of syntax that I did not understand. I was eventually able to put something together which meets at least some of the homework submission requirements, but I feel like all I did was combine two pieces of the example code and then make very slight modifications to it.

## What Worked?

My understanding of three.js is that it requires three major components: the scene, the camera, and the renderer. In the scene, objects can be displayed, and events can happen. The camera works much like a physical camera and displays whatever objects or movement it is currently pointed at. Finally, the renderer draws or updates objects within the scene.

My homework assignment works mainly by creating new object instances of classes which have been defined within the three.js library, like the camera, the scene, or the renderer. Once instances of these class-based objects have been created, the new object instances can be manipulated. For example, after creating new instances of the `THREE.BoxGeometry();` I could then set its x, y, and z position coordinates. Later, I could then update those coordinates to create a spinning effect.

As I planned on working with multiple `BoxGeometry();` objects, I decided to group them together using an instance of the `THREE.Group();` class. In theory, this would allow me to be able to apply a function once to an entire group rather than needing to apply a function multiple times to multiple objects.

## What Didn’t Work?

As stated in the intro, I feel like a lot did not work well for me this week and that I am turning in the barest minimum amount work for this assignment. I found it very difficult to do basic tasks like positioning objects. Looking for instructions on how to do things often returned results which included extra complexities that I did not understand. While I did get some things to work, I think I need a lot more experience with the three.js library before I feel even remotely comfortable with how things work.

Everything in my scene is purple. I am assuming this is because the `scene.overrideMaterial();` has a value of purple which all my other objects inherit. In P5.js there was a way to isolate chunks of code from other chunks using the `push();` and `pop();` methods. I am assuming there is something similar in three.js, but I don’t know what it is.

When I tried writing the `animate();` function to act on my `cubeGroup();` it ended up causing `cube2` to fly around wildly. I think this is because `cube2` was not centered on the x, y, and z axis. I am also assuming there is a way to transform where the axis' vertices intersect, like in P5.js, but again, I’m not sure how to do it.
