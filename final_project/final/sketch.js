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
    cows[i].calmDown();
    cows[i].avoid( cows, i );
  }

push();
  guy.patrol();
  guy.display();
  // setTimeout( guy.turn(), 1000 );
pop();

  //Calls Ufo methods
  spaceShip.fly();
  spaceShip.abductionBeam();
  spaceShip.invade();
  spaceShip.dangerZone(cows)
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
    } if( keyIsDown( LEFT_ARROW ) ){
      this.x -= throttle;
    } if( keyIsDown( UP_ARROW ) ){
      this.y -= throttle;
    } if( keyIsDown( DOWN_ARROW ) ){
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
  dangerZone( themCows ){
    if( mouseIsPressed){
      //Checks all elements stored in themCows array
      for( let i = 0; i < themCows.length; i++){
        let currentCow = themCows[i];
        //Creates new variable and assigns it the distance between this.x this.y and themCows[i].x themCows[i].y
        let danger = dist( this.x, this.y, currentCow.x, currentCow.y )
        //console.log(danger);
        //Creates new varaible and assigns it the value of the sum of abductionSize.r + themCows[i].r
        let bullsEye = this.abductionSize + currentCow.r;
        //console.log(bullsEye);
        //If the value of variable danger is less than the value of variable bullsEye it means the two objects are intersecting
        if( danger < bullsEye){
          //If the mouseIsPressed while the two objects are intersecting, the statement evaluates true
          currentCow.reactToDanger();

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

  //Class requires three arguments to fulfill its three parameters when first called
  constructor( x, y, size ){
    //This.x, this.y, this.size, and this.r are all assigned to variables
    this.x = x;
    this.y = y;
    this.size = 40;
    this.r = this.size / 2;

    //Movement variables and values
    this.deltaX = 1.0;
    this.deltaY = 1.0;
    this.disappeared = false;
  }

  //Creates new class method
  walk(){
    //Modifies this.x and this.y locations with value of this.deltaX and this.deltaY values
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
  reactToDanger(){
    //console.log("mooh!");
    this.disappeared = true;
  }
  //Creates new class method
  electricFence(){

    //Creates new variable and assigns it a value of -1
    let shock = -1;

    //Sets up boundaries
    //If a cow element's this.x location is greater than or less than a certain amount their movement is reversed
    if( this.x <= 100 || this.x >= 600 ){
      this.deltaX = this.deltaX * shock;
    }
    //Reverses this.deltaY direction same way as lines above reverse this.deltaX direction
    if( this.y <= 100 || this.y >= 600 ){
      this.deltaY = this.deltaY * shock;
    }
    if( this.x > 600){
      this.x = 599;
    }
    if( this.x < 100 ){
      this.x = 101;
    }
    if( this.y > 600 ){
      this.y = 599;
    }
    if( this.y < 100 ){
      this.y = 101;
    }
  }

//Creates new class method
//Requires two arguments to fill its two parameters
  //Taken from Week 12 Bouncing Balls example on class webpage
avoid( otherCows, self ){
  let effectsX = [];
  let effectsY = [];
  //Checks through all elements of array
  for( let i = 0; i < otherCows.length; i++){
    //If element being checked is not itself, the program moves on to the next if loop
    if( i != self ){
      //creates new variable and assigns it the value of the distance between this.x this.y and otherCows[i].x otherCows[i].y
      let d = dist(this.x, this.y, otherCows[i].x, otherCows[i].y );
        //Creates new variable and assigns it the value of the sum of this. r plus otherCows[i].r
        let meet = this.r + otherCows[i].r;
          //If the value of variable 'd' is less than or equal to the value of variable 'meet' the if statment evaluates true
          if ( d <= meet ) {
            //Reverses object's direction causing objects to bounce off of each other
            //this.deltaX *= -1;
            //this.deltaY *= -1;
            //---
            effectsX.push( this.x - otherCows[i].x);
            effectsY.push( this.y - otherCows[i].y);
      }
    }
    let addedEffectsX =0.0;
    let addedEffectsY =0.0;
    for (let i = 0; i < effectsX.length; i++) {
      addedEffectsX += effectsX[i];
      addedEffectsY += effectsY[i];
    }
    let meanEffectX = addedEffectsX / effectsX.length;
    let meanEffectY = addedEffectsY / effectsY.length
    if (mouseIsPressed) {
      console.log(meanEffectX);
    }
    meanEffectX *= 0.01;
    meanEffectY *= 0.01;
    if (effectsX.length > 0) {
      this.deltaX += meanEffectX;
      this.deltaY += meanEffectY;
    }

  }
}

//Creates new class method
calmDown(){
  let speed = dist( 0, 0, this.deltaX, this.deltaY );
  if( speed > 2)// && speed < 1 )
  {
    this.deltaX *= 0.8;
    this.deltaY *= 0.8;
  }

}

//Creates new class method
  populate(){
    //Creates new ellipse at this.x, this.y, and this.r location with a fill color of white
    if(!this.disappeared){
      ellipseMode(CENTER);
      noStroke();
      fill( 'white' );
      ellipse( this.x, this.y, this.r );
    }
  }
}

//Instantiates new class
class Farmer{

  //Class requires its three parameters are filled with three arguments when first called
  constructor( x, y, r ){
    //Assigns this.x, this.y, and this.r new variables
    this.x = x;
    this.y = y;
    this.r = r;

    this.vis = this.vis;
    //Movement variables and values
    this.deltaX = 2;
    this.deltaY = 2;
  }

  //Creates new class method
  patrol(){

    //Creates new variable and assigns it a value of -1
    let fence = -1;

    //Modifies position of this.x and this.y causing object to move
    this.x += this.deltaX;
    this.y += this.deltaY;

    //Lines 260 through 265 work the same way as lines 187 trough 193
    if( this.x <= 100 || this.x >= 600 ){
      this.deltaX = this.deltaX * fence;
    }
    if( this.y <= 100 || this.y >= 600 ){
      this.deltaY = this.deltaY * fence;
    }
  }

  //Creates new class method
  turn(){
    rotate( radians( random( 0, 360 ) ) );
  }

  //Creates new class method
  display(){
    ////Creates new ellipse at this.x, this.y, and this.r location with a fill color of blue
    ellipseMode(CENTER);
    noStroke();
    fill( 'blue' );
    ellipse( this.x, this.y, this.r );

    this.vis = triangle( this.x, this.y, this.x + 50, this.y + 100, this.x - 50, this.y + 100 );
  }
}
