let rainy = [];

function setup(){

  createCanvas( 600, 720 );

  for( let i = 0; i < 100; i++ ){
    let beginX = random( 0, 600 );
    let beginY = random( -700, 0 );
    rainy[i] = new Rain( beginX, beginY );
  }
}

function draw(){

  background( 'black' );

  for( i = 0; i < rainy.length; i++ ){
    rainy[i].show();
    rainy[i].pour();
    rainy[i].repeat();
    rainy[i].bounce();
  }
}


/******************************************************************************/
//Classes
/******************************************************************************/

class Rain{

  constructor( startX, startY ){
    this.x = startX;
    this.y = startY;
  }

  pour(){
    this.x -= 0.1;
    this.y += random( 1, 3 );
  }

  repeat(){
     if( this.y > height ){
      this.y = random( -100, 0 );
      this.x = random( 0, 600 );
    }
 }

  bounce(){
    if( this.y > height ){
      fill('white');
      ellipse( this.x, height, 10 );
    }
  }

  show(){
    stroke('white');
    strokeWeight( 2 );
    line( this.x, this.y, this.x - 10, this.y + 50 );
  }

}
