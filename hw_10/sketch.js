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

//Creates new array
//Array is filled with three objects
//Array element 0 is variable 'red' and has an initial value of 0
//Array element 1 is variable 'green' and has an initial value of 0
//array element 2 is variable 'blue' and ahs an initial value of 0
let colorArr = [
  { red: 0, green: 0, blue: 0 }
];

//Assigns initial value to light angle variable.
let lightAngle = 0;

/******************************************************************************/
//Space Ship
/******************************************************************************/

function draw(){

  /****************************************************************************/
  //Local variables
  /****************************************************************************/

  //Assigns values to shipWidth and shipHeight variables.
  shipWidth = width / 4;
  shipHeight = height / 5.6;

  //Initiates variables posX and posY and assigns them values of mouseX and mouseY location
  posX = mouseX;
  posY = mouseY;

  //Space Ship

    //Erases images after each frame
    background( 128 );

    //Draws spaceShip function at posX - 30 and posY - 150 location
    //Because posX and posY are custom variables that change with mouse movement, the spaceShip's location also changes
    spaceShip( posX - 30, posY - 150 );

    //Draws thre shipLights
    //Because posX and posY are custom variables that change with mouse movements, the shipLight's location also changes
    shipLight( posX - 125, posY - 175 );
    shipLight( posX, posY - 150 );
    shipLight( posX + 125, posY - 175 );

    //Reassigns value to lightAngle variable.
    lightAngle = lightAngle - 5;
}

/******************************************************************************/
//Functions
/******************************************************************************/

//Creates new function called 'spaceShip'
//Requires two location parameters x and y
function spaceShip( x, y ) {

  //Abduction beam

    //Re-assigns values for red and blue parameters based on cursor location
    //Maps range of 0 to 700 and 0 to 1400 with new range of 0 to 255
      //Creates color gradiant that reaches across entire canvas
    colorArr[0] = map( mouseY, 0, 700, 0, 255 );
    colorArr[2] = map( mouseX, 0, 1400, 0, 255 );

    //Removes abduction beam outline
    //Changes abduction beam color based on cursor location
    //Shapes abduction beam
    //Positions abduction beam with the x and y parameters which will be defined with arguments once the function is called in draw(){}
    noStroke();
    fill( colorArr[0], 0, colorArr[2], 100 );
    quad( x, y + 20, x + 60, y + 20, x + 120, y + 200, x - 60, y + 200 );

  //Spaceship body

    //Removes outline, colors, and shapes spaceship body
    //Also adds outline to cockpit
    //Positions ellipse with the x and y parameters which will be defined with arguments once the function is called in 'draw(){}'
    stroke(5);
    fill( 147, 34, 141 );
    ellipse( x + 30, y - 40, shipWidth, shipHeight );

  //Spaceship cockpit

  //Spaceship cockpit color and shape
  //Positions arc with the x and y parameters which will be defined with arguments once the functions is called in draw(){}
  fill('rgba( 50, 185, 45, 0.9 )');
  arc( x + 30, y - 50, shipWidth * 0.6, shipHeight + 20, PI, 0, OPEN );
}

//Creates new function called 'shipLight'
//Requires two location parameters x and y
function shipLight( x, y ){

  //Spaceship lights sandbox
  //Prevents translate function from interfering with position of other shipLights if function is called more than once
  push();

    //Sets no outline for all rectangles and ellipses in this sandbox
    noStroke();

    //First two parameters now define coordinates for rectangle center
    rectMode( CENTER );

    //Colors all rectangles in this sandbox
    fill('rgb( 255, 203, 0 )');

    //Moves grid center to x and y location
    translate( x, y );

    //Rotates shipLight around center point of new grid position
    rotate( radians( lightAngle ) );

    //Shapes and positions lights
    rect( 0, 0, 20, 20, 5 );

  pop();
}
