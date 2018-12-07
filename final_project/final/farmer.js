//Instantiates new class
class Farmer{

  //Class requires its three parameters are filled with three arguments when first called
  constructor( x, y, r ){
    //Assigns this.x, this.y, and this.r new variables
    this.x = x;
    this.y = y;
    this.r = 20;

    this.visX = this.x + 100;
    this.visY = this.y + 20;
    this.visR = 50;
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
  sawSomething( themAliens ){
    // let themAliens;

    if( mouseIsPressed ){
      // for( let i = 0; i < themAliens.length; i++){
        // let currentAlien = themAliens[i];
        let damnedAliens = dist( this.x, this.y, themAliens.x, themAliens.y );
          // console.log( damnedAliens );
        let gotcha = this.visR + themAliens.r;
          // console.log( gotcha );
        if( damnedAliens < gotcha ){
          themAliens.runAway();
        // }
      }
    }
  }

  //Creates new class method
  heardSomething(){
    rotate( radians( random( 0, 360 ) ) );
  }

  //Creates new class method
  display(){
    ////Creates new ellipse at this.x, this.y, and this.r location with a fill color of blue
    ellipseMode(CENTER);
    noStroke();
    fill( 'blue' );
    ellipse( this.x, this.y, this.r );

    // ellipse(this.visX, this.visY, this.visR );
  }
}
