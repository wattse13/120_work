/******************************************************************************/
//Final project
//Created by Eli Watts
//Alien Disaster on Uncle Farmer's Farm
//Spaceship is controlable with arrow keys
//Mouse click activates the abduction beam
//Try to abduct all cows, the white dots, without being caught!
/******************************************************************************/

/******************************************************************************/
//Global variables
/******************************************************************************/

//Creates new global variable with no intial value
let spaceShip;
//Creates new empty array
let cows = [];
//Creates new global variable with no initial value
let guy;

//Initiates new coding environment
function setup(){

  //Creates new canvas on screen
  createCanvas( 700, 700 );

  //Stores objects based on Animal class as elements in cows array
  //If the value of i is less than 10, a new object is added to the cows array
    //Repreated until the value of 'i' is no longer less than 10
  for ( i = 0; i < 10; i++ ){
    //Cow objects are given random starting location and beginning size of 30 pixels
    cows[i] = new Animal( random( 100, 600 ), random( 100, 600 ), 20 );
  }

  //Global variable guy is reassigned to call new objects based on Farmer class
  //Object created from Farmer class is given a starting location and size
  guy = new Farmer( 100, 200, 20 );

  //Global variable spaceShip is reassigned to call new objects based on Ufo class
  //Object created from Ufo class is given a starting location and size
  spaceShip = new Ufo( 50, 50, 25 );

}

//Starts draw function block
function draw(){

  //Background is continually redrawn which means moving shapes appear to be animated
  background( 'black' );

  //Sets fill color to brown
  fill( 'green' );
  //Draws new square shape
  quad( 100, 100, 600, 100, 600, 600, 100, 600 )

  //Calls class methods for each element in the cows array
  for( var i = 0; i < cows.length; i++ ){
    cows[i].walk();
    cows[i].populate();
    cows[i].electricFence();
    cows[i].calmDown();
    cows[i].avoid( cows, i );
  }

//Calls Farmer methods
// push();
  guy.patrol();
  guy.display();
  guy.sawSomething( spaceShip );
  // setInterval( guy.heardSomething(), 10000 );
// pop();

  //Calls Ufo methods
  spaceShip.fly();
  spaceShip.abductionBeam();
  spaceShip.invade();
  spaceShip.dangerZone( cows );
  spaceShip.runAway();
}
