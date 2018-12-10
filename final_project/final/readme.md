Eli Watts, 50

[Final Project]( https://wattse13.github.io/120_work/final_project/final/)

# Final Project

## Intro

Upon starting my final project, I quickly realized that I was in over my head. Features that I thought would be relatively easy to implement, like an isometric view point, were all much more difficult than I anticipated. In fact, just getting my program to work the way I wanted it to be was much more difficult than I had at first imagined. Originally, I planned to spend the last couple days implementing features to make my project look better. Instead, I have been scrambling to make core features, like interactions between different class-based objects, work. While there were many failures in my final project, I am happy to say that there were also many successes and pleasant surprises too.

## Process

As laid out in my proposal, I tried to work on my final project in a modular way. Before I started worrying about how things looked, I tried to make sure my program worked. Before I started worrying about how all three separate classes interacted with each other, I made sure all three classes behaved independently the way I wanted them too.
In my proposal, there were many features that I thought would be core features, like the isometric view point, that turned out to be non-essential. Once I began coding however, it quickly became clear what was and wasn’t essential. A couple of searches on Google showed that setting up a true isometric view point would require working in a three-dimensional environment. Because I did not believe I would have the time to learn how to do that, I tried to fake an isometric view by creating a diamond shaped pasture for the cows to walk through. While I was sort of successful in faking a three-dimensional environment with two dimensional shapes, when it came time to set up boundaries to contain the cow objects within the pasture, I realized that the math would be much more complex than the math required to set up boundaries for a rectangle with sides parallel to the monitor window. To make sure I had time to focus on making the actual game part of my game, I decided to ditch the isometric view and use a top down view that would be much easier to code.
Once I had my three class-based objects behaving separately the way I wanted them too – the spaceship moved with the arrow keys, a mouse click triggered the abduction beam, the cows stayed within the pasture boundaries, and the farm patrolled within the pasture boundaries – I began working on awareness between the different class-based objects. I started by making the cows aware of other cows because examples for creating object awareness between objects created from the same class were much easier to find than examples for creating object awareness between objects created from different classes. I used code from an example in the week 12 lesson to make the cows aware of one another. Then I was able to add my own modifications to change their movement behavior. While they do not move like realistic cows, I thought their current movement behaviors would be more fun from a game perspective.
Next, I started work on making a functional abduction beam because I thought that creating awareness between an object and an array would be more difficult than creating awareness between two objects. In theory once I had the more difficult interaction figured out, then it would be no problem to apply it to elsewhere. Oddly enough, once I had what I thought was the more difficult interaction working, I was unable to apply it to other situations.
As stated earlier, I was unable to spend time making things look nice because I underestimated how much time I would need to implement core features. I had hoped to add images, or even sound effects, but as of writing this I do not think I will be able to.

## How it Works

### Animal Class

I had the most success in implementing all the features I wanted to in the animal class. The objects created from the animal class blueprints avoid one another, move in an interesting way, stay within the pasture boundaries, and can be abducted.

#### constructor Method

The constructor method requires three arguments for its three parameters when it is called. This.x and this.y are assigned the variables x and y, which are used as parameters. When the class is called in the sketch.js file the arguments used in the x and y parameters are then passed on to the variables this.x, this.y.
This.deltaX and this.deltaY are both assigned initial values of 1. These two variables are important for movement in the walk, electricFence, avoid, and calmDown functions. As they are custom variables, when their values are updated the movement of the cows is then also updated.
The this.disappeared variable is assigned the Boolean value true. This is important later as it works with the reactToDanger and display method to make animal objects disappear.

#### walk Method

This method is very straight forward. It updates the values of this.x and this.y by adding to them the value of the variables this.deltaX and this.deltaY. As the value of this.x and this.y change the position of the animal object also changes.

#### reactToDanger Method

When this method is called the variable this.dissapeared is assigned the Boolean value of true. This method is later used in the Ufo dangerZone method to create awareness between the two different class-based objects.

#### electricFence Method

This method uses if loops to make sure the animal objects remain within ‘pasture’. The variable shock is assigned a value of -1. If the value of this.x or this.y exceed or go below a numerical value – which happen to be the x and y values of the pasture boundaries – then this.deltaX or this.deltaY are multiplied by -1, shock, which reverses the animal object’s direction.
There was a bug where occasionally an animal object would make it through and get stuck outside the pasture boundary. To prevent this from happening lines 47 through 59 update the values of this.x or this.y to be within the pasture boundaries.

#### avoid Method

There are two aspects to this method. It both checks for intersection with other animal objects and it changes the direction of animal objects by changing the values of this.deltaX and this.deltaY.
To check for intersection with other animal objects a for loop is used on line 70. In the for loop the variable i is initialized and assigned a value of 0. If the value of i is less than the value of the length of the otherCows array, then one is added to the value of i. This has the practical effect of cycling through all elements in the array. Next, an if loop and the logical not operator are used to exclude objects intersecting with themselves from moving on to the next if statement on line 78.
Before the if statement on line 78, two variables are initialized. Variable d is assigned the value of the distance between this.x this.y, and the x y values in all elements in the otherCows array. Variable meet is initialized and assigned the value of this.r plus the ‘r’ value of each element in the otherCows array. Line 78 then tests if the value of d is less than or equal to the value of meet. If the statement evaluates to true, then the two animal objects are intersecting, and the program runs through lines 80 and 82.
This method has two parameters. In the sketch.js file these parameters are filled with the arguments cows, and i. When called in sketch.js file the cows and i argument make sure all elements check for intersection with other elements while also skipping themselves.
Now that the intersection aspect is covered, it is time to describe what happens when two objects intersect. Lines 67 and 68 create two empty arrays: effectsX and effectsY. Every time the if statement on line 78 evaluates to true then the result of the value of this.x minus the x value of the corresponding element in the otherCows array is added to the effectsX array. The same process happens for the effectsY array. These elements are stored for later use.
Lines 86 and 87 initialize two variables addedEffectsX and addedEffectsY and assigns them initial values of 0. The for loop on line 89 cycles through all elements stored in the effectsX array. The value of addedEffectsX and addedEffectsY are updated by adding the value of each corresponding element stored in effectsX and effectsY array.
Lines 96 and 98 initialize two new variables meanEffectX and meanEffectY. These variables are assigned a the value of the result of the value of addedEffectsX divided by the length of the effectsX array and the value of addedEffectsY divided by the length of the effectsY array. The value of meanEffectX and meanEffectY are further modified when they are multiplied by 0.01 in lines 105 and 106. This is to prevent the animal objects from moving too quickly when the values of meanEffectX and meanEffect Y are used to update the value of this.deltaX and this.deltaY. However, before this.deltaX and this.deltaY can be updated the if loop on line 109 makes sure that the value of effectsX.length is greater than 0. If the value of effectsX.length is 0, then it crashes the program when lines 96 and 98 attempt to divide a number by zero. Every time two objects intersect the program runs through all these calculations to modify the values of this.deltaX and this.deltaY which in turn modify the direction of the animal objects.

#### calmDown Method

Without the calmDown method, the value of this.deltaX and this.deltaY would continually increase which would make for some very unruly cows. First the variable speed is initialized and then given the value of the distance between 0 0 and this.deltaX this.deltaY. The following if statement tests if the value of speed is larger than two. If the if statement evaluates to true, then the value of this.deltaX and this.deltaY is modified by multiplication of their values by 0.8. This reduces their value and therefore reduces the speed at which the animal objects move.

#### populate Method
And finally the populate method gives the animal objects their shape, size and color. However, if the if statement on line 136 does not evaluate to true, then lines 138 through 141 are not executed which causes the animal object to disappear.

### Ufo Class

The Ufo class is where I had the second most success. Objects created from the Ufo blueprints fly around with keyboard inputs, a clicked mouse activates an abduction beam, and it interacts with objects created from the animal class.

#### constructor Method

The Ufo and Animal constructor methods work in almost entirely the same way. However in the Ufo constructor method an additional variable, this.abductionSize is initialized and assigned an initial value of 50.

#### fly Method

Line 27 initializes a new variable, throttle, and assigns it a value of 6. Then the if statements on lines 31 through 38 test to see if one of the arrow keys is pressed. If any of these if statements evaluate to true, then the value of this.x or this.y is modified by the value of the variable throttle. This allows the player to control the position of the Ufo object with the use of the arrow keys. Because multiple if loops are used, rather than else or else if loops, the Ufo object can also fly diagonally.

#### abductionBeam Method

This method begins with an if loop that tests if the mouse is pressed. If the if statement evaluates to true, then a red ellipse is drawn at the current this.x and this.y location. The abduction ellipse size is determined by the this.abductionSize variable which was initialized in the constructor method.

#### dangerZone Method

This method is very important for the successful interaction between Ufo-based objects and animal-based objects. The method uses a parameter, themCows, which is filled with the cows argument in the sketch.js file which allows the two different objects to interact with each other.
The if statement on line 56 tests if the mouse is pressed or not. Putting this if statement first helps with efficiency as the program only runs through lines 58 through 72 if the if statement evaluates to true. Line 58 cycles through all elements of the themCows array so that each object in the themCows array can check for intersection. Line 60 initializes the variable currentCow and assigns it the variable themCows[i]. This makes the code a bit more readable. Line 62 initializes a variable danger and assigns it the value of the distance between this.x this.y and currentCow.x currentCow.y. Variable bullseye is initialized on line 66 and assigned the value of the sum of ( (this.abductionSize + currentCow.r ) – 40 ). The minus 40 bit is to make the game more interesting as the player must maneuver the Ufo object closer to the animal object for the program to recognize an intersection.
Finally, the if statement tests if the value of danger is less than the value of bullsEye. If the statement evaluates to true then the program runs through line 72. Line 72 calls the reactToDanger method which is found in the Animal class. Calling this function updates the value of the reactToDanger variable which then changes the result of the if loop on line 136 of the Animal class populate method from evaluating to true to evaluating to false which makes the animal object disappear.

#### runAway Method

This method is supposed to work the same way as the reactToDanger method in the Animal class.

#### invade Method

This method is supposed to work the same way as the populate method in the Animal class. However, unlike the animal-based objects, the Ufo-based object does not disappear when it interacts with the farmer-based object.

### Farmer Class

I had the least amount of success with the objects created from the Farmer class. While the farmer-based object stays within the confines of the pasture, it does not rotate on a timed interval and it does not interact with the Ufo-based object.

#### constructor Method

The constructor method here works essentially the same way as the Ufo constructor method. There are a couple of other variables I was experimenting with the goal of creating a second ellipse which would serve as the farmer-object’s field of vision. I planned on making the Farmer-object and Ufo-object interaction use this field of vision as their point of interaction.

#### patrol Method

The patrol method is essentially a combination of the walk and electricFence method as found in the Animal class.

#### sawSomething Method

This method is supposed to work the same way as the dangerZone method in the Ufo class. As it is not working, I will discuss it later in the How it Doesn’t Work section.

#### heardSomething Method

This method also does not work as intended. I will also discuss it in the How it Doesn’t Work section.

#### display Method

Works same way as the populate method in the Animal class, but it lacks the if statement that allows the animal-based objects to disappear.

### sketch.js
In the global variable section two variables are initialized, spaceship and guy, and one empty array is initialized, cows.
In the setup block the canvas size is defined. Then the cows array is filled with object elements based on the Animal class blueprints. The for loop on line 30 initializes a new variable i, and assigns it an initial value of 0. If the value of i is less than 10 the value of i is increased by one. This continues until the value of i is no longer less than 10 and in effect creates 10 Animal objects. The starting position of these objects are random, and all are given a size of 20.
Line 37 calls a new object based of the Farmer class and line 41 calls an object based on the Ufo class.
In the draw block the pasture is created with a quad function and all the methods are called for the class-based objects. The for loop on line 57 cycles through the cows array and applies the functions on lines 58 through 62 to all elements in the cows array. Lines 67 through 70 call the Farmer methods and lines through 78 call the Ufo methods.
For better readability each class has its own separate js file which are requested from the index.html by the browser.

## How it Doesn’t Work

There are two core features that do not work: the Ufo-object and Farmer object interaction and the Farmer heardSomething method.
Of the two, I am most confused by why the Ufo-object and Farmer object interaction does not work. I reused the same code from the functioning Ufo-object and Animal object interaction. Just as the dangerZone method references the position of the elements in the otherCows array and references the animal-based objects with an argument when called in the sketch.js, the sawSomething method references the Ufo-object in the same ways. Similarly, the Ufo runAway and invade Methods are written the same way as the Animal reactToDanger and populate methods. I am convinced that all the pieces are present, but a small detail is preventing the interaction from working.
A possible work around may be to turn the Farmer-object and Ufo-object into elements in seperate arrays and then only create one element of each. This would then let me copy and paste the code almost directly from the working methods. However, doing so feels a bit 'hacky' and I would like to know how to do it the 'right' way.
The Farmer heardSomething method was supposed to work with the setInterval function to rotate the farmer-object, and therefore the farmer-objects field of view, at a set interval of time. This would in theory force the player to be more careful when trying to abduct the cows. While I was able to get the farmer-object to rotate, I was unable to successfully implement the timed interval. Instead of rotating once every two seconds, the farmer-object rotated every new frame which quickly crashed the program. I tried using the techniques used in [this video]( https://www.youtube.com/watch?v=CqDqHiamRHA&t=266s) to implement the interval function.

## Getting Help and Helping Others

Unfortunately, I was not able to help many of classmates out wit their final projects. In one of NathanielHagen’s threads I pointed out a missed ‘}’ but I don’t think that solved their issue.

I also tried to help out erinflint with their project. As of writing this I don’t know if my suggestions helped.

And lastly, I tried helping mprimeau1 with a question about button making. While I think I correctly described how to make an object aware if it is being clicked on or not, I was unable to give any suggestions about playing sound files. 

I tried a couple methods for getting help for myself. Sometime in week 12 I posted an issue forum about multiclass object interactions. There I got some great help from my classmate spkv. While we did not come to a working solution, I was able to use some of the trial and error form our previous conversations when looking for a new solution. On the 18th of November I emailed Stephanie, but I think my email may have been lost as I never received a response. On the 3rd of December I emailed Emily who then, a couple of days later, shared my email with Professor Musick who gave me a couple of suggestions.

## Closing Thoughts

I don’t know if I should be proud of this project or not. On the one hand, it is only about two thirds functional. On the other hand, I am surprised by how far I have come since first beginning this semester. I may have set myself up for failure by integrating multiclass interactions, a technique I was unable to do correctly before beginning my final project, into most core features of my project. Because I spent so much time implement core features, I missed out on some things I was looking forward to, like replacing basic shapes with image files or adding sound effects. Either way, I am very happy that I took this class. It challenged me in ways I could not imagine beforehand, but I learned a lot and I am hoping to continue building on the skills I learned here.
