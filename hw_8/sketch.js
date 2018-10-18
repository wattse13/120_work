/******************************************************************************/
//Javascript Objects
/******************************************************************************/

//Initializes new javascript object named thomas
//Stores variables related to thomas
let thomas = {};
thomas.x = 1400;
thomas.y;
thomas.w = 40;
thomas.h = 40;
thomas.color;

//Initializes new javascript object named boulder
//Stores variables related to boulder
let boulder = {};
boulder.x = 0;
boulder.y = 0;
boulder.w = 60;
boulder.h = 60;
boulder.color;

//Initiates beginning sketch environment
function setup(){

  //Defines canvas width and height
  createCanvas( 1500, 700 );

  //X and y values now define center of rectangels and ellipses
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw(){

  /****************************************************************************/
  //Variables
  /****************************************************************************/

  //Reassigns thomas.y variable to be half of canvas height
  thomas.y = height * 0.5;

  //Reassigns thomas.color variable to the `color();` element
  thomas.color = color( 255, 0, 255 );

  //Fills boulder with black
  boulder.color = color('black');

  //Creates new local variable 'crushed'
  //Calculates the distance between center of thomas and boulder
  let crushed = dist( boulder.x, boulder.y, thomas.x, thomas.y );

  /******************************************************************************/
  //Background
  /******************************************************************************/

  //Sets background color to grey
  //Background is constantly updated which creates animated effect
  background( 128 );

    //Sets up for loop to draw multiple 'stalactites' across top of canvas
    //Initializes x as variable. If x is less than the value of windowWidth then 60 is added to the value of x
    for ( x = 0; x < windowWidth; x += 60 ){

        //Fills and shapes stalactite shape
        //Using x variable, as defined in for loop, causes shape to be drawn multiple times
        fill(boulder.color);
        triangle( x, 0,
                  x + 30, 120,
                  x + 60, 0 );
    }

    //Should similarily to stalactite for loop and create 'cracks' in background
    //Only works for a split second before disappearing
    //Tried modifying what I found on class leson with the `random();` element
    //Initializes new variable i. If i is less than value of windowWidth the 100 is added to value of i
    for( let i = 0; i < windowWidth; i += 100 ){

        //Colors and shapes 'crack' lines
        fill( boulder.color );
        strokeWeight( 3 );

        //X position 1 begins at value of i and y position 1 begins at 700
        //X and y position 2 are given a random value between value of i and 100
          //Process is repeated with line 2
        line( i, 700, random( i, 100 ), random( i, 100) );
        line( i, 350, random( i, 100 ), random( i, 100) );
    }

  /****************************************************************************/
  //Game
  /****************************************************************************/

  //Outlines, fills, places, and shapes rectangle
  //Use of custom variables in x and y parameters allows for movement across canvas
  noStroke();
  fill( thomas.color );
  rect( thomas.x, thomas.y, thomas.w, thomas.h );

  //If when evaluated the statement 'mouse is pressed' is true then 5 is subtracted from the value of the thomas.x variable
  if (mouseIsPressed){
    thomas.x -= 5;
  }

  //For loop draws boulders across screen
  //Taken from class lesson
  //If i is less than 4 then 1 is added to the value of the variable
  //Sets fill to custom variable 'boulder.color'
  //Reassigns boulder.x value to be the result of the width multiplied by the result of variable i's value multiplied by 0.25
  //Draws ellipse using custom variables for placement and size
    //Custom variables allow for movement across canvas
  for ( let i = 0; i < 4; i ++ ) {
    fill( boulder.color );
    boulder.x = width * ( i * 0.25 );
    ellipse( boulder.x, boulder.y, boulder.w, boulder.h );
  }

  //Updates boulder.y value by subtracting 5 from its current value
  boulder.y += 5;

  //If when evaluated the statement 'the value of boulder.y is greater than 700' is true, then the boulder.y value is reassigned to zero
  if (boulder.y > 700 ) {
    boulder.y = 0;
  }

  if ( crushed < 40 || thomas.x < 0 ) {
    thomas.x = 1400;
  }

}
