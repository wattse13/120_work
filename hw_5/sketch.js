/******************************************************************************/
//Alien Invasion Project
//My goal is to make an alien space ship appear to chase the mouse cursor.
//Movement should be controlled by mouse movement.
//Abduction beam should change in relation to cursor position.
//Lights should rotate independently of mouse.
/******************************************************************************/

//Lines 13, 14, 65, and 66 were taken from the 'Getting Started with p5.js' book.
//They are supposed to cause the object following the mouse lag slightly behind it.
//The speed at which the x variable reaches targetX is set by the easing variable.
//I was unable to incorporate them succesfully into my sketch.
// var x = 0;
// var easing = 0.001;

function setup(){

  //Creates canvas that is 1400 pixles by 700 pixles.
  createCanvas( 1400, 700 );

}

/******************************************************************************/
//Global Variables
/******************************************************************************/

//Assigns initial values to red, blue, and green variables.
let red = 1;
let blue = 1;
let green = 1;

//Assigns values to spaceWidth and spaceHeight variables.
let spaceWidth = 1400;
let spaceHeight = 700;

//Assigns initial value to light angle variable.
let lightAngle = 0;



/******************************************************************************/
//Space Ship
/******************************************************************************/

function draw(){

  //More Variables

  //Reassigns value to lightAngle variable.
  lightAngle = lightAngle - 5;

  //Assigns values to shipWidth and shipHeight variables.
  shipWidth = spaceWidth / 4;
  shipHeight = spaceHeight / 5.6;

  //Space Ship

  //Drawn objects follow cursor from 150 pixles above.
  translate( mouseX - 30, mouseY - 150 );

  //erases images after each frame
  background( 128 );

  //See lines 9, 10, 11, and 12.
  // var targetX = mouseX;
  // x += ( targetX -x ) * easing;

  //Abduction beam sandbox.
  push();

    //Re-assigns values for red and blue parametrs based on cursor location.
    red = mouseY * 0.27;
    blue = mouseX * 0.27;

    //Removes abduction beam outline.
    //Changes abduction beam color based on cursor location.
    //Shapes abduction beam.
    noStroke();
    fill( red, 0, blue, 100 );
    quad( 0, 20, 60, 20, 120, 200, -60, 200 );

  pop();

  //Spaceship body sandbox.
  push();

    //Moves spaceship body above abduction beam.
    translate( 30, -40 );

    //Removes outline, colors, and shapes spaceship body.
    //Also adds outline to cockpit.
    stroke(5);
    fill( 147, 34, 141 );
    ellipse( 0, 0, shipWidth, shipHeight );

  pop();

  //Spaceship lights sandbox.
  push();

    //Sets no outline for all rectangles and ellipses in this sandbox.
    noStroke();

    //First two parameters now define coordinates for rectangle center.
    rectMode( CENTER );

    //Colors all rectangles in this sandbox.
    fill('rgb( 255, 203, 0 )');

    //Left light sandbox.
    push();

      //Moves grid center to center of left light.
      translate( shipWidth * -0.25, shipHeight * -0.25 );

      //Rotates light on its center.
      rotate( radians( lightAngle ) );

      //Shapes and positions left square light.
      rect( 0, 0, 20, 20, 5 );

    pop();

    //Middle light sandbox.
    push();

      //Moves grid to center of middle light.
      translate( shipWidth * 0 + 30, shipHeight - 135 );

      //Rotates middle light around its center.
      rotate( radians( lightAngle ) );

      //Shapes and positions middle square light.
      rect( 0, 0, 20, 20, 5 );

    pop();

    //Right light sandbox.
    push();

      //Moves grid to center of right light.
      translate( shipWidth * 0.25 + 60, shipHeight * -0.25 );

      //Rotates right light around its center.
      rotate( radians( lightAngle ) );

    //Shapes and positions right square light.
    rect( 0, 0, 20, 20, 5 );

    pop();

  pop();

  //Spaceship cockpit color and shape.
  fill('rgba( 50, 185, 45, 0.9 )');
  arc( 30, -50, shipWidth * 0.6, shipHeight + 20, PI, 0, OPEN );

}
