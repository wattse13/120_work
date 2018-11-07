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

After I had my single functional rain drop, I tried creating an array of rain drop objects. This required two new for loops, and a couple of other modifications. First I created a new empty array called `rainy[];` In a for loop I initialized the variable 'i' and tested if it was less than 100. If 'i' was less than 0 one would be added to the value of 'i'. Then, in the same for loop, I wrote `rainy[i] = new Rain( input1, input2 );`. This stored a new rain object as an element in the rainy array evertime the value of 'i' increased. Changing the value against which 'i' is tested in the for loop therefore changes how many array elements are present and how many rain drops are drawn.

In the draw block I used another for loop so that for each rain object called in the set up block its corresponding functions would also be called. The second for loop again initializes a variable 'i' and then tests if it is less than the value of the number of elements in the rainy array. If the value of 'i' is less than the number of elements in the rainy array, then one is added to the value of 'i'. In the same for loop, the show, pour, repeat, and bounce functions are called using rainy[i].function notation. The value of 'i' corresponds to an rain object which is stored in the rainy array.

## Issues

Moving from a simple class, to an array of classes was rather difficult for me. I think this was in part because when watching Shiffman's videos, I didn't realize that he named his array differently than he named his class. If I remember correctly he used Bubble as a class name and bubbles as an array name. So, when I tried modifing my code to create an array of objects I used the word rain as a name for both my class and my array, which caused my code to stop working.

On top of the previous issue, I was also unable to get my bounce method to work and I am still a bit fuzzy on passing constructor variables to constructor input parameters.

## Github

While I wasn't able to help anyone with their coding project, yet, I did post my bounce method problem. I don't think it will be resolved before I turn this project in, but I am curious to see what kinds of solutions my classmates come up with. Also, MorganLong26 started a forum issue called this. In his post he described what was essentially the same problem I was having when trying to set up an array of objects. DVSnell was able to help him. I wanted to post to say that I was having the same problem, and that DVSnell's solution for MorganLong26 also worked for me, but the post was closed before I got the chance.

## Closing Thoughts

While I feel like I understand classes well enough to create very simple sketches, like falling lines, I am slightly worried that I don't understand them well enough to do anything even a little more complicated. It would have been nice to get my bounce method to work before the homework deadline, but hopefully I will have a better grasp on classes by the time the final project rolls around. 
