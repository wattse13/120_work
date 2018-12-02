let spaceShip;
let cows = [];
let farmer;

function setup(){

  createCanvas( 700, 700 );

  for ( i = 0; i < 10; i++ ){
  cows[i] = new Animal( random( 100, 600 ), random( 100, 600 ), 30 );
}

farmer = new Farmer( 200, 200, 20 );

  spaceShip = new Ufo( 350, 350, 75 );

}

function draw(){

  background( 'black' );

  fill( 128 );
  quad( 100, 100, 600, 100, 600, 600, 100, 600 )
  // quad( 100, 50, 600, 50, 700, 600, 0, 600 );
  // quad( 350, 50, 700, 200, 350, 600, 0, 200 );


  for( var i = 0; i < cows.length; i++ ){
    cows[i].walk();
    cows[i].populate();
    cows[i].electricFence();
    for( var j = 0; j < cows.lenght; j++ ){
      if( i != j && cows[i].avoid(cows[j]))
      cows[i].turn();
      cows[j].turn();
    }
  }

  farmer.patrol();
  farmer.display();

  spaceShip.invade();
  spaceShip.fly();
  spaceShip.abductionBeam();

}

/******************************************************************************/
//Classes
/******************************************************************************/

class Ufo{

  constructor( x, y, r ){
    this.x = x;
    this.y = y;
    this.r = r;

    this.deltaX = 3;
    this.deltaY = 3;
  }

  fly(){

    let throttle = 6;

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

  abductionBeam(){
    if( mouseIsPressed ){
      fill( 'purple' );
      quad( this.x - 25, this.y, this.x + 25, this.y, this.x + 50, this.y + 100, this.x - 50, this.y + 100 );
    }
  }

  invade(){
    //Creates new ellipse at this.x, this.y, and this.r location with a fill color of purple
    ellipseMode(CENTER);
    noStroke();
    fill( 'purple' );
    ellipse( this.x, this.y, this.r );
  }
}

class Animal{

  constructor( x, y, r ){
    this.x = x;
    this.y = y;
    this.r = r;

    this.deltaX = 1;
    this.deltaY = 1;
    // let d = dist( this.x, this.y, other.x, other.y );

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

avoid( other ){
  let d = dist(this.x, this.y, other.x, other.y );
  if( d < this.r + other. r){
    return true;
  }else{
    return false;
  }
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
  }

  patrol(){
    this.x += this.deltaX;
    this.y += this.deltaY;

    if( this.x <= 100 || this.x >= 600 ){
      this.deltaX = this.deltaX * shock;
    }
    if( this.y <= 100 || this.y >= 600 ){
      this.deltaY = this.deltaY * shock;
    }
  }

  turn(){
    rotate( radians( 45 ) );
  }

  display(){
    ellipseMode(CENTER);
    noStroke();
    fill( 'red' );
    ellipse( this.x, this.y, this.r );
  }
}
