let rain;

function setup(){

  createCanvas( 600, 720 );
  rain = new Rain( random( 0, 600), random( 0, 40 ) );

}

function draw(){

background( 'black' );

    rain.show();
    rain.fall();
}

/******************************************************************************/
//Classes
/******************************************************************************/

class Rain{

  constructor( startX, startY ){
    this.x = startX;
    this.y = startY;
  }

  fall(){

    this.x -= 0.5;
    this.y += 2;

  }

  // bounce(){
  //
  //   if (this.y > 600) {
  //
  //   }
  //
  // }

  show(){

    stroke('white');
    strokeWeight( 2 );
    line( this.x, this.y, this.x - 15, this.y + 50 );

  }

}
