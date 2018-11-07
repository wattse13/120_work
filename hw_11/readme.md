Eli Watts, 50

[Rain](https://wattse13.github.io/120_work/hw_11/)

# Homework Assignment 11

## Intro

This week went a little better than I expected. Reading through all of the class terminology made my head spin a bit and I am still questioning if I understood everything completely. While the cookie cutter as a metaphor for classes makes a lot of sense to me, I am still a little foggy on the details especially when combining classes and arrays. Passing an object's variables to an object's imput parameters was also difficult for me to wrap my head around. I am happy with what I managed to code, but I am also a little disapointed that I was unable to add some more effects like a splash when the rain drop hit the bottom of the canvas.

## Work

I started this week by trying to create a class that would draw a single rain drop before I tried adding an array that would create many rain drops. Creating the class to create a single rain drop actually went quite smoothly. To bein I initiated the usual `function setup(){}` and `function draw(){}` blocks. In the setup block I defined how large I wanted my canvas to be and in the draw block I set the canvas color to black. As the `background();` function is in draw, objects appear to move across the canvas.

Then I started to create my new class which I called Rain. For its data, I decided rain should have a color, a shape, a falling speed, and a starting location. For its functionality, I decided rain should fall, should repeat itself, should reflect off the bottom of the canvas, and should display itself on the canvas.

The constructor method gave me the most trouble. In the constructor's properties, I passed the variables startX and startY to the constructor's input parameters. Why this was necessary, I'm not entirely sure as the variables startX and startY are only seen in those two places. Using startX and startY in other method's however stopped my code from running.

The pour method's properties update the start.x and start.y values. They do this by reassigning a value to the start.x and start.y variables every frame.

The repeat method works by testing if the value of the start.y variable is greater than 720. If the statement evaluates to be true, then the values of this.y and this.x are reset to a random variable between -100 and 0 for this.y and 0 to 600 for this.x

The bounce method doesn't work. Similar to the pour method, I wanted the bounce method to test if the value of start.y was greather than 720 with an if statement. If the statement evaluated to be true, I wanted my program to draw an ellipse at the start.x and start.y - 50 location. I then had further plans to make the ellipses fall, like splashing water, but because I was unable to make any ellipse appear, I didn't bother trying to make them move.

Finally in the show method I defined the rain drop's visual properties with the `stroke();`, `strokeWeight();`, and `line();` functions. In the `line();` function, I used the start.x and start.y variables as arguments which then allowed me to update the line's position, by updating the value of this.x and this.y in other parts of the code.

Now that I had defined my new class, I could call a new object by using the new keyword which I did in the setup block. I used the variables beginX, with a random value between 0 and 600, and beginY, with a random value between -700 and 0, as arguments. Then, in the draw block I could call the object's functions using rain. notation to call each individual function.

After I had my single functional rain drop, I tried creating an array of rain drop objects. This required two new for loops, and a couple of other modifications. First I created a new empty array called `rainy[];`
