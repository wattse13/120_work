/******************************************************************************/
//Algorithmic Sketch
/******************************************************************************/

/******************************************************************************/
//Global Variables
/******************************************************************************/

//Stores box variables as a js object.
let box = {};
  box.width = 50;
  box.maxW;
  box.height = 50;
  box.maxH;
  box.stroke = 6;
  box.x = 0;
  box.y = 0;
  box.angle = 1;
  box.r = 0;
  box.g = 0;
  box.b = 0;

//Gives windowHeight vairable a value of 700
let widowHeight = 700;

box.maxW = windowHeight;
box.MaxH = windowHeight;

function setup(){

  createCanvas( windowWidth, windowHeight );

  background( 128 );

  frameRate( 10 );

  }

function draw(){

  translate( windowWidth / 2, windowHeight * 0.5 );

  rotate( box.angle );

  rectMode( CENTER );
  strokeWeight( box.stroke );
  stroke( 0 );
  fill( box.r , box.g, box.b );
  rect( box.x, box.y, box.width, box.height );

  box.width = map( mouseX, 0, windowWidth, box.width, box.maxW );
  box.height -= 1;
  box.angle += 1;
  box.r = floor( random( 0, 255 ) );
  box.b = floor( random( 0, 255 ) );
  box.stroke = (box.stroke + 1) % 2;

  }
