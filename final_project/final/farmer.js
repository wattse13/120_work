//Instantiates new class
class Farmer{

  //Class requires its three parameters are filled with three arguments when first called
  constructor( x, y, size ){
    //Assigns this.x, this.y, and this.r new variables
    this.x = x;
    this.y = y;
    this.r = 20;

    //Planned on using these for a second 'vision' ellipse where the farmer-object and ufo-object interaction would occur
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

  // Creates new class method
  heardSomething(){

    push();

      let rotateAngle = random( 0, 360 );

      ellipseMode( CENTER );
      stroke( 10 );
      noFill();
      translate( this.x, this.y );
      rotate( radians( rotateAngle ) );
      ellipse( this.visX, this.visY, this.visR );

    pop();

  }

  //Creates new class method
  display(){
    // push();
      //Creates new ellipse at this.x, this.y, and this.r location with a fill color of blue
      rectMode(CENTER);
      noStroke();
      fill( 'blue' );
      // translate( this.x, this.y );
      rect( this.x, this.y, this.r, this.r );
    // pop();

    // ellipse(this.visX, this.visY, this.visR );
  }
}
