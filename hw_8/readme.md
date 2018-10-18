Eli Watts, 50

[Assignment 8 sketch](https://wattse13.github.io/120_work/hw_8/)

# Homework Assignment 8

## Into

This week was another challange. I tried to create a simple game in which a purple square must travel to the left side of the canvas without being crushed by falling boulders. The idea for this game was inspired by the game 'Thomas was Alone'. While I thought I understood how `for(){}` loops worked after reading through the week's lesson, using and modifying them in code proved more difficult than I thought. I also had a couple of difficulties with problems not related to `for(){}` loops.

## Work

I started this coding project by creating two javascript objects: thomas and boulder. In both objects I initialized and stored values related to their size, x and y positions, and color. Using custom variables for the x and y positions of both javascript objects would allow me to update their positions later in the code which allows them to move across the canvas.

In the `setup(){}` function I defined the canvas width and height and set `rectMode();` and `ellipseMode();` to CENTER. Changing the modes of both elements meant that all rectangles and ellipses drawn would have their centers defined by the x and y values. I did this because I thought it would help later on when I used the `dist();` element to compare the distance between thomas's center and the center of the falling boulders.

In the `draw(){}` loop, I started by reassigning values to variables I created in the two javascript objects. I also created a new local variable called crushed. Using the `dist();` element I set the value of crushed to be the distance from boulder.x and boulder.y to thomas.x and thomas.y.

After the variables section I started with creating background elements. The background color is set to gray and because it is in the `draw(){}` loop, it constantly updates which gives the illusion of animation when shapes move across the canvas. The fisrt `for(){}` loop draws a series of triangles, or stalactites across the top of the canvas. It does this by initiating a new variable, x, and then by evaluating if the value of x is less than the value of the windowWidth. If the value of x is less than the windowWidth 60 is added to the value of x. I then used x as the triangles x position value which told the program to draw it mulitple times across the canvas until it reached the right edge.

I tried something similiar with the second `for(){}` loop. This loop is supposed to draw lines randomly across the background in a way that would look like cracks in a cave wall. I did this by modifying a `for(){}` loop found in 'Getting Started with P5.JS'. If the value of i was less than the value of the windowWidth, 100 would be added to the value of i. I then used i as the lines x variable. In theory, this should space the starting x positions of lines at 100 pixels. Then, instead of modifying the i value with math operators, I used the `random();` element to find new values between i and 100 for the x2 and y2 line positions. For reasons I am still unsure about, the lines drawn exist only for a fraction of a second before disappearing.

Next comes the game like section of my code. I started by drawing a square using the custom variables I created in the thomas javascript object. To move thomas from right to left I used an `if(){}` statement which evaluated if the mouse was clicked or not. If the mouse is clicked then 5 is subtracted from thomas's x value causing thomas to move across the canvas.

Thomas's antagonists are the falling boulders. To create a row of four falling boulders, I modified the the a `for(){}` loop found in this week's lessons. The boulder `for(){}` loop initializes a new variable, i, and tests if the value of i is less than 4. If it is less than 4 one is added to the value of i. Then the boulder.x variable is reassigned the value of the result of the canvas width multiplied by the result of i multiplied by 0.25. Finally, an ellipse is drawn using custom variables as defined in the javascript object, including the variable boulder.x. Because boulder.x is reassinged a value of width * ( i * 0.025 ) four ellipses are drawn at zero, one quarter of the page, half of the page, and three quarters of the page. To make the boulders move I updated the value of boulder.y by adding 5 evertime the draw function loops. Then to make sure boulders continually fall I used another `if(){}` statment. If the value of boulder.y ever exceeded 700, the canvas's bottom edge, then an ellipse would be drawn again at the canvas's top edge.

The last `if(){}` statement uses a logical || operator to determine when thomas is drawn back on the right side of the canvas. If either, thomas.x is less than 0 or the distance between boulder.x and boulder.y with thomas.x and thomas.y is less than 40, evaluate to be true, then thomas is redrawn at his starting position. Unfortunately this does not work quite as well as I had hoped as when thomas runs into the second, third, or fourth boulders nothing happens.

## Issues

Like I said before, I had quite a few issues this project. It took me a long time to figure out how to draw multiple triangles with a `for(){}` loop, and I was unsuccessful in using a `for(){}` loop to create cracks. I am also very confused as to why thomas can be crushed by the first boulder, but not the following boulders. Because 'crushed' is defined using constantly updating x and y variables for both thomas's and the boulder's locations, it shouldn't matter where on the canvas the two objects interact. As long as the distance between a boulder's x and y location and thomas's x and y location are less than 40, thomas should be crushed. I tried to post my issue on github, but I think I waited too long and none of my classmates had time to help. I will try and post my problems earlier next time. And as I had so many problems of my own, I was unable to help my classmates with their problems. 
