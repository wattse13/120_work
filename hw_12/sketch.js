//Creates new global variable
let amoeba;
//Creates new empty array
let prey = [];
//Creates new variable and gives it an initial value
let startR = 50;

//Initializes beginning environment
function setup(){
  //Sets canvas size to fill window size
  createCanvas( windowWidth, windowHeight );

  //Calls new object based on Amoeba class
  //Beginning position is middle of canvas and its beginning radius is 50
  amoeba = new Amoeba( width / 2, height / 2, startR );

  //Stores objects based on Amoeba class as elements in prey array
  //If the value of i is less than _, a new object is added to the prey array
    //Repreated until the value of 'i' is no longer less than _
  for( i = 0; i < 1; i++ ){
    //Prey ojbects are given random starting locations and a radius of 20
    prey[i] = new Amoeba( random( 0, width ), random( 0, height ), 20 );
  }
}

//Initializes draw block
function draw(){
  //Background is constantly redrawn so drawn objects appear to be animated
  background( 128 );

  //Creep, generate, and starve functions from Amoeba class are applied to amoeba object
  amoeba.creep();
  amoeba.generate();
  // amoeba.starve();

  //Took this line of code from a coding train video narrated by Daniel Shiffman
  //Applies class function to every iteration of every object element in the prey array
  for( p of prey ){
    //Applies flee, populate, and edgeBounce functions to every object element stored in prey array
    p.flee();
    p.populate();
    p.edgeBounce();
      //There is something currently wrong with the logic here as the amoeba does not stop growing if conditional statement is true
      //If the function amoeba.devour returns false, then the amoeba.starve function is applied
      if( amoeba.devour( p ) == false ){
        amoeba.starve();
        //Otherwise amoeba.grow function is applied
      }else if( amoeba.devour( p ) == true ){
        amoeba.grow();
      }
  }

  //Lines 54 through 58 are another way to write lines 38 through 42
  // for( i = 0; i < prey.length; i++ ){
  //   prey[i].flee();
  //   prey[i].populate();
  //   prey[i].edgeBounce();
  // }

}
/******************************************************************************/
//Classes
/******************************************************************************/
//Instantiates new class
class Amoeba{
  //Requires three parameters are filled with arguments when called
  constructor( x, y, r ){
    //This instance of x, y, and r are give the variables x, y, and r
    this.x = x;
    this.y = y;
    this.r = r;
    //This instance of runX and runY are give random values between 1 and 3
    this.runX = random( 1, 3 );
    this.runY = random( 1, 3 );
  }
  //New method called creep
  creep(){
    //Creates new variable and gives it a value of 5
    let crawl = 5;
    //If statement keyIsDown evaluates to true, the value this.x or this.y are changed by the value of + or - crawl
    if( keyIsDown( RIGHT_ARROW ) ){
      this.x += crawl;
    }else if( keyIsDown( LEFT_ARROW ) ){
      this.x -= crawl;
    }else if( keyIsDown( UP_ARROW ) ){
      this.y -= crawl;
    }else if( keyIsDown( DOWN_ARROW ) ){
      this.y += crawl;
    }
  }
  //Creates new method called devour which requires one input parameter
  devour(other){
    //creates new variable and gives it the value of the distance between points located at this.x this.y and other.x other.y
    //Taken from Shiffman video
    let d = dist( this.x, this.y, other.x, other.y )
      //if value of variable 'd' is less than sum of this.r and other.r the statement evaluates as true
      return ( d < this.r + other.r );
    }

  //Creates new method
  grow(){
    //Modifies variable r by adding 10 to its current value
    this.r += 10;
  }

  //Creates new method
  starve(){
    //Creates new variable 'hunger' and asssigns it a value of .1
    let hunger = .1;
    //Updates 'r' by value of hunger variable
    this.r -= hunger;
    //If the value of 'r' is less than or equal to 0, this.x, this.y, and this.r are reset to middle of canvas
    if( this.r <= 0 ){
      this.x = width / 2;
      this.y = height / 2;
      this.r = 50;
    }
  }

  //Creates new method
  generate(){
    //Creates new ellipse at this.x, this.y, and this.r location with a fill color of purple
    ellipseMode(CENTER);
    noStroke();
    fill( 'purple' );
    ellipse( this.x, this.y, this.r );
  }

  //Creates new method
  flee(){
    //Updates this.x and this.y locations with the value of the variables 'runX' and 'runY'
    this.x += this.runX;
    this.y += this.runY;
  }

  //Creates new method
  edgeBounce(){
    //If statement checks if value of 'x' variable extends beyond canvas
      //If true, direction is reversed by multiplying variable runX by -1
    if( this.x >= width || this.x <= 0 ){
      this.runX = this.runX * - 1;
    }
    //Works the same as above if statement but checks and changes the value of the 'y' variable
    if( this.y >= height || this.y <= 0 ){
      this.runY = this.runY * -1;
    }
  }

  //Creates new method
  populate(){
    //Creates new ellipse at x, y, and r locations with a yellow color
    ellipseMode(CENTER);
    noStroke();
    fill( 'yellow' );
    ellipse( this.x, this.y, this.r );
  }

}


// class Hunted{
//
//   constructor( x, y, r ){
//     this.r = r;
//     this.posX = x;
//     this.posY = y;
//     this.runX = random( 1, 3 );
//     this.runY = random( 1, 3 );
//   }
//   // flee(){
//   //   this.posX += this.runX;
//   //   this.posY += this.runY;
//   // }
//   // eaten(other){
//   //   let d = dist( this.x, this.y, other.x, other.y );
//   //       if( d < this.r + other.r ){
//   //         return true;
//   //       }else{
//   //         return false;
//   //       }
//   // }
//   // edgeBounce(){
//   //   if( this.posX >= width || this.posX <= 0 ){
//   //     this.runX = this.runX * - 1;
//   //   }
//   //   if( this.posY >= height || this.posY <= 0 ){}
//   // }
//   // populate(){
//   //   ellipseMode(CENTER);
//   //   noStroke();
//   //   fill( 'yellow' );
//   //   ellipse( this.posX, this.posY, this.r );
//   // }
// }
