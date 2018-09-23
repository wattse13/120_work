/******************************************************************************/
//Alien Invasion Project
//My goal is to make an alien space ship appear to chase the mouse cursor.
//Movement should be controlled by mouse movement.
//Abduction beam should change in relation to Canvas height.
//Lights should blink independently of mouse.
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

//Assigns values for variables with and height
let width = 350;
let height = 150;

let shipAngle = 0;

/******************************************************************************/
//Space Ship
/******************************************************************************/

function draw(){

  //Drawn objects follow cursor from 100 pixles above.
  translate( mouseX - 30, mouseY - 150 );

  //erases images after each frame
  background( 255 );

  //Abduction beam sandbox.
  push();

    //Re-assigns values for red and blue parametrs based on cursor location.
    red = mouseY * 0.27;
    blue = mouseX * 0.27;

    noStroke();
    fill( red, 0, blue, 100 );
    quad( 0, 20, 60, 20, 120, 200, -60, 200);

  pop();

  //Spaceship body sandbox.
  push();

    //Moves spaceship body above abduction beam.
    translate( 30, -50 );

    //Removes outline, colors, and shapes spaceship body.
    noStroke();
    fill( 128 );
    ellipse( 0, 0, 350, 150);

  pop();

  //Spaceship lights sandbox.
  push();

    

  pop();

  //Spaceship cockpit color and shape

  fill('rgba(17, 198, 64, 0.8)');
  arc( 30, -70, width * 0.6, height * 0.95, PI, 0, OPEN );

}
