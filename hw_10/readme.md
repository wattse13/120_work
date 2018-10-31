Eli Watts, 50

[Refactored Animation](https://wattse13.github.io/120_work/hw_10/)

# Homework Assignment 10

## Intro

This week I chose to refactor one of my existing sketches using self-defined functions and an array. While coding, I did run into a couple of problems, but I was able to work my way through them which I am very excited about. The refactored sketch now works the same way it did before refactoring, but it is now much more modular and reusable.

## Work

I began refactoring my code by creating an array in which I stored variables related to color. In my `colorArr = [{}];` I stored the variable `red`, `green`, and `blue` and assigned them all initial values of 0. This would allow me to later call on these variables using the `colorArr[]` notation. I also initilized the global variable `lightAngle` and assigned it an intial value of 0.

In the `draw(){}` function I created a couple local variables: `shipWidth = width / 4;`, `shipHeight = height / 5.6;`, `posX = mouseX;`, and `posY = mouseY;`. The values of `posX` and `posY` change as the values of the mouse cursor postion change. This allows me to move objects around the screen by moving the cursor if I use the variables `posX` and `posY` as location arguments.

Before discussing the rest of the code in the `draw(){}` loop, I will talk about the functions I defined. The first function I defined I called `spaceShip(){}` and I gave it two parameters x, and y. Then I went about creating the spaceShip body, abduction beam, and its cockpit. I chose to put all these elements in the same function because I thought every spaceship should only have one body, one abduction beam and one cockpit.

The abduction beam color changes with the position of the mouse cursor. To get a color gradiant that reaches across the entire canvas I mapped mouseX's usual value range of 0 to 1400 with a new range of 0 to 255. I did the same thing with mouseY's range. Then using `colorArr[]` notation I reassigned `colorArr[0]` and `colorArr[2]` to the newly mapped values of mouseX and mouseY. Then when filling in the arguments for `fill();` I used `colorArr[0]` and `colorArr[2]`. As theses two values changed with the mouse position, so would the fill color of the abduction beam.

To make sure the abduction beam followed the cursor position, I used the parameters x and y in the `rect();` function when defining the x and y position of the rectangle's position. Similarly, I used the x and y parameters when defining the x and y locations of the ship body and cockpit. Later, when I used the argument posX and posY as arguments in the `spaceShip(){}` x and y parameters, all elements of the spaceShip that used x and y as position parameters would change as the values of posX and posY changed.

The second function I defined is called `shipLight(){}` and it also has two paramters x and y. Instead of setting the `rect();` function's x and y arguments as x and y I set the `translate();` function's x and y arguments as x and y. This moves the grid center to the point defined by x and y. The `rect();` function's x and y parameters are given a value of 0 which centers the `rect();` center at the grid's center. The `rotate();` function then rotates the grid around its center at a rate set by my custom variable of `lightAngle`. The `push();` `pop();` sandbox prevents the `translate();` function from interfering with the position of other ship lights if the function is called more than once.

When calling the `spaceShip();` and `shipLight();` functions in the `draw(){}` loop, I used posX and posY as arguments for the x and y parameters. As the posX and posY location changes as the cursor location changes, the shapes follow the cursor which makes it seem like the space ship is following the mouse.

And finally, I reassigned a value of -5 to the variable `lightAngle`. Everytime the `draw(){}` loop cycles, 5 is subtracted from the value of the variable `lightAngle`. This causes the ship lights to rotate.

## Issues
