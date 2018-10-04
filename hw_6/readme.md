Eli Watts, 50

[Algorithmic Drawing]()

# Homework Assignment 6

## Intro

I really struggled with this weeks assignment. I was unable to implement many of my original ideas and I even ended up throwing out my first attempt at the project entirerly. This may be because this project required a different thought process. Instead of working backwords from an idea or sketch, this project was all about starting with different functions and math operators to create rules that would determine an end product that was hard to visualize or sketch. My algorithmic drawing isn't really what I had hoped for when I started the project, but it's better than nothing and I think I have better grasp on certain coding elements like java script objects.

## Work

To start, I created a Java Script Object in which I stored variables and values related to the shape that I wanted to manipulate with math operators. The Java Script Object existed outside of both the `setup(){}` and `draw(){}` functions so that my variables could be called on globally. In the `setup(){}` function I set the frame rate and sized/colored my canvas. Because I defined my canvas in the setup block, it is only called once at the start of the program which means it doesn't draw over my other shapes.

In the draw block I moved the grid center to the center of the canvas with the `translate();` function and rotated the grid with the `rotate();` function and a variable that I had defined in my Java Script Object. Then I outlined, colored, and sized my rectangle. While doing so, I used custom variables so that I could later use math operators to change my rectangle over time. Every frame one is subtracted from the current rectangle width and height values and the new values are then used to draw a new rectangle. To determine the rectangle's color I used the `random();`, `floor();` and `ceil();` functions. The `random();` function chose a value between 0 or 255 and the `floor();` and `ceil();` functions either rounded up or down to the nearest whole number ensuring that the values used for the fill parameters were whole numbers. Finally, to determine the rectangle's stroke weight I added one to the stroke weight's current value and then took its remainder using the modulo operator.  
