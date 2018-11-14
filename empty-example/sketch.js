let amoeba;
let prey = [];

function setup(){
  createCanvas( windowWidth, windowHeight );
  for( i = 0; i < 30; i++ ){
    prey[i] = new Hunted( random( 0, width ), random( 0, height ), random( 10, 30 ) );
  }

  amoeba = new Amoeba( width / 2, height / 2, 50 );

}

function draw(){
  background( 128 );
  amoeba.creep();
  amoeba.generate();
  amoeba.starve();
  amoeba.devour();

  for( i = 0; i < prey.length; i++ ){
    prey[i].flee();
    prey[i].populate();
    prey[i].edgeBounce();
  }

}

/******************************************************************************/
//Classes
/******************************************************************************/

class Amoeba{

  constructor( startX, startY, startR ){
    this.x = startX;
    this.y = startY;
    this.r = startR;
  }

  creep(){
    let crawl = 5;
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

  devour(hunted){
    for( i = 0; i < hunted[i].length; i++){
      this.devoured = FALSE;
      let d = dist( this.x, this.y, hunted.x, hunted.y )
           return ( d < this.r + hunted.r );
        }
      }

  starve(){
    let hunger = .1;
    this.r -= hunger;
    if( this.r <= 0 ){
      this.x = width / 2;
      this.y = height / 2;
      this.r = 50;
    }
  }

  generate(){
    ellipseMode(CENTER);
    noStroke();
    fill( 'purple' );
    ellipse( this.x, this.y, this.r );

  }

}

class Hunted{

  constructor( x, y, r ){
    this.r = r;
    this.posX = x;
    this.posY = y;
    this.runX = random( 1, 3 );
    this.runY = random( 1, 3 );
  }

  flee(){
    this.posX += this.runX;
    this.posY += this.runY;
  }

  edgeBounce(){
    if( this.posX >= width || this.posX <= 0 ){
      this.runX = this.runX * - 1;
    }
    if( this.posY >= height || this.posY <= 0 ){
      this.runY = this.runY * -1;
    }
  }

  populate(){
    ellipseMode(CENTER);
    noStroke();
    fill( 'yellow' );
    ellipse( this.posX, this.posY, this.r );
  }

}
