Eli Watts, 50

[Self Portrait](https://wattse13.github.io/120_work/hw_4/)

# Homework Assignment 4

## Intro

This week was a lot of fun! While watching and reading through this week's lesson, I felt a little overwhelmed by the amount of different functions being presented. However, once I started my own project and took some time to experiment and play around, I found that most of the functions were straight forward to use and that coding was enjoyable. At some point while coding my project I stopped for a break and discovered that what felt like 30 minutes of coding had actually been three hours of coding! I did find using a couple of the functions difficult at first; not so difficult that they were discouraging, but instead difficult in the way an enjoyable challenge is difficult.

## Work

This week I chose to sketch a self-portrait using p5.js shape, line, and color functions. I would break my work flow down into the following steps:

1. Drew a sketch with pen and paper.
2. Grouped different parts of the sketch together based on what order they would have to be coded to ensure they were visible.
3. Tried writing the code.
4. Tested the code I had written.
5. Revised the code.
  - I repeated steps 4, and 5 after line of code written.

I started with the mouth first. While it wasn't the top-most layer, it did provide a useful starting point from which I could better see how and where the other body segments would fit. Using three seperate ellipses, and increasingly darker shades of purple, I was able to give the mouth some semblance of depth.

The next body segment I worked on were the teeth. I broke the 'teeth problem' down into two separate sub-problems as well: inner-teeth and outer-teeth. While the `triangle();` function may have been easier to use, I felt like the `arc();` function created much better teeth shapes. Before I coded my first tooth, I created a `push();` and `pop();` sandbox to separate the teeth segments from the mouth segments. Within the original teeth sandbox, I created another sandbox in which I moved the grid center to the center of the of the mouth using `translate();`. This would allow me to later correctly position the second and third teeth shapes by reflecting them across the x or y axis using the `scale();` function. I then created another sandbox in which I centered my grid about where the pointy bit of tooth would end and then used `fill();` and `arc();` to color and shape my first tooth. After I had my first tooth correctly positioned, I closed the sandbox and started sketching the second and third teeth. I followed the same steps to create the second and third teeth as I did the first, however before moving the grid I used the `scale();` function. For the third tooth, I also used the `rotate();` function to 'spin' it around the center of the mouth into its final position. I followed the same steps to create the outer three teeth.

After I finished the teeth I started work on the eyestalks and eyes. I made another sandbox for the eyestalks and then moved the grid center to the top of the mouth using `translate();`. I then colored, shaped, and drew the left eye stalk using `stroke('rgb()');`, `strokeWeight();` and `line();`. Because I used the translate function at the beginning, after I created a new sandbox for the right eyestalk I was able to copy the code from the left eyestalk for the right eyestalk and then reflect it across the y axis with the scale function.

Now, my eyestalks needed some eyes. Again, I used separate sandboxes for both eyes. Then I used the translate function to center the grid in each sandbox at the top of their corresponding eyestalk. Then I used `fill();` and `ellipse();` to color and shape the eyes and the pupils.

I didn't like how the eye stalks were on top of the mouth so I decided to add some lips. I sketched them at the very end of my code as they were to be the top-most layer. I used `stroke(`rgb()`);` `strokeWeight();` `noFill();` and `ellipse();` in that order to create the lips that circled around the mouth.

Finally, I needed a body to finish my sketch. Because it was supposed to be behind the rest of my sketch, I went to the beginning of my code. There I was able to position it using the translate and rotate functions and to shape and color it using the fill and ellipse functions.

## Issues

So far I have yet to run into any issues that have completely stumped me. Looking at the [p5.js](https://p5js.org/reference/) reference page and a lot of trial-and-error have been enough to get me through most of my problems.

That said, the arc function was tricky to use at first. I think that might be because I am not fully comfortable using radians instead of degrees. While I did try to use radians in some of my code, I did end up reverting back to degrees at some point as I found them much easier.

At times I also feel like I don't quite have a feel for measuring distances in pixels. Moving my grid into the correct position, trying to judge how large things will be, and placing objects correctly all require a lot of trial-and-error. I am hoping that I'll get better at it over time.

## Closing Thoughts

As of writing this, no one has posted an issue to the class repo. However, I will be sure to check in over the rest of the week to see if I can help anyone with any issues they might be having with their code.

It is a lot of fun to finally be coding! I am looking forward to moving beyond just basic shapes and seeing more of coding's creative possibilities. While I did run into a couple challenges, they have all been enjoyable to work through and so far I feel like I have learned a lot.

## Sketch Screenshot

![Screenshot](/hw_4/images/hw-4img.png)
