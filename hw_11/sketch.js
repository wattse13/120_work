//Initializes a new array called rainy
let rainy = [];

//Initializes beginning coding environment
function setup(){

  //Draws canvas with a width of 600 pixels and height of 720 pixels
  createCanvas( 600, 720 );

  //For loop creates new variable, i, tests if 'i' is less than 100, and if 'i' is less than 100, 1 is added to the value of 'i'
  for( let i = 0; i < 100; i++ ){
    //Initializes new variable, 'beginX' and gives it a random value between 0 and 600
    let beginX = random( 0, 600 );
    //Initializes new variable, 'beingY' and gives it a random value between -700 and 0
    let beginY = random( -700, 0 );
    //Accesses array element which corresponds to the value of i variable
      //As 'i' has a value between 0 and 100, there are a total of 101 possible array elements
    //Calls new class 'Rain' and gives two arguments, 'beginX' and 'beginY'
      //Both 'beginX' and 'beginY' are custom variables that were given values in lines 13 and 15
      //Everytime Rain is called, it will be added as a new element to the rainy array
    rainy[i] = new Rain( beginX, beginY );
  }
}

//Initializes new draw block
function draw(){

  //Sets background color to black
  background( 'black' );

  //For loop creates new variable, 'i' and tests if the value of variable 'i' is less than the number of elements in the rainy array
  //If the value of 'i' is less than the number of elements in the rainy array, one is added to the value of 'i'
  for( i = 0; i < rainy.length; i++ ){
    //Calls the function for each new rain object that is stored as an element in the rainy array
    //The value of 'i' determines which array element the function is executed for
    rainy[i].show();
    rainy[i].pour();
    rainy[i].repeat();
    rainy[i].bounce();
  }
}
/******************************************************************************/
//Classes
/******************************************************************************/

//Instantiates new class called Rain
class Rain{

  //Creates new method with two parameters startX and startY
  constructor( startX, startY ){
    //Input parameters startX and startY are assigned to the object as properties using this. notation
    this.x = startX;
    this.y = startY;
  }

  //Creates new method called pour
  pour(){
    //Updates this.x position by subtracting 0.1 from its current value
    this.x -= 0.1;
    //Updates this.y position by adding a random value between 1 and 3 to its current value
    this.y += random( 1, 3 );
  }

  //Creates new method called repeat
  repeat(){
      //If statement tests if this.y is greater than the canvas height
      //If statement evaluates to true a new line is drawn with a random value between -100 and 0 assigned to this. y and a random value between 0 and 600 assigned to this.x
     if( this.y > height ){
      this.y = random( -100, 0 );
      this.x = random( 0, 600 );
    }
 }

 //Creates new method called bounce
 //Doesn't currently work
 //I was hoping to create a sort of splash effect by testing if this.y was greater than the canvas height
  //If the statement evaluated as true, an ellipse would be drawn at the this.x and this.y - 50 location
  bounce(){
    if( this.y > height ){
      fill('white');
      ellipse( this.x, this.y - 50, 10 );
    }
  }

  //Creates new method called show
  show(){
    //Defines objects color, stroke weight, and position properties
    //Because this.x and this.y variables are used, their positions can be updated with the move method that also uses this.x and this.y as variables
    stroke('white');
    strokeWeight( 2 );
    line( this.x, this.y, this.x - 10, this.y + 50 );
  }
}
