Eli Watts, 50

[Animation](https://wattse13.github.io/120_work/hw_5/)

# Homework Assingment 5

## Intro

This week was much more difficult than last week. When I first sketched my project I had a couple of ideas that I wanted to code. However, I was unable to succesfully code many of my original ideas, like blinking lights. Though, a few of my ideas did turn out as I had hoped, like the abduction beam that changes color based on cursor location. Knowing which variables to assign, and where to assign them was a little confusing at first, but I think I started to get the hang of it by the end of this project.

## Work

First, I made sure my `background();` function was in my `function draw(){}` block. This set up my sketch as an animation rather than a sort of painting program. To check that things were animating properly I sketched a simple ellipse and used the `translate( mouseX, mouseY );` function to make the ellipse follow my cursor. I used this sort of test often to check that things were rotating, moving, or changing colors correctly before I started sketching more complicated shapes.

Once I made sure my sketch was set up to animate, I began sketching the abduction beam. In my Global Variables section I assigned a value of 1 to my custom variables red, green, and blue. This allowed me to later re-assign values to those same variables which I did in a seperate sandbox. To the red variable, I assigned a value of mouseY * 0.27 and to the blue variable, I assigned a value of mouseX * 0.27. I could then replace numerical parameters in the `fill();` function with my variables, red and blue. The red and blue parameter values would change based on the cursor's x and y value. I multiplied these values by 0.27 to prevent values above 255. After my sketch was changing color like I wanted it to, I drew the abduction beam shape using the `quad();` function.
