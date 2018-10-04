/******************************************************************************/
//Algorithmic Sketch
/******************************************************************************/

/******************************************************************************/
//Global Variables
/******************************************************************************/

//Stores box variables as a js object.
let box = {};
  box.width = 700;
  box.height = 700;
  box.stroke = 6;
  box.x = 0;
  box.y = 0;
  box.angle = 1;
  box.r = 0;
  box.g = 0;
  box.b = 0;

//Gives windowHeight vairable a value of 700
let widowHeight = 700;

//Initial program environment
function setup(){

  //Sets canvas width and height
  createCanvas( windowWidth, windowHeight );

  //Sets canvas color
  //Called only once at beginning of program to avoid animation effect
  background( 128 );

  //Sets frame rate at 10 frames a second
  frameRate( 10 );

  }

function draw(){

  //Moves grid to center of canvas
  translate( windowWidth / 2, windowHeight * 0.5 );

  //Rotates grid around box angle variable
  rotate( box.angle );

  //Positions, draws, and colors shape
  //Often uses self defined variables from Global Variables section
  rectMode( CENTER );
  strokeWeight( box.stroke );
  stroke( 0 );
  fill( box.r , box.g, box.b );
  rect( box.x, box.y, box.width, box.height );

  //Changes rectangle size values over time
  box.width -= 1;
  box.height -= 1;
  box.angle += 1;

  //Changes rectangle color value over time
  //Floor and Ceil functions ensures randomly selected values chosen by random function are whole numbers
  box.r = floor( random( 0, 255 ) );
  box.b = ceil( random( 0, 254 ) );

  //Modolu operator prevents box.stroke from growing indefinately
  box.stroke = (box.stroke + 1) % 2;

  }
