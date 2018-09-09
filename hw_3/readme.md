Eli Watts, 50

["Hello World!"](https://wattse13.github.io/120_work/hw_3/)

# Homework Assignment 3

## Intro

Learning to code has been on my list of things to learn for a long time. Now, I am excited to have finally written my first lines! Do I know how the code that I wrote works? Maybe. Could I have done it without the instructions in the class lesson? No. But, it's a start and even if I don't understand everything about how the functions work, I do feel like I can entertain myself by playing around with different shapes and colors.

## Work

This week we were assigned to create a p5.js sketch. By closely following the class videos, I learned about readme.md files and their importance, I learned about index.html files and their importance, and I learned how to use different functions to set up and customize my sketch.

I began with the setup function. This function allowed me to begin defining my starting coding environment and looked like:

`function setup(){}`

After I had my beginning code environment, I needed a canvas. I used the createCanvas function and I defined its parameters as 800px by 800px because I like squares better than rectangles. It looked like:

`createCanvas( 800, 800 );`

Next, and maybe my favorite part, was to define the canvas color. Using the background function and a string in the function's parameter section I was able to create a purple canvas which looked like:

`background('purple');`

Before I could write out my string, "Hello World!" it was necessary to include the draw function. If I understand it correctly, then the draw function tells my p5.js sketch to continue carrying out any lines of code within the draw block until the program ends. It looked like:

`function draw(){}`

Now that I had my draw function written, I could write a string which would display as text on my sketch. I used the text function and had to define not just the string I wanted to display, but also its position on the canvas. I wanted to try and center my string on the canvas as best as I could, so I used comment switches to turn on and off different x and y coordinate variants. It looked like:

`text( "Hello World!", 335, 400 );`

To finish my sketch I closed my draw function with a }.

### Screen Shot

I am using a screen shot to show where I used text comments as on/off switches and to practice imbedding screen shots.

![screenshot](/hw_3/hw3-screenshot.png)

## Issues

I have yet to run into any issue that would require posting to the class repo for help. So far, following the class videos exactly has resulted in success. That said, I did run into a couple of problems.

When creating my canvas for the first time, I forgot a semi-colon after the closing parantheses. I think this is called a syntax error, and it prevented my code from running. Thankfully, I spotted it quickly, but I am worried that in the future when there is more code to look through, that syntax errors will become a larger issue.

This isn't related directly to the homework assignment, but I am also worried that I will be unable to help others on the class repo as I don't really know what I am doing either.

## Closing Thoughts

I am excited to start coding. Playing around with different shapes and colors is fun, and I am often surprised how straight forward a lot of the function names are. At the moment, it's a little difficult to imagine how I will ever be able to write any complex programs, especially when looking at some high-end art pieces written by exprienced users, but I trust that given a lot of time I'll make some progress.
