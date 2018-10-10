Eli, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

### General

This sketch uses `if(){}` statements and the boolean logic of the `mousePressed(){}` function to alter the sketch's rules. While the `if(){}` statements keep the ball bouncing within the confines of the canvas, the `mousePressed(){}` function changes the angle and speed at which the ball moves.

### Line by Line Breakdown

The lines mentioned in the following paragraphs refer to the original code as downloaded from the course website. The line numbers may not be accurate after adding my own modifications to the original code. 

Line 3 initializes a new javascript object called ball. The following lines, 4 through 10, initialize variables realated to the ball object and assign their beginning values. Dot notation is used to group these variables as a part of the ball javascript object. Ball.width is assigned a value of 40; ball.x and ball.y are assigned values of 10; ball.delta_x, ball.detla_y, ball.scale_x, and ball.scale_y are all assigned values of 1. Because the ball javascript object and its variables are declared outside of both the `function setup(){}` and `function draw(){}` blocks, they are global variables which can be called from anywhere in the code.

The beginning code environment is initialized in line 12 with the `fucntion setup(){}` block. The canvas size is then defined on the following line, 13, with the `createCanvas();` element. The parameters windowWidth and 400 set the canvas's width and height. As the `background();` element is called in the `function setup(){}` block, it is only drawn once at the beginning of the sketch. This means that shapes which are drawn later in the `function draw(){}` block will not be drawn over. The parameter 255 used in the `background();` element sets the canvas color to white.

The `function draw(){}` block starts on line 19. The draw function block contains all the lines of code which are to be redrawn every frame.

Line 21 reassigns a new value to the ball.x variable. The new value is the sum of ball.delta_x multiplied by ball.scale_x added to ball.x's current value. Line 22 reassigns a new value to the ball.y variable, but uses ball.delta_y and ball.scale_y in place of their ball.delta_x and ball.delta_y counterparts.

The first `if(){}` statement begins on line 25 and it says: if the ball.x value is greater than or equal to the canvas width or the ball.x value is less than or equal to 0, which is the left edge of the canvas. In order for this `if(){}` statement to return a true result at least one statement on either side of the || logical operator must be true. If the sketch tests line 25 and it tests true, then line 26 is executed. Line 26 reassigns a new value to the ball.delta_x value by multiplying ball.delta_x's value by negative one.

Line's 28 and 29 perform the same function as lines 25 and 26, but they use the variables ball.x, and ball.delta_x with ball.y and ball.delta_y respectively.

Line 32 sets the ball fill color to 255, white, with the `fill();` element and line 33 defines the shape, position, and size of the ball with the `ellipse();` element. The ellipse's position parameters are very important to the function of this sketch. Variable ball.x is used as the x position variable and ball.y is used as the y position variable. Because lines 21 and 22 reassign a new value, which increases in size every time it is redrawn, to ball.x and ball.y, the position of the ellipse constantly moves. The use of ball.x and ball.y as position variables also allows lines 25 through 30 to act as boundaries. Everytime the `function draw(){}` block redraws, it tests the `if(){}` statements in lines 25 and 28. If when line 25 is evaluated and the result is true, then the value of the variable ball.delta_x is multiplied by negative one. This new value then changes the ellipses direction in line 21 as ball.delta_x as a negative value will change the value of the ball.x variable to negative, if positive before, or positive, if negative before. A similiar relationship exists between lines 22 with lines 28 and 29. When lines 21, 22, 25, 26, 27, 28, and 29 are combined, the ellipse bounces off of the canvas edges.

The sketch's final function, the `function mousePressed(){}`, is written on line 36. This boolean function further changes how the ellipse is drawn on the canvas. If the mouse is clicked when the program evaluates the `function mousePressed(){}`, then it gives a true result which causes the program to execute lines 37 and 38. If the mouse is not clicked when the program evaluates line 36 a false result is given and the lines 37 and 38 are not executed.

Lines 37 and 38 use the `map();` element to reassign a value to the varaibles ball.scale_x and ball.scale_y. The `map();` element, on line 37, takes the variable mouseX, and its old parameters of 0 and width, and converts them to values between 0.5 and 10. Line 38 does the same thing for the ball.scale_y variable with mouseY values. The new values for ball.scale_x and ball.scale_y are fed back into lines 21 and 22 where they ultimately change the values of ball.x and ball.y. Because the ball.x and ball.y variables are used as the ellipse's location values, clicking the mouse changes how the ellipse moves across the canvas.

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
