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
  //If the value of i is less than _, a new object is added to the cows array
    //Repreated until the value of 'i' is no longer less than _
  for ( i = 0; i < 10; i++ ){
    //Cow objects are given random starting location and beginning size of 30 pixels
    cows[i] = new Animal( random( 100, 600 ), random( 100, 600 ), 30 );
  }

  //Global variable guy is reassigned to call new objects based on Farmer class
  //Object created from Farmer class is given a starting location and size
  guy = new Farmer( 100, 200, 20 );

  //Global variable spaceShip is reassigned to call new objects based on Ufo class
  //Object created from Ufo class is given a starting location and size
  spaceShip = new Ufo( 350, 350, 75 );

}

//Starts draw function block
function draw(){

  //Background is continually redrawn which means moving shapes appear to be animated
  background( 'black' );

  //Sets fill color to brown
  fill( 'brown' );
  //Draws new square shape
  quad( 100, 100, 600, 100, 600, 600, 100, 600 )

  //Calls class methods for each element in the cows array
  for( var i = 0; i < cows.length; i++ ){
    cows[i].walk();
    cows[i].populate();
    cows[i].electricFence();
    cows[i].avoid( cows, i );
  }

// push();
//   guy.patrol();
//   guy.display();
  // setTimeout( guy.turn(), 1000 );
// pop();

  //Calls Ufo methods
  spaceShip.fly();
  spaceShip.abductionBeam();
  spaceShip.invade();
  // spaceShip.dangerZone( cows [i], i )
}

/******************************************************************************/
//Classes
/******************************************************************************/

//Instantiates new class
class Ufo{

  //Class requires three parameters are filled with arguments when first called
  constructor( x, y, r ){
    //This instance of x, y, and r are given assigned variables x, y, and r
    this.x = x;
    this.y = y;
    this.r = r;
    //Assigns value of 100 to this instance of variable abductionSize
    this.abductionSize = 100;
    //Assigns value of half of value of abductionSize to this instance of variable abductionR
    this.abductionR = this.abductionSize / 2;

    //This instance of deltaX and deltaY are assigned values of 3
    this.deltaX = 3;
    this.deltaY = 3;
  }

  //Creates new class method
  fly(){

    //Creates new variable and assigns a value of 6
    let throttle = 6;

    //Uses boolean logic to control spaceShip movement
      //If a direction key is pressed then the value of this.x or this.y are modified by the value of the throttle variable
    if( keyIsDown( RIGHT_ARROW ) ){
      this.x += throttle;
    }else if( keyIsDown( LEFT_ARROW ) ){
      this.x -= throttle;
    }else if( keyIsDown( UP_ARROW ) ){
      this.y -= throttle;
    }else if( keyIsDown( DOWN_ARROW ) ){
      this.y += throttle;
    }
  }

  //Creates new class method
  abductionBeam(){
    //Uses boolean logic to draw a new ellipse centered around the this.x and this.y point
    if( mouseIsPressed ){
      fill( 'green' );
      ellipseMode( CENTER );
      //Use of custom variables allows for the updating of shape position
      ellipse( this.x, this.y, this.abductionSize );
    }
  }

  //Creates new class method which needs two arguments to fill its two parameters
    //Currently not working
    //Supposed to use nested if statements to check if the mouse is clicked while two objects intersect
  dangerZone( themCows, self ){
    //Checks all elements stored in themCows array
    for( let i = 0; i < themCows.length; i++){
      //Excludes current object from returning true when it intersects with itself
      if( i != self ){
        //Creates new variable and assigns it the distance between this.x this.y and themCows[i].x themCows[i].y
        let danger = dist( this.x, this.y, themCows[i].x, themCows[i].y )
        //Creates new varaible and assigns it the value of the sum of abductionSize.r + themCows[i].r
        let bullsEye = abductionSize.r + themCows[i].r
        //If the value of variable danger is less than the value of variable bullsEye it means the two objects are intersecting
        if( danger < bullsEye){
          //If the mouseIsPressed while the two objects are intersecting, the statement evaluates true
          if( mouseIsPressed){
            return true;
          }else{
            return false;
        }
      }
    }
  }
}

  //Creates new class method
  invade(){
    //Creates new ellipse at this.x, this.y, and this.r location with a fill color of purple
    ellipseMode(CENTER);
    noStroke();
    fill( 'purple' );
    ellipse( this.x, this.y, this.r );
  }
}

//Instantiates new class
class Animal{

  constructor( x, y, size ){
    this.x = x;
    this.y = y;
    this.size = 40;
    this.r = this.size / 2;

    this.deltaX = 1;
    this.deltaY = 1;
  }

  walk(){
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  turn(){
    this.deltaX = this.deltaX * -1;
    this.deltaY = this.deltay * -1;
  }

  electricFence(){
    let shock = -1;

    if( this.x <= 100 || this.x >= 600 ){
      this.deltaX = this.deltaX * shock;
    }
    if( this.y <= 100 || this.y >= 600 ){
      this.deltaY = this.deltaY * shock;
    }
  }

avoid( otherCows, self ){
  for( let i = 0; i < otherCows.length; i++){
    if( i != self ){
      let d = dist(this.x, this.y, otherCows[i].x, otherCows[i].y );
        let meet = this.r + otherCows[i].r;
          if ( d <= meet ) {
            this.deltaX *= -1;
            this.deltaY *= -1;
      }
    }
  }
}

getGot(){

}

populate(){
  ellipseMode(CENTER);
  noStroke();
  fill( 'white' );
  ellipse( this.x, this.y, this.r );
  }
}

class Farmer{
  constructor( x, y, r ){
    this.x = x;
    this.y = y;
    this.r = r;
    this.vis = this.vis;

    this.deltaX = 2;
    this.deltaY = 2;
  }

  patrol(){
    let fence = -1;

    this.x += this.deltaX;
    this.y += this.deltaY;

    if( this.x <= 100 || this.x >= 600 ){
      this.deltaX = this.deltaX * fence;
    }
    if( this.y <= 100 || this.y >= 600 ){
      this.deltaY = this.deltaY * fence;
    }
  }

  turn(){

    if( ( this.x <= 100 || this.x >= 600 ) || ( this.y <= 100 || this.y >= 600 ) ){
      rotate( radians( 45 ) );
      guy.display();
    }
  }

  display(){
    ellipseMode(CENTER);
    noStroke();
    fill( 'red' );
    ellipse( this.x, this.y, this.r );

    this.vis = triangle( this.x, this.y, this.x + 50, this.y + 100, this.x - 50, this.y + 100 );
  }
}
