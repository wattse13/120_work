//Instantiates new class
class Animal{

  //Class requires three arguments to fulfill its three parameters when first called
  constructor( x, y, size ){
    //This.x, this.y, this.size, and this.r are all assigned to variables
    this.x = x;
    this.y = y;
    // this.size = 40;
    this.r = 20;

    //Movement variables and values
    this.deltaX = 1.0;
    this.deltaY = 1.0;

    //Assigns value of false to this.disappeared
    this.disappeared = false;
  }

  //Creates new class method
  walk(){
    //Modifies this.x and this.y locations with value of this.deltaX and this.deltaY values
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
  reactToDanger(){
    //Check to make sure interaction is working
      //console.log("mooh!");
    //Changes this.disappeared value from false to true
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
    //Lines 199 through 210 fix bug where cows would occaisionally get stuck outside of perimeter
    //If this.x or this.y are outside of perimeter they are redrawn inside
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
  //Creates two empty arrays
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
            //Adds value of this.x - otherCows[i].x to effectsX array
            effectsX.push( this.x - otherCows[i].x);
            //Adds value of this.y - otherCows[i].y to effectsY array
            effectsY.push( this.y - otherCows[i].y);
      }
    }
    //Creates new variables and assigns initial values of 0
    let addedEffectsX =0.0;
    let addedEffectsY =0.0;
    //Modifies values of addedEffectsX and addedEffectsY for all elements in effectsX and effectsY arrays
    for (let i = 0; i < effectsX.length; i++) {
      //Values of addedEffectX and array element i in effectsX array are added together
      addedEffectsX += effectsX[i];
      //Values of addedEffectY and array element in in effectsY array are added together
      addedEffectsY += effectsY[i];
    }
    //Creates new variable and assigns initial value of the product of added EffectsX divided by length of effectsX array
    let meanEffectX = addedEffectsX / effectsX.length;
    //Creates new variable and assigns initial value of the product of added EffectsY divided by length of effectsY array
    let meanEffectY = addedEffectsY / effectsY.length
    //If mouseIsPressed evaluates to true lines 255 through 262 are run
    if (mouseIsPressed) {
      //Check to see if meanEffectX is being calculated or not
        //console.log(meanEffectX);
    }
    //meanEffectX/Y are again modified by multiplying their current value of 0.01
    meanEffectX *= 0.01;
    meanEffectY *= 0.01;
    //If loop prevents lines 250 and 252 from dividing by zero which crashes the program
    //Only runs if length of effectsX array is larger than 0
    if (effectsX.length > 0) {
      //Modifies this.deltaX and this.deltaY by adding value of variables meanEffectX and meanEffectY to this.deltaX and this.deltaY
      this.deltaX += meanEffectX;
      this.deltaY += meanEffectY;
    }

  }
}

//Creates new class method
//Prevents cows from speeding up too much
calmDown(){
  //Creates new variable and assigns it the distance between 0 0 and this.deltaX and this.deltaY
  let speed = dist( 0, 0, this.deltaX, this.deltaY );
  //If the value of speed is greater than 2 lines 290 and 281 modify value of this.deltaX and this.deltaY
  if( speed > 2)
  {
    this.deltaX *= 0.8;
    this.deltaY *= 0.8;
  }

}

//Creates new class method
  populate(){
    //If this.disappeared does not equal, false, then the program runs lines 293 through 296
    if(!this.disappeared){
      //Creates new ellipse at this.x, this.y, and this.r location with a fill color of white
      ellipseMode(CENTER);
      noStroke();
      fill( 'white' );
      ellipse( this.x, this.y, this.r );
    }
  }
}
