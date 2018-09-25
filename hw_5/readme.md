Eli Watts, 50

[Animation](https://wattse13.github.io/120_work/hw_5/)

# Homework Assingment 5

## Intro

This week was much more difficult than last week. When I first sketched my project I had a couple of ideas that I wanted to code. However, I was unable to succesfully code many of my original ideas, like blinking lights. Though, a few of my ideas did turn out as I had hoped, like the abduction beam that changes color based on cursor location. Knowing which variables to assign, and where to assign them was a little confusing at first, but I think I started to get the hang of it by the end of this project.

## Work

First, I made sure my `background();` function was in my `function draw(){}` block. This set up my sketch as an animation rather than a sort of painting program. To check that things were animating properly I sketched a simple ellipse and used the `translate( mouseX, mouseY );` function to make the ellipse follow my cursor. I used this sort of test often to check that things were rotating, moving, or changing colors correctly before I started sketching more complicated shapes.

Once I made sure my sketch was set up to animate, I began sketching the abduction beam. In my Global Variables section I assigned a value of 1 to my custom variables *red, green,* and *blue.* This allowed me to later re-assign values to those same variables which I did in a seperate sandbox. To the red variable, I assigned a value of mouseY multiplied by 0.27 and to the blue variable, I assigned a value of mouseX multiplied by 0.27. I could then replace numerical parameters in the `fill();` function with my variables, *red* and *blue*. The red and blue parameter values would change based on the cursor's x and y value. I multiplied these values by 0.27 to prevent values above 255. After my sketch was changing color like I wanted it to, I drew the abduction beam shape using the `quad();` function.

Coding the spaceship body was mostly straight forward. In my Global Variables section I assigned my canvas width value to the variable *spaceWidth* and I assigned my canvas height value to the variable *spaceHeight*. Later in the `function draw(){}` block I could assign the variables *shipWidth* and *shipHeight* values that were related to the canvas size. That way, if I were to change my canvas size, the space ship would grow or shrink along with the canvas. Using the `translate();`, `stroke();`, `fill();`, and `ellipse();` functions I was able to position, outline, color, and shape my spaceship body.

The spaceship lights were probably I had the most difficulties during this sketch. I started with a sandbox for all three lights. Then I used the `noStroke();`, `rectMode( CENTER );`, and `fill();` functions to make sure all three lights looked the same. To get all three lights to spin seperately I had to use seperate sandboxes for each light. In these seperate sandboxes I started by translating the grid to where I wanted the center of each light to be. Then I could use the `rotate();` function and my custom variable *lightAngle*. I assigned an initial value of 0 to *lightAngle* which allowed me to further re-assign value in the `function draw(){}` block. By coding `lightAngle = lightAngle - 5;` the rectangles would rotate by 5 degrees every new frame. To complete the lights I used the `rect();` function.

Like the spaceship body, the cockpit was also very straight forward. After using the `fill();` function to color it, I shaped it using the `arc();` function. I used my custom *shipWidth* and *shipHeight* variables to relate the cockpit size to the spaceship size.

## Issues

Like I wrote in my intro, I did run into a couple of issues this week. I struggled with getting my lights to rotate seperately from one another and I could not succesfully implement the and easing variable.

When I first tried rotating my lights, all three of them rotated around an axis near the center of the middle light. This was because they were all rotating around the grid center I had set up with my original translate function on line 57. I solved this issue by creating seperate sandboxes for all three lights. In these sandboxes I was able to set up the own individual around which to rotate using the `translate();` function.

I was unable to figure out how assign and use a custom easing variable. I tried modifying what I found in *'Make: Getting Started with p5.js'* and when that didn't work I tried copying it directly. That didn't work either. I think it isn't working because of where my variables are declared, but unfortunately, I didn't have enough time to work through the problem.

## GitHub

While I didn't post any of my problems to github this week, I was able to help at least one of my fellow classmates. @mprimeau1 described that they were unable to get their animation to move. After looking at some of their code I saw that their `background();` function was in their `function setup(){}` block rather than their `function draw(){}` block. I told them about that problem, and a few other possible syntax issues, which according to them, solved the problem.

I also replied to @daylinscott and pointed out some possible syntax issues or other problems that could be related to a github 404 error. I'm not sure if my suggestions helped or not as I haven't seen any further posts from them.

## Closing Thoughts

While I wasn't succesfull in implementing all of my ideas, I still had fun and felt like I learned a lot. I am also happy that I had the chance to try and help some of my classmates with some of their problems. I am looking forward to learning more next week!
