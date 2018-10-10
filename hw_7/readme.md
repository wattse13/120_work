Eli, 50

[Click Game](https://wattse13.github.io/120_work/hw_7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

### General

This sketch uses `if(){}` statements and the Boolean logic of the `mousePressed(){}` function to alter the sketch's rules. While the `if(){}` statements keep the ball bouncing within the confines of the canvas, the `mousePressed(){}` function changes the angle and speed at which the ball moves.

### Line by Line Breakdown

The lines mentioned in the following paragraphs refer to the original code as downloaded from the course website. The line numbers may not be accurate after adding my own modifications to the original code.

Line 3 initializes a new javascript object called ball. The following lines, 4 through 10, initialize variables related to the ball object and assign their beginning values. Dot notation is used to group these variables as a part of the ball javascript object. Ball.width is assigned a value of 40; ball.x and ball.y are assigned values of 10; ball.delta_x, ball.detla_y, ball.scale_x, and ball.scale_y are all assigned values of 1. Because the ball javascript object and its variables are declared outside of both the `function setup(){}` and `function draw(){}` blocks, they are global variables which can be called from anywhere in the code.

The beginning code environment is initialized in line 12 with the `function setup(){}` block. The canvas size is then defined on the following line, 13, with the `createCanvas();` element. The parameters windowWidth and 400 set the canvas's width and height. As the `background();` element is called in the `function setup(){}` block, it is only drawn once at the beginning of the sketch. This means that shapes which are drawn later in the `function draw(){}` block will not be drawn over. The parameter 255 used in the `background();` element sets the canvas color to white.

The `function draw(){}` block starts on line 19. The draw function block contains all the lines of code which are to be redrawn every frame.

Line 21 reassigns a new value to the ball.x variable. The new value is the sum of ball.delta_x multiplied by ball.scale_x added to ball.x's current value. Line 22 reassigns a new value to the ball.y variable, but uses ball.delta_y and ball.scale_y in place of their ball.delta_x and ball.delta_y counterparts.

The first `if(){}` statement begins on line 25 and it says: if the ball.x value is greater than or equal to the canvas width or the ball.x value is less than or equal to 0, which is the left edge of the canvas. In order for this `if(){}` statement to return a true result at least one statement on either side of the || logical operator must be true. If the sketch tests line 25 and it tests true, then line 26 is executed. Line 26 reassigns a new value to the ball.delta_x value by multiplying ball.delta_x's value by negative one.

Line's 28 and 29 perform the same function as lines 25 and 26, but they use the variables ball.x, and ball.delta_x with ball.y and ball.delta_y respectively.

Line 32 sets the ball fill color to 255, white, with the `fill();` element and line 33 defines the shape, position, and size of the ball with the `ellipse();` element. The ellipse's position parameters are very important to the function of this sketch. Variable ball.x is used as the x position variable and ball.y is used as the y position variable. Because lines 21 and 22 reassign a new value, which increases in size every time it is redrawn, to ball.x and ball.y, the position of the ellipse constantly moves. The use of ball.x and ball.y as position variables also allows lines 25 through 30 to act as boundaries. Every time the `function draw(){}` block redraws, it tests the `if(){}` statements in lines 25 and 28. If when line 25 is evaluated and the result is true, then the value of the variable ball.delta_x is multiplied by negative one. This new value then changes the ellipses direction in line 21 as ball.delta_x as a negative value will change the value of the ball.x variable to negative, if positive before, or positive, if negative before. A similar relationship exists between lines 22 with lines 28 and 29. When lines 21, 22, 25, 26, 27, 28, and 29 are combined, the ellipse bounces off of the canvas edges.

The sketch's final function, the `function mousePressed(){}`, is written on line 36. This Boolean function further changes how the ellipse is drawn on the canvas. If the mouse is clicked when the program evaluates the `function mousePressed(){}`, then it gives a true result which causes the program to execute lines 37 and 38. If the mouse is not clicked when the program evaluates line 36 a false result is given and the lines 37 and 38 are not executed.

Lines 37 and 38 use the `map();` element to reassign a value to the varaibles ball.scale_x and ball.scale_y. The `map();` element, on line 37, takes the variable mouseX, and its old parameters of 0 and width, and converts them to values between 0.5 and 10. Line 38 does the same thing for the ball.scale_y variable with mouseY values. The new values for ball.scale_x and ball.scale_y are fed back into lines 21 and 22 where they ultimately change the values of ball.x and ball.y. Because the ball.x and ball.y variables are used as the ellipse's location values, clicking the mouse changes how the ellipse moves across the canvas.

## How did you alter the sketch?

On lines 14 through 17 I added more variables to the ball javascript object. These variables were all related to color which would allow me to play with the fill values later in the sketch. On line 31 I assigned the element and variables `color( ball.color_r, ball.color_g, ball.color_b );` to be the values of the variable ball.color.

On line 36, I created global variable called clickPoint and assigned it an initial value of 0.

 With the `floor();` and `random();` elements I reassigned a random whole number as a value to the custom variables ball.color_r, _g, and _b on lines 47 through 49.

 On line 54 I created a local variable, clickPoint, and assigned its value to be the distance between mouseX mouseY and ball.x ball.y locations.

 I used `textSize();`, `textAlign();`, `stroke();`, `fill();`, `text();` elements and the custom variable `let str = "Points!" + clickPoint;` to size, align, outline, color, and draw text to the canvas. The custom variable `str` draws the word "Points!" and a numerical value which is the value of the custom variable clickPoint can be changed.

 Lines 85 and 86 are similar to lines 25 26, and 28 29 in the original code. If at anytime the code evaluates the line 85 and if any of the following are true -- the ball.x value is either greater than or equal to the width or less than or equal to 0 or if the ball.y value is greater than or equal to height or less than or equal to 0-- then the ball.color variable is reassigned a new value. This new value is the element `color();` and it uses the variables ball.color_r, _g, and _b as parameters. Because the parameters are assigned a random whole number between 0 and 255 then the ball.color variable stands in as a random color generator which changes the shapes color every time the shape bounces off one of the canvas edges.

 The `if(){}` statement on line 90 changes the shape color to white if the statement, rollDistance is less than ball.width, tests true. This means that every time the cursor hovers over the moving shape, the shape turns white. If the statement tests false, then it returns to a random color as set by the ball.color variable.

The `if(){}` and `else{}` statements on lines 100 and 108 change the shape drawn on the canvas. The `if(){}` tests the statement, if mouseX is greater than width divided by two and mouseY is greater than height divided by two, and if both halves test true, then the shape drawn is a square. If one, or both, sides of the statement evaluate to false, then an ellipse is drawn.

Finally, the `if(){}` statement on line 118 tests the statement, if rollDistance is less than ball.width. If true, then the following line of code is executed. Line 119 is another `if(){}` statement which tests the statement, the mouse is clicked. If that line evaluates to true, then the clickPoint value increases. The new value is then drawn on the canvas because of line 70. I don't know how line 121 `return false;` works, but I was told to just do it, so I did.
