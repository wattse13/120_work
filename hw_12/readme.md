Eli Watts, 50

[Amoeba Game](https://wattse13.github.io/120_work/hw_12/)

I will also include my two class approach even though I was unable to get it to work.

[Failed Attempt](https://wattse13.github.io/120_work/empty-example/)

# Homework Assignment 12

## Intro

This week's project did not turn out like I wanted it to. I hoped to create two different classes that would interact with each other. The first half of my project turned out very well. I was able to create two different classes that both worked like I wanted them to. The Amoeba class was controlable with the arrow keys and would shrink over time. The hunted class moved about randomly across the canvas and bounced off the edges. But unfortunately, I was not able to get the two to play together. My work around was to create a single class, Amoeba, and to call different methods when creating objects that were supposed to act differently. Even that did not work exactly as I hoped as I think there is something wrong with a couple of if loops, but at least the objects are aware of each other.

## Work

I started by creating a new object, `amoeba`, and a new array, `prey[]`. Both used methods from the same class, `Amoeba`, but they behaved differently based on the different methods they did, or did not, call. The `amoeba` object calls the `creep();, generate();, devour(); and starve();` methods where as the object elements in the prey array call the `flee();, populate();, and edgeBounce();` methods. Line 38, `for( p of prey ){}`, is a line of code I found in one of Shiffman's videos. It serves a similiar function as `for( i = 0; i < prey.length; i++ ){}`. Every method called in the `for( p of prey ){}` block is reiterated through all elements stored in the prey array.

To make the two objects interact with each other, I used the `devour(){}` method. The `devour(){}` method takes an imput parameter which I labled as other. Then, in the same method, I created a new varaible 'd' which was assigned the value of the distance between this.x this.y and other.x other.y. The following line `return ( d < this.r + other.r )` is a shorter way of writing out `if( d < this.r + other.r ){ return true;}else if( d > this.r + other.r){ return false;}`. Back in the `draw(){}` function block I was then able to call the `devour();` method in an if statement. If when tested the variable 'd' was less than value of this.r + other.r, true would be returned. If true was returned, then that meant the two objects were intersecting and the `amoeba.grow();` function would be called, which added 10 to the value of the variable startR. If false was returned, then the `amoeba.starve();` function would be called and 0.1 would be subtracted from the value of 'r'. This doesn't work correctly at the moment as when the two objects intersect, the amoeba object does not stop growing.

## Issues

As stated above, I could not get two classes to interact with each other. When looking for videos on the subject, I did not find any additional information. The only information I could find on object interaction described methods for making objects created from the same class interact with each other. This led to my work around as I decided to create a single class rather than two. Doing so allowed me to create objects that interacted with each other.

## Github

I am very excited that I managed to help my classmate Nathaniel Hagen this week with some brainstorming ideas, and a couple of debugging issues.

And my classmate spkvfx, or Shawn Kearney, tried very hard to help me get my two classes to intearact with each other. While we were unable to come up with a working solution as of typing this, I really appreciate how much time and effort he gave in trying to help me. Looking at their code and trying out their suggestions really helped me understand clases better.

## Closing Thoughts

While I hoped to create a game about chasing other smaller circles around to prevent the controlable circle from disapearing, I think, with some modification, I have the beginning of a game about avoiding smaller circles to prevent the controlable circle from exploading. It's not exactly what I had hoped to create at the beginning of the week, but I do feel like I learned something, and I really enjoyed interacting with some of my classmates on github. 
