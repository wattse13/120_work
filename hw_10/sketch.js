/******************************************************************************/
//Alien Invasion Project
//My goal is to make an alien space ship appear to chase the mouse cursor.
//Movement should be controlled by mouse movement.
//Abduction beam should change in relation to cursor position.
//Lights should rotate independently of mouse.
/******************************************************************************/

function setup(){

  //Creates canvas that is 1400 pixels by 700 pixels.
  createCanvas( 1400, 700 );

}

/******************************************************************************/
//Global Variables
/******************************************************************************/

let colorArr = [
  { red: 0, green: 0, blue: 0 }
];

//Assigns initial value to light angle variable.
let lightAngle = 0;

/******************************************************************************/
//Space Ship
/******************************************************************************/

function draw(){

  //More Variables


  //Assigns values to shipWidth and shipHeight variables.
  shipWidth = width / 4;
  shipHeight = height / 5.6;

  posX = mouseX;
  posY = mouseY;

  //Space Ship

  //Erases images after each frame
  background( 128 );

spaceShip( posX - 30, posY - 150 );

push();

shipLight( posX - 125, posY - 175 );

lightRotation( posX - 125, posY - 175 );

pop();

shipLight( posX, posY - 150 );
shipLight( posX + 125, posY - 175 );

}

function spaceShip( x, y ) {

  //Abduction beam

    //Re-assigns values for red and blue parameters based on cursor location.
    colorArr[0] = map( mouseY, 0, 700, 0, 255 );
    colorArr[2] = map( mouseX, 0, 1400, 0, 255 );

    //Removes abduction beam outline.
    //Changes abduction beam color based on cursor location.
    //Shapes abduction beam.
    noStroke();
    fill( colorArr[0], 0, colorArr[2], 100 );
    quad( x, y + 20, x + 60, y + 20, x + 120, y + 200, x - 60, y + 200 );

  //Spaceship body

    //Removes outline, colors, and shapes spaceship body.
    //Also adds outline to cockpit.
    stroke(5);
    fill( 147, 34, 141 );
    ellipse( x + 30, y - 40, shipWidth, shipHeight );

  //Spaceship cockpit

  //Spaceship cockpit color and shape.
  fill('rgba( 50, 185, 45, 0.9 )');
  arc( x + 30, y - 50, shipWidth * 0.6, shipHeight + 20, PI, 0, OPEN );
}

function shipLight( x, y ){

  //Spaceship lights sandbox.
  push();

    //Sets no outline for all rectangles and ellipses in this sandbox.
    noStroke();

    //First two parameters now define coordinates for rectangle center.
    rectMode( CENTER );

    //Colors all rectangles in this sandbox.
    fill('rgb( 255, 203, 0 )');

    //Shapes and positions left square light.
    rect( x, y, 20, 20, 5 );

  pop();
}

function lightRotation( x, y ) {

  push();

  translate( x, y );

  rotate( radians( lightAngle ) );

  //Reassigns value to lightAngle variable.
  lightAngle = lightAngle - 5;

  pop();
}
