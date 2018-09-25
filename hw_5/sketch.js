/******************************************************************************/
//Alien Invasion Project
//My goal is to make an alien space ship appear to chase the mouse cursor.
//Movement should be controlled by mouse movement.
//Abduction beam should change in relation to Canvas height.
//Lights should rotate independently of mouse.
/******************************************************************************/

function setup(){

  //Creates canvas that is 1400 pixles by 700 pixles.
  createCanvas( 1400, 700 );

}

/******************************************************************************/
//Global Variables
/******************************************************************************/

//Assigns values for red, blue, and green variables.
let red = 1;
let blue = 1;
let green = 1;

//Assigns values for variables ship width and height
let shipWidth = 350;
let shipHeight = 125;

//Assigns initial value for light angle.
let lightAngle = 0;

// let easing = 0.0001;
// let x = 0;
// let y = 0;

/******************************************************************************/
//Space Ship
/******************************************************************************/

function draw(){

  // let targetX = mouseX;
  // targetY = mouseY;
  // x += ( targetX - x ) * easing;

  //Reassigns value to lightAngle variable.
  lightAngle = lightAngle - 5

  //Drawn objects follow cursor from 150 pixles above.
  translate( mouseX - 30, mouseY - 150 );

  //erases images after each frame
  background( 255 );

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
    quad( 0, 20, 60, 20, 120, 200, -60, 200);

  pop();

  //Spaceship body sandbox.
  push();

    //Moves spaceship body above abduction beam.
    translate( 30, -40 );

    //Removes outline, colors, and shapes spaceship body.
    //Also adds outline to cockpit.
    stroke(5);
    fill( 147, 34, 141 );
    ellipse( 0, 0, 350, 125);

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