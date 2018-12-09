//Instantiates new class
class Ufo{

  //Class requires three parameters are filled with arguments when first called
  constructor( x, y, r ){
    //This instance of x, y, and r are given assigned variables x, y, and r
    this.x = x;
    this.y = y;
    this.r = r;
    //Assigns value of 100 to this instance of variable abductionSize
    this.abductionSize = 50;
    //Assigns value of half of value of abductionSize to this instance of variable abductionR
    // this.abductionR = this.abductionSize / 2;

    //This instance of deltaX and deltaY are assigned values of 3
    this.deltaX = 3;
    this.deltaY = 3;

    this.flyOff = false;
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

  //Creates new class method which needs one arguments to fill its parameter
  dangerZone( themCows ){
    //If mouseIsPressed evaluates to true the programs runs lines 127 through 133
    if( mouseIsPressed){
      //Checks all elements stored in themCows array
      for( let i = 0; i < themCows.length; i++){
        //Creates new variable and assigns it the themCows array as a value
        let currentCow = themCows[i];
        //Creates new variable and assigns it the distance between this.x this.y and themCows[i].x themCows[i].y
        let danger = dist( this.x, this.y, currentCow.x, currentCow.y );
        //Check to see if interaction is working
          //console.log(danger);
        //Creates new varaible and assigns it the value of the sum of abductionSize.r + themCows[i].r
        let bullsEye = (this.abductionSize + currentCow.r) - 40;
        //Check to see if interaction is working
          //console.log(bullsEye);
        //If the value of variable danger is less than the value of variable bullsEye it means the two objects are intersecting
        if( danger < bullsEye){
          //If the if statment evaluates as true the reactToDanger method is called
          currentCow.reactToDanger();
      }
    }
  }
}

  //Creates new class method
  runAway(){
    // console.log("Bye");
    this.flyOff = true;
  }

  //Creates new class method
  invade(){
    //
    if( !this.flyOff );
      //Creates new ellipse at this.x, this.y, and this.r location with a fill color of purple
      ellipseMode(CENTER);
      noStroke();
      fill( 'purple' );
      ellipse( this.x, this.y, this.r );
  }
}
